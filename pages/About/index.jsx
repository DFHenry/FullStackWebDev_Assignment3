import { useEffect } from "react";

export default function About()
{
    useEffect(() =>
    {
        document.title = "About - Bad Ass Baking Company";
    }, [])

    return(
        <div>
            <h2>About</h2>
            <p>About Page Info goes here.</p>
        </div>
    )
}