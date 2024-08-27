"use client";

import { useState } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";

import Button from "@/layouts/components/Button";

const FridgePage = () => {
  const [foodItem, setFoodItem] = useState("");
  const { user } = useAuthenticator(); // Get the authenticated user
  const userId = user.signInDetails?.loginId;
  const API_GATEWAY_ENDPOINT =
    process.env.API_GATEWAY ||
    "https://f70lrh9nt9.execute-api.eu-north-1.amazonaws.com/dev";

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch(API_GATEWAY_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ foodItems: foodItem.split(","), userId }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Food items have been stored successfully:", result.items);
      } else {
        console.error("Error:", result.error);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1>Description</h1>
      <div className="flex w-full max-w-4xl justify-between p-4">
        {/* First column: Form */}
        <div className="flex-1 w-full pr-1">
          <form className="w-full flex flex-col gap-2">
            <input
              type="text"
              onChange={(e) => setFoodItem(e.target.value)}
              placeholder="insert ingredients to add, divided by comma..."
              className="w-full p-2 bg-transparent rounded-lg border-white text-aqua focus:border-yellow"
            />
            <Button type="submit" onClick={() => handleSubmit}>
              add products
            </Button>
          </form>
        </div>
        {/* Second column: Fridge contents */}
        <div className="flex flex-1 w-full pl-1 justify-center text-white">
          <h2>FRIDGE CONTENTS TO DISPLAY HERE</h2>
        </div>
      </div>
    </div>
  );
};

export default FridgePage;

// exports.handler = async (event) => {
//   try {
//     // Parse the event body, ensuring it is handled correctly
//     const body =
//       typeof event.body === "string" ? JSON.parse(event.body) : event.body;

//     // Check if foodItems is defined in the body
//     if (!body || !body.foodItems) {
//       throw new Error("Missing 'foodItems' in request body");
//     }

//     // Split the foodItems string into an array
//     const foodItems = body.foodItems.split(",");

//     // Return a successful response
//     return {
//       statusCode: 200,
//       body: JSON.stringify({
//         message: "Food items have been stored successfully",
//         items: foodItems,
//       }),
//     };
//   } catch (error) {
//     // Return an error response
//     return {
//       statusCode: 400, // or 500, depending on the nature of the error
//       body: JSON.stringify({
//         error: error.message,
//       }),
//     };
//   }
// };
