import { Button, NumberInput, TagsInput, Textarea } from "@mantine/core";
import { content, fields } from "../../Data/PostJob";
import SelectInput from "./SelectInput";
import '@mantine/tiptap/styles.css';
import MyRichTextEditor from "./MyRichTextEditor";
import { isNotEmpty, useForm } from "@mantine/form";
import { getJob, postJob } from "../../services/JobService";
import { errorNotification, successNotification } from "../../services/NotificationService";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const PostJob = () => {
    const {id} = useParams();
    const [editorData, setEditorData] = useState(content)
    const user = useSelector((state: any) => state.user)
    const select = fields;
    const navigate = useNavigate();

    useEffect(()=> {
        window.scrollTo(0,0)
        if (id !== "0"){
            getJob(id).then((res) => {
                form.setValues(res)
                setEditorData(res.description)
            }).catch((err) => {
                console.log(err)
            })
        }
        else {
            form.reset()   
            setEditorData(content)
        } 
    },[id])

    const form = useForm({
        mode: 'controlled',
        validateInputOnChange: true,
        initialValues: {
            jobTitle: '',
            company: '',
            experience: '',
            jobType: '',
            location: '',
            packageOffered: '',
            skillsRequired: [],
            about: '',
            description: content
        },
        validate: {
            jobTitle: isNotEmpty('Title is required'),
            company: isNotEmpty('company is required'),
            experience: isNotEmpty('experience is required'),
            jobType: isNotEmpty('jobType is required'),
            location: isNotEmpty('location is required'),
            packageOffered: isNotEmpty('package is required'),
            skillsRequired: isNotEmpty('skills is required'),
            about: isNotEmpty('about is required'),
            description: isNotEmpty('description is required'),
        }
    })

    const handlePost = () => {
        form.validate()

        if (!form.isValid()) return;

        postJob({ ...form.getValues(), id, postedBy: user.id, jobStatus: 'ACTIVE' }).then((res) => {
            successNotification("Success", "Job posted successfully");
            navigate(`/posted-jobs/${res.id}`)
            // console.log(res)
        }).catch((err) => {
            console.log(err)
            errorNotification("Something went wrong", err.response.data)
        })
    }
    const handleDraft = () => {
        postJob({ ...form.getValues(), id, postedBy: user.id, jobStatus: 'DRAFT' }).then((res) => {
            successNotification("Success", "Job Drafted successfully");
            navigate(`/posted-jobs/${res.id}`)
            // console.log(res)
        }).catch((err) => {
            console.log(err)
            errorNotification("Something went wrong", err.response.data)
        })
    }
    return (
        <>
            <div className=" w-4/5 mx-auto">

                <div className="text-2xl font-semibold mb-5">Post a Job</div>
                <div className="flex flex-col gap-4">

                    <div className="flex gap-10 [&>*]:w-1/2 ">
                        <SelectInput form={form} name="jobTitle" {...select[0]} />
                        <SelectInput form={form} name="company" {...select[1]} />
                    </div>

                    <div className="flex gap-10 [&>*]:w-1/2 ">
                        <SelectInput form={form} name="experience" {...select[2]} />
                        <SelectInput form={form} name="jobType" {...select[3]} />
                    </div>

                    <div className="flex gap-10 [&>*]:w-1/2 ">
                        <SelectInput form={form} name="location" {...select[4]} />
                        <NumberInput {...form.getInputProps('packageOffered')} label="Salary (In LPA)" placeholder="Enter Salary " clampBehavior="strict" hideControls withAsterisk min={1} max={300} />
                    </div>
                    <TagsInput {...form.getInputProps('skillsRequired')} withAsterisk label="Skills" placeholder="Enter skills" clearable acceptValueOnBlur splitChars={[',', ' ', '|']} />
                    <Textarea
                        {...form.getInputProps('about')}
                        label="About Job"
                        autosize
                        minRows={3}
                        withAsterisk
                        placeholder="Enter About job"
                    />
                    <div>
                        <div className="text-sm font-medium">Job Description <span className="text-red-500">*</span> </div>
                        <MyRichTextEditor form={form} data={editorData} />
                    </div>
                    <div className="flex gap-4">
                        <Button variant="light" onClick={handlePost} >Publish Job</Button>
                        <Button variant="outline" onClick={handleDraft} >Save as Draft</Button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PostJob;