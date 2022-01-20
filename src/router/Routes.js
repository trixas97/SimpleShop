import React from "react"
import {Routes as ReactRoutes, Route} from 'react-router-dom'
import ProductsView from '../pages/ProductsPage'
import ProductView from '../pages/ProductPage'

const Routes = () => {
    return (
        <ReactRoutes>
            <Route path="/" element={<ProductsView />}/>
            <Route path="/product" element={<ProductView /> } />
        </ReactRoutes>
    )
}

export default Routes