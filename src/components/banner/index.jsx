import React from "react";
import logo from "./BAB_Logo.png";

import "./banner.css";

export default function Banner()
{
    return(
        <div id="banner-logo">
            <img src={logo} alt="Bad Ass Bakery Logo" />
        </div>
    )
}