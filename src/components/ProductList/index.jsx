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
            <div class="itemCard" key={i}>
                <h3 class="itemName">{m.name}</h3>
                <p class="itemShortDesc">{m.short_desc}</p>
                <p class="itemCost">${m.cost}</p>
                <Link class="itemLink" to="/ProductDetails" state={m}>View Details</Link>
                <img class="itemImage" src={m.image_href} alt={m.description} />
            </div>
        ))
    );
}