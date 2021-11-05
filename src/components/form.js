import react,{useState} from "react";
import styles from './form.module.css'
const re= /\S+@\S+\.\S+/;
const InputBox = (props)=>{
    const {name,type,event} =props;
    const id=name.toLowerCase() .split(" ").join("_");
    return(
        <div className={styles.inputBox}>
            <label htmlFor={id}>
                {name}  <input name={id} id={id} type={type} onChange={event}/>
            </label>
        </div>
    )
}
const Form = (props)=>{
    const [firstname, setFirstname] = useState("");
    const [firstnameError, setFirstnameError] = useState("");
    const [lastname, setLastname] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirm, setConfirm] = useState("");
    const [confirmError, setConfirmError] = useState("");

    const createUser = (e) =>{
        e.preventDefault();
        const newUser = {firstname, lastname, email, password}
        console.log("Welcome",newUser)
    }

    const handleFirstname= (e)=>{
        setFirstname(e.target.value);
        if(e.target.value.length<1){
            setFirstnameError("First Name is required");
        }else if(e.target.value.length<3){
            setFirstnameError("First Name must be 3 or more characters");
        }else if(e.target.value.length>44){
            setFirstnameError("First Name must be less than 45 characters");
        }else{
            setFirstnameError("");
        }
    }
    const handleLastname= (e)=>{
        setLastname(e.target.value);
        if(e.target.value.length<1){
            setLastnameError("Last Name is required");
        }else if(e.target.value.length<3){
            setLastnameError("Last Name must be 3 or more characters");
        }else if(e.target.value.length>44){
            setLastnameError("Last Name must be less than 45 characters");
        }else{
            setLastnameError("");
        }
    }
    const handleEmail= (e)=>{
        setEmail(e.target.value);
        if(e.target.value.length<1){
            setEmailError("Email is required");
        }else if(e.target.value.length>=60){
            setEmailError("Email must be less than 60 characters");
        }else if(!re.test(e.target.value)){
            setEmailError("Not a valid Email");
        }else{
            setEmailError("");
        }
    }
    const handlePassword= (e)=>{
        setPassword(e.target.value);
        if(e.target.value.length<1){
            setPasswordError("Password is required");
        }else if(e.target.value.length<8){
            setPasswordError("Password must be 8 or more characters");
        }else if(e.target.value.length>=60){
            setPasswordError("Password must be less than 60 characters");
        }else{
            setPasswordError("");
        }
    }
    const handleConfirm= (e)=>{
        setConfirm(e.target.value);
        if(e.target.value!==password){
            setConfirmError("Password's must match!");
        }else{
            setConfirmError("");
        }
    }
    return(
        <div id={styles.container}>
            <form onSubmit={createUser}>
                <InputBox name="First Name" type="text" event={handleFirstname}/>
                {firstnameError?<p className={styles.warning}>{firstnameError}</p>:""}
                <InputBox name="Last Name" type="text" event={handleLastname}/>
                {lastnameError?<p className={styles.warning}>{lastnameError}</p>:""}
                <InputBox name="Email" type="email" event={handleEmail}/>
                {emailError?<p className={styles.warning}>{emailError}</p>:""}
                <InputBox name="Password" type="password" event={handlePassword}/>
                {passwordError?<p className={styles.warning}>{passwordError}</p>:""}
                <InputBox name="Confirm Password" type="password" event={handleConfirm}/>
                {confirmError?<p className={styles.warning}>{confirmError}</p>:""}
                {(firstnameError.length+lastnameError.length+emailError.length+passwordError.length+confirmError.length)<1?
                <input type='submit' value="submit" />:
                <input type='submit' value="submit" disabled/>
                }
            </form>
        </div>
    )
}

export default Form;