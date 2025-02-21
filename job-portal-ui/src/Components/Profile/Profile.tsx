import { ActionIcon, Divider, TagsInput, Textarea } from "@mantine/core";
import { IconDeviceFloppy, IconPencil, IconPlus } from "@tabler/icons-react";
import CertificationCard from "./CertificationCard";
import ExpCard from "./ExpCard";
import { useEffect, useState } from "react";
import fields from "../../Data/Profile";
import ExpInput from "./ExpInput";
import CertificationInput from "./CertificationInput";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../services/ProfileService";
import Info from "./Info";
import { setProfile } from "../../Slices/ProfileSlice";
import About from "./About";

const Profile = (props: any) => {
    const dispatch = useDispatch();
    const user = useSelector((state:any)=> state.user)
    const profileUser = useSelector((state:any) => state.profile)
    const [edit, setEdit] = useState([false, false, false, false, false])
    const handleEdit = (idx: any) => {
        const newEdit = [...edit]
        newEdit[idx] = !newEdit[idx]
        setEdit(newEdit)

        // console.log(edit)
    }

    useEffect(() => { 
        // console.log("profile user:")
        // console.log(profileUser)

        getProfile(user.id).then((data:any) => {
            dispatch(setProfile(data));
            // console.log(data)
        }).catch((error) => {
            console.log(error)
        });
    },[])
    const [about, setAbout] = useState('As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively.');

    const [skills, setSkills] = useState<string[]>(['React', 'Spring Boot', 'Java', 'Python', 'Node.js', 'MongoDB', 'Express', 'Django', 'PostgreSQL']);

    const [addExp, setAddExp] = useState(false);
    const [addCerti, setAddCerti] = useState(false);

    const select = fields;
    return (
        <>
            <div className="w-4/5 mx-auto">
                <div className="relative">
                    <img className="rounded-t-xl" src="/Profile/banner.jpg" alt="banner" />
                    <img className="rounded-full w-48 h-48 absolute top-1/3 left-3 border-black border-8" src="/avatar.png" alt="banner" />
                </div>
                <div className="px-3 mt-15">
                    <Info/>

                </div>
                <Divider my='xl' />
                    <About />
                <Divider my='xl' />
                <div>
                    <div className="text-2xl font-semibold mb-3 flex justify-between">
                        Skills
                        <ActionIcon size='lg' variant="subtle" onClick={() => handleEdit(2)} >
                            {
                                edit[2] ? <IconDeviceFloppy className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />
                            }
                        </ActionIcon>

                    </div>

                    {
                        edit[2] ? <TagsInput
                            value={skills}
                            onChange={setSkills}
                            placeholder="Add skill"
                            splitChars={[',', ' ', '|']}
                        /> : <div className="flex flex-wrap gap-2">
                            {
                                profileUser?.skills?.map((skill: any, id: any) => {
                                    return (
                                        <div key={id} className="text-white bg-black font-medium bg-opacity-10 rounded-3xl px-3 py-1">{skill}</div>
                                    )
                                })
                            }
                        </div>
                    }


                </div>
                <Divider my='xl' />
                <div>
                    <div className="text-2xl font-semibold mb-3 flex justify-between">
                        Experience
                        <div>
                            <ActionIcon size='lg' variant="subtle" onClick={() => setAddExp(true)} >
                                <IconPlus className="h-4/5 w-4/5" /> 
                            </ActionIcon>
                            <ActionIcon size='lg' variant="subtle" onClick={() => handleEdit(3)} >
                                {
                                    edit[3] ? <IconDeviceFloppy className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />
                                }
                            </ActionIcon>
                        </div>

                    </div>
                    {
                    profileUser?.experiences?.map((expItem: any, id: any) => <ExpCard key={id} {...expItem} edit={edit[3]} />)
                    }
                    {addExp && <ExpInput setEdit={setAddExp} add /> }
                    

                </div>

                <Divider my='xl' />
                <div>
                    <div className="text-2xl font-semibold mb-3 flex justify-between ">
                        Certifications
                        <div>
                            <ActionIcon size='lg' variant="subtle" onClick={() => setAddCerti(true)} >
                                <IconPlus className="h-4/5 w-4/5" /> 
                            </ActionIcon>
                            <ActionIcon size='lg' variant="subtle" onClick={() => handleEdit(4)} >
                                {
                                    edit[4] ? <IconDeviceFloppy className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />
                                }
                            </ActionIcon>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">

                        {
                            profileUser?.certifications?.map(
                                (certify: any, id: any) => <CertificationCard key={id} {...certify} edit={edit[4]} />
                            )
                        }
                        {
                           addCerti && <CertificationInput setEdit={setAddCerti} /> 
                        }
                    </div>

                </div>


            </div>

        </>
    )
}

export default Profile;