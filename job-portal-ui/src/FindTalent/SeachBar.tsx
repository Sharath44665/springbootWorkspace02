import { Divider, Input, RangeSlider } from "@mantine/core";
import { searchFields } from "../Data/TalentData";
import { useState } from "react";
import MultiInput from "../FindJobs/MutliInput";
import { IconUser } from "@tabler/icons-react";

const SearchBar = () => {
    const [value, setValue] = useState([1, 10])
    return (
        <>
            <Divider my="xs" label="Find Talent:" labelPosition="left" />
            <div className="flex justify-evenly gap-2 pt-4 px-2 mx-auto ">

                <div className="flex items-center w-1/5 ">
                    <IconUser className="p-1" />
                    <Input variant="unstyled" className="w-full" placeholder="Talent Name" />
                </div>

                <Divider orientation="vertical" />
                {
                    searchFields.map((dropdownItem, idx) => {
                        return (
                            <>
                                <div key={idx} className="w-1/5" >
                                    <MultiInput key={idx} {...dropdownItem} />
                                </div>
                                <Divider orientation="vertical" />
                            </>

                        )
                    })
                }

                <div className="w-1/5 ">
                    <div className="flex justify-between">
                        <div>Salary</div>
                        <div>&#8377;{value[0]} LPA - &#8377;{value[1]} LPA</div>
                    </div>

                    <RangeSlider minRange={1} min={1} max={100} step={1} defaultValue={[1, 10]} onChange={setValue} />

                </div>


            </div>
            <Divider my="md" />

        </>
    )
}

export default SearchBar;