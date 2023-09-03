import React, { useState } from "react";
import { fireDb as firestore, auth } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const CreateForum = () => {
  const [forumTitle, setForumTitle] = useState("");
  const [forumContent, setForumContent] = useState("");
  const nav = useNavigate();
  const currentUser = auth.currentUser;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!currentUser) {
        // Handle cases where the user is not authenticated
        console.error("Anda harus masuk untuk membuat forum.");
        return;
      }

      // Membuat dokumen forum baru dalam koleksi "forums"
      await addDoc(collection( firestore, "gamerum"),{
        title: forumTitle,
        desc    : forumContent,
        user_id: currentUser.uid,
        timestamp: new Date(),
        kategori: 'Game'
      });

      // Mengosongkan input setelah membuat forum
      setForumTitle("");
      setForumContent("");
      nav(-1)
    } catch (error) {
      console.error("Error creating forum:", error);
    }
  };

  return (
    <div className="lg:pl-[19.5rem]">
      <div className="flex max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[1rem] mx-[1rem] xl:pr-16">
        <div className="xl:w-[75%] w-full ">
                        <div className="bg-[#F9FFFF] m-2 rounded-xl p-10 mb-10">
                        <h2 className="text-3xl font-bold text-center">Buat Forum Baru</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col">
                            <label htmlFor="forumTitle" className="text-xl font-bold">Judul Forum</label>
                            <input
                                type="text"
                                id="forumTitle"
                                value={forumTitle}
                                onChange={(e) => setForumTitle(e.target.value)}
                                required
                                className="p-2 h-auto rounded-xl border-2 border-inset text-gray-600"
                            />
                            </div>
                            <div className="flex flex-col mt-5">
                            <label htmlFor="forumContent" className="text-xl font-bold">Content's</label>
                            <textarea
                                id="forumContent"
                                value={forumContent}
                                onChange={(e) => setForumContent(e.target.value)}
                                required className="rounded-xl p-2 border-2 border-inset text-gray-600 min-h-16"
                            ></textarea>
                            </div>
                            <button type="submit" className="bg-blue-600 px-5 m-3 rounded-xl text-gray-100 py-1 text-lg boorder border-inset">Kirim</button>
                        </form>
                        </div>
    </div>
    </div>
    </div>
  );
};

export default CreateForum;