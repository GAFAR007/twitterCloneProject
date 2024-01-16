import React, { useState } from "react";
import { useCritterContext } from "../CritterContext/CritterContext"; // Import the context hook

const PostComponent = () => {
  const [postText, setPostText] =
    useState(""); // State to hold the text entered by the user
  const { loading } =
    useCritterContext(); // Access the loading state from the context

  const handlePost = async () => {
    if (loading) {
      // Don't allow posting while data is still loading
      return;
    }

    try {
      const response = await fetch(
        "/api/tweet",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            status: postText,
          }),
        }
      );

      if (response.ok) {
        // You can handle the newly created tweet data here if needed
        console.log(
          "Tweet posted successfully"
        );
        setPostText(""); // Clear the input after posting
      } else {
        console.error(
          "Error posting tweet:",
          response.statusText
        );
      }
    } catch (error) {
      console.error(
        "Error posting tweet:",
        error
      );
    }
  };

  return (
    <div>
      <textarea
        rows="4"
        cols="50"
        placeholder="Enter your text here..."
        value={postText}
        onChange={(e) =>
          setPostText(e.target.value)
        }
      ></textarea>
      <br />
      <button
        onClick={handlePost}
        disabled={loading}
      >
        Post
      </button>
    </div>
  );
};

export default PostComponent;
