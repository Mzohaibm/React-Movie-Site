import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { useParams } from "react-router-dom";
import { movieRefrence } from "./Firebase/Firebase";
import { getDoc } from "firebase/firestore";
const Detail = () => {
  const [data, setData] = useState({
    title: "",
    year: "",
    image: "",
    description: "",
  });
  const { id } = useParams();
  window.alert(id);
  useEffect(() => {
    async function getData() {
      const data = await getDoc(movieRefrence, id);
      setData(data.data());
    }
    getData();
  }, []);
  return (
    <div className="p-4 flex justify-between flex-col md:flex-row  mt-4 items-center ">
      <div className="md:w-1/2 w-full lg:w-1/3 block  md:sticky top-24 ">
        <img className=" h-96 " src={data.image} />
      </div>
      <div className="md:w-1/2 w-full lg:w-2/3 ">
        <h1 className="text-2xl font-bold text-gray-300">
          {data.title} <span className="text-white text-xl">{data.year}</span>
        </h1>
        <ReactStars size={20} half={true} value={5} edit={false} count={5} />
        <p className="pt-3">{data.description}</p>
      </div>
    </div>
  );
};

export default Detail;


// Install Firebase packages using npm.

// Import the necessary Firebase functions: initializeApp from "firebase/app" and getFirestore, collection from "firebase/firestore".

// Create a Firebase project in the Firebase console.

// Register your web app in the Firebase project.

// Copy the generated Firebase configuration object, which contains the apiKey, authDomain, projectId, storageBucket, messagingSenderId, and appId.

// Replace the empty values in the Firebase configuration object with the corresponding values from your Firebase project.

// Initialize Firebase by calling initializeApp with the configuration object.

// Get a reference to the Firestore database using getFirestore.

// Create a reference to the "movie" collection in the Firestore database using collection.

// Export the necessary variables or functions for use in other parts of your app.

// By following these steps, you can integrate Firebase into this movie app, allowing you to utilize Firestore for storing and retrieving movie data.