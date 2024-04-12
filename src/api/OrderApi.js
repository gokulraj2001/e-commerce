const baseurl = "http://localhost:5001/api/orders";

export const addOrder = async (order) => {

    let authToken = '';
    let user=''
    if (sessionStorage.getItem('auth')) {
        // @ts-ignore
        authToken = sessionStorage.getItem('auth');
        user= sessionStorage.getItem('user');
        console.log(order);
    }
    // call login api with error handling
    const response = await fetch(`${baseurl}/addorders/${user}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${authToken}`
        },
        body: JSON.stringify(order.order),
        
    });
    console.log(order)
    if (response.status >= 200 && response.status < 300) {
        const data = await response.text();
        console.log(data);
        return data;
       
    }
    else{
        throw new Error('Something went wrong!!');
    }
}

export const getOrders = async () => {

    let authToken = '';
    let user=''
    if (sessionStorage.getItem('auth')) {
        // @ts-ignore
        authToken = sessionStorage.getItem('auth');
        user= sessionStorage.getItem('user');
    }
    // call login api with error handling
    const response = await fetch(`${baseurl}/all`, {
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
        throw new Error(console.error());
    }
}


export const getOrdersByUsername = async () => {

    let authToken = '';
    let user=''
    if (sessionStorage.getItem('auth')) {
        // @ts-ignore
        authToken = sessionStorage.getItem('auth');
        user= sessionStorage.getItem('user');
    }
    // call login api with error handling
    const response = await fetch(`${baseurl}/${user}`, {
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


export const updateOrder = async (order) => {

    let authToken = '';
    let user=''
    if (sessionStorage.getItem('auth')) {
        // @ts-ignore
        authToken = sessionStorage.getItem('auth');
        user= sessionStorage.getItem('user');
        console.log(order);
    }
    // call login api with error handling
    const response = await fetch(`${baseurl}/update`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${authToken}`
        },
        body: JSON.stringify(order),
        
    });
    console.log(order)
    if (response.status >= 200 && response.status < 300) {
        const data = await response.text();
        console.log(data);
        return data;
       
    }
    else{
        throw new Error('Something went wrong!!');
    }
}

export const cancelOrder = async (order) => {

    let authToken = '';
    let user=''
    if (sessionStorage.getItem('auth')) {
        // @ts-ignore
        authToken = sessionStorage.getItem('auth');
        user= sessionStorage.getItem('user');
        console.log(order.order);
    }
    // call login api with error handling
    const response = await fetch(`${baseurl}/cancelorder`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${authToken}`
        },
        body: JSON.stringify(order.order),
        
    });
    // console.log(order)
    if (response.status >= 200 && response.status < 300) {
        const data = await response.json();
        console.log(data);
        return data;
       
    }
    else{
        throw new Error('Something went wrong!!');
    }
}

export const getTotalOrders = async () => {

    let authToken = '';
    let user=''
    if (sessionStorage.getItem('auth')) {
        // @ts-ignore
        authToken = sessionStorage.getItem('auth');
        user= sessionStorage.getItem('user');
    }
    // call login api with error handling
    const response = await fetch(`${baseurl}/count`, {
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

export const getTotalOrdersDelivered = async () => {

    let authToken = '';
    let user=''
    if (sessionStorage.getItem('auth')) {
        // @ts-ignore
        authToken = sessionStorage.getItem('auth');
        user= sessionStorage.getItem('user');
    }
    // call login api with error handling
    const response = await fetch(`${baseurl}/delivered`, {
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

export const getTotalOrdersCancelled = async () => {

    let authToken = '';
    let user=''
    if (sessionStorage.getItem('auth')) {
        // @ts-ignore
        authToken = sessionStorage.getItem('auth');
        user= sessionStorage.getItem('user');
    }
    // call login api with error handling
    const response = await fetch(`${baseurl}/cancelled`, {
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


