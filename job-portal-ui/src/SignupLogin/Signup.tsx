import { Anchor, Button, Checkbox, Input, PasswordInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { Link } from "react-router";

const Signup = () => {
    return (
        <>
            <div className="w-1/2 px-20 flex flex-col gap-3 justify-center">

                <div className="text-2xl font font-semibold">Create Account</div>
                <Input.Wrapper label="Full Name" withAsterisk >
                    <Input placeholder="Your name: Sharath chandra" />
                </Input.Wrapper>

                <Input.Wrapper label="Email" withAsterisk >
                    <Input placeholder="Your email" leftSection={<IconAt size={16} />} />
                </Input.Wrapper>

                <PasswordInput withAsterisk leftSection={<IconLock size={18} stroke={1.5} />} label="Password" placeholder="Strong password" />
                <PasswordInput withAsterisk leftSection={<IconLock size={18} stroke={1.5} />} label="Confirm Password" placeholder="Retype password" />

                <Checkbox
                    autoContrast
                    defaultChecked
                    label={<>I accept{' '}<Anchor>Terms and Conditions</Anchor> </>}
                />

                <Button variant="filled">Create Account</Button>

                <div className="mx-auto capitalize">Have an account <Link to="/login" className="text-blue-500 hover:underline">Login</Link></div>
            </div>
        </>
    )
}

export default Signup;