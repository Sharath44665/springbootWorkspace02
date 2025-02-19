import { Button, Modal, PasswordInput, PinInput, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { changePass, sendOtp, verfiyOtp } from "../../services/UserService";
import { SignupValidation } from "../../services/FormValidation";
import { errorNotification, successNotification } from "../../services/NotificationService";
import { useInterval } from "@mantine/hooks";

const ResetPassword = (props: any) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passError, setPassError] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [otpSending, setOtpSending] = useState(false);
    const [verified, setVerified] = useState(false);
    const [resendLoader, setResendLoader] = useState(false)
    const [seconds, setSeconds] = useState(60);
  const interval = useInterval(() => {
    if (seconds === 0){
        setResendLoader(false);
        setSeconds(60);
        interval.stop();
    }
    else 
    setSeconds((s) => s - 1)}, 1000);

    const handleSendOtp = () => {
        setOtpSending(true);
        sendOtp(email).then((res) => {
            setOtpSent(true)
            console.log(res)
            successNotification("OTP sent successfully, please check your mail...!", "Enter OTP to reset.")
            setOtpSending(false)
            setResendLoader(true)
            interval.start();
        }).catch((err) => {
            console.log(err);
            setOtpSending(false)
            errorNotification("OTP sending failed", err.response.data.errorMessage)
        })

    }

    const handleVerifyOtp = (otp: string) => {
        verfiyOtp(email, otp)
            .then((res) => {
                console.log(res);
                successNotification("OTP Verified", "Enter new password")
                setVerified(true)
            })
            .catch((err) => {
                console.log(err)
                errorNotification("OTP verification failed", err.response.data.errorMessage)
            })
    }

    const resendOtp = () => {
        // console.log("clicked on resend otp")
        if (resendLoader) return;
        handleSendOtp();
    }

    const changeEmail = () => {
        setOtpSent(false)
        setResendLoader(false)
        setSeconds(60)
        setVerified(false)
        interval.stop();
    }

    const handleResetPassword = () => {

        changePass(email, password).then((res) => {
            console.log(res)
            successNotification("Password Changed", "Login with new password")
            props.close()
        }).catch((err) => {
            console.log(err)
            errorNotification("Password reset failed", err.response.data.errorMessage)
        })
    }
    return (<>
        <Modal opened={props.opened} onClose={props.close} title="Reset password">
            <div className="flex flex-col gap-5">
                <TextInput
                    label="Email"
                    value={email} onChange={(e) => setEmail(e.target.value)} name="email"
                    placeholder="Your email" size="md" leftSection={<IconAt size={16} />}
                    rightSection={<Button loading={otpSending  && !otpSent} onClick={handleSendOtp} disabled={email === "" || otpSent} size="xs" className="mr-1 " variant="filled">login</Button>}
                    rightSectionWidth="xl"
                />
                {otpSent && <PinInput onComplete={handleVerifyOtp} type="number" length={6} className="mx-auto" size="md" gap="lg" />}
                {
                    otpSent && !verified &&
                    <div className="flex gap-2">
                        <Button fullWidth loading={otpSending} onClick={resendOtp} variant="light">{resendLoader? seconds:"Resend OTP"}</Button>
                        <Button fullWidth onClick={changeEmail} autoContrast variant="filled">Change Email</Button>
                    </div>
                }

                {
                    verified &&
                    <PasswordInput value={password} onChange={(e) => { setPassword(e.target.value); setPassError(SignupValidation("password", e.target.value)) }} name="password" error={passError} withAsterisk leftSection={<IconLock size={18} stroke={1.5} />} label="Password" placeholder="Strong password" />

                }
                {
                    verified &&
                    <Button onClick={handleResetPassword} autoContrast variant="filled" >Reset Password</Button>
                }
            </div>
        </Modal>
    </>)

}

export default ResetPassword;