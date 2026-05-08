import "./footer.css";

export default function Footer()
{
    return(
        <div class="footer">
            <h3>The Bad Ass Baking Company</h3>
            <div class="socials">
                <a id="bluesky" href="https://bsky.app/"><img src="../src/assets/img/icon_bluesky.svg" alt="bluesky icon" /></a>
                <a id="instagram" href="https://www.instagram.com/"><img src="../src/assets/img/icon_instagram.svg" alt="instagram icon" /></a>
                <a id="snapchat" href="https://www.pinterest.com/"><img src="../src/assets/img/icon_pinterest.svg" alt="pinterest icon" /></a>
                <a id="email" href="mailto:orders@test.com"><img src="../src/assets/img/icon_email.svg" alt="email icon" /></a>
            </div>
            <p>&copy; David Henry 2026.</p>
        </div>
    )
}