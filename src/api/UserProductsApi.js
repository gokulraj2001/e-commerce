const baseUrl='http://localhost:5001/users';

export const getAllProducts = async () => {
    
    const response = await fetch(`${baseUrl}/all`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // "Authorization": `Bearer ${authToken}`
        },
    });
    if (response.status >= 200 && response.status < 300) {
        const data = await response.json();
        console.log(data);
        return data;
       
    }
    else{
        throw new Error('Something went wrong!!');
    }
}