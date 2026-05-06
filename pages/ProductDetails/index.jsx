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
            <div class="detailEntry">
                <h1 class="detailName">{state.name}</h1>
                <p class="detailDesc">{state.description}</p>
                <h3 class="detailCost">Cost: ${state.cost}</h3>
                <img class="detailImage" src={state.image_href} alt={state.short_desc} />
            </div>
            
            <div class="linkBump">
                <Link to="/">Continue Shopping</Link>
            </div>

        </main>
    )
}