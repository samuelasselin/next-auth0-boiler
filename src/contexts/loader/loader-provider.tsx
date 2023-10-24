import {LoaderContext} from "./loader-context";
import {FC, ReactNode, useState} from "react";

interface LoaderProviderProps {
    children?: ReactNode;
}

export const LoaderProvider: FC<LoaderProviderProps> = ({children}) => {

    const [loading, setLoading] = useState<boolean>(false)
    const value = {loading, setLoading}

    return (
        <LoaderContext.Provider value={value}>
            {children}
        </LoaderContext.Provider>
    )
}