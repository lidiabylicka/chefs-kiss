"use client";

import { useState } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";

import { ProductBrowser } from "@ecwid/nextjs-ecwid-plugin";
{
  /* <ProductBrowser storeId="108134812" /> */
}

import Button from "@/layouts/components/Button";
import FridgeContents from "./components/FridgeContents";

const FridgePage = () => {
  const [foodItem, setFoodItem] = useState("");
  const { user } = useAuthenticator(); // Get the authenticated user
  const userId = user.signInDetails?.loginId;
  const API_GATEWAY_ENDPOINT =
    process.env.API_GATEWAY ||
    "https://f70lrh9nt9.execute-api.eu-north-1.amazonaws.com/dev";

  //trying out the new code
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("User ID:", userId); // Log userId
    console.log("Food Item:", foodItem); // Log foodItem

    try {
      const response = await fetch(API_GATEWAY_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ foodItems: foodItem, userId }),
      });

      const result = await response.json(); // Parse response

      console.log("Full Response:", result); // Log the entire response object for debugging

      if (response.ok) {
        console.log("Food items have been stored successfully:", result.items); // Access result.items properly
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
          <form className="w-full flex flex-col gap-2" onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={(e) => setFoodItem(e.target.value)}
              placeholder="insert ingredients to add, divided by comma..."
              className="w-full p-2 bg-transparent rounded-lg border-white text-aqua focus:border-yellow"
            />
            <Button type="submit">add products</Button>
          </form>
        </div>
        {/* Second column: Fridge contents */}
        <div className="flex flex-1 w-full pl-1 justify-center text-white">
          {/* <FridgeContents /> */}
        </div>
      </div>
    </div>
  );
};

export default FridgePage;
