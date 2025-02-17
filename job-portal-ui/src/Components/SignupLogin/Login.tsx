import { Button, Input, PasswordInput } from "@mantine/core"
import { IconAt, IconLock } from "@tabler/icons-react"
import { useState } from "react"
import { Link } from "react-router"
import { loginUser } from "../../services/UserService"
const form = { 
    email: "",
    password: ""
}

const Login = () => {
    const [data, setData] = useState(form)

    const handleChange= (event:any) => { 
           setData({...data, [event.target.name]:event.target.value})
    }

    const handleSubmit = () => {
        loginUser(data).then((res)=>{
            console.log(res)
        }).catch((err) => {console.log(err.response.data)});
    }

    return (
        <>
            <div className="w-1/2 px-20 flex flex-col gap-3 justify-center">
                <div className="text-2xl font font-semibold">Create Account</div>


                <Input.Wrapper label="Email" withAsterisk >
                    <Input value={data.email} onChange={handleChange} name="email"  placeholder="Your email" leftSection={<IconAt size={16} />} />
                </Input.Wrapper>

                <PasswordInput value={data.password} onChange={handleChange} name="password" withAsterisk leftSection={<IconLock size={18} stroke={1.5} />} label="Password" placeholder="Strong password" />


                <Button onClick={handleSubmit} variant="filled">Sign in</Button>

                <div className="mx-auto capitalize">Not have a account? <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link></div>
            </div>
        </>
    )
}

export default Login