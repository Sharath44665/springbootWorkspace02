import { ActionIcon, Textarea } from "@mantine/core"
import { IconCheck, IconPencil, IconX } from "@tabler/icons-react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeProfile } from "../../Slices/ProfileSlice"
import { successNotification } from "../../services/NotificationService"

const About = () => {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false)
    const profile = useSelector((state: any) => state.profile)
    const [about, setAbout] = useState("");
    const handleEdit = () => {
        if (!edit) {
            setEdit(true)
            setAbout(profile?.about)
        }
        else {
            setEdit(false)
        }
    }

    const handleSave = () => {
        setEdit(false)
        let updatedProfile = { ...profile, about:about }
        dispatch(changeProfile(updatedProfile))
        successNotification("Success", "About updated Successfully")
    }
    return (<>
        <div>
            <div className="text-2xl font-semibold mb-3 flex justify-between">
                About
                <div>
                    {
                        edit && <ActionIcon size='lg' variant="subtle" onClick={handleSave} >
                            {
                                <IconCheck className="h-4/5 w-4/5" color="green" />
                            }
                        </ActionIcon>
                    }
                    <ActionIcon size='lg' variant="subtle" onClick={handleEdit} >
                        {
                            edit ? <IconX className="h-4/5 w-4/5" color="red" /> : <IconPencil className="h-4/5 w-4/5" />
                        }
                    </ActionIcon>
                </div>
            </div>
            {
                edit ? <Textarea
                    label="description"
                    value={about}
                    autosize
                    minRows={3}
                    withAsterisk
                    placeholder="Description (Describe yourself)"
                    onChange={(event) => setAbout(event.currentTarget.value)}
                /> : <div className="text-justify">{profile?.about}</div>
            }


        </div>
    </>)
}

export default About;