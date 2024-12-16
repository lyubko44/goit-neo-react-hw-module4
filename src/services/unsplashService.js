import axios from 'axios';

const ACCESS_KEY = '2a2g7DaKEl6tPcc1Lz-Os6gSnK5tPpIq3OYz021FGOI';

export const fetchImages = async (query, page = 1) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
            query,
            page,
            per_page: 12,
            client_id: ACCESS_KEY,
        },
    });

    return response.data;
};