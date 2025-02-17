import { Badge, Tabs } from "@mantine/core";
import JobDesc from "../JobDesc/JobDesc";
import { talents } from "../../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const PostedJobDesc = () => {
    return (
        <>
            <div className="w-3/4">
                <div className="text-2xl font-semibold items-center">Software Engineer <Badge ml='sm' variant="light" color="blue">Active</Badge></div>
                <div className="font-medium mb-4 items-center">Bengaluru, India</div>
                <div className="px-1">
                    <Tabs className="[&_button]:!text-xl [&_button[data-active='true']]:!text-blue-600 " variant="outline" radius="md" defaultValue="overview">
                        <Tabs.List>
                            <Tabs.Tab value="overview">Overview </Tabs.Tab>
                            <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                            <Tabs.Tab value="invited">Invited</Tabs.Tab>
                        </Tabs.List>

                        <Tabs.Panel value="overview" className="[&>div]:w-full ">
                            <JobDesc edit />
                        </Tabs.Panel>
                        <Tabs.Panel value="applicants">
                            <div className="flex flex-wrap justify-evenly pt-4 gap-4">
                                {
                                    talents.map((talent, idx) =>

                                        idx < 6 && <TalentCard key={idx} {...talent} posted />

                                    )
                                }
                            </div>
                        </Tabs.Panel>
                        <Tabs.Panel value="invited">
                        <div className="flex flex-wrap justify-evenly pt-4 gap-4">
                                {
                                    talents.map((talent, idx) =>

                                        idx < 6 && <TalentCard key={idx} {...talent} invited />

                                    )
                                }
                            </div>
                        </Tabs.Panel>

                    </Tabs>
                </div>
            </div>
        </>
    )
}

export default PostedJobDesc;