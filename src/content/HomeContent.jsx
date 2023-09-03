


const HomeContent = () =>{

    return (
        <>
         <div className="lg:pl-[19.5rem]">
                <div className="flex max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[1rem] mx-[1rem] xl:pr-16">
                    <div className="w-full">
                      <div className="bg-[#F9FFFF] m-2 rounded-xl p-10">
                          
                          <div>
                              <h1 className="font-bold text-2xl">Welcome! 
                                  
                              </h1>
                          </div>
                          
                          
                          <div className="select-none bg-[#4063FF] m-2 mt-10 p-4 rounded-xl text-white flex justify-around items-center">
                              <div className="w-full">
                                  <h1 className="text-2xl font-bold w-[60%]">
                                      Selamat Datang Di Website Komunitas GameSpace
                                  </h1>
                                  <p className="text-sm mt-5">
                                      Ikuti Guide Dibawah untuk menjelajahi fitur yang ada!
                                  </p>
                                  <div className="">
                                      <button className="bg-blue-300 p-2 px-3 ml-1 rounded-xl m-3">
                                          <p className="text-slate-900 font-medium  flex items-center gap-2">Tour Fitur <span className="text-2xl"> </span></p>
                                      </button>
                                  </div>
                              </div>
                              <div className="relative">
                                  <img className="w-64 " src="" alt=""/>
                              </div>
                          </div>
                      </div>

                    </div>
                    <div className="hidden lg:flex mt-2 mb-2 text-sm text-sky-500 font-semibold dark:text-sky-400 ">
                      <div className="ml-10">
                          <div className="bg-[#F9FFFF] rounded-xl p-10">
                              
                          </div>
                      </div>
                    </div>
                </div>
          </div>
        </>
    )
}

export default HomeContent