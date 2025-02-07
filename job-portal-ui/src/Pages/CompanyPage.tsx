import { Button } from "@mantine/core";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router";
import Company from "../CompanyProfile/Company";

const CompanyPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="px-5 pt-5">
                <Button onClick={() => navigate(-1)} leftSection={<IconArrowNarrowLeft />} variant="light" >back to find talent</Button>

            </div>

            <div className="flex px-5 pt-5">
                <Company />
            </div>
        </>
    )
}

export default CompanyPage;