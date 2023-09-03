import { deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { fireDb as firestore, auth } from "../firebase";
import { useState } from "react";



const CommentCard = ({commentData}) => {
    const [editTerm, setEdit] = useState(commentData.content)
    const [onEdit, setOnEdit] = useState(false)



    const currentUser = auth.currentUser;
    // console.log(currentUser);

    const editClick = () => {
        if(onEdit == false){
            setOnEdit(true)
        }else{
            setOnEdit(false)
        }
    }


    const editComment = async (commentId) => {
        // console.log(editTerm)
            try{
            const comment = doc(firestore,'comments',commentId);
            const docSnap = await getDoc(comment);
            const dataComment = docSnap.data();
            const editedComment = {
                content: editTerm,

            }

            if (dataComment && dataComment.userId === currentUser.uid) {
                await setDoc(comment, editedComment,  { merge:true });    

                // window.location.reload();   
                console.log("berhsil mengedit komentar ini.");
            } else {
              // Tampilkan pesan kesalahan jika pengguna bukan pemilik komentar
              console.error("Anda tidak dapat mengedit komentar ini.");
            }
        } catch (error) {
          console.error("Error editing comment:", error);
        }
    }



    const deleteComment = async (commentId) => {
        try {
          // Periksa apakah pengguna saat ini adalah pemilik komentar
          const comment = doc(firestore,'comments',commentId);
        //   const commentRef = firestore.collection("comments").doc(commentId);
          const docSnap = await getDoc(comment);
          const dataComment = docSnap.data();
          
          if (dataComment && dataComment.userId === currentUser.uid) {
            // Hapus komentar jika pengguna saat ini adalah pemiliknya
            // await comment.delete();
            await deleteDoc(comment);
            // Perbarui daftar komentar setelah menghapus
            // setComments((prevComments) =>
            //   prevComments.filter((comment) => comment.id !== commentId)
            // );
            window.location.reload();   
          } else {
            // Tampilkan pesan kesalahan jika pengguna bukan pemilik komentar
            console.error("Anda tidak dapat menghapus komentar ini.");
          }
        } catch (error) {
          console.error("Error deleting comment:", error);
        }
      };


    return(
        <div className="flex">
                                <div className="w-32 text-end">
                                    <h1 className="text-5xl">L</h1>
                                </div>
                                <div className="bg-[#F9FFFF] border-indigo-200 border-inset border m-2  rounded-xl p-5  w-full">
                                        <div className="flex gap-4 items-start">
                                            <div className="px-2  w-full">
                                                <div className="flex justify-between">

                                                    <div className="flex items-center gap-2">
                                                        <div className="w-6 h-6 rounded-full border-inset border">
                                                        <img src="../logo192.png" alt="" className="" />
                                                        </div>
                                                        <div>
                                                            <p className="text-xs">@{commentData.userId} reply at.... {}</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                    {currentUser && currentUser.uid === commentData.userId && (
                                                        <div className="">
                                                        <button className="mx-3" onClick={() => deleteComment(commentData.id)}>Hapus</button>
                                                        <button className="mx-3" onClick={() => editClick()}>Edit</button>
                                                        </div>
                                                    )}
                                                    </div>
                                                </div>
                                                {
                                                    onEdit == true?
                                                    (
                                                        <>
                                                    <div className="text-sm font-light mb-2 pt-3 px-3">
                                                        <input className="w-full border border-inner rounded-xl" onChange={(e) => {setEdit(e.target.value)}} defaultValue={commentData.content}/>
                                                        <button className="bg-black text-white rounded-lg px-2 mt-2" onClick={() => editComment(commentData.id)}>confirm</button>
                                                    </div>    
                                                        </>
                                                    ):(
                                                        <>
                                                        <div className="text-sm font-light mb-2 pt-3 px-3">
                                                        <p className="">{commentData.content}</p>
                                                        </div>
                                                        </>
                                                    )
                                                }
                                            </div>
                                        </div>
                                </div>
                            </div>
    )
}

export default CommentCard