import { Button, Checkbox, Textarea } from "@mantine/core";
import fields from "../../Data/Profile";
import SelectInput from "./SelectInput";
import { useEffect } from "react";
import { MonthPickerInput } from "@mantine/dates";
import { useDispatch, useSelector } from "react-redux";
import { isNotEmpty, useForm } from "@mantine/form";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../../services/NotificationService";

const ExpInput = (props: any) => {
    const dispatch = useDispatch()
    const select = fields;
    const profile = useSelector((state: any) => state.profile)

    useEffect(() => {
        if (!props.add) form.setValues({
            title: props.title,
            company: props.company,
            location: props.location,
            description: props.description,
            startDate: new Date(props.startDate),
            endDate: new Date(props.endDate),
            working: props.working

        })
    }, [])
    const form = useForm({
        mode: 'controlled',
        validateInputOnChange: true,
        initialValues: {
            title: '',
            company: '',
            location: '',
            description: '',
            startDate: new Date(),
            endDate: new Date(),
            working: false,
        },
        validate: {
            title: isNotEmpty("Title is required"),
            company: isNotEmpty("company is required"),
            location: isNotEmpty("location is required"),
            description: isNotEmpty("description is required")

        }
    })

    const handleSave = () => {
        form.validate();
        if (!form.isValid()) return;

        let exp = [...profile.experiences]

        if (props.add) {
            exp.push(form.getValues());
            exp[exp.length - 1].startDate = exp[exp.length - 1].startDate.toISOString();
            exp[exp.length - 1].endDate = exp[exp.length - 1].endDate.toISOString();
        }
        else {
            exp[props.idx] = form.getValues();
            exp[props.idx].startDate = exp[props.idx].startDate.toISOString();
            exp[props.idx].endDate = exp[props.idx].endDate.toISOString();
        }

        let updatedProfile = { ...profile, experiences: exp }
        props.setEdit(false)
        dispatch(changeProfile(updatedProfile))
        successNotification("Success", `Experiences ${props.add ? 'Added' : 'updated'} updated Successfully`)
    }


    return (<>
        <div className="flex flex-col mb-3 gap-3">
            <div className="text-lg font-semibold ">{props.add ? 'Add' : 'Edit'} Experience</div>
            <div className="flex gap-10 [&>*]:w-1/2 ">
                <SelectInput form={form} name="title" {...select[0]} />
                <SelectInput form={form} name="company" {...select[1]} />

            </div>
            <SelectInput form={form} name="location" {...select[2]} />
            <Textarea
                {...form.getInputProps('description')}
                label="Job Summary "
                autosize
                minRows={3}
                withAsterisk
                placeholder="Enter Summary..."
            />
            <div className="flex gap-10 [&>*]:w-1/2 ">
                <MonthPickerInput
                    {...form.getInputProps('startDate')}
                    label="Start  date"
                    withAsterisk
                    placeholder="Pick date"
                    maxDate={form.getValues().endDate || undefined}
                />
                <MonthPickerInput
                    label="End  date"
                    {...form.getInputProps('endDate')}
                    withAsterisk
                    placeholder="Pick date"
                    disabled={form.getValues().working}
                    minDate={form.getValues().startDate || undefined}
                    maxDate={new Date()}

                />
            </div>
            <Checkbox
                autoContrast
                label="Currently Working here"
                checked={form.getValues().working}
                onChange={(event) => form.setFieldValue("working", event.currentTarget.checked)}
            // {...form.getInputProps('working')}  
            />
            <div className="flex gap-5">
                <Button onClick={handleSave} variant="outline" >Save</Button>
                <Button onClick={() => props.setEdit(false)} color="red" variant="light" >Cancel</Button>
            </div>
        </div>
    </>)
}

export default ExpInput;