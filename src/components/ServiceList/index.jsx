import { useState, useEffect } from "react";

import { Link } from "react-router";

export default function ServicesList()
{
    const [servicesList, setServicesList] = useState([]);

    useEffect(() => 
    {
        const getServices = async () =>
        {
            let response = await fetch("https://fullstackwebdev-assignment1-dh.onrender.com/api/sendApi");
            let data = await response.json();

            setServicesList(data.servicesListing);
        }
        getServices();
    }, []);

    return(
        servicesList.map((m, i) =>
        (
            <div class="itemCard" key={i}>
                <h3 class="itemName">{m.name}</h3>
                <img class="itemImage" src={m.image} alt={m.description} />
                <p class="itemShortDesc">{m.description}</p>
                <p class="itemCost">${m.cost}</p>
                <Link class="itemLink" to="/ServiceDetails" state={m}>View Details</Link>
            </div>
        ))
    )
}