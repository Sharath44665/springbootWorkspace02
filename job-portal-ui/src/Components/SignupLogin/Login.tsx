import { Button, Input, PasswordInput } from "@mantine/core"
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { loginUser } from "../../services/UserService"
import { LoginValidation } from "../../services/FormValidation"
import { notifications } from "@mantine/notifications"
const form = { 
    email: "",
    password: ""
}

const Login = () => {
    const [data, setData] = useState<{[key: string]:string}>(form)
    const [formError, setFormError] = useState<{[key: string]:string}>(form)
    const navigate = useNavigate();

    const handleChange= (event:any) => { 
        setFormError({...formError, [event.target.name]:""})
           setData({...data, [event.target.name]:event.target.value})
    }

    const handleSubmit = () => {
        let valid = true, newFormError: {[key: string]:string} ={};

        for (let key in data ){ 
             newFormError[key]=LoginValidation(key, data[key]); 
            if (newFormError[key] ) valid = false;
        }
        setFormError(newFormError);

        if (valid){
            loginUser(data).then((res)=>{
                console.log(res)
                notifications.show({
                    title: 'Login Success...',
                    message: 'Redirecting to Home page...',
                    withCloseButton:true,
                    icon:<IconCheck style={{width:"90%", height:"90%"}}  />,
                    withBorder:true,
                    className:'!border-green-500'
                  })
                  setTimeout(() => {
                    navigate("/");

                  }, 4000);
            }).catch((err) => {
                console.log(err.response.data)
                notifications.show({

                    title: 'login failed!',
                    message: err.response.data.errorMessage,
                    withCloseButton:true,
                    icon:<IconX style={{width:"90%", height:"90%"}}  />,
                    color:'red',
                    withBorder:true,
                    className:'!border-red-500'
                  })
                
            });

        }
    }

    return (
        <>
            <div className="w-1/2 px-20 flex flex-col gap-3 justify-center">
                <div className="text-2xl font font-semibold">Create Account</div>


                <Input.Wrapper label="Email" error={formError.email} withAsterisk >
                    <Input value={data.email} onChange={handleChange} name="email"  placeholder="Your email" leftSection={<IconAt size={16} />} />
                </Input.Wrapper>

                <PasswordInput value={data.password} onChange={handleChange} name="password" error={formError.password} withAsterisk leftSection={<IconLock size={18} stroke={1.5} />} label="Password" placeholder="Strong password" />


                <Button onClick={handleSubmit} variant="filled">Sign in</Button>

                <div className="mx-auto capitalize">Not have a account? <span onClick={()=>{navigate("/signup"); setFormError(form); setData(form);}} className="text-blue-500 hover:underline cursor-pointer">Sign up</span></div>
            </div>
        </>
    )
}

export default Login