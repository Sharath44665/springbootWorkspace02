import { Avatar, Divider, FileInput, Overlay } from "@mantine/core";
import { IconEdit } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import Info from "./Info";
import { changeProfile } from "../../Slices/ProfileSlice";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Certificate from "./Certificate";
import { useHover } from "@mantine/hooks";
import { successNotification } from "../../services/NotificationService";
import { getBase64 } from "../../services/Utilities";

const Profile = () => {
    const dispatch = useDispatch(); 
    const profile = useSelector((state: any) => state.profile)
    

    const { hovered, ref } = useHover();

    const handleFileChange = async (image:any) => {
        let picture:any = await getBase64(image);
        let updatedProfile = {...profile, picture:picture.split(',')[1]}
        dispatch(changeProfile(updatedProfile))
        successNotification("success", "Profile picture updated successfully")

    } 
    // console.log(profile)
    return (
        <>
            <div className="w-4/5 mx-auto">
                <div className="relative">
                    <img className="rounded-t-xl" src="/Profile/banner.jpg" alt="banner" />
                    <div ref={ref} className="absolute flex items-center justify-center top-1/3 left-3" >
                        <Avatar className="!w-48 !h-48 border-black border-8" src={profile.picture?`data:image/jpeg;base64,${profile.picture}`: null} color="blue" alt="profile img" />
                        {
                            hovered && (
                                <Overlay
                                    gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)" className="!rounded-full"
                                    opacity={0.75}
                                />
                            ) 
                        }

                        {
                            hovered && <IconEdit className="absolute z-[300] w-10 h-10 "/>
                        }
                        {
                            hovered && <FileInput
                            onChange={handleFileChange}
                            className="absolute [&_*]:!rounded-full w-full z-[301] [&_*]:!h-full !h-full " 
                            variant="transparent"
                            size="lg"
                            radius="xl"
                            accept="image/png,image/jpeg" 
                          />
                        }
                    </div>
                    {/* <img className="rounded-full w-48 h-48 absolute top-1/3 left-3 border-black border-8" src="/avatar.png" alt="banner" /> */}
                </div>
                <div className="px-3 mt-15">
                    <Info />

                </div>
                <Divider my='xl' />
                <About />
                <Divider my='xl' />
                <Skills />
                <Divider my='xl' />
                <Experience />
                <Divider my='xl' />
                <Certificate />


            </div>

        </>
    )
}

export default Profile;