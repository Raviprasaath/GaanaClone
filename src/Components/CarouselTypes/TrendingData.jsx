
// -----------------------------

//    Scartch Page


// ---------------------------

// import { useEffect, useState } from "react";

// function TrendingData () {

//   const [songsStore, setStoreSongs] = useState([]);
  
//   const handleSongs = () => {
//     const tempLocalSongs = JSON.parse(localStorage.getItem("localSongs")) || [];
//     if (tempLocalSongs.length !== 0) {
//       const values = JSON.parse(localStorage.getItem("localSongs"));
//       setStoreSongs(values);
//     }
//   };
  
//   console.log("trending trail ", songsStore)
  
//   useEffect(() => {
//     handleSongs();
//   }, []);

//   return songsStore;
  
// }

// export default TrendingData;


//   // export const trendingData = [
//   //   {
//   //     id: 1,
//   //     imageurl:
//   //       "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//   //     name: "Colorful sneakers",
//   //     price: "$19.99",
//   //     description: "Some text about the product..",
//   //   },
//   //   {
//   //     id: 2,
//   //     imageurl:
//   //       "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
//   //     name: "Sport sneakers",
//   //     price: "$21.99",
//   //     description: "Some text about the product..",
//   //   },
//   //   {
//   //     id: 3,
//   //     imageurl:
//   //       "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//   //     name: "iWatch",
//   //   },
//   //   {
//   //     id: 3,
//   //     imageurl:
//   //       "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//   //     name: "iWatch",
//   //     price: "$99.99",
//   //     description: "Some text about the product..",
//   //   },
//   //   {
//   //     id: 3,
//   //     imageurl:
//   //       "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//   //     name: "iWatch",
//   //     price: "$99.99",
//   //     description: "Some text about the product..",
//   //   },
//   //   {
//   //     id: 3,
//   //     imageurl:
//   //       "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//   //     name: "iWatch",
//   //     price: "$99.99",
//   //     description: "Some text about the product..",
//   //   },
//   //   {
//   //     id: 3,
//   //     imageurl:
//   //       "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//   //     name: "iWatch",
//   //     price: "$99.99",
//   //     description: "Some text about the product..",
//   //   },
//   // ];