import { Tabs } from "@mantine/core";
import { jobList } from "../Data/JobsData";
import Card from "./Card";

const JobHistory = () => {
    return (<>
        <div>
            <div className="text-2xl font-semibold mb-5 ">Job History</div>
            <Tabs className="[&_button]:!text-xl [&_button[data-active='true']]:!text-blue-600 " variant="outline" radius="md" defaultValue="applied">
                <Tabs.List>
                    <Tabs.Tab value="applied">Applied </Tabs.Tab>
                    <Tabs.Tab value="saved">Saved</Tabs.Tab>
                    <Tabs.Tab value="offered">Offered</Tabs.Tab>
                    <Tabs.Tab value="interviewing">Interviewing</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="applied">
                    <div className="flex flex-wrap justify-evenly pt-3 gap-4">
                        {
                            jobList.map((job, idx) => <Card key={idx} {...job} applied />)
                        }
                    </div>
                </Tabs.Panel>
                <Tabs.Panel value="saved">
                    <div className="flex flex-wrap justify-evenly pt-3 gap-4">
                        {
                            jobList.map((job, idx) => <Card key={idx} {...job} saved />)
                        }
                    </div>
                </Tabs.Panel>
                <Tabs.Panel value="offered">
                    <div className="flex flex-wrap justify-evenly pt-3 gap-4">
                        {
                            jobList.map((job, idx) => <Card key={idx} {...job} />)
                        }
                    </div>
                </Tabs.Panel>
                <Tabs.Panel value="interviewing">
                    <div className="flex flex-wrap justify-evenly pt-3 gap-4">
                        {
                            jobList.map((job, idx) => <Card key={idx} {...job} />)
                        }
                    </div>
                </Tabs.Panel>

            </Tabs>
        </div>
    </>)
}

export default JobHistory;