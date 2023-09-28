import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios';
import Swal from 'sweetalert2'

const Products = () => {

    const [products, setProducts] = useState([]);

    // GET Operation
    const getProductsData = () => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:9000/products");
                // Handle successful response here
                setProducts(response.data);
                console.log(products);
                } catch (error) {
                // Handle errors here
                console.error(error);
            }
        };
        fetchData();
    }
    
    // DELETE Operation
    const deleteProduct = (productId) => {

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success ',
                cancelButton: 'btn btn-danger me-3'
            },
            buttonsStyling: false
            })
        
            swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`http://localhost:9000/products/${productId}`)
                        .then(response => {
                            console.log('Deleted successfully');
                            console.log(response);
                            getProductsData()
                        })
                        .catch(error => {
                            console.error('Error deleting data:', error);
                        });
                    swalWithBootstrapButtons.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
                ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
                }
        })
    }

    useEffect(() => {
        getProductsData()
    }, []);

    return (
        <>
            <div className="products">
                <h1>Products</h1>
                <Link to={'/products/add'} className="btn btn-success">Add New Product</Link>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Price</th>
                            <th scope="col">Operaions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => {
                                return (
                                    <tr key={product.id}>
                                        <td className="cent">{product.id}</td>
                                        <td className="tit-pro w-50 pe-3" style={{lineHeight: '25px',paddingTop:'20px'}}>{product.title}</td>
                                        <td style={{lineHeight: '70px'}}>{product.price}</td>
                                        <td className="btns">
                                            <Link  to={`/products/${product.id}`} className="btn btn-info">View</Link>
                                            <Link to={`/products/${product.id}/edit`} className="btn btn-primary">Edit</Link>
                                            <button className="btn btn-danger" onClick={() => {deleteProduct(product.id)}}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Products
