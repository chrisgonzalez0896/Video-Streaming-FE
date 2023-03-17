// import { loToHi, defaultSort } from '../components/sort';

// export const BASE_URL = 'postgres://localhost:5432/ucudo';
export const BASE_URL = 'http://localhost:3000';

export const uploadVideoToDb = async ({title, author, description, encodedBinaryString, timestamp, size}) => {
    
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('description', description);
    formData.append('encodedBinaryString', encodedBinaryString);
    formData.append('timestamp', timestamp);
    formData.append('size', size);

    const searchParams = new URLSearchParams();

    for (const pair of formData.entries()) {
        searchParams.append(pair[0], pair[1]);
      }
    // const details = {
    //     'title': title,
    //     'author': author,
    //     'description': description,
    //     'encodedBinaryString': encodedBinaryString,
    //     'timeStamp': timestamp,
    //     'size': size
    // }
    // const formBody = Object.keys(details).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key])).join('&');

    try{
        const boundary = '----WebKitFormBoundaryoah42hxjcDCXmfO6';
        const response = await fetch(`${BASE_URL}/api/v1/videos`, {
            method: "POST",
            timeout: 10000,
            headers: {
                // 'Content-Type': `multipart/form-data; boundary=${boundary}`
              "Content-Type": `application/x-www-form-urlencoded; boundary=${boundary}`
              
            },
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            body: searchParams
        });
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