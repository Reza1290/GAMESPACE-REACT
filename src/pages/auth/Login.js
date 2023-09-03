
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDb } from '../../firebase';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";  
import useAuth from "../../hooks/useAuth";
import { addDoc, collection, doc, getDocs, query, where } from "firebase/firestore";


const Login = () => {
    const navigate = useNavigate();
    
    const { isLogin, setAuth } = useAuth();

    const [emailTerm, setEmailTerm] = useState('');
    const [passTerm, setPassTerm] = useState('');
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    
    const getRoles = async (email) => {
        const q = query(collection(fireDb, "users"), where("email", "==", email))
        const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    }
    
    
    
    
    
    const handleSubmit = async (event) => {
        event.preventDefault();
                
        // console.log(emailTerm);
        // try{
            
            // const querySnapshot = await getDocs(q);
            // querySnapshot.forEach((doc) => {
            // // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            // });
        signInWithEmailAndPassword(auth, emailTerm, passTerm).then(
            (userCreds) => {
                    const user = userCreds.user;
                    const accessToken = user?.accessToken;
                    
                    user.roles = ['user']
                    // console.log(user);
                    // try{
                    //     const docRef =  addDoc(collection(fireDb, "users"), {
                    //         user_id : user.uid,
                    //         roles : 'user'
                    //     });
                    // }catch (e){
                    //     console.log("err" , e);
                    // }

                    setAuth({user, accessToken})
                    navigate('/')
            }
        ).catch((error) => {
                const dataError = error.message;
                console.log(dataError);
        })

        
    }
    
    useEffect(() => {
        if(typeof(isLogin.accessToken) != 'undefined') navigate('/');
    }, [])

    return(
        <section className="grid lg:grid-cols-2 w-screen bg-no-repeat md:bg-cover bg-none bg-center divide-x">
        <div className="flex lg:mx-0 mx-10 justify-center items-center h-full lg:h-screen order-last lg:order-first">
            <div className="flex flex-col">
                <div className="md:mx-20">
                    <img src="" alt=""/>
                </div>
                <div className="md:m-20 p-2 flex flex-col drop-shadow-lg">
                    
                </div>
            </div>
        </div>
        <div className="flex flex-col p-10 lg:h-screen lg:order-last order-first">
            <div className="w-full  lg:my-0 my-20 ">
                <div className="w-max">
                    <a href="./" className="flex items-center gap-4 hover:underline text-gray-800 text-xl font-medium"><i className="fa-solid fa-arrow-left text-white" ></i> Kembali</a>
                </div>
            </div>
            <div  className="w-full h-full flex justify-center items-center ">
                <div id="login" className="bg-white rounded-lg p-5 lg:w-6/12 bg-[#FDFEFF]">
                    <div className="mb-5">
                        <h5 className="text-5xl font-bold text-center my-3">Login</h5>
                        
                    </div>
                    <div className="">
                        <form action="" method="post">
                            
                            <div className="flex flex-col ">
                                <label htmlFor="email" className="peer-focus/email:text-white text-sm peer-focus:outline-black font-light relative -mb-3 ml-2 flex">
                                    <div className="bg-white rounded-sm px-2 text-shadow-black font-medium">Email</div>
                                </label>
                                <input name="email" autoComplete="email" className="bg-gray-100 rounded-md h-12 px-2 peer/email pt-2" type="email" id="email" onChange={(e) => {setEmailTerm(e.target.value)}} required/>
                            </div>
                            <div className="flex flex-col mt-5">
                                <label htmlFor="password" className="peer-focus/password:text-white text-sm peer-focus:outline-black font-light relative -mb-3 ml-2 flex">
                                    <div className="bg-white rounded-sm px-2 text-shadow-black font-medium">Password</div>
                                </label>
                                <input name="password" autoComplete="current-password" className="bg-gray-100 rounded-md h-12 px-2 peer/password pt-2" type="password" id="password" onChange={(e) => {setPassTerm(e.target.value)}} required />
                            </div>

                            <div className="flex justify-between mt-5 items-center">
                                <div className="flex items-center text-xs">
                                    <input name="remember" type="checkbox" id="remember" className="m-1"/>
                                    <label htmlFor="remember">Remember</label>
                                </div>
                                <div className="text-xs text-blue-700 hover:text-gray-900 cursor-pointer">
                                    <span><a href="./register" className="">Daftar</a></span>
                                </div>
                            </div>
                        
                            <div className="text-center bg-blue-700 text-white rounded-lg mt-5 py-2 cursor">
                                <button name="log" type="submit" className="" onClick={handleSubmit}>Sign In</button>
                            </div>

                            <div>
                                <div className="text-center my-5">or</div>
                            </div>

                            <div className="text-center border rounded-xl text-gray-800 rounded-lg mt-2 py-2 cursor">
                                <button name="log" type="submit" className="">Using Google</button>
                            </div>
                            
                        </form>
                        
                    </div>
                </div>
                
            </div>
        </div>
    </section>
        
    )
}


export default Login;
