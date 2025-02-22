import { Button, TextInput } from "@mantine/core";
import fields from "../../Data/Profile";
import SelectInput from "./SelectInput";
import { MonthPickerInput } from "@mantine/dates"; 
import { isNotEmpty, useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../../services/NotificationService";

const CertificationInput = (props: any) => {
    const dispatch = useDispatch();
    const select = fields;
    const profile = useSelector((state:any) => state.profile)
    const form = useForm({
            mode: 'controlled',
            validateInputOnChange: true,
            initialValues: {
                name: '',
                issuer: '',
                issueDate: new Date(),
                certificateId: ''
            },
            validate: {
                name: isNotEmpty("Name is required"),
                issuer: isNotEmpty("issuer is required"),
                issueDate: isNotEmpty("issueDate is required"),
                certificateId: isNotEmpty("certificateId is required")
    
            }
        }) 

    const handleSave = () => {
        form.validate();
        if(!form.isValid()) return

        let certi = [...profile.certifications]
        certi.push(form.getValues())
        certi[certi.length -1].issueDate = certi[certi.length -1].issueDate.toISOString();

        let updateProfile = {...profile, certifications:certi} 
        props.setEdit(false)
        dispatch(changeProfile(updateProfile));
        successNotification("Success", "certificate added succesfully...!")
    }

    return (<>
        <div className="flex flex-col gap-3">
            <div className="capitalize text-lg font-semibold">add certificate</div>
            <div className="flex gap-10 [&>*]:w-1/2 ">
                <TextInput
                    label="Title"
                    {...form.getInputProps('name')}
                    withAsterisk
                    placeholder="Enter Title"
                />
                <SelectInput form={form} name='issuer' {...select[1]} />

            </div>
            <div className="flex gap-10 [&>*]:w-1/2 ">
                <MonthPickerInput
                    {...form.getInputProps('issueDate')}
                    label="Issue date"
                    withAsterisk
                    placeholder="Pick date"
                    maxDate={new Date()} 
                />
                <TextInput
                    {...form.getInputProps('certificateId')}
                    label="Certificate ID"
                    withAsterisk
                    placeholder="Enter ID"
                />
            </div>
            <div className="flex gap-5">
                <Button onClick={handleSave} variant="outline" >Save</Button>
                <Button onClick={() => props.setEdit(false)} color="red" variant="light" >Cancel</Button>
            </div>
        </div>
    </>)
}

export default CertificationInput;