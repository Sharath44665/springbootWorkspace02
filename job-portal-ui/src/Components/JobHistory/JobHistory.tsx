import { Tabs } from "@mantine/core";
import Card from "./Card";
import { useEffect, useState } from "react";
import { getAllJobs } from "../../services/JobService";
import { useSelector } from "react-redux";

const JobHistory = () => {
    const profile =  useSelector((state:any) => state.profile)
    const user = useSelector((state:any) => state.user)
    const [activeTab, setActiveTab] = useState<any>('APPLIED');
    const [jobList, setJobList] = useState<any>([])
    const [showList, setShowList] = useState<any>([])

    useEffect(()=> {
        getAllJobs().then((res)=>{
            setJobList(res)
            setShowList(res.filter((job:any)=>{
                let found = false;
                job.applicants?.forEach((applicant:any)=>{
                    if(applicant.applicantId == user.id && applicant.applicationStatus == "APPLIED"){
                        found = true;
                    }
                })
                return found;
            }));
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    const handleTabChange = (value:any | null) =>{
        setActiveTab(value)

        if (value === "SAVED"){
            setShowList(jobList.filter((job:any)=> profile.savedJobs?.includes(job.id)))
        }
        else{
            setShowList(jobList.filter((job:any)=>{
                let found = false;
                job.applicants?.forEach((applicant:any)=>{
                    if(applicant.applicantId == user.id && applicant.applicationStatus == value){
                        found = true;
                    }
                })
                return found;
            }));
        }
    }
    return (<>
        <div>
            <div className="text-2xl font-semibold mb-5 ">Job History</div>
            <Tabs value={activeTab} onChange={handleTabChange} className="[&_button]:!text-xl [&_button[data-active='true']]:!text-blue-600 " variant="outline" radius="md" >
                <Tabs.List>
                    <Tabs.Tab value="APPLIED">Applied </Tabs.Tab>
                    <Tabs.Tab value="SAVED">Saved</Tabs.Tab>
                    <Tabs.Tab value="OFFERED">Offered</Tabs.Tab>
                    <Tabs.Tab value="INTERVIEWING">Interviewing</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value={activeTab}>
                    <div className="flex flex-wrap justify-evenly pt-3 gap-4">
                        {
                            showList.map((job:any, idx:any) => <Card key={idx} {...job} {...{[activeTab.toLowerCase()]:true}} />)
                        }
                    </div>
                </Tabs.Panel>
                

            </Tabs>
        </div>
    </>)
}

export default JobHistory;