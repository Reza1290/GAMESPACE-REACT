import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import CommentCard from "../component/CommentCard";
import getUserDataByUid from "../hooks/getUserByUid";
import { auth, fireDb, storage } from "../firebase";
import { Timestamp, collection, getDocs, query, where } from "firebase/firestore";
import CommentForm from "../component/form/CommentForm";
import { Link } from "react-router-dom";


const ViewContent = ({ isi }) => {
  const [imageUrls, setImageUrls] = useState([]);
  const [editPermis, setEditPermis] = useState(false);
  const [comments, setComments] = useState([]);
  
  const { isLogin } = useAuth();


  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const pathNames = isi?.data?.attachImg || [];
  
  const fetchComments = async () => {
    // const commentsRef = fireDb.collection("comments");
    // const query = commentsRef.where("forum_id", "==", isi?.id);

    const q = query(collection(fireDb, 'comments'), where("forum_id", "==", isi?.id));
    // Use a Firestore query to retrieve comments associated with isi.id
    const querySnapshot = await getDocs(q);
    // const unsubscribe = query.onSnapshot((querySnapshot) => {
    const commentsData = [];
    querySnapshot.forEach((doc) => {
          // Extract comment data from the document
        const commentData = doc.data();
        commentsData.push({id: doc.id , ...commentData});
    });
    setComments(commentsData);

    // return () => unsubscribe();
  }

  const fetchImageUrls = async () => {
    const promises = pathNames.map(async (path) => {
      try {
        const url = await getDownloadURL(ref(storage, path));
        return url;
      } catch (error) {
        console.error(`Error fetching URL for path ${path}:`, error);
        return null;
      }
    });

    try {
      const urls = await Promise.all(promises);
      setImageUrls(urls.filter((url) => url !== null));
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isLogin?.user.uid === isi?.data?.user_id) {
      setEditPermis(true);
    }
  }, [isLogin, isi?.data?.user_id, isi?.id]);

  useEffect(() => {
    if (pathNames.length > 0) {
      fetchImageUrls();
      
    } else {
        setIsLoading(false);
    }
    fetchComments();
  }, [pathNames]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="lg:pl-[19.5rem]">
      <div className="flex max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[1rem] mx-[1rem] xl:pr-16">
        <div className="xl:w-[75%] w-full ">
          <div className="bg-[#F9FFFF] border-indigo-200 border-inset border m-2  rounded-xl p-5 ">
            <div className="flex gap-4 items-start">
              <div className="border w-[64px] h-[64px] rounded-xl">
                <img
                  src="./logo512.png"
                  alt=""
                  className="w-[64px] h-[64px] w-cover"
                />
              </div>
              <div className="w-full px-2">
                <div className="flex justify-between items-center sm:flex-row flex-col mb-4">
                  <div>
                    <h1 className="font-medium text-xl">{isi?.data?.title}</h1>
                  </div>
                  <div className=" flex items-center sm:flex-row flex-col gap-2">
                    <div className="bg-blue-500 font-medium text-sm p-1 px-2 rounded-full">
                      <div className="text-gray-100">{isi?.data?.kategori}</div>
                    </div>
                    {editPermis === true ? (
                      <Link to={'/spacerum/edit/' + isi.id} className="bg-blue-500 font-medium text-sm p-1 px-[7px] rounded-full cursor-pointer">
                        <i className="fa-solid fa-pen-to-square text-white "></i>
                      </Link>
                    ) : (
                      <Link className="bg-red-500 font-medium text-sm p-1 px-[7px] rounded-full cursor-pointer">
                        <i className="fa-solid fa-flag text-white"></i>
                      </Link>
                    )}
                  </div>
                </div>
                <div className="text-xs">
                  <p>
                    Posted By <a className="font-bold">@usernamexxx</a>,{" "}
                    {/* <Timestamp
                      toDate={isi?.data?.timestamp?.toDate()}
                      className="font-bold"
                    /> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#F9FFFF] border-indigo-200 border-inset border m-2  rounded-xl p-5 ">
              <div className="flex gap-4 items-start">
                <div className="w-full px-2">
                  <div className="flex justify-center">
                    {imageUrls?.map((imageUrl, index) => (
                      <div className="max-w-92 m-4" key={index}>
                        <img src={imageUrl} alt={`Image ${index}`} className="w-72 rounded-xl" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm font-medium mb-2">
                    <p className="indent-[25px]">{isi?.data?.desc}</p>
                  </div>
                </div>
              </div>
            </div>
                {comments.map((comment) => (
                    <div key={comment.id}>
                    {/* Display comment content, user, timestamp, etc. */}
                    <CommentCard commentData={comment} />
                    {/* Add more comment information here */}
                    </div>
                ))}

                <CommentForm isiId={isi.id}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewContent;
