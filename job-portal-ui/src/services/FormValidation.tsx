const SignupValidation = (name:string, value: string) => {
    switch(name){
        case "name":
            if (value.length === 0) return "name is required";
            return "";
        case "email":
            if (value.length === 0) return "Email is required";
            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) return "Email is invalid";
            return "";
        case "password":
            if (value.length === 0) return "Password is required";
            if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)) return "password must contain: atleast 8 charecters long, one small letter, one caps , one simbol, one number"
            return ""
        default:
            return ""
    }
}


const LoginValidation = (name:string, value: string) => {
    switch(name){
      
        case "email":
            if (value.length === 0) return "Email is required"; 
            return "";
        case "password":
            if (value.length === 0) return "Password is required";
            
            return ""
        default:
            return ""
    }
}

export {SignupValidation, LoginValidation}