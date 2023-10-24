import {createContext, Dispatch, SetStateAction} from "react";

export interface LoaderContext {
    loading: boolean,
    setLoading: Dispatch<SetStateAction<boolean>>;
}

export const LoaderContext = createContext<LoaderContext>({
    loading: false,
    setLoading: () => {}
})