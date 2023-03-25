export const BASE_URL        = 'http://localhost:3000';
export const uploadVideoToDb = async (formData) => {
    
    // function iterateFormData(formData) {
    //     for (const [key, value] of formData.entries()) {
    //       console.log(key, value);
    //     }
    //   }

    //   iterateFormData(formData)


    try{
        const response = await fetch(`${BASE_URL}/api/v1/videos/upload`, {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        console.log('Upload successful:', data);
    } catch(err) {
        console.error(err);
    }
};


// export const register = async (username, password, email) => {
//     try {
//       const response = await fetch(`${BASE_URL}/users/register`, {
//         method: "POST",
//         timeout: 8000,
//         headers: getHeaders(),
//         body: JSON.stringify({
//           username: username,
//           password: password,
//           email: email
//         }),
//       });
  
//       const res = await response.json();
//       return res;
      
//     } catch (error) {
//       console.log("An error occurred while trying to register a new user.");
//     }
//   };



// export const fetchMenHoodies = async () => {
//     try {
//       const response = await fetch(`${BASE_URL}/Men/Hoodies-Sweatshirts`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       console.log('response: ', response)
//       const data = await response.json();
//       console.log('data in api/index: ', data)
//       return data;
//     } catch (error) {
//       console.log("An error occurred while fetching the product.", error);
//       throw error;
//     }
//   }


//   export const fetchBestDealsMens = async ( category ) => {
//     try {
//       const response = await fetch(`${BASE_URL}`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       console.log('response: ', response)
//       const data = await response.json();
//       console.log('data in api/index: ', data)
//       return data.products;
//     } catch (error) {
//       console.log("An error occurred while fetching the product.", error);
//       throw error;
//     }
//   }