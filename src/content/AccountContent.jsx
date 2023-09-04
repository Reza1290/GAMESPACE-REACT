import { useEffect, useState } from "react"
import { auth, fireDb } from "../firebase";
import { updateProfile } from "firebase/auth";
import { addDoc, collection, doc, setDoc, getDoc } from "firebase/firestore";


const AccountContent = ({account}) => {

    const [namaTerm, setNama] = useState(account.displayName);
    const [emailTerm, setEmail] = useState(account.email);
    const [fNameTerm, setfName] = useState('');
    const [alamatTerm, setAlamat] = useState('');
    const [genderTerm, setGender] = useState('');

    const [telpTerm, setTelp] = useState('');
    const [userProfile, setProfile] = useState(null);
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
    
    const user = auth.currentUser;
    const fetchUsers = async() => {
        try{
            const docRef = doc(fireDb, 'users', user.uid)
            const getRef = await getDoc(docRef)
            // console.log(getRef) 
            if(getRef.exists){
                setProfile(getRef);
                
            }else{
                console.error("?")
            }
        }catch(e){
            // window.location.reload()
            console.error(e.message)
        }
    }

    const handleEditUser = async (event) => {

        event.preventDefault()
        try{
            const docRef = doc(fireDb, 'users', user.uid)
            const getRef = await getDoc(docRef)
            const data = {
                nama : fNameTerm,
                alamat : alamatTerm,
                gender : genderTerm,
            }

            console.log(getRef);
            if(getRef.exists){
                await setDoc(docRef, data, {merge : true})
                console.log('set');
            }else{
                await addDoc(collection(fireDb,'users'), data)
                console.log('setNew');
            }
        }catch(e){
            console.log("?");
        }
    }


    useEffect(() => {
      fetchUsers();

    }, [])
    
    
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
                                            <input type="tel"   value="Verifikasi Terlebih Dahulu" onChange={(e) => {setTelp(e.target.value)}} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="px-2 py-2 rounded-lg w-max  bg-slate-800 text-xs text-gray-100 focus:outline-none focus:ring focus:ring-violet-300"/>
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
                      <div className="bg-[#F9FFFF] m-2 rounded-xl p-10 mb-10">
                        <div className="flex flex-col w-[50%]">
                            <label htmlFor="nama">Nama Lengkap</label>
                            <input type="text" id="nama" onChange={(e) => {setfName(e.target.value)}} defaultValue={userProfile?.nama} className="my-2 rounded-lg border-inset border focus:outline-none focus:ring focus:ring-violet-300" required  />
                        </div>
                        <div className="flex flex-col w-[50%]">
                            <label htmlFor="nama">Gender</label>
                            {/* <input type="text" id="nama" defaultValue={userProfile?.nama} /> */}
                            <select name="gender"  id="" onSelect={(e) => {setGender(e.target.value)}} className="border-inset border my-4 rounded-lg" required>
                                <option >Laki- Laki</option>
                                <option>Perempuan</option>
                            </select>
                        </div>
                        <div className="flex flex-col w-[50%] my-2">
                            <label htmlFor="nama">Alamat</label>
                            <textarea type="text" id="nama" onChange={(e) => {setAlamat(e.target.value)}} defaultValue={userProfile?.alamat} className="border-inset border my-4 rounded-lg" required/>
                        </div>
                        <div>
                            <div className="flex justify-start">
                                        <div className="m-2">
                                            <button className="bg-blue-600 rounded-xl p-2 px-4  text-gray-100 font-medium" onClick={handleEditUser}>Edit</button>
                                        </div>
                                    </div>
                        </div>
                      </div>
                    
                    </div>
                    
                    <div className="hidden  mt-2 mb-2 text-sm text-sky-500 font-semibold dark:text-sky-400 lg:w-[25%]">
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