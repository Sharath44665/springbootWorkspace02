import { Avatar } from "@mantine/core";
import { work } from "../../Data/Data";

const Working = () => {
    return (
        <>
            <div className="text-5xl pt-8 text-center font-bold capitalize [&>span]:text-blue-700">How it <span>Works?</span></div>
            <div className='text-lg text-center mx-auto w-1/2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus totam, voluptate eum autem dolorem amet animi eaque. Ex consequatur dolorem dolore illum nisi aliquid tempore?</div>

            <div className=" flex gap-4 justify-center items-center">
                <div className="relative">
                    <img className="w-[30rem]" src="/Working/Girl.png" alt="girl" />
                    <div className="flex flex-col items-center border border-gray-300 w-36 top-[16%] right-0 absolute backdrop-blur-md">
                        <Avatar className="!h-16 !w-16" src="avatar1.png" alt="it's me" />
                        <div className="text-sm font-semibold text-center">Complete your profile</div>
                        <div className="text-xs">70% Completed</div>
                    </div>
                </div>
                <div>
                    {
                        work.map((workData, idx) => {
                            return (
                                <div className="flex py-2 items-center" key={idx}>
                                    <div className="p-2 bg-gray-300 rounded-full">
                                        <img className="h-12 w-12" src={`/Working/${workData.name}.png`} alt="Build Your Resume" />
                                    </div>
                                    <div className="p-2">
                                        <div className="text-xl font-semibold">{workData.name}</div>
                                        <div>{workData.desc}</div>
                                    </div>

                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </>

    )
}

export default Working;