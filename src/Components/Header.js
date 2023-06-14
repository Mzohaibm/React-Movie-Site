import React from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
const Header = () => {
  return (
    <div className="sticky top-0 z-10 flex justify-between items-center py-3 border-b-2 bg-[#040000fa] border-white">
      <Link to="/">
        <h1 className="text-3xl font-bold text-red-600">
          Movies <span className="text-white">Verse</span>
        </h1>
      </Link>

      <Link to="/addmovie">
        <h1 className="text-lg cursor-pointer flex items-center">
          <Button>
            <span className="text-white">Add New</span>
            <AddIcon className="mr-1 text-indigo-600 " />
          </Button>
        </h1>
      </Link>
    </div>
  );
};

export default Header;


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