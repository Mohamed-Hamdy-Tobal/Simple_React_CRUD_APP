import {Route, Routes } from 'react-router-dom'
import './Content'
import Page from './Page/Page'
import Products from './Page/Products'
import Categories from './Page/Categories'
import Form from './Page/Form'
import ProductDetails from './Page/ProductDetails'
import Edit from './Page/Edit'

const Content = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Page/>}></Route>
                <Route path='products' element={<Products/>}></Route>
                <Route path='categories' element={<Categories/>}></Route>
                <Route path='products/:productEditID/edit' element={<Edit/>}></Route>
                <Route path='products/add' element={<Form/>}></Route>
                <Route path='products/:productID' element={<ProductDetails/>}></Route>
            </Routes>
        </>
    )
}

export default Content
