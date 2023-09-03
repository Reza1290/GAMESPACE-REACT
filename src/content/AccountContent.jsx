import { useState } from "react"
import { auth } from "../firebase";
import { updateProfile } from "firebase/auth";


const AccountContent = ({account}) => {

    const [namaTerm, setNama] = useState(account.displayName);
    const [emailTerm, setEmail] = useState(account.email);
    const [telpTerm, setTelp] = useState('');

    const handleEdit = (event) =>{
        event.preventDefault()
        // console.log(auth.currentUser)
        try{
            updateProfile(auth.currentUser, {
                displayName: namaTerm,
                email : emailTerm,
                // phoneNumber : telpTerm
            }).then(() => console.log('updated!'))
        }catch(e){
            console.log(e.message)
        }
    }

    return (
        <div className="lg:pl-[19.5rem]">
                <div className="flex max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[1rem] mx-[1rem] xl:pr-16">
                    <div className="xl:w-[75%] w-full ">
                      <div className="bg-[#F9FFFF] m-2 rounded-xl p-10 mb-10">
                          <div className="flex flex-col sm:flex-row justify-between">
                                    <div className="flex gap-3 ">
                                    <div className="max-w-[132px] h-[132px] bg-blue-600 rounded-xl">
                                        <img src="./logo512.png" alt="" className="min-w-[132px]"/>
                                    </div>
                                    <div className="flex flex-col  justify-between my-2 max-md:w-max ">
                                        <div className="flex flex-row items-center">
                                            <div>
                                                <h1 className="font-bold text-lg">
                                                    <input type="text" defaultValue={account.displayName} onChange={(e) => {setNama(e.target.value)}}  className="focus:outline-none focus:ring focus:ring-violet-300 rounded-lg"/>
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="" >
                                            <input type="text"  defaultValue={account.email} onChange={(e) => {setEmail(e.target.value)}} className="px-2 py-2 rounded-lg w-max  bg-slate-800 text-xs text-gray-100 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"/>
                                        </div>
                                        <div className="" >
                                            <input type="tel"  defaultValue={account.phoneNumber} value="gada uang" onChange={(e) => {setTelp(e.target.value)}} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="px-2 py-2 rounded-lg w-max  bg-slate-800 text-xs text-gray-100 focus:outline-none focus:ring focus:ring-violet-300"/>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="m-2">
                                            <button className="bg-blue-600 rounded-xl px-10 text-gray-100 font-medium" onClick={handleEdit}>Edit</button>
                                        </div>
                                    </div>
                            </div>
                      </div>
                    
                    </div>
                    
                    <div className="hidden xl:flex mt-2 mb-2 text-sm text-sky-500 font-semibold dark:text-sky-400 lg:w-[25%]">
                      <div className="ml-10 ">
                          <div className="bg-[#F9FFFF] rounded-xl p-10">
                              FILTER
                          </div>
                      </div>
                    </div>
                </div>
          </div>
    )
}

export default AccountContent