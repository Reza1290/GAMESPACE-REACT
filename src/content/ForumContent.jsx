import { collection, doc, getDocs } from "firebase/firestore";
import { fireDb } from "../firebase";
import { useEffect, useState } from "react";
import ForumCard from "../component/ForumCard";
import { Link } from "react-router-dom";






const ForumContent = () =>{
    const[listForum , setList ] = useState([]);

    const getData = async () => {
        const docRef = collection(fireDb, "gamerum");
        const docSnap = await getDocs(docRef);
        const dataArr = []; // Create an empty array to accumulate the data
        const single = [];
        docSnap.forEach(doc => {
            dataArr.push({ data: doc.data(), uid: doc.id }); // Push each document's data into the array
        });

        setList(dataArr);
    }

    useEffect(() => {
        getData();
    }, [])
    
    console.log(listForum)
   

    return (
        <>
         <div className="lg:pl-[19.5rem]">
                <div className="flex max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[1rem] mx-[1rem] xl:pr-16">
                    <div className="lg:w-[75%] ">
                      <div className="bg-[#F9FFFF] m-2 rounded-xl p-10 mb-10">
                          
                          <div>
                              <h1 className="font-bold text-lg text-center">
                                Sebelum Menggunakan Forum Pastikan Sudah Membaca Panduan Forum!  
                              </h1>
                          </div>
                          
                      </div>
                    {
                        listForum.map((content) => (
                            <ForumCard forums={content}/> 
                        ))
                    }
                    </div>
                    
                    <div className="hidden lg:flex mt-2 mb-2 text-sm text-sky-500 font-semibold dark:text-sky-400 lg:w-[25%]">
                      <div className="ml-10 w-full">
                          <div className="bg-[#F9FFFF] rounded-xl p-10 text-center ">
                              <div className="">
                                SPACE!TOOLS
                              </div>
                          <div className=" mt-5">
                            <Link to={'/spacerum/create'} className="flex items-center inline-flex gap-1">
                                <div className="rounded-xl border-2 p-2">
                                <i className="fa-solid fa-plus fa-2xl"></i>
                                </div>
                                <div className="rounded-xl bg-blue-600 text-gray-100 py-2 px-1">
                                    <p>Create Threads</p>
                                </div>
                                    
                                
                            </Link>
                          </div>
                          </div>
                      </div>
                    </div>
                </div>
          </div>
        </>
    )
}

export default ForumContent