import { useEffect } from "react";

export default function About()
{
    useEffect(() =>
    {
        document.title = "About - Bad Ass Baking Company";
    }, [])

    return(
        <>
            <h1 class="aboutTitle">About The Bad Ass Bakery</h1>
            <div class="aboutGrid">
                <p class="aboutText1">Our bakery started as the West End Bakery over 20 years ago by my father, John Smith. On his retirement, he handed over the bakery
                    to me, but he didn't want the business to stay the same has he had it. He told me to make it my own.</p>
                <br />
                <p class="aboutText2">I spent a lot of my days in my young adult life in the punk scene, and I wanted this business to evoke those days as well as stand
                    out from the other buisnesses in the area. So we've rebanded to the Bad Ass Baking Company!</p>
                <br />
                <p class="aboutText3">To the regulars of the West End Bakery, we're still here! We might look a little edgy, but we're still serving the same baked goods
                    and catering services we've always had, with some great new products we think you'll love just as much!</p>
            
                <img class="aboutImage" src="../src/assets/img/BaB_StorefrontMockup.jpg" alt="" />
            </div>

            
        </>
    )
}