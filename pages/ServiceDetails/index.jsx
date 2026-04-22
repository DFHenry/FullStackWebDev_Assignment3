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