export const getCatData = async () =>{
    try {
        // fetch data from 3rd party api
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=20&api_key=live_0C04Q5Tg1tw0WeFhWWiFZQQ8JuBjvU8yYc71tYbVdUPibXNmWDXzlE2QZhrDG7Cb`);
        return await response.json();

    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}