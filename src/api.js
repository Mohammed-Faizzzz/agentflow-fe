const BASE_URL = "https://agentflow-tito.onrender.com"; // Adjust if deployed

export const callAPI = async (endpoint, data) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("API call failed:", error);
    return { error: error.message };
  }
};
