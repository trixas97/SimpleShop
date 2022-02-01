import React from "react"
import {Routes as ReactRoutes, Route} from 'react-router-dom'
import ProductsPages from '../pages/ProductsPage'
import ProductPage from '../pages/ProductPage'

const Routes: React.FC = () => {
    return (
        <ReactRoutes>
            <Route path="/" element={<ProductsPages />}/>
            <Route path="/product" element={<ProductPage /> } />
        </ReactRoutes>
    )
}

export default Routes