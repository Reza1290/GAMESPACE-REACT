import React, { useEffect, useState } from "react";
import { fireDb as firestore, auth } from "../../firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { collection, deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";

const EditForum = () => {
    const loc = useLocation()
    const nav = useNavigate()
    const [forum, setForum] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const [editedTitle, setEditedTitle] = useState("");
    const [editedContent, setEditedContent] = useState("");
    const pathname = loc.pathname;
    const parts = pathname.split('/');
    const forumId = parts[parts.length - 1];
    const currentUser = auth.currentUser;
    // console.log(forumId)

    useEffect(() => {
      
      const fetchForum = async () => {
        try {
          const forumRef = doc(firestore, "gamerum", forumId)
        //   const forumRef = firestore.collection("forums").doc(forumId);
          const forumDoc = await getDoc(forumRef);
          if (forumDoc.exists) {
              const forumData = forumDoc.data();
              
            //   console.log(forumData);
            setForum(forumData);
            setEditedTitle(forumData.title);
            setEditedContent(forumData.desc);
          } else {
            console.error("Forum not found");
          }
        } catch (error) {
          console.error("Error fetching forum:", error);
        }
      };
      
      fetchForum();
    }, [forumId]);
  
    const handleEdit = () => {
      setIsEditMode(true);
    };
  
    const handleSave = async () => {
      try {
        if (!currentUser) {
          console.error("Anda harus masuk untuk mengedit forum.");
          return;
        }
  
        // Check if the current user is the owner of the forum
        if (currentUser.uid === forum.user_id) {
          // Update the forum in Firebase Firestore
        //   const forumRef = firestore.collection("forums").doc(forumId);
            const edit = doc(firestore,'gamerum',forumId);
          const data = {
            title: editedTitle,
            desc: editedContent,
          };
          
          await setDoc(edit,data, {merge : true})
          // Exit edit mode after successfully saving
          setIsEditMode(false);
        } else {
          console.error("Anda tidak memiliki izin untuk mengedit forum ini.");
        }
      } catch (error) {
        console.error("Error updating forum:", error);
      }
    };
  
    const handleDelete = async () => {
      try {
        if (!currentUser) {
          console.error("Anda harus masuk untuk menghapus forum.");
          return;
        } 
  
        // Check if the current user is the owner of the forum
        if (currentUser.uid === forum.user_id) {
          // Delete the forum from Firebase Firestore
          const del = doc(firestore,'gamerum',forumId);
          await deleteDoc(del)
          nav('/spacerum')
        } else {
          console.error("Anda tidak memiliki izin untuk menghapus forum ini.");
        }
      } catch (error) {
        console.error("Error deleting forum:", error);
      }
    };
  
    if (!forum) {
      return <div>Loading...</div>;
    }
  
    return (
        <div className="lg:pl-[19.5rem]">
      <div className="flex max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[1rem] mx-[1rem] xl:pr-16">
        <div className="xl:w-[75%] w-full ">
          <div className="bg-[#F9FFFF] border-indigo-200 border-inset border m-2  rounded-xl p-5 ">
          <h2 className="text-3xl font-bold text-center">Edit Forum</h2>
      <div>
        {isEditMode ? (
          <div className="flex flex-col">
            <label htmlFor="forumTitle" className="text-xl font-bold">Judul Forum</label>
            <input
              type="text"
              id="forumTitle"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <label htmlFor="forumCont" className="text-xl font-bold mt-10">Content's</label>
            <textarea
              value={editedContent}
              id="forumCont"
              onChange={(e) => setEditedContent(e.target.value)}
            ></textarea>
            <button className="bg-blue-600 px-5 m-3 rounded-xl text-gray-100 py-1 text-lg boorder border-inset" onClick={handleSave}>Simpan</button>
          </div>
        ) : (
          <div>
            <label htmlFor="forumTitle" className="text-xl font-bold">Judul Forum</label>
            <h2>{forum.title}</h2>

            <label htmlFor="forumTitle" className="text-xl font-bold mt-10">Content's</label>
            <p>{forum.desc}</p>
            {/* <p>{console.log(forum)}</p> */}
            {currentUser && currentUser.uid === forum.user_id && (
              <div>
                <button onClick={handleEdit} className="bg-blue-600 px-5 m-3 rounded-xl text-gray-100 py-1 text-lg boorder border-inset">Edit</button>
                <button onClick={handleDelete} className="bg-red-600 px-5 m-3 rounded-xl text-gray-100 py-1 text-lg boorder border-inset">Hapus</button>
              </div>
            )}
          </div>
        )}
      </div>
      </div>
      </div>
      </div>
      </div>
    );
  };

export default EditForum;
