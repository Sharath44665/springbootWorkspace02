
import { useState } from "react";
import { dropdownData } from "../../Data/JobsData";
import MultiInput from "./MutliInput";
import { Divider, RangeSlider } from "@mantine/core";
import Jobs from "./Jobs";
import React from "react";
import { useDispatch } from "react-redux";
import { updateFilter } from "../../Slices/FilterSlice";


const SearchBar = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState<[number, number]>([1, 300])
    const handleChange = (event: any) => {

        dispatch(updateFilter({ salary: event }))

    }
    return (
        <>
            <Divider my="xs" label="Filter Jobs:" labelPosition="left" />
            <div className="flex justify-evenly gap-2 pt-4 px-2 mx-auto ">
                {
                    dropdownData.map((dropdownItem, idx) => {
                        return (
                            <React.Fragment key={idx}>
                                <div key={idx} className="w-1/5" >
                                    <MultiInput {...dropdownItem} />
                                </div>
                                <Divider orientation="vertical" />
                            </React.Fragment>

                        )
                    })
                }

                <div className="w-1/5 ">
                    <div className="flex justify-between">
                        <div>Salary</div>
                        <div>&#8377;{value[0]} LPA - &#8377;{value[1]} LPA</div>
                    </div>

                    <RangeSlider value={value} onChange={setValue} onChangeEnd={handleChange} minRange={1} min={1} max={300} step={1}     defaultValue={[10, 30]}   />

                </div>


            </div>
            <Divider my="md" />
            <Jobs />
                

        </>
    )
}

export default SearchBar;