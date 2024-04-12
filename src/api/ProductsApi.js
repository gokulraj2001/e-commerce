const baseUrl='http://localhost:5001/admin/products';

export const getAllProducts = async () => {

    let authToken = '';
    let user=''
    if (sessionStorage.getItem('auth')) {
        // @ts-ignore
        authToken = sessionStorage.getItem('auth');
        user= sessionStorage.getItem('user');
    }
    
    const response = await fetch(`${baseUrl}/all`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${authToken}`
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

export const getProductById = async (id) => {

    let authToken = '';
    let user=''
    if (sessionStorage.getItem('auth')) {
        // @ts-ignore
        authToken = sessionStorage.getItem('auth');
        user= sessionStorage.getItem('user');
    }
    
    const response = await fetch(`${baseUrl}/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${authToken}`
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


// export const addProduct = async (formData) => {

//     let authToken = '';
//     let user=''
//     if (sessionStorage.getItem('auth')) {
//         // @ts-ignore
//         authToken = sessionStorage.getItem('auth');
//         user= sessionStorage.getItem('user');
//     }

//     // const formDataToSubmit= new FormData();
//     // formDataToSubmit.append('name', formData.name);
//     // formDataToSubmit.append('category', formData.category);
//     // formDataToSubmit.append('price', formData.price);
//     // formDataToSubmit.append('image', formData.image);
    
//     const response = await fetch(`${baseUrl}/add`, {
//         method: 'POST',
//         headers: {
//             // 'Content-Type': 'application/json',
//             "Authorization": `Bearer ${authToken}`
//         },
//         body: formDataToSubmit
//     });
//     if (response.status >= 200 && response.status < 300) {
//         const data = await response.text();
//         console.log(data);
//         return data;
       
//     }
//     else{
//         throw new Error(console.error());
//     }
// }

export const addProduct = async (formData) => {

    let authToken = '';
    let user=''
    if (sessionStorage.getItem('auth')) {
        // @ts-ignore
        authToken = sessionStorage.getItem('auth');
        user= sessionStorage.getItem('user');
        console.log(formData);
    }
    // call login api with error handling
    const response = await fetch(`${baseUrl}/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${authToken}`
        },
        body: JSON.stringify(formData),
        
    });
    // console.log(order)
    if (response.status >= 200 && response.status < 300) {
        const data = await response.text();
        console.log(data);
        return data;
       
    }
    else{
        throw new Error('Something went wrong!!');
    }
}



export const updateProduct = async (formData) => {

    let authToken = '';
    let user=''
    if (sessionStorage.getItem('auth')) {
        // @ts-ignore
        authToken = sessionStorage.getItem('auth');
        user= sessionStorage.getItem('user');
        console.log(formData);
    }
    // call login api with error handling
    const response = await fetch(`${baseUrl}/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${authToken}`
        },
        body: JSON.stringify(formData),
        
    });
    // console.log(order)
    if (response.status >= 200 && response.status < 300) {
        const data = await response.text();
        console.log(data);
        return data;
       
    }
    else{
        throw new Error('Something went wrong!!');
    }
}




export const deleteProduct = async (id) => {

    let authToken = '';
    let user=''
    if (sessionStorage.getItem('auth')) {
        // @ts-ignore
        authToken = sessionStorage.getItem('auth');
        user= sessionStorage.getItem('user');
    }
    
    const response = await fetch(`${baseUrl}/delete/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${authToken}`
        },
    });
    if (response.status >= 200 && response.status < 300) {
        const data = await response.text();
        console.log(data);
        return data;
       
    }
    else{
        throw new Error('Something went wrong!!');
    }
}

export const getProductsCount = async () => {

    let authToken = '';
    let user=''
    if (sessionStorage.getItem('auth')) {
        // @ts-ignore
        authToken = sessionStorage.getItem('auth');
        user= sessionStorage.getItem('user');
    }
    
    const response = await fetch(`${baseUrl}/count`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${authToken}`
        },
    });
    if (response.status >= 200 && response.status < 300) {
        const data = await response.text();
        console.log(data);
        return data;
       
    }
    else{
        throw new Error('Something went wrong!!');
    }
}