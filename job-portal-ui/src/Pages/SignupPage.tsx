import { IconAsset } from "@tabler/icons-react";
import { Link, useLocation } from "react-router";
import Signup from "../Components/SignupLogin/Signup";
import Login from "../Components/SignupLogin/Login";

const SignupPage = () => {
    const location = useLocation();
    return (
        <>
            <div className="overflow-hidden">

                <div className={`w-[100vw] h-[100vh] transition-all ease-in-out duration-1000 flex [&>*]:flex-shrink-0 ${location.pathname==='/signup'?'-translate-x-1/2' : 'translate-x-0'} `}>
                    <Login />
                    <div className={`w-1/2 h-full bg-[#2c2c2e] transition-all ease-in-out duration-500 ${location.pathname === '/signup'?'rounded-r-[200px]':'rounded-l-[200px]'}  flex flex-col items-center justify-center gap-5`}>
                        <div className='flex gap-2 items-center text-blue-500'>
                            <IconAsset className="h-16 w-16" stroke={2} />
                            <div className='text-3xl font-semibold' ><Link to="/">iJobs</Link></div>
                        </div>
                        <div className="capitalize text-2xl font-semibold text-white">find the job made for you</div>
                    </div>
                    <Signup />
                </div>
            </div>
        </>
    )
}

export default SignupPage;