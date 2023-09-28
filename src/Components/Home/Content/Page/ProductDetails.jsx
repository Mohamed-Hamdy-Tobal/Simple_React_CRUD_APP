import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from 'axios';

const ProductDetails = () => {

    let params = useParams()
    console.log(params)

    const [productDetail, setProDetails] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:9000/products/${params.productID}`);
            // Handle successful response here
            // setProducts(response.data);
            setProDetails(response.data)
            } catch (error) {
            // Handle errors here
            console.error(error);
        }
    };
    console.log('that is : ', productDetail)
    console.log('that is title: ', productDetail.title)

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {productDetail && 
            <div className="product-detail">
                <img src={productDetail.image} alt="productDetail" />
                <p className="detail"><span className='def'>Title:</span> {productDetail.title}</p>
                <p className="detail"><span className='def'>Category:</span> {productDetail.category}</p>
                <p className="detail"><span className='def'>Description:</span> {productDetail.description}</p>
                <p className="detail"><span className='def'>Price:</span> ${productDetail.price}</p>
                <p className="detail"><span className='def'>Rating:</span> {productDetail && productDetail.rating && productDetail.rating.rate}</p>
                <p className="detail"><span className='def'>Count:</span> {productDetail && productDetail.rating && productDetail.rating.count}</p>
            </div>
            }
        </>
    )
}

export default ProductDetails