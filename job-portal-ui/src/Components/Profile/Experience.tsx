import { ActionIcon } from "@mantine/core";
import { IconPencil, IconPlus, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ExpInput from "./ExpInput";
import ExpCard from "./ExpCard";

const Experience = () => {
    const [edit, setEdit] = useState(false);
    const [addExp, setAddExp] = useState(false);
    const profile = useSelector((state: any) => state.profile)
    const handleEdit = () => {
        setEdit(!edit)
    }
    return (<>
        <div>
            <div className="text-2xl font-semibold mb-3 flex justify-between">
                Experience
                <div>
                    <ActionIcon size='lg' variant="subtle" onClick={() => setAddExp(true)} >
                        <IconPlus className="h-4/5 w-4/5" />
                    </ActionIcon>
                    <ActionIcon size='lg' variant="subtle" onClick={handleEdit} >
                        {
                            edit? <IconX className="h-4/5 w-4/5" color="red" /> : <IconPencil className="h-4/5 w-4/5" />
                        }
                    </ActionIcon>
                </div>

            </div>
            {
                profile?.experiences?.map((expItem: any, id: any) => <ExpCard key={id} idx={id} {...expItem} edit={edit} />)
            }
            {addExp && <ExpInput setEdit={setAddExp} add />}


        </div>
    </>)
}

export default Experience;