import { useState, useEffect } from "react";
import Product from "../../src/components/props/product/product";
import ServicesList from "../../src/components/ServiceList";
import { useParams, Link, useLocation } from "react-router";

export default function ServiceDetails(props)
{

    const location = useLocation();
    const state = location.state;

    //console.log(state);

    useEffect(() =>
    {
        document.title = state.name + " | Service Details | Bad Ass Baking Company";
    }, []);

    return(
        <main>
            <div class="detailEntry">
                <h1 class="detailName">{state.name}</h1>
                <p class="detailDesc">{state.description}</p>
                <h3 class="detailCost">Cost: ${state.cost}</h3>
                <img class="detailImage" src={state.image} alt={state.description} />
            </div>

            <div class="linkBump">
                <Link to="/">Continue Shopping</Link>
            </div>           
        </main>
    )
}