import { Link } from "react-router-dom"



const ForumCard = ({forums}) => {

    const data = forums.data;
    // const link = forums.uid;
    return (
        <Link to={forums.uid}>
                <div className="bg-[#F9FFFF] hover:border-indigo-200 hover:border-inset hover:border m-2  rounded-xl p-5 cursor-pointer">
                          <div className="flex gap-4 items-start">
                             <div className="border w-[64px] h-[64px] rounded-xl">
                                <img src="./logo512.png" alt="" className="w-[64px] h-[64px] w-cover" />
                             </div> 
                             <div className="w-full px-2    ">
                                <div className="flex justify-between items-center  mb-4 ">
                                    <div>
                                    <h1 className="font-medium text-xl">{data.title}</h1>

                                    </div>
                                    <div className="">
                                        <div className="bg-blue-500 font-medium text-sm p-1 px-2 rounded-full">
                                            <div className="text-gray-100">
                                                {data.kategori}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-sm font-medium mb-2">
                                    <p className="line-clamp-2">{forums.desc}</p>
                                </div>
                                <div className="text-xs">
                                    <p>Posted By <a className="font-bold">@username</a>, 1 jam yang lalu</p>
                                </div>
                             </div>
                          </div>
                </div>
        </Link>
    )
}

export default ForumCard