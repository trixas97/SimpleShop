import { defaultValues } from "./defaultState";
import { createContext } from 'use-context-selector';
import { useMemo, useState } from "react";

const Context = createContext(defaultValues);

const ContextProvider = props => {

    const [products, setProducts] = useState(defaultValues.products) 

    const values = useMemo(() => {
        return {
            products: products
        }
    }, [products])

    return (
        <Context.Provider value={values}>
            {props.children}
        </Context.Provider>
    )
}

export { Context, ContextProvider };