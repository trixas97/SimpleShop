export interface IProduct{
    id: number
    name: string,
    desc: string,
    price: number,
    stock: number,
    category: string
}

export interface IState {
    products: IProduct[]
}

export type goToProductType = (id: number) => void

export interface IComponentProps {
    products: IProduct[],
    goToProduct: goToProductType
}