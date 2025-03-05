import { Badge, Tabs } from "@mantine/core";
import JobDesc from "../JobDesc/JobDesc";
import TalentCard from "../FindTalent/TalentCard";

const PostedJobDesc = (props: any) => {
    return (
        <>
            <div className="w-3/4">
                {props.jobTitle?<>
                <div className="text-2xl font-semibold items-center">{props.jobTitle} <Badge ml='sm' variant="light" color="blue">{props.jobStatus}</Badge></div>
                <div className="font-medium mb-4 items-center">{props.location}</div>
                <div className="px-1">
                    <Tabs className="[&_button]:!text-xl [&_button[data-active='true']]:!text-blue-600 " variant="outline" radius="md" defaultValue="overview">
                        <Tabs.List>
                            <Tabs.Tab value="overview">Overview </Tabs.Tab>
                            <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                            <Tabs.Tab value="invited">Invited</Tabs.Tab>
                            {/* <Tabs.Tab value="interviewing   ">Interviewing</Tabs.Tab> */}
                            <Tabs.Tab value="offered">Offered</Tabs.Tab>
                            <Tabs.Tab value="rejected">Rejected </Tabs.Tab>
                        </Tabs.List>

                        <Tabs.Panel value="overview" className="[&>div]:w-full ">
                            <JobDesc {...props} edit />
                        </Tabs.Panel>
                        <Tabs.Panel value="applicants">
                            <div className="flex flex-wrap justify-evenly pt-4 gap-4">
                                {
                                    props.applicants?.filter((x: any) => x.applicationStatus == "APPLIED").map((talent: any, idx: any) =>

                                        <TalentCard key={idx} {...talent} posted />

                                    )
                                }
                            </div>
                        </Tabs.Panel>
                        <Tabs.Panel value="invited">
                            <div className="flex flex-wrap justify-evenly pt-4 gap-4">
                                {
                                    props.applicants?.filter((x: any) => x.applicationStatus == "INTERVIEWING").map((talent: any, idx: any) =>

                                        <TalentCard key={idx} {...talent} invited />

                                    )
                                }
                            </div>"
                        </Tabs.Panel>
                        <Tabs.Panel value="offered">
                            <div className="flex flex-wrap justify-evenly pt-4 gap-4">
                                {
                                    props.applicants?.filter((x: any) => x.applicationStatus == "OFFERED").map((talent: any, idx: any) =>

                                        <TalentCard key={idx} {...talent} offered />

                                    )
                                }
                            </div>
                        </Tabs.Panel>

                        <Tabs.Panel value="rejected">
                            <div className="flex flex-wrap justify-evenly pt-4 gap-4">
                                {
                                    props.applicants?.filter((x: any) => x.applicationStatus == "REJECTED").map((talent: any, idx: any) =>

                                        <TalentCard key={idx} {...talent} offered />

                                    )
                                }
                            </div>
                        </Tabs.Panel>

                        {/* <Tabs.Panel value="interviewing">
                            <div className="flex flex-wrap justify-evenly pt-4 gap-4">
                                    {
                                        props.applicants?.filter((x:any) => x.applicationStatus == "INTERVIEWING" ).map((talent:any, idx:any     ) =>

                                        <TalentCard key={idx} {...talent} invited />

                                        )
                                    }
                                </div>
                            </Tabs.Panel> */}

                    </Tabs>
                </div>
                </>: <div className="text-2xl font-semibold min-h-[70vh] flex justify-center items-center "> No jobs Selected</div>
                }
            </div>
        </>
    )
}

export default PostedJobDesc;