
import { useState } from "react";
import { dropdownData } from "../Data/JobsData";
import MultiInput from "./MutliInput";
import { RangeSlider } from "@mantine/core";

const SearchBar = () => {
    const [value, setValue] = useState([1, 10])
    return (
        <>
            <div className="flex justify-evenly gap-2 pt-4 px-2 mx-auto ">
                {
                    dropdownData.map((dropdownItem, idx) => {
                        return (
                            <div key={idx} className="w-1/5" >
                                <MultiInput {...dropdownItem} />
                            </div>
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


        </>
    )
}

export default SearchBar;