export const getCatData = async () =>{
    try {
        // fetch data from 3rd party api
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=20&api_key=${process.env.REACT_APP_API_KEY}`);
        return await response.json();

    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}