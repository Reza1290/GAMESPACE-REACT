import { collection, query, where, getDocs } from 'firebase/firestore'; // Import necessary Firestore functions
import { fireDb } from '../firebase';

// Assuming you have access to your Firestore instance as 'fireDb'
const getUserDataByUid = async (uid) => {
  try {
    // Create a reference to the "users" collection and query for the document with the matching UID
    const userCollectionRef = collection(fireDb , 'users');
    const userQuery = query(userCollectionRef, where('uid', '==', uid));

    // Get the documents that match the query
    const querySnapshot = await getDocs(userQuery);

    // Check if there are matching documents
    if (querySnapshot.size === 0) {
      throw new Error('User not found'); // Handle the case where the user is not found
    }

    // Since UID is usually unique, there should be only one document in the query result
    const userData = querySnapshot.docs[0].data();

    // Return the user data
    return userData;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; // Rethrow the error to handle it in the calling code
  }
};

export default getUserDataByUid;