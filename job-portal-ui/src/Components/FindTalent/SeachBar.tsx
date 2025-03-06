import { Divider, Input, RangeSlider } from "@mantine/core";
import { searchFields } from "../../Data/TalentData";
import { useState } from "react";
import MultiInput from "../FindJobs/MutliInput";
import { IconUser } from "@tabler/icons-react";
import React from "react";
import { useDispatch } from "react-redux";
import { updateFilter } from "../../Slices/FilterSlice";

const SearchBar = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState<[number, number]> ([1, 50])
    const [name, setName] = useState('');
    const handleChange =(name:any, event:any) =>{
        if (name == "exp")
            dispatch(updateFilter({exp:event}))
        else {
            setName(event.target.value)
            dispatch(updateFilter({name:event.target.value}))
        }
    }
    return (
        <>
            <Divider my="xs" label="Find Talent:" labelPosition="left" />
            <div className="flex justify-evenly gap-2 pt-4 px-2 mx-auto ">

                <div className="flex items-center w-1/5 ">
                    <IconUser className="p-1" />
                    <Input variant="unstyled" defaultValue={name} onChange={(e)=>handleChange("name",e)} className="w-full" placeholder="Talent Name" />
                </div>

                <Divider orientation="vertical" />
                {
                    searchFields.map((dropdownItem, idx) => {
                        return (
                            <React.Fragment key={idx}>
                                <div key={idx} className="w-1/5" >
                                    <MultiInput key={idx} {...dropdownItem} />
                                </div>
                                <Divider orientation="vertical" />
                            </React.Fragment    >

                        )
                    })
                }

                <div className="w-1/5 ">
                    <div className="flex justify-between">
                        <div>Experience</div>
                        <div> {value[0]} Years - {value[1]} Years</div>
                    </div>

                    <RangeSlider onChangeEnd={(e)=>handleChange("exp",e)} minRange={1} min={0} max={50} step={1} defaultValue={[2, 10]} onChange={setValue} />

                </div>


            </div>
            <Divider my="md" />

        </>
    )
}

export default SearchBar;