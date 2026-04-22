import { useEffect } from "react";
import Hero from "../../src/components/hero";
import ProductList from "../../src/components/ProductList";
import ServicesList from "../../src/components/ServiceList";

export default function Home()
{
    useEffect(() =>
    {
        document.title = "Home | Bad Ass Baking Company";
    }, []);

    return(
        <>
            <Hero />
            <main>
                <div class="catalogSection">
                    <h2>Products</h2>
                    <div class="itemGrid">
                        <ProductList />
                    </div>
                </div>
                <div class="catalogSection">
                    <h2>Services</h2>
                    <div class="itemGrid">
                        <ServicesList />
                    </div>
                </div>

            </main>
        </>
    )
}