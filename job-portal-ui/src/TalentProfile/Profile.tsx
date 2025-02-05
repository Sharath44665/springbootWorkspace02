import { Button, Divider } from "@mantine/core";
import { IconBriefcase, IconCurrentLocation } from "@tabler/icons-react";
import ExpCard from "./ExpCard";
import CertificationCard from "./CertificationCard";
import RecommendTalent from "./RecommendTalent";

const Profile = (props: any) => {
    return (
        <>
            <div className="w-2/3">
                <div className="relative">
                    <img className="rounded-t-xl" src="/Profile/banner.jpg" alt="banner" />
                    <img className="rounded-full w-48 h-48 absolute top-1/3 left-3 border-black border-8" src="/avatar.png" alt="banner" />
                </div>
                <div className="px-3 mt-15">
                    <div className="text-3xl font-semibold flex justify-between">{props.name}<Button variant="filled" >Message</Button></div>
                    <div className="flex text-xl gap-1 items-center "> <IconBriefcase /> {props.role} &middot; {props.company}</div>
                    <div className="flex text-gray-400 gap-1 items-center text-lg"><IconCurrentLocation /> {props.location}</div>
                </div>
                <Divider my='xl' />
                <div>
                    <div className="text-2xl font-semibold mb-3">About</div>
                    <div className="text-justify">{props.about}</div>
                </div>
                <Divider my='xl' />
                <div>
                    <div className="text-2xl font-semibold mb-3">Skills</div>
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
                    <div className="text-2xl font-semibold mb-3">Experience</div>
                    {props.experience.map((expItem: any, id: any) => <ExpCard key={id} {...expItem} />)}

                </div>

                <Divider my='xl' />
                <div>
                    <div className="text-2xl font-semibold mb-3 ">Certifications</div>
                    <div className="flex flex-col gap-4">

                    {
                        props.certifications.map(
                            (certify: any, id: any) => <CertificationCard key={id} {...certify} />
                        )
                    }
                    </div>

                </div>


            </div>
            <div className="w-1/3">
                <RecommendTalent/>
            </div>
        </>
    )
}

export default Profile;