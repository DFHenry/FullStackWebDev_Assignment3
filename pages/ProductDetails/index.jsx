import { useState, useEffect } from "react";
import Product from "../../src/components/props/product/product";
import ProductList from "../../src/components/ProductList";
import { useParams, Link, useLocation } from "react-router";

export default function ProductDetails(props)
{

    const location = useLocation();
    const state = location.state;

    //console.log(state);

    useEffect(() =>
    {
        document.title = state.name + " | Product Details | Bad Ass Baking Company";
    }, []);

    return(
        <main>
            <div class="itemEntry">
                <h2>{state.name}</h2>
                <p>{state.description}</p>
                <h3>Cost: ${state.cost}</h3>
            </div>
            
            <div class="linkBump">
                <Link to="/">Continue Shopping</Link>
            </div>


        </main>
    )
}