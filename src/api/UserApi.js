const baseUrl='http://localhost:5001/api';

export const getUserDetails = async () => {
    let authToken = '';
    let user=''
    if (sessionStorage.getItem('auth')) {
        // @ts-ignore
        authToken = sessionStorage.getItem('auth');
        user= sessionStorage.getItem('user')
    }
    const response = await fetch(`${baseUrl}/${user}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${authToken}`
        },
    });
    const data = await response.json();
    console.log(data);
    return data;
}

export const updateUserDetails = async (userDetails) => {
    let authToken = '';
    let user=''
    if (sessionStorage.getItem('auth')) {
        // @ts-ignore
        authToken = sessionStorage.getItem('auth');
        user= sessionStorage.getItem('user')
    }
    console.log(userDetails)
    console.log(authToken)
    const response = await fetch(`${baseUrl}/update`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${authToken}`
        },
        body: JSON.stringify(userDetails),
    });
    if (response.status >= 200 && response.status < 300) {
        const data = await response.text();
        // console.log(data);
        return data;
       
    }
    else{
        throw new Error(console.error());
    }
}


export const updatePassword = async (userDetails) => {
    let authToken = '';
    let user=''
    if (sessionStorage.getItem('auth')) {
        // @ts-ignore
        authToken = sessionStorage.getItem('auth');
        user= sessionStorage.getItem('user')
       
    }
    console.log(userDetails)
    console.log(authToken)
    const response = await fetch(`${baseUrl}/updatepassword`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${authToken}`
        },
        body: JSON.stringify(userDetails),
    });
    const data = await response.text();
    console.log(data);
    return data;
}

export const getAllCustomers = async () => {
    let authToken = '';
    let user=''
    if (sessionStorage.getItem('auth')) {
        // @ts-ignore
        authToken = sessionStorage.getItem('auth');
        user= sessionStorage.getItem('user')
    }
    const response = await fetch(`${baseUrl}/customers`, {
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

export const getUsersCount = async () => {
    let authToken = '';
    let user=''
    if (sessionStorage.getItem('auth')) {
        // @ts-ignore
        authToken = sessionStorage.getItem('auth');
        user= sessionStorage.getItem('user')
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
        throw new Error(console.error());
    }
}
