import { Link, div, useLocation } from "react-router-dom";



const SideBar = ({auth}) =>{
    const loc = useLocation();
    const active = loc.pathname;
    // console.log(active)

    // const menuSideBar = ['Homepage','Insight'] 
    return (
        <>
         <div className="hidden lg:block fixed z-20 inset-0 top-[1.8125rem] left-[max(0px,calc(50%-50rem))] right-auto w-[17rem] pb-10 pr-6 overflow-y-auto">
                  <div className="">
                      <div className="pl-4">
                          <h1 className="text-2xl font-bold flex items-center gap-2"> <img className="w-12" src={'./LogoGameSPACE.png'} alt=""/>GameSpace</h1>
                      </div>
                      <div className="mt-10 flex" >
                        {
                            active == '/'?
                            (<>
                                <div className="bg-[#4563EA] rounded-xl w-2 my-2">
                                    <p></p>
                                </div>
                                <Link to={'/'} className='mx-8 p-3 w-full flex bg-[#4563EA] rounded-xl justify-around items-center' >
                                <div>
                                    <i className='fa-solid fa-house text-white'></i>
                                </div>
                                <div className='text-gray-100 font-medium'>
                                    Homepage
                                </div>
                                </Link>
                            </>
                            ):
                            (
                            <Link to={'/'} className="mx-8 p-3 px-4 w-full flex hover:bg-slate-200 bg-[#F2F4FF] rounded-xl justify-start gap-5 items-center">
                              <div>
                                  <i className="fa-solid fa-house"></i>
                              </div>
                              <div className="text-gray-500 font-medium">
                                  Homepage
                              </div>
                            </Link>
                            )
                        }
                        </div>
                      <div className="mt-5 flex" >
                      {
                            active.startsWith('/spacerum')?
                            (<>
                                <div className="bg-[#4563EA] rounded-xl w-2 my-2">
                                    <p></p>
                                </div>
                                <Link to={'/spacerum'} className='mx-8 p-3 w-full flex bg-[#4563EA] rounded-xl justify-around items-center' >
                                <div>
                                    <i className='fa-brands fa-rocketchat text-white'></i>
                                </div>
                                <div className='text-gray-100 font-medium'>
                                    SpaceRum
                                </div>
                                </Link>
                            </>
                            ):
                            (
                            <>
                            <Link to={'/spacerum'} className="mx-8 p-3 px-4 w-full flex hover:bg-slate-200 bg-[#F2F4FF] rounded-xl justify-start gap-5 items-center">
                                <div>
                                    <i className="fa-brands fa-rocketchat"></i>
                                </div>
                                <div className="text-gray-500 font-medium">
                                    SpaceRum
                                </div>
                            </Link>
                            </>
                            )
                        }
                          
                      </div>
                      <div className="mt-5 flex" >
                      {
                            active == '/gamesight'?
                            (<>
                                <div className="bg-[#4563EA] rounded-xl w-2 my-2">
                                    <p></p>
                                </div>
                                <Link to={'/gamesight'} className='mx-8 p-3 w-full flex bg-[#4563EA] rounded-xl justify-around items-center' >
                                <div>
                                    <i className='fa-solid fa-lightbulb text-white'></i>
                                </div>
                                <div className='text-gray-100 font-medium'>
                                    GameSight
                                </div>
                                </Link>
                            </>
                            ):
                            (
                            <>
                            <Link to={'/gamesight'} className="mx-8 p-3 px-4 w-full flex hover:bg-slate-200 bg-[#F2F4FF] rounded-xl justify-start gap-5 items-center">
                                <div>
                                    <i className="fa-solid fa-lightbulb"></i>
                                </div>
                                <div className="text-gray-500 font-medium">
                                    GameSight
                                </div>
                            </Link>
                            </>
                            )
                        }
                          
                      </div>      
                      <div className="mt-5 flex" >
                      {
                            active == '/gamehub'?
                            (<>
                                <div className="bg-[#4563EA] rounded-xl w-2 my-2">
                                    <p></p>
                                </div>
                                <Link to={'/gamehub'} className='mx-8 p-3 w-full flex bg-[#4563EA] rounded-xl justify-around items-center' >
                                    <div>
                                    <i className="fa-solid fa-bullhorn text-white"></i>
                                    </div>
                                    <div className="text-gray-100 font-medium">
                                        StellarHub 
                                    </div>
                                </Link>
                            </>
                            ):
                            (
                            <>
                            <Link to={'/gamehub'} className="mx-8 p-3 px-4 w-full flex hover:bg-slate-200 bg-[#F2F4FF] rounded-xl justify-start gap-5 items-center">
                                    <div>
                                    <i className="fa-solid fa-bullhorn"></i>
                                    </div>
                                    <div className="text-gray-500 font-medium">
                                        StellarHub 
                                    </div>
                            </Link>
                            </>
                            )
                        }
                          
                      </div>      
                      
                      <div className="mt-5 flex" >
                      {
                            active == '/account'?
                            (<>
                                <div className="bg-[#4563EA] rounded-xl w-2 my-2">
                                    <p></p>
                                </div>
                                <Link to={'/account'} className='mx-8 p-3 w-full flex bg-[#4563EA] rounded-xl justify-around items-center' >
                                    <div>
                                    <i className="fa-solid fa-user text-white"></i>
                                    </div>
                                    <div className="text-gray-100 font-medium">
                                        Profiles
                                    </div>
                                </Link>
                            </>
                            ):
                            (
                            <>
                            <Link to={'/account'} className="mx-8 p-3 px-4 w-full flex hover:bg-slate-200 bg-[#F2F4FF] rounded-xl justify-start gap-5 items-center">
                                    <div>
                                    <i className="fa-solid fa-user"></i>
                                    </div>
                                    <div className="text-gray-500 font-medium">
                                        Profiles
                                    </div>
                            </Link>
                            </>
                            )
                        }
                          
                      </div>  

                      <div className="mt-5 flex">
                    
                        { 
                            auth == null
                            ? (
                                
                              <>
                              <div className="bg-[#F2F4FF] rounded-xl w-2 my-2">
                                  <p></p>
                              </div>
                              <Link to={'/login'} className="mx-8 p-3 px-4 w-full flex hover:bg-slate-200 bg-[#F2F4FF] rounded-xl justify-start gap-5 items-center" >
                                  <div>
                                  <i className="fa-solid fa-right-to-bracket"></i>
                                  </div>
                                  <div className="text-gray-500 font-medium">
                                      Sign In
                                  </div>
                              </Link>
                          </>
                          
                        ) : (
                              <>
                              <div className="bg-[#F2F4FF] rounded-xl w-2 my-2">
                                  <p></p>
                              </div>
                              <Link to={'/signout'} className="mx-8 p-3 px-4 w-full flex hover:bg-slate-200 bg-[#F2F4FF] rounded-xl justify-start gap-5 items-center">
                                  <div>
                                    <i className="fa-solid fa-right-to-bracket"></i>
                                  </div>
                                  <div className="text-gray-500 font-medium">
                                      Sign Out
                                  </div>
                              </Link>
                            </>
                        )
                        }
                      </div>
                </div>
          </div>
        </>
    )
}

export default SideBar;