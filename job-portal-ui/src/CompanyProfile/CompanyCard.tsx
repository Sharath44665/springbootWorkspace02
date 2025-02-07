import { Button } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";

const CompanyCard = (props: any) => {
    return (
        <>
            <div className="flex bg-[#cbedff] justify-between rounded-lg w-[300px]">
                <div className="flex gap-2 items-center capitalize ">
                    <div className="p-1">
                        <img className="h-7" src={`/Icons/${props.name}.png`} alt="microsoft" />
                    </div>
                    <div>
                        <div className="text-lg">{props.name}</div>
                        <div>{props.company} &middot; {props.employees} Employees</div>
                    </div>
                </div>
                <Button variant="subtle" classNames={{ label: 'capitalize' }} rightSection={<IconExternalLink />}></Button>
            </div>
        </>
    )
}

export default CompanyCard;