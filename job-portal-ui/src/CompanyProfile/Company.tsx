import { Avatar, Divider, Tabs } from "@mantine/core";
import { IconCurrentLocation } from "@tabler/icons-react";
import AboutComp from "./AboutComp";
import CompanyJobs from "./CompanyJobs";
import CompanyEmployees from "./CompanyEmployees";

const Company = () => {
    return (
        <>
            <div className="w-3/4">

                <div className="relative">
                    <img className="rounded-t-xl" src="/Profile/banner.jpg" alt="banner" />
                    <img className="rounded-xl w-36 h-36 absolute top-2/4 p-2 left-3 bg-black border-black border-8" src="/Icons/Google.png" alt="banner" />
                </div>
                <div className="px-3 mt-12">
                    <div className="text-3xl font-semibold flex justify-between">
                        Google
                        <Avatar.Group>
                            <Avatar src="avatar.png" />
                            <Avatar src="avatar1.png" />
                            <Avatar src="avatar2.png" />
                            <Avatar>10K+</Avatar>
                        </Avatar.Group>
                    </div>

                    <div className="flex text-gray-400 gap-1 items-center text-lg"><IconCurrentLocation /> bengaluru </div>
                </div>
                
                <Divider my='xl' />
                <div>
                    <Tabs className="[&_button]:!text-xl [&_button[data-active='true']]:!text-blue-600 " variant="outline" radius="md" defaultValue="about">
                        <Tabs.List>
                            <Tabs.Tab value="about">About </Tabs.Tab>
                            <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
                            <Tabs.Tab value="employees">Employees</Tabs.Tab>
                        </Tabs.List>

                        <Tabs.Panel value="about">
                            <AboutComp />
                        </Tabs.Panel>
                        <Tabs.Panel value="jobs">
                            <CompanyJobs/>
                        </Tabs.Panel>
                        <Tabs.Panel value="employees">
                            <CompanyEmployees />
                        </Tabs.Panel>

                    </Tabs>
                </div>
            </div>


        </>
    )
}

export default Company;