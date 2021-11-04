import react,{useState} from "react";
import styles from './form.module.css'

const InputBox = (props)=>{
    const {name,type,event} =props;
    const id=name.toLowerCase() .split(" ").join("_");
    return(
        <div className={styles.inputBox}>
            <label for={id}>
                {name}  <input name={id} id={id} type={type} onChange={event}/>
            </label>
        </div>
    )
}
const Form = (props)=>{
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const createUser = (e) =>{
        e.preventDefault();
        const newUser = {firstname, lastname, email, password}
        console.log("Welcome",newUser)
    }

    return(
        <div id={styles.container}>
            <form onSubmit={createUser}>
                <InputBox name="First Name" type="text" event={(e)=>setFirstname(e.target.value)}/>
                <InputBox name="Last Name" type="text" event={(e)=>setLastname(e.target.value)}/>
                <InputBox name="Email" type="email" event={(e)=>setEmail(e.target.value)}/>
                <InputBox name="Password" type="password" event={(e)=>setPassword(e.target.value)}/>
                <InputBox name="Confirm Password" type="password" event={(e)=>setConfirm(e.target.value)}/>
            </form>
            <h3>Your Form Data</h3>
            <div className={styles.results}>
            <div className={styles.labels}>
                <p>First Name</p>
                <p>Last Name</p>
                <p>Email</p>
                <p>Password</p>
                <p>Confirm Password</p>
            </div>
            <div className={styles.data}>
                <p>{firstname}</p>
                <p>{lastname}</p>
                <p>{email}</p>
                <p>{password}</p>
                <p>{confirm}</p>
            </div>
            </div>
        </div>
    )
}

export default Form;