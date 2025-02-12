import { Button, Input, PasswordInput } from "@mantine/core"
import { IconAt, IconLock } from "@tabler/icons-react"
import { Link } from "react-router"

const Login = () => {
    return (
        <>
            <div className="w-1/2 px-20 flex flex-col gap-3 justify-center">
                <div className="text-2xl font font-semibold">Create Account</div>


                <Input.Wrapper label="Email" withAsterisk >
                    <Input placeholder="Your email" leftSection={<IconAt size={16} />} />
                </Input.Wrapper>

                <PasswordInput withAsterisk leftSection={<IconLock size={18} stroke={1.5} />} label="Password" placeholder="Strong password" />


                <Button variant="filled">Sign in</Button>

                <div className="mx-auto capitalize">Not have a account? <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link></div>
            </div>
        </>
    )
}

export default Login