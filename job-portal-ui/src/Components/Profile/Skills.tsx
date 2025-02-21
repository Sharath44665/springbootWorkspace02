import { ActionIcon, TagsInput } from "@mantine/core";
import { IconCheck, IconPencil, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../../services/NotificationService";

const Skills = () => {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false)
    const profile = useSelector((state: any) => state.profile)
    const [skills, setSkills] = useState<string[]>([]);
    const handleEdit = () => {
        if (!edit) {
            setEdit(true)
            setSkills(profile.skills)
        }
        else {
            setEdit(false)
        }
    }

    const handleSave = () => {
        setEdit(false)
        let updatedProfile = { ...profile, skills: skills }
        dispatch(changeProfile(updatedProfile))
        successNotification("Success", "Skills updated Successfully")
    }
    return (<>
        <div>
            <div className="text-2xl font-semibold mb-3 flex justify-between">
                Skills
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
                edit ? <TagsInput
                    value={skills}
                    onChange={setSkills}
                    placeholder="Add skill"
                    splitChars={[',', ' ', '|']}
                /> : <div className="flex flex-wrap gap-2">
                    {
                        profile?.skills?.map((skill: any, id: any) => {
                            return (
                                <div key={id} className="text-white bg-black font-medium bg-opacity-10 rounded-3xl px-3 py-1">{skill}</div>
                            )
                        })
                    }
                </div>
            }


        </div>
    </>)
}

export default Skills