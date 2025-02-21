import { ActionIcon } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { formatDate } from "../../services/Utilities";

const CertificationCard = (props: any) => {
    return (
        <>
            <div className="flex bg-[#f4f4f4] text-black rounded-3xl p-2 justify-between">
                <div className="flex gap-2 items-center capitalize ">
                    <div className="p-1">
                        <img className="h-7" src={`/Icons/${props.issuer}.png`} alt="microsoft" />
                    </div>
                    <div>
                        <div className="text-lg">{props.name}</div>
                        <div>{props.issuer}</div>
                    </div>
                </div>
                <div className="flex items-center gap-3">

                    <div className="flex flex-col items-end">
                        <div>{formatDate(props.issueDate)}</div>
                        <div>ID: {props.certificateId}</div>
                    </div>
                    {
                        props.edit && <ActionIcon color="red" size='lg' variant="subtle" >
                            <IconTrash className="h-4/5 w-4/5" />

                        </ActionIcon>
                    }

                </div>
            </div>
        </>
    )
}


export default CertificationCard;