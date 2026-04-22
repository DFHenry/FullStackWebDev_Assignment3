import { useState, useEffect } from "react";
import Product from "../props/product/product";
import { Link } from "react-router";

export default function ProductList()
{

    const [productList, setProductList] = useState([]);
    
    useEffect(() => 
    {
        const getProducts = async () =>
        {
            let response = await fetch("https://fullstackwebdev-assignment1-dh.onrender.com/api/sendApi");
            let data = await response.json();

            setProductList(data.productListing);


        }
        getProducts();

    }, []);


    return(
        productList.map((m, i) => 
        (
            <div class="itemCard">
                <div key={i}>
                    <h3>{m.name}</h3>
                    <p>${m.cost}</p>
                    <Link to="/ProductDetails" state={m}>View Details</Link>
                </div>
            </div>
        ))
    );
}