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
            <div className="itemCard">
                <div key={i}>
                    <h3>{m.name}</h3>
                    <p>{m.description}</p>
                    <p>${m.cost}</p>
                    <Link to="/ServiceDetails" state={m}>View Details</Link>
                </div>
            </div>
        ))
    )
}