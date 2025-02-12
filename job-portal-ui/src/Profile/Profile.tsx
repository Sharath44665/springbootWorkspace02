import { ActionIcon, Button, Divider, Textarea } from "@mantine/core";
import { IconBriefcase, IconCurrentLocation, IconDeviceFloppy, IconPencil } from "@tabler/icons-react";
import CertificationCard from "./CertificationCard";
import ExpCard from "./ExpCard";
import { useState } from "react";
import SelectInput from "./SelectInput";
import fields from "../Data/Profile";

const Profile = (props: any) => {
    const [edit, setEdit] = useState([false, false, false, false, false])
    const handleEdit = (idx: any) => {
        const newEdit = [...edit]
        newEdit[idx] = !newEdit[idx]
        setEdit(newEdit)

        console.log(edit)
    }
    const [about, setAbout] = useState('As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively.');

    const select = fields;
    return (
        <>
            <div className="w-4/5 mx-auto">
                <div className="relative">
                    <img className="rounded-t-xl" src="/Profile/banner.jpg" alt="banner" />
                    <img className="rounded-full w-48 h-48 absolute top-1/3 left-3 border-black border-8" src="/avatar.png" alt="banner" />
                </div>
                <div className="px-3 mt-15">
                    <div className="text-3xl font-semibold flex justify-between">{props.name}<ActionIcon size='lg' variant="subtle" onClick={() => handleEdit(0)} >
                        {
                            edit[0] ? <IconDeviceFloppy className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />
                        }
                    </ActionIcon></div>
                    {
                        edit[0] ? <>
                            <div className="flex gap-10 [&>*]:w-1/2 ">
                                <SelectInput {...select[0]} />
                                <SelectInput {...select[1]} />

                            </div>
                            <SelectInput {...select[2]} />
                        </> : <>
                            <div className="flex text-xl gap-1 items-center ">
                                <IconBriefcase /> {props.role} &middot; {props.company}
                            </div>
                            <div className="flex text-gray-400 gap-1 items-center text-lg"><IconCurrentLocation /> {props.location}</div>
                        </>
                    }


                </div>
                <Divider my='xl' />
                <div>
                    <div className="text-2xl font-semibold mb-3 flex justify-between">
                        About
                        <ActionIcon size='lg' variant="subtle" onClick={() => handleEdit(1)} >
                            {
                                edit[1] ? <IconDeviceFloppy className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />
                            }
                        </ActionIcon>
                    </div>
                    {
                        edit[1] ? <Textarea
                            label="description"
                            value={about}
                            autosize
                            minRows={3}
                            withAsterisk
                            placeholder="Description (Describe yourself)"
                            onChange={(event) => setAbout(event.currentTarget.value)}
                        /> : <div className="text-justify">{props.about}</div>
                    }


                </div>
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
                    <div className="flex flex-wrap gap-2">
                        {
                            props.skills.map((skill: any, id: any) => {
                                return (
                                    <div key={id} className="text-white bg-black font-medium bg-opacity-10 rounded-3xl px-3 py-1">{skill}</div>
                                )
                            })
                        }
                    </div>
                </div>
                <Divider my='xl' />
                <div>
                    <div className="text-2xl font-semibold mb-3 flex justify-between">
                        Experience
                        <ActionIcon size='lg' variant="subtle" onClick={() => handleEdit(3)} >
                            {
                                edit[3] ? <IconDeviceFloppy className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />
                            }
                        </ActionIcon>
                    </div>
                    {props.experience.map((expItem: any, id: any) => <ExpCard key={id} {...expItem} />)}

                </div>

                <Divider my='xl' />
                <div>
                    <div className="text-2xl font-semibold mb-3 flex justify-between ">
                        Certifications
                        <ActionIcon size='lg' variant="subtle" onClick={() => handleEdit(4)} >
                            {
                                edit[4] ? <IconDeviceFloppy className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />
                            }
                        </ActionIcon>
                    </div>
                    <div className="flex flex-col gap-4">

                        {
                            props.certifications.map(
                                (certify: any, id: any) => <CertificationCard key={id} {...certify} />
                            )
                        }
                    </div>

                </div>


            </div>

        </>
    )
}

export default Profile;