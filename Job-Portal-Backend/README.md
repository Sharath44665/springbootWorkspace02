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

> you can check the same in databse, which should be effectively changed

in the ui:

forget password:

![forget password ](./img/forgetPasswd.png)

![forget password ](./img/forgetPassword2.png)

![forget password ](./img/forgetPassword3.png)

![forget password ](./img/forgetPassword4.png) 

---

using redux, storing user in Local storage:

![user local storage](./img/storingUserLocalStorage.png)

after loggin out we can remove it, code is in the ui: `Header/ProfileMenu.tsx`

---

Profile creation
1. delete all users from mongodb
2. in `sequence` collection **add row** with 

``` json
"_id":"profiles",
"seq":0
```
3. in `sequence` collection **update**

``` json
"_id":"users",
"seq":0
```
4. run the ui, and backend which will give below result

![profile creation](./img/profileCreation.png)

---

get profile via api

![get profile api](./img/getProfilePostman.png)

---

update profile via api

![postman update](./img/updatePostman.png)

update mongo

![mongo update](./img/updateMongo.png)

show profile Backend Data in console

![profile backend](./img/showProfileBackendData.png)

profile update from front end:

![profile info update](./img/profileInfoUpdateUI.png)

---
api post jobs

[post jobs](./img/apiPostJobs.png)

at backend via postman you should get these

> http://localhost:8080/jobs/get-all
> 
> http://localhost:8080/jobs/get/1

---
when post-job added in UI, it should be updated as below.

> please note that other dbs dont have this kind of data

![add database jobstatus](./img/jobStatusAddDB.png)

when post-job drafted, it should look like this

![draft post job](./img/postJobDraft.png) 
--- 
 experience added in the backend
---
TODO: need to add sequence screenshot

            
    