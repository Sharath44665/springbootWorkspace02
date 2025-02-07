import { Button, FileInput, NumberInput, Textarea, TextInput, Notification, LoadingOverlay } from "@mantine/core";
import { IconCheck, IconFileCv } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router";

const ApplyJobCompany = () => {
    const [preview, setPreview] = useState(false)
    const [submit, setSubmit] = useState(false)
    const [sec, setSec] = useState(5)
    const navigate = useNavigate();

    const handlePreview = () => {
        setPreview(!preview);
        // window.scrollTo({top:0, behavior:'smooth'})

    }

    const handleSubmit = () => {
        setSubmit(true)
        let x = 5
        setInterval(() => {
            x -= 1;
            setSec(x)
            if (x === 0) {
                navigate('/findjob')
            }
        }, 1000);
    }
    return (
        <>
            <div className="px-5 pt-5">
                <LoadingOverlay className="!fixed"
                    visible={submit}
                    zIndex={1000}
                    overlayProps={{ radius: 'sm', blur: 2 }}
                    loaderProps={{ color: 'blue', type: 'bars' }}
                />

                <div className='w-2/3 mx-auto'>

                    <div className="flex bg-[#cbedff] justify-between">

                        <div className="flex gap-2 items-center capitalize ">
                            <div className="p-3">

                                <img className="h-14" src={`/Icons/Google.png`} alt="microsoft" />

                            </div>
                            <div>

                                <div className="text-2xl">Software Engineer III</div>
                                <div className="text-lg">Google &middot; 3 days ago  &middot; 22 applicants</div>

                            </div>
                        </div>

                    </div>
                    <div className="text-xl font-semibold pt-4 mb-4">
                        Submint your application
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-8 [&>*]:w-1/2"> {/* testing: pt-[500px]*/}
                            <TextInput
                                label="Full Name"
                                placeholder="John Doe"
                                withAsterisk
                                readOnly={preview}
                                variant={preview ? 'unstyled' : 'default'}
                                className={`${preview ? 'font-semibold' : ''}`}
                            />
                            <TextInput
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
                                label="Personal Website"
                                placeholder="www.example.com"
                                withAsterisk
                                readOnly={preview}
                                variant={preview ? 'unstyled' : 'default'}
                                className={`${preview ? 'font-semibold' : ''}`}
                            />
                        </div>
                        <div >
                            <FileInput
                                leftSection={<IconFileCv />}
                                label="Attach your CV"
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
                                placeholder="Describe yourself to the Hiring Manager"
                                label="Cover letter"
                                autosize
                                minRows={2}
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
                </div>
            </div>

            <Notification className={`!fixed top-0 z-[1001] left-[35%] transition duration-300 ease-in-out ${submit ? "translate-y-0" : "-translate-y-20"} `} icon={<IconCheck size={20} />} color="teal" title="Application Submitted!" mt="md" withCloseButton={false} withBorder>
                you'll be redirected to Find jobs in {sec} seconds
            </Notification>
        </>
    )
}

export default ApplyJobCompany;