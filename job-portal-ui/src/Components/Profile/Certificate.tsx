import { ActionIcon } from "@mantine/core";
import { IconPencil, IconPlus, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import CertificationCard from "./CertificationCard";
import CertificationInput from "./CertificationInput";

const Certificate = () => {
    const [edit, setEdit] = useState(false)
    const [addCerti, setAddCerti] = useState(false);
    const profile = useSelector((state: any) => state.profile)

    const handleEdit = () => {
        setEdit(!edit)
    }
    return (<>
        <div>
            <div className="text-2xl font-semibold mb-3 flex justify-between ">
                Certifications
                <div>
                    <ActionIcon size='lg' variant="subtle" onClick={() => setAddCerti(true)} >
                        <IconPlus className="h-4/5 w-4/5" />
                    </ActionIcon>
                    <ActionIcon size='lg' variant="subtle" onClick={ handleEdit } >
                        {
                            edit? <IconX className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />
                        }
                    </ActionIcon>
                </div>
            </div>
            <div className="flex flex-col gap-4">

                {
                    profile?.certifications?.map(
                        (certify: any, id: any) => <CertificationCard key={id} idx={id} {...certify} edit={edit} />
                    )
                }
                {
                    addCerti && <CertificationInput setEdit={setAddCerti} />
                }
            </div>

        </div>
    </>)
}

export default Certificate;