import { getProducts } from "../data/DataHandler";
import { IState } from "../types/types";

const defaultValues: IState = {
    products: getProducts()
};

export { defaultValues}