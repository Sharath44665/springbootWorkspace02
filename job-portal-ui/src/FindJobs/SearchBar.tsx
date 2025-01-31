
import { dropdownData } from "../Data/JobsData";
import MultiInput from "./MutliInput";

const SearchBar = () => {
    return (
        <>
            <div className="flex justify-evenly ">
                {
                    dropdownData.map((dropdownItem, idx) => {
                        return (
                            <div key={idx} className="w-1/5" >
                                <MultiInput {...dropdownItem} />
                            </div>
                        )
                    })
                }

            </div>


        </>
    )
}

export default SearchBar;