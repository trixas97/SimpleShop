const productsArr = [
    {id: 1, name: "Product Name 1", desc:"Product Description 1", price:15.2, stock: 15, category: "Category 1"},
    {id: 2, name: "Product Name 2", desc:"Product Description 2", price:48.4, stock: 2, category: "Category 2"},
    {id: 3, name: "Product Name 3", desc:"Product Description 3", price:150, stock: 37, category: "Category 1"},
    {id: 4, name: "Product Name 4", desc:"Product Description 4", price:62, stock: 180, category: "Category 2"}
]

export function getProducts(){
    return productsArr
}

export function getProduct(id){
    return productsArr.find(product => product.id === id)
}