import type {FC, ReactNode} from 'react';
import {useCallback, useEffect, useReducer} from 'react';
import PropTypes from 'prop-types';
import {Auth0Client, User} from '@auth0/auth0-spa-js';

import {auth0Config} from 'src/config';
import {paths} from 'src/paths';
import {Issuer} from 'src/utils/auth';

import type {State} from './auth-context';
import {AuthContext, initialState} from './auth-context';
import {apiPost} from "../../../utils/api";

const auth0Client: Auth0Client = new Auth0Client({
    domain: auth0Config.issuer_base_url!,
    clientId: auth0Config.client_id!,
    cacheLocation: 'localstorage',
    authorizationParams: {
        audience: auth0Config.audience,
        redirect_uri: auth0Config.base_url + paths.auth.auth0.callback,
    }
});

type AppState = {
    returnTo?: string;
};

enum ActionType {
    INITIALIZE = 'INITIALIZE',
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
}

type InitializeAction = {
    type: ActionType.INITIALIZE;
    payload: {
        isAuthenticated: boolean;
        user: User;
    };
};

type LoginAction = {
    type: ActionType.LOGIN;
    payload: {
        user: User;
    };
};

type LogoutAction = {
    type: ActionType.LOGOUT;
}

type Action =
    | InitializeAction
    | LoginAction
    | LogoutAction;

type Handler = (state: State, action: any) => State;

const handlers: Record<ActionType, Handler> = {
    INITIALIZE: (state: State, action: InitializeAction): State => {
        const {isAuthenticated, user} = action.payload;

        return {
            ...state,
            isAuthenticated,
            isInitialized: true,
            user
        };
    },
    LOGIN: (state: State, action: LoginAction): State => {
        const {user} = action.payload;

        return {
            ...state,
            isAuthenticated: true,
            user
        };
    },
    LOGOUT: (state: State): State => ({
        ...state,
        isAuthenticated: false,
        user: {}
    })
};

const reducer = (state: State, action: Action): State => (
    handlers[action.type] ? handlers[action.type](state, action) : state
);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = (props) => {
    const {children} = props;
    const [state, dispatch] = useReducer(reducer, initialState);

    const initialize = useCallback(
        async (): Promise<void> => {
            try {
                const isAuthenticated = await auth0Client.isAuthenticated();

                if (isAuthenticated) {
                    const auth0User = await auth0Client.getUser();
                    const token = await auth0Client.getTokenSilently()
                    // const user = await getDatabaseUser(auth0User!.email, auth0User!.sub, token)

                    await localStorage.setItem("tk", token);

                    dispatch({
                        type: ActionType.INITIALIZE,
                        payload: {
                            isAuthenticated,
                            user: {
                                id: auth0User!.id,
                                avatar: auth0User!.picture,
                                email: auth0User!.email as string,
                                name: auth0User!.name,
                                accessToken: token,
                            }
                        }
                    });
                } else {
                    dispatch({
                        type: ActionType.INITIALIZE,
                        payload: {
                            isAuthenticated,
                            user: {}
                        }
                    });
                }
            } catch (err) {
                console.error(err);
                dispatch({
                    type: ActionType.INITIALIZE,
                    payload: {
                        isAuthenticated: false,
                        user: {}
                    }
                });
            }
        },
        [dispatch]
    );

    useEffect(
        () => {
            initialize();
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    const loginWithRedirect = useCallback(
        async (appState?: AppState): Promise<void> => {
            await auth0Client!.loginWithRedirect({
                appState
            });
        },
        []
    );

    const handleRedirectCallback = useCallback(
        async (): Promise<AppState | undefined> => {
            const result = await auth0Client!.handleRedirectCallback();
            const user = await auth0Client!.getUser();

            dispatch({
                type: ActionType.LOGIN,
                payload: {
                    user: {
                        id: user!.sub as string,
                        avatar: user!.picture,
                        email: user!.email as string,
                        name: 'Anika Visser',
                        plan: 'Premium'
                    }
                }
            });

            return result.appState;
        },
        []
    );

    const logout = useCallback(
        async (): Promise<void> => {
            await auth0Client!.logout();
            dispatch({
                type: ActionType.LOGOUT
            });
        },
        []
    );

    // const getDatabaseUser = async (email: string | undefined, auth0UserId: string | undefined, token: string) => {
    //     if (email && auth0UserId) {
    //         return await apiPost('/user', {
    //             email: email,
    //             auth0_id: auth0UserId
    //         })
    //     }
    // }


    return (
        <AuthContext.Provider
            value={{
                ...state,
                issuer: Issuer.Auth0,
                loginWithRedirect,
                handleRedirectCallback,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
};
