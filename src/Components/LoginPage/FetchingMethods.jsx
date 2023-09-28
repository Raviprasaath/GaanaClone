// import React, { useEffect, useState } from 'react';

// function FetchingMethods() {
 
//     const [loginState, setLoginState] = useState("success");
//     const [token, setToken] = useState("");

    

//   useEffect(() => {
//     let myHeaders = new Headers();
//     myHeaders.append("projectID", "ghmumg9x1zid");
//     myHeaders.append("Content-Type", "application/json");

//     let raw = JSON.stringify({
//       "name": "newuser@gmail.com",
//       "email": "newuser@gmail.com",
//       "password": "newuser@gmail.com",
//       "appType": "music"
//     });

//     let requestOptions = {
//       method: 'POST',
//       headers: myHeaders,
//       body: raw,
//       redirect: 'follow'
//     };

//     fetch("https://academics.newtonschool.co/api/v1/user/signup", requestOptions)
//       .then(response => response.json())
//       .then(result => {
//         setLoginState(result.status);
//         if (result.status == "success") {
//             setToken(result.token)
//         }
//         })
//       .catch(error => {
//         console.log('error', error);
//       })
    


//     if (loginState === "fail") {
//         let myHeaders = new Headers();
//         myHeaders.append("projectID", "ghmumg9x1zid");
//         myHeaders.append("Content-Type", "application/json");
    
//         let raw = JSON.stringify({      
//         "email": "rraviprasaath9@gmail.com",
//         "password": "newton2023",
//         "appType": "music"
//         });
    
//         let requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: raw,
//         redirect: 'follow'
//         };
    
//         fetch("https://academics.newtonschool.co/api/v1/user/login", requestOptions)
//         .then(response => response.json())
//         .then(result => {
//             setLoginState(result.status);
//             if (result.status == "success") {
//                 setToken(result.token)
//             }    
//             console.log("result from fetch", result)
//         })
//         .catch(error => console.log('error', error));
//     }
//     console.log("token", token)
//   }, []);

//   return (
//     <></>
//   );
// }

// export default FetchingMethods;
