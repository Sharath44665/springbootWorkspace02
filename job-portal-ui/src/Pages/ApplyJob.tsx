import { Button } from "@mantine/core";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { Link } from "react-router";
import ApplyJobCompany from "../ApplyJob/ApplyJobCompany";

const ApplyJob = () => {
    return (
        <>
            <div className="px-5 pt-5">

                <Link to='/jobs'>
                    <Button leftSection={<IconArrowNarrowLeft />} variant="light" >go back to job</Button>
                </Link>
            </div>
            <ApplyJobCompany />

        </>
    )
}

export default ApplyJob;