const baseUrl = 'http://localhost:5001/users/search';


export const searchProducts = async (query) => {
   
    // let authToken = '';
    // if (sessionStorage.getItem('auth')) {
    //     authToken = sessionStorage.getItem('auth');
    // }
    
    
    const url = `${baseUrl}?query=${encodeURIComponent(query)}`;

    try {
        
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${authToken}`
            },
        });

        
        if (response.status >= 200 && response.status < 300) {
            
            const data = await response.json();
            console.log(data);
            return data;
        } else {
            // Throw an error if the response is not successful
            throw new Error('Something went wrong!');
        }
    } catch (error) {
        // Handle any errors that occur during the fetch operation
        console.error('Error fetching search results:', error);
        throw error;
    }
};