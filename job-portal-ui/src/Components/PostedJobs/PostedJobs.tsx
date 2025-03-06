import { Tabs } from "@mantine/core"
import PostedJobCard from "./PostedJobCard"
import { useEffect, useState } from "react"

const PostedJobs = (props: any) => {
    // console.log(props)
    const [activeTab, setActiveTab] = useState<string | null>('ACTIVE')
    useEffect(()=>{
        setActiveTab(props.job?.jobStatus || 'ACTIVE')
        // console.log(activeTab)
    },[props.job])
    return (
        <>
            <div className="w-1/6 ">

                <div className="text-2xl font-semibold mb-5 ">Jobs</div>
                <div>
                    <Tabs variant="pills" radius="md" value={activeTab} onChange={setActiveTab}>
                        {/* [&_button[aria-selected='false']]: */}
                        <Tabs.List className="[&_button]:!text-lg">
                            <Tabs.Tab value="ACTIVE">Active [{props.jobList?.filter((job:any)=>job?.jobStatus == "ACTIVE").length}]</Tabs.Tab>
                            <Tabs.Tab value="DRAFT">Draft ({props.jobList?.filter((job:any)=>job?.jobStatus == "DRAFT").length}) </Tabs.Tab>
                            <Tabs.Tab value="CLOSED">Closed ({props.jobList?.filter((job:any)=>job?.jobStatus == "CLOSED").length}) </Tabs.Tab>
                        </Tabs.List>

                        {/* <Tabs.Panel value="ACTIVE">
                            <div className="flex flex-col gap-5 mt-3">
                                {
                                    activeJobs.map((item, idx) => <PostedJobCard key={idx} {...item} />)
                                }
                            </div> 
                        </Tabs.Panel>
                        <Tabs.Panel value="DRAFT">Draft panel</Tabs.Panel> */}
                    </Tabs>
                    <div className="flex flex-col gap-5 mt-3">
                        {
                           props.jobList?.filter((job:any)=> job?.jobStatus == activeTab ).map((item:any, idx:any)=> <PostedJobCard key={idx} {...item} />)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostedJobs