import React, { useEffect } from "react";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import ReactStars from "react-stars";
import { getDocs } from "firebase/firestore";
import { movieRefrence } from "./Firebase/Firebase";
import { Link } from "react-router-dom";
import "./Style.css";
const Card = () => {
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await getDocs(movieRefrence);
      console.log(data);
      data.forEach((doc) => {
        setCard((prev) => [...prev, { ...doc.data(), id: doc.id }]);
      });
      setLoading(false);
    }

    fetchData();
  }, []);
  return loading ? (
    <div className="flex justify-center spinner items-center">
      <ThreeDots height="80" width="80" radius="1" color="white" />
    </div>
  ) : (
    <Link to={`/detail/`}>
      <div className="flex flex-wrap justify-between p-3 mt-2">
        {card.map((item, index) => {
          return (
            <div
              key={index}
              className="card bg-slate-800 ease-in-out cursor-pointer text-white text-md my-3 hover:-translate-y-3 duration-500 transition-all"
            >
              <img
                className="sm:h-72 sm:w-56 h-52 w-40 shadow-lg pb-2"
                src={item.image}
                alt="Spider Man"
              />
              <div className="px-2 text-gray-400 py-0.5">
                Name: <span className="text-white font-bold">{item.name}</span>
              </div>
              <div className="px-2 py-0.5 flex items-center text-gray-400">
                Rating:
                <span className="text-white font-bold pl-1">
                  <ReactStars
                    size={20}
                    half={true}
                    value={item.rating}
                    edit={false}
                    count={5}
                  />
                </span>
              </div>
              <div className="px-2 py-0.5 text-gray-400">
                Year: <span className="text-white font-bold">{item.year}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Link>
  );
};

export default Card;


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