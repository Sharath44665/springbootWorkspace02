import { dropdownData } from "../Data/JobsData";
import MultiInput from "./MutliInput";
import RangeSlider from "./RangeSlider";

function SearchBar() {
    return (
        <>
            <div className="my-2 container-xxl text-center">
                <div className="row">
                    {
                        dropdownData.map((item, idx) => {
                            return (
                                <div className="col-sm" key={idx}>
                                    <MultiInput {...item} />
                                </div>
                            )
                        })
                    }
                    <div className="col-sm" style={{paddingTop:'30px'}}>
                        <RangeSlider/>
                    </div>


                </div>
            </div>


        </>

    )
}

export default SearchBar;

