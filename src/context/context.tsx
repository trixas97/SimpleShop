import React from "react";
import { defaultValues } from "./defaultState";
import { createContext } from 'use-context-selector';
import { useMemo, useState } from "react";
import { IProduct, IState } from "../types/types";

const Context = createContext(defaultValues);

const ContextProvider: React.FC = props => {

    const [products] = useState<IProduct[]>(defaultValues.products) 

    const values = useMemo(() => {
        return {
            products: products
        } as IState
    }, [products])

    return (
        <Context.Provider value={values}>
            {props.children}
        </Context.Provider>
    )
}

export { Context, ContextProvider };