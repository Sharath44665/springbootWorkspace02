import { ActionIcon } from "@mantine/core";
import fields from "../../Data/Profile";
import { useState } from "react";
import { IconBriefcase, IconCheck, IconCurrentLocation, IconDeviceFloppy, IconPencil, IconX } from "@tabler/icons-react";
import SelectInput from "./SelectInput";
import { useForm } from '@mantine/form';
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../../services/NotificationService";

const Info = (props: any) => {
    const select = fields;
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user)
    const profile = useSelector((state: any) => state.profile)
    const [edit, setEdit] = useState(false)

    const handleEdit = () => {
        if (!edit) {
            setEdit(true)
            form.setValues({ jobTitle: profile.jobTitle, company: profile.company, location: profile.location })
        }
        else {
            setEdit(false)
           
            // console.log("form get values")
            // console.log(updatedProfile);
        }
    }

    const form = useForm({
        mode: 'controlled',
        initialValues: { jobTitle: '', company: '', location: '' },

    });

    const handleSave = () => {
        setEdit(false)
        let updatedProfile = { ...profile, ...form.getValues() }
        dispatch(changeProfile(updatedProfile))
        successNotification("Success", "Profile updated Successfully")

    }

    return (<>
        <div className="text-3xl font-semibold flex justify-between">{user.name}
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
            edit ? <>
                <div className="flex gap-10 [&>*]:w-1/2 ">
                    <SelectInput form={form} name="jobTitle" {...select[0]} />
                    <SelectInput form={form} name="company" {...select[1]} />

                </div>
                <SelectInput form={form} name="location" {...select[2]} />
            </> : <>
                <div className="flex text-xl gap-1 items-center ">
                    <IconBriefcase /> {profile.jobTitle} &middot; {profile.totalExp}Year(s) of Experience &middot; {profile.company}
                </div>
                <div className="flex text-gray-400 gap-1 items-center text-lg"><IconCurrentLocation /> {profile.location}</div>
            </>
        }

    </>)

}

export default Info;


