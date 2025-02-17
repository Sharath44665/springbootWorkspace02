import { Tabs } from "@mantine/core"
import { activeJobs } from "../../Data/PostedJob"
import PostedJobCard from "./PostedJobCard"

const PostedJobs = () => {
    return (
        <>
            <div className="w-1/6 ">

                <div className="text-2xl font-semibold mb-5 ">Jobs</div>
                <div>
                    <Tabs variant="pills" radius="md" defaultValue="active">
                    {/* [&_button[aria-selected='false']]: */}
                        <Tabs.List className="[&_button]:!text-lg">
                            <Tabs.Tab value="active">Active [4]</Tabs.Tab>
                            <Tabs.Tab value="draft">Draft (1) </Tabs.Tab>
                        </Tabs.List>

                        <Tabs.Panel value="active">
                            <div className="flex flex-col gap-5 mt-3">
                                {
                                    activeJobs.map((item, idx) => <PostedJobCard key={idx} {...item} />)
                                }
                            </div>
                        </Tabs.Panel>
                        <Tabs.Panel value="draft">Draft panel</Tabs.Panel>
                    </Tabs>
                </div>
            </div>
        </>
    )
}

export default PostedJobs