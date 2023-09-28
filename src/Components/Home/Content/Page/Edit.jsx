import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate} from "react-router-dom";

const Edit = () => {
    let params = useParams();
    const [productDetail, setProDetails] = useState({});
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [count, setCount] = useState(0);

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handlePrice = (e) => {
        setPrice(e.target.value);
    }

    const handleCount = (e) => {
        setCount(e.target.value);
    }

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:9000/products/${params.productEditID}`);
            const data = response.data; 
            setProDetails(data);
            setTitle(data.title);
            setPrice(data.price);
            setCount(data.rating?.count || '');
        } catch (error) {
            console.error(error);
        }
    };

    let navigate = useNavigate()
    const formSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
        console.log(`title -> ${title}`);
        console.log(`price -> ${price}`);
        console.log(`count -> ${count}`);
        // Update your axios POST request here

        axios.put(`http://localhost:9000/products/${params.productEditID}`, {
            id: productDetail.id,
            title,
            price,
            description: productDetail.description,
            category: productDetail.category,
            image: productDetail.image,
            rating: {
                rate: productDetail.rating.rate,
                count
            }
        })
        .then(response => {
            fetchData()
            console.log("Send to API")
            console.log(response);
            navigate('/products')
        })
        .catch(error => {
            console.error('Error deleting data:', error);
        });

        setTitle('');
        setPrice('');
        setCount('');
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="record">
            <h2>Add Product</h2>
            <form onSubmit={formSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="htmlForm-label">Title</label>
                    <input type="text" value={title} className="form-control" id="title" name="title" placeholder="Enter the product title" required onChange={(e) => handleTitle(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="number" value={price} className="form-control" id="price" name="price" placeholder="Enter the product price" required onChange={(e) => handlePrice(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Count</label>
                    <input type="number" value={count} className="form-control" id="price" name="price" placeholder="Enter the product price" required onChange={(e) => handleCount(e)} />
                </div>
                <button type="submit" className="btn btn-success" >Add Product</button>
            </form>

        </div>
    )
}

export default Edit