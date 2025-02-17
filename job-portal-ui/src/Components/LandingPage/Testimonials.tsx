
import { Avatar } from "@mantine/core";
import { Rating } from '@mantine/core';
import { testimonials } from "../../Data/Data";

const Testimonials = () => {
    return (
        <>
            <div className="text-5xl pt-8 text-center font-bold capitalize [&>span]:text-blue-700">what <span>users</span> says about us?</div>
            <div className='text-lg text-center mx-auto w-1/2 pb-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus totam, voluptate eum autem dolorem amet animi eaque. Ex consequatur dolorem dolore illum nisi aliquid tempore?</div>


            <div className="flex justify-evenly gap-3 px-2">
                {
                    testimonials.map((tmData, idx) => {
                        return (
                            <div key={idx} className="flex flex-col w-[25%] border border-gray-300 rounded-lg p-3">
                                <div className="flex gap-2 items-center">
                                    <Avatar className="!h-14 !w-14" src='avatar.png' alt="its me" />
                                    <div >
                                        <div className="text-lg font-semibold">{tmData.name}</div>
                                        <Rating value={tmData.rating} fractions={2} readOnly />

                                    </div>

                                </div>
                                <div>{tmData.testimonial}
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}

export default Testimonials;