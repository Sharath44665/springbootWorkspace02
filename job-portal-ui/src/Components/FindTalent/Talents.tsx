import Sort from "../FindJobs/Sort";
import TalentCard from "./TalentCard";
import { useEffect, useState } from "react";
import { getAllProfiles } from "../../services/ProfileService";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetFilter } from "../../Slices/FilterSlice";

const Talents = () => {
    const dispatch = useDispatch()
    const [talents, setTalents] = useState<any>([])
    const filter = useSelector((state: any) => state.filter)
    const sort = useSelector((state:any)=> state.sort)
    const [filteredTalent, setFilteredTalent] = useState<any>([])
    useEffect(() => {
        dispatch(resetFilter())
        getAllProfiles().then((res) => {
            setTalents(res)
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    useEffect(()=>{
        if(sort == "experience: low to high"){
            setTalents([...talents].sort((a:any, b:any)=> a.totalExp - b.totalExp ))
        }
        else if(sort == "experience: high to low"){
            setTalents([...talents].sort((a:any, b:any)=> b.totalExp - a.totalExp ))
        }
    },[sort])

    useEffect(() => {
        
        let filterTalent = talents;

        if (filter.name) filterTalent = filterTalent.filter((talent: any) => talent.name.toLowerCase().includes(filter.name.toLowerCase()))
        if (filter["Job Title"] && filter["Job Title"].length > 0) {
            filterTalent = filterTalent.filter((talent: any) => filter["Job Title"]?.some((title: any) => talent.jobTitle.toLowerCase().includes(title.toLowerCase()))) 
        }
        if (filter.Location && filter.Location.length >0){
            filterTalent = filterTalent.filter((talent: any) => filter.Location?.some((location: any) => talent.location.toLowerCase().includes(location.toLowerCase())))       
        }
        if(filter.Skills && filter.Skills.length > 0 ){
            filterTalent = filterTalent.filter((talent:any)=>filter.Skills?.some((skill:any)=>talent.skills?.some((talentSkill:any)=>talentSkill.toLowerCase().includes(skill.toLowerCase()))));        
        }
        if(filter.exp && filter.exp.length > 0){
            filterTalent = filterTalent.filter((talent:any)=> filter.exp[0] <= talent.totalExp && talent.totalExp <= filter.exp[1]);
        }
        setFilteredTalent(filterTalent);
        // console.log(filter) 
    }, [filter, talents])
    return (
        <>
            <div className="px-3 ">
                <div className="flex justify-between  pt-4">
                    <div className="capitalize text-2xl font-semibold">talents</div>
                    <div className="capitalize"><Sort /></div>
                </div>

                <div className="flex flex-wrap justify-evenly pt-4 gap-2">
                    {
                        filteredTalent?.length?filteredTalent.map((talent: any, idx: any) => {
                            return (<React.Fragment key={idx}>
                                <TalentCard key={idx} {...talent} />
                            </React.Fragment >)
                        }):<div className="font-semibold text-center text-red-500 text-4xl capitalize pb-[200px] ">No talents found</div>
                    }
                </div>
            </div>

        </>
    )
}

export default Talents;