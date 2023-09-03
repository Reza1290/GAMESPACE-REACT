import React, { useState } from "react";
import { auth, fireDb as firestore } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
 // Import your Firebase Firestore and authentication instance



const CommentForm = ({ isiId }) => {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = auth.currentUser; // Get the current user
      if (!user) {
        // Handle cases where the user is not authenticated
        return;
      }

      // Add a new comment document to the comments collection
      await addDoc(collection( firestore, "comments"), {
        forum_id: isiId,
        content: commentText,
        userId: user.uid,
        timestamp: new Date(),
        // Add any additional fields if needed
      });

      // Clear the comment input field
      setCommentText("");
      window.location.reload();
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <div className="flex">
    <div className="w-32 text-end">
        <h1 className="text-5xl">L</h1>
    </div>
    <div className="bg-[#F9FFFF] border-indigo-200 border-inset border m-2  rounded-xl p-5  w-full">
            <div className="flex gap-4 items-start">
                <div className="px-2  w-full">
                    
                            <form onSubmit={handleSubmit}>
                <textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Add a comment..."
                    className="w-full text-sm"
                />
                <button type="submit" className="text-sm">Post Comment</button>
                </form>
                </div>
            </div>
    </div>
</div>
    
  );
};

export default CommentForm;
