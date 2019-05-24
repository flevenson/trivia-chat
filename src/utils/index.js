export const signUpUser = async (credentials) => {
  const url = 'https://fe245y6fug.execute-api.us-east-2.amazonaws.com/test-deploy'
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {'Content-Type':'application/json'}
    })
    if(!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export const logInUser = async (credentials) => {
  const url = 'https://8hngt42kz7.execute-api.us-east-2.amazonaws.com/prod'
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {'Content-Type':'application/json'}
    })
    if(!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}