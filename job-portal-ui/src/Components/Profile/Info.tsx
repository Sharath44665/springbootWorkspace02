import { ActionIcon } from "@mantine/core";
import fields from "../../Data/Profile";
import { useState } from "react";
import { IconBriefcase, IconCurrentLocation, IconDeviceFloppy, IconPencil } from "@tabler/icons-react";
import SelectInput from "./SelectInput";
import { hasLength, isEmail, useForm } from '@mantine/form';
import { useSelector } from "react-redux";

const Info = (props:any) => {
    const select = fields;
    const profile = useSelector((state:any)=>state.profile)
    const [edit, setEdit] = useState(false)
    
    const handleEdit =() => {
        if (!edit){
            setEdit(true)
            form.setValues({jobTitle:profile.jobTitle, company: profile.company, location:profile.location})
        }
        else {
            setEdit(false)
            console.log(form.getValues());
        }
    }
    
    const form = useForm({
        mode: 'controlled',
        initialValues: { jobTitle: '', company: '' , location:''},
        
      });

    return (<>
        <div className="text-3xl font-semibold flex justify-between">Sharathchandra<ActionIcon size='lg' variant="subtle" onClick={handleEdit} >
            {
                edit ? <IconDeviceFloppy className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />
            }
        </ActionIcon></div>
        
        {
            edit ? <>
                <div className="flex gap-10 [&>*]:w-1/2 ">
                    <SelectInput form={form} name="jobTitle" {...select[0]} />
                    <SelectInput form={form} name="company" {...select[1]} />

                </div>
                <SelectInput form={form} name="location" {...select[2]} />
            </> : <>
                <div className="flex text-xl gap-1 items-center ">
                    <IconBriefcase /> Google &middot; Meta Inc
                </div>
                <div className="flex text-gray-400 gap-1 items-center text-lg"><IconCurrentLocation /> Bengaluru, India</div>
            </>
        }

    </>)

}

export default Info;


