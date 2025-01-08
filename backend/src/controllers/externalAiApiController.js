import axios from 'axios';
import dotenv from 'dotenv';


dotenv.config();


const BING_API_KEY = process.env.BING_API_KEY;

// Endpoint to handle AI and search requests
export const addExternalData = async (req, res) => {{
  
    const { question } = req.body;

    // AI logic for processing the question
    const aiResponse = processQuestion(question);

    // Search logic
    const searchResults = await performSearch(aiResponse);

    res.json({ answer: aiResponse, searchResults });
};

function processQuestion(question) {
    // AI logic to process the question and generate an answer
    // For simplicity, returning the question itself as the answer
    return `Here is the answer to: ${question}`;
}

async function performSearch(query) {
  const url = `https://api.bing.microsoft.com/v7.0/search?q=${encodeURIComponent(query)}`;
  const headers = { 'Ocp-Apim-Subscription-Key': BING_API_KEY };

  try {
      const response = await axios.get(url, { headers });
      return response.data.webPages.value.map(result => ({
          name: result.name,
          url: result.url,
          snippet: result.snippet
      }));
  } catch (error) {
      console.error('Error performing search:', error);
      return [];
  }
}
};


//export default router;

/*




export const fetchExternalData = async (req, res) => {
  try {
    //our external API endpoint

    const apiKey = 'Ai_apikey';  // Replace with your OpenWeatherMap API key
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await axios.get(apiUrl);

    res.status(200).json({
      status: "success",
      message: "Data fetched successfully",
      data: response.data,
    });
  } catch (error) {
    next(error);
  }

 
  // OR Method 2 from external API source
  
  try {
    const apiKey = 'Ai_apikey';  // Replace with your OpenWeatherMap API key
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
           
    const weatherData = response.data;
    console.log(`The weather in ${city} is ${weatherData.weather[0].description} with a temperature of ${(weatherData.main.temp - 273.15).toFixed(2)}°C.`);
} catch (error) {
    console.error('Error fetching the weather data:', error) 
    next(error);
  
}

};

*/