import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { fireDb } from "../../firebase";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import ViewContent from "../../content/ViewContent";

const ViewPage = () => {
  const loc = useLocation();
  const nav = useNavigate();
  const [content, setContent] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state
  const pathname = loc.pathname;
  const parts = pathname.split('/');
  const view = parts[parts.length - 1];

  const fetchData = async () => {
    const docRef = doc(fireDb, 'gamerum', view);
    try {
      const docSnap = await getDoc(docRef);
      const docData = docSnap.data();

      if (!docData) {
        throw new Error('Document not found');
      }

      const dataArr = { data: docData, id: docSnap.id };
      setContent(dataArr);
    } catch (e) {
      console.error(e.message);
      setError(e.message); // Set the error state
      // nav(-1); // Consider navigating to an error page or displaying an error message
    } finally {
      setIsLoading(false); // Set loading state to false
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Render loading state if data is still being fetched
  if (isLoading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or component
  }

  // Render error message if there's an error
  if (error) {
    return <div>Error: {error}</div>; // Display a meaningful error message
  }
  
  return (
    <>
      <ViewContent isi={content} />
    </>
  )
}

export default ViewPage;
