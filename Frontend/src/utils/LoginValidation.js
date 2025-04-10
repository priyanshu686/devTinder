const Validation =(email,password)=>{
    const Email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const Password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    // const Name = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/.test(name); 
    if(!Email){
        return "Email is not Valid"
    }
    if(!Password){
        return "Password is not Valid"
    }
    return null;
}

export default Validation;