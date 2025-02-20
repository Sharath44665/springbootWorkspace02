import { Anchor, Button, Checkbox, Group, Input, LoadingOverlay, PasswordInput, Radio } from "@mantine/core";
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { registerUser } from "../../services/UserService";
import { SignupValidation } from "../../services/FormValidation";
import { notifications } from '@mantine/notifications';

const form = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "APPLICANT"
}

const Signup = () => {

    const [data, setData] = useState<{ [key: string]: string }>(form)
    const [formError, setFormError] = useState<{ [key: string]: string }>(form)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const handleChange = (event: any) => {
        // console.log(event)
        if (typeof (event) == "string") {

            setData({ ...data, accountType: event })
        }

        else {
            let name = event.target.name, value = event.target.value;

            setData({ ...data, [name]: value });
            setFormError({ ...formError, [name]: SignupValidation(name, value) })
            if (name === "password" && data.confirmPassword !== "") {
                let err = ""
                if (data.confirmPassword !== value) err = "Passwords do not match";
                else setFormError({ ...formError, [name]: SignupValidation(name, value) })

            }
            if (name === "confirmPassword") {
                if (data.password !== value) setFormError({ ...formError, [name]: "password do not match" });
                else setFormError({ ...formError, confirmPassword: "" })
            }
        }
    }

    const handleSubmit = () => {

        let valid = true, newFormError: { [key: string]: string } = {};

        for (let key in data) {
            if (key === "accountType") continue;
            if (key !== "confirmPassword") newFormError[key] = SignupValidation(key, data[key]);
            else if (data[key] !== data["password"]) newFormError[key] = "passswords do not match";
            if (newFormError[key]) valid = false;
        }
        setFormError(newFormError);


        if (valid === true) {
            setLoading(true)

            registerUser(data).then((res) => {
                console.log(res)
                setData(form);
                notifications.show({
                    title: 'Registered Succesffully',
                    message: 'Redirecting to login page...',
                    withCloseButton: true,
                    icon: <IconCheck style={{ width: "90%", height: "90%" }} />,
                    withBorder: true,
                    className: '!border-green-500'
                })
                setTimeout(() => {
                    navigate("/login");
                    setLoading(false)
                }, 4000);

            }).catch((err) => {
                setLoading(false)
                console.log(err)
                notifications.show({

                    title: 'Registration failed!',
                    message: err.response.data.errorMessage,
                    withCloseButton: true,
                    icon: <IconX style={{ width: "90%", height: "90%" }} />,
                    color: 'red',
                    withBorder: true,
                    className: '!border-red-500'
                })
            });
        }
    }

    return (
        <>
            <LoadingOverlay
                visible={loading}
                zIndex={1000}
                overlayProps={{ radius: 'sm', blur: 2 }}
                loaderProps={{ color: 'blue', type: 'bars' }}
                className="translate-x-1/2"
            />
            <div className="w-1/2 px-20 flex flex-col gap-3 justify-center">

                <div className="text-2xl font font-semibold">Create Account</div>
                <Input.Wrapper label="Full Name" withAsterisk error={formError.name}>
                    <Input value={data.name} onChange={handleChange} name="name" placeholder="Your name: Sharath chandra" />
                </Input.Wrapper>

                <Input.Wrapper label="Email" error={formError.email} withAsterisk >
                    <Input value={data.email} onChange={handleChange} name="email" placeholder="Your email" leftSection={<IconAt size={16} />} />
                </Input.Wrapper>

                <PasswordInput value={data.password} onChange={handleChange} name="password" error={formError.password} withAsterisk leftSection={<IconLock size={18} stroke={1.5} />} label="Password" placeholder="Strong password" />
                <PasswordInput value={data.confirmPassword} onChange={handleChange} name="confirmPassword" error={formError.confirmPassword} withAsterisk leftSection={<IconLock size={18} stroke={1.5} />} label="Confirm Password" placeholder="Retype password" />
                <Radio.Group
                    value={data.accountType}
                    onChange={handleChange}
                    label="You are?"
                    withAsterisk
                >
                    <Group mt="xs">

                        <Radio className="py-4 px-6 border has-[:checked]:border-blue-500 border-gray-200 rounded-lg" autoContrast value="APPLICANT" label="Applicant" />
                        <Radio className="py-4 px-6 border has-[:checked]:border-blue-500 border-gray-200 rounded-lg" autoContrast value="EMPLOYER" label="Employer" />

                    </Group>
                </Radio.Group>
                <Checkbox
                    autoContrast
                    defaultChecked
                    label={<>I accept{' '}<Anchor>Terms and Conditions</Anchor> </>}
                />

                <Button onClick={handleSubmit} loading={loading} variant="filled">Create Account</Button>

                <div className="mx-auto capitalize">Have an account <span onClick={() => { navigate("/login"); setFormError(form); setData(form); }} className="text-blue-500 hover:underline cursor-pointer">Login</span></div>
            </div>
        </>
    )
}

export default Signup;