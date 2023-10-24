import { Issuer } from 'src/utils/auth';
import { createContext } from 'react';
import {User} from "@auth0/auth0-spa-js";

export interface State {
  isInitialized: boolean;
  isAuthenticated: boolean;
  user: User;
}

export const initialState: State = {
  isAuthenticated: false,
  isInitialized: false,
  user: {}
};

type AppState = {
  returnTo?: string;
};

export interface AuthContextType extends State {
  issuer: Issuer.Auth0;
  loginWithRedirect: (appState?: AppState) => Promise<void>;
  handleRedirectCallback: () => Promise<AppState | undefined>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
  ...initialState,
  issuer: Issuer.Auth0,
  loginWithRedirect: () => Promise.resolve(),
  handleRedirectCallback: () => Promise.resolve(undefined),
  logout: () => Promise.resolve()
});
