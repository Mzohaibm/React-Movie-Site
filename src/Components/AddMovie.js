import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { addDoc } from "firebase/firestore";
import { movieRefrence } from "./Firebase/Firebase";
import swal from "sweetalert";
const AddMovie = () => {
  const [form, setForm] = useState([
    {
      name: "",
      year: "",
      description: "",
      image:
        "https://creativereview.imgix.net/content/uploads/2018/12/Unknown-5.jpeg?auto=compress,format&q=60&w=2024&h=3000",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const addMovie = async () => {
    setLoading(true);
    try {
      await addDoc(movieRefrence, form);
      swal({
        title: "Fully Added",
        icon: "success",
        button: "false",
        timer: 2000,
      });
    } catch (error) {
      swal({
        title: error,
        icon: "error",
        button: "false",
        timer: 2000,
      });
    }

    setLoading(false);
  };
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font relative">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-col text-center w-full mb-4">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Add Movie
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Name
                  </label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Year
                  </label>
                  <input
                    value={form.year}
                    onChange={(e) => setForm({ ...form, year: e.target.value })}
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Image Link
                  </label>
                  <input
                    value={form.image}
                    onChange={(e) =>
                      setForm({ ...form, image: e.target.value })
                    }
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Description
                  </label>
                  <textarea
                    value={form.description}
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                    id="message"
                    name="message"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  onClick={addMovie}
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  {loading ? (
                    <TailSpin height={25} color="white" />
                  ) : (
                    "Add Movie"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddMovie;


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