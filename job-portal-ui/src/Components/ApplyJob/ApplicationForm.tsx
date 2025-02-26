import { Button, FileInput, LoadingOverlay, NumberInput, Textarea, TextInput } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { IconFileCv } from "@tabler/icons-react";
import { useState } from "react";
import { getBase64 } from "../../services/Utilities";
import { useNavigate, useParams } from "react-router";
import { applyJob } from "../../services/JobService";
import { errorNotification, successNotification } from "../../services/NotificationService";
import { useSelector } from "react-redux";

const ApplicationForm = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const user = useSelector((state:any)=>state.user)
    const [preview, setPreview] = useState(false)
    const [submit, setSubmit] = useState(false)
    const [sec, setSec] = useState(5)
    // const navigate = useNavigate();
    const handlePreview = () => {
        form.validate()
        if (!form.isValid()) return;

        setPreview(!preview);
        window.scrollTo({ top: 0, behavior: 'smooth' })
        // console.log(form.getValues())

    }

    const handleSubmit = async () => {
        setSubmit(true)
        let resume:any = await getBase64(form.getValues().resume);
        let applicant = {...form.getValues(), applicantId:user.id, resume:resume.split(',')[1]}
        applyJob(id, applicant).then((res)=>{
            setSubmit(false)
            successNotification("success", "Application submitted successfully")
            navigate("/jhistory")
        }).catch((err) => {
            setSubmit(false)
            errorNotification("Error", err.response.data.errorMessage)
        })
    }
    const form = useForm({
        mode: 'controlled',
        validateInputOnChange: true,
        initialValues: {
            name: '',
            email: '',
            phone: '',
            resume: null,
            website: '',
            coverLetter: ''
        },
        validate: {
            name: isNotEmpty("Name is required"),
            email: isNotEmpty("email is required"),
            phone: isNotEmpty("phone is required"),
            resume: isNotEmpty("resume is required"),

        }
    })
    return (<>
        <LoadingOverlay className="!fixed"
            visible={submit}
            zIndex={1000}
            overlayProps={{ radius: 'sm', blur: 2 }}
            loaderProps={{ color: 'blue', type: 'bars' }}
        />
        <div className="text-xl font-semibold pt-4 mb-4">
            Submint your application
        </div>
        <div className="flex flex-col gap-10">
            <div className="flex gap-8 [&>*]:w-1/2"> {/* testing: pt-[500px]*/}
                <TextInput
                    {...form.getInputProps('name')}
                    label="Full Name"
                    placeholder="John Doe"
                    withAsterisk
                    readOnly={preview}
                    variant={preview ? 'unstyled' : 'default'}
                    className={`${preview ? 'font-semibold' : ''}`}
                />
                <TextInput
                    {...form.getInputProps('email')}
                    label="Email ID"
                    placeholder="john.doe@example.com"
                    withAsterisk
                    readOnly={preview}
                    variant={preview ? 'unstyled' : 'default'}
                    className={`${preview ? 'font-semibold' : ''}`}

                />


            </div>
            <div className="flex gap-8 [&>*]:w-1/2 ">
                <NumberInput
                    {...form.getInputProps('phone')}
                    label="Phone/Mobile number"
                    placeholder="9876543210"
                    withAsterisk
                    hideControls
                    clampBehavior="strict"
                    min={0}
                    max={9999999999}
                    readOnly={preview}
                    variant={preview ? 'unstyled' : 'default'}
                    className={`${preview ? 'font-semibold' : ''}`}

                />
                <TextInput
                    {...form.getInputProps('website')}
                    label="Personal Website"
                    placeholder="www.example.com"
                    readOnly={preview}
                    variant={preview ? 'unstyled' : 'default'}
                    className={`${preview ? 'font-semibold' : ''}`}
                />
            </div>
            <div >
                <FileInput
                    {...form.getInputProps('resume')}
                    leftSection={<IconFileCv />}
                    label="Attach your CV"
                    accept="application/pdf"
                    placeholder="Only pdfs or docx are accepted"
                    leftSectionPointerEvents="none"
                    withAsterisk
                    readOnly={preview}
                    variant={preview ? 'unstyled' : 'default'}
                    className={`${preview ? 'font-semibold' : ''}`}
                />
            </div>
            <div>
                <Textarea
                    {...form.getInputProps('coverLetter')}
                    placeholder="Describe yourself to the Hiring Manager"
                    label="Cover letter"
                    autosize
                    minRows={5}
                    readOnly={preview}
                    variant={preview ? 'unstyled' : 'default'}
                    className={`${preview ? 'font-semibold' : ''}`}
                />
            </div>
            <div>
                {
                    !preview && <Button onClick={handlePreview} variant="filled" fullWidth>Preview</Button>
                }

                {
                    preview &&
                    <div className="flex justify-evenly gap-5">
                        <Button onClick={handlePreview} variant="outline" fullWidth >Edit</Button>
                        <Button onClick={handleSubmit} variant="filled" fullWidth>Submit</Button>
                    </div>

                }

            </div>
        </div>
    </>)
}

export default ApplicationForm;

