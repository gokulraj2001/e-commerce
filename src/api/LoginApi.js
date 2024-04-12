const baseurl = "http://localhost:5001/users";

export const userLoginApi = async (user) => {
    // call login api with error handling
    const response = await fetch(`${baseurl}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    if (response.status >= 200 && response.status < 300) {
        const data = await response.text();
        console.log(data);
        return data;
       
    }
    else{
        throw new Error('Invalid credentials');
    }
}

// Admin signin

export const adminLoginApi = async (user) => {
    // call login api with error handling
    const response = await fetch(`${baseurl}/adminsignin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    if (response.status >= 200 && response.status < 300) {
        const data = await response.text();
        console.log(data);
        return data;
       
    }
    else{
        throw new Error('Invalid credentials');
    }
}


// Signup

export const signUpApi= async(user)=>{
    const response = await fetch(`${baseurl}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if(response.status>=200 && response.status<300){
        const data=await response.json();
        console.log(data);
        return data;
      } else{
        throw new Error("Something went wrong.");
      }
}

export const userAccessApi = async () => {
    let authToken = '';
    if (sessionStorage.getItem('auth')) {
        // @ts-ignore
        authToken = sessionStorage.getItem('auth');
    }
    const response = await fetch(`${baseurl}/user`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${authToken}`
        },
    });
    const data = await response.json();
    return data;
}

export const changePassword = async (user) => {
    // call login api with error handling
    const response = await fetch(`${baseurl}/forgotpassword`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
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