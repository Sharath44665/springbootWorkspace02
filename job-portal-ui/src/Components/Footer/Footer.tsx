import { IconAsset, IconBrandLinkedin, IconBrandMeta, IconBrandX } from "@tabler/icons-react";
import { footerLinks } from "../../Data/Data";
import { useLocation } from "react-router";

const Footer = () => {
    const location = useLocation()
    return location.pathname !='/signup' && location.pathname !='/login' ?(
        <>
            <div className="mt-4 pb-2 justify-around flex">
                <div className="w-1/4 p-2 gap-3">
                    <div className='flex gap-2 items-center text-blue-500'>
                        <IconAsset className="h-5 w-5" stroke={2} />
                        <div className='text-xl font-semibold' >iJobs</div>
                    </div>
                    <div className="text-sm">
                        descriptin Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus numquam animi hic modi saepe laboriosam, inventore voluptate soluta asperiores recusandae nisi expedita ad?
                    </div>
                    <div className="flex [&>div]:text-black [&>div]:bg-blue-200 [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer gap-2">
                        <div><IconBrandMeta /></div>
                        <div><IconBrandX /></div>
                        <div><IconBrandLinkedin /> </div>
                    </div>

                </div>
                
                {
                    footerLinks.map((fLinks, idx) => {
                        return (
                            <div key={idx}>
                                <div className="text-lg font-semibold">{fLinks.title}</div>
                                {
                                    fLinks.links.map((linkname, id) => 
                                    <div key={id} className="mb-1 hover:translate-x-2 cursor-pointer">{linkname}</div>)
                                }
                            </div>
                        )
                    })
                }


            </div>
        </>
    ):(<></>)
}


export default Footer;