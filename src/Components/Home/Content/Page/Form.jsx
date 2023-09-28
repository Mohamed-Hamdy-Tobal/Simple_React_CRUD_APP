import { useState } from "react";
import axios from 'axios';
import { useNavigate} from "react-router-dom";

const Form = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handlePrice = (e) => {
        setPrice(e.target.value)
    }

    let navigate = useNavigate()
    const formSubmit = (e) => {
        e.preventDefault()
        console.log('submit');
        console.log(`title -> ${title}`)
        console.log(`price -> ${price}`)

        axios.post(`http://localhost:9000/products`, {title,price})
            .then(response => {
                console.log("Send to API")
                console.log(response);
                navigate('/products')
            })
            .catch(error => {
                console.error('Error deleting data:', error);
            });

        setTitle('') 
        setPrice('') 
    }

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
                <button type="submit" className="btn btn-success" >Add Product</button>
            </form>
        </div>
    )
}

export default Form