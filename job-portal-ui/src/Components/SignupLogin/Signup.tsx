import { Anchor, Button, Checkbox, Group, Input, PasswordInput, Radio } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router";
import { registerUser } from "../../services/UserService";

const form = {
    name :"",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "APPLICANT"
}

const Signup = () => {
    
    const [data, setData] = useState(form)

    const handleChange= (event:any) => {
        // console.log(event)
        if (typeof(event) == "string") setData({...data, accountType:event})

        else setData({...data, [event.target.name]:event.target.value})
    }

    const handleSubmit = () => {
        registerUser(data).then((res)=>{
            console.log(res)
        }).catch((err) => {console.log(err)});
    }

    return (
        <>
            <div className="w-1/2 px-20 flex flex-col gap-3 justify-center">

                <div className="text-2xl font font-semibold">Create Account</div>
                <Input.Wrapper label="Full Name" withAsterisk >
                    <Input value={data.name} onChange={handleChange} name="name" placeholder="Your name: Sharath chandra" />
                </Input.Wrapper>

                <Input.Wrapper label="Email" withAsterisk >
                    <Input value={data.email} onChange={handleChange} name="email" placeholder="Your email" leftSection={<IconAt size={16} />} />
                </Input.Wrapper>

                <PasswordInput value={data.password} onChange={handleChange} name="password" withAsterisk leftSection={<IconLock size={18} stroke={1.5} />} label="Password" placeholder="Strong password" />
                <PasswordInput value={data.confirmPassword} onChange={handleChange} name="confirmPassword" withAsterisk leftSection={<IconLock size={18} stroke={1.5} />} label="Confirm Password" placeholder="Retype password" />
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

                <Button onClick={handleSubmit} variant="filled">Create Account</Button>

                <div className="mx-auto capitalize">Have an account <Link to="/login" className="text-blue-500 hover:underline">Login</Link></div>
            </div>
        </>
    )
}

export default Signup;