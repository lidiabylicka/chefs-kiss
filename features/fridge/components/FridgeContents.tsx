import { useState, useEffect } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";

const API_GATEWAY_ENDPOINT =
  process.env.API_GATEWAY ||
  "https://f70lrh9nt9.execute-api.eu-north-1.amazonaws.com/dev";

const FridgeContents = () => {
  const [items, setItems] = useState<string[]>([]);
  const { user } = useAuthenticator();
  const userId = user.signInDetails?.loginId;

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_GATEWAY_ENDPOINT}/getFoodItems`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
        });

        const result = await response.json();

        if (response.ok) {
          setItems(result.items);
        } else {
          console.error("Error fetching items:", result.error);
        }
      } catch (error) {
        console.error("Unexpected error:", error);
      }
    };

    if (userId) {
      fetchItems();
    }
  }, [userId]);

  return (
    <div className="flex flex-wrap gap-4">
      {items.map((item, index) => (
        <div key={index} className="p-4 bg-gray-800 rounded-lg text-white">
          {item}
        </div>
      ))}
    </div>
  );
};

export default FridgeContents;
