If user exists then show USER_FOUND error message:

> if we dont do this, then api will show lots of information to normal user

![userfound](./img/user_found.png)

---

update error message:

![user not found error msg update](./img/userNotFoundUpdateErrMsg.png)

---

login route

invalid:

![invalid login](./img/loginInvalidCredentials.png)

> add invalid user in postman/thunderclient, to see invalid email id error

success:

![success login](./img/loginSuccess.png)

---

register user
- front end code check

![register user](./img/axiosFrontEnd.png)

---
update Login with backend 

![loginWithBackend](./img/loginWithBackend.png)

if you pass incorrect data you should get following errors:

![login errors](./img/loginErrors.png)

---
send otp to user

![postman error](./img/otpError.png)

success:

![postman success](./img/otpSuccess.png)

email success:

![email success](./img/otpSuccessEmail.png)

stylish otp:

![stylish otp](./img/StylishOtp.png)

---
verifying otp:

![verified](./img/otpVerified.png)

invalid otp:

![invalid](./img/incorrectOtp.png)

expired otp:
![expired](./img/expiredOtp.png)

---
change password:

![change password](./img/changePassword.png)


