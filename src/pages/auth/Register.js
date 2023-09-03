import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {
    // const navigate = useNavigate();
    const [emailTerm, setEmailTerm] = useState('');
    const [passTerm, setPassTerm] = useState('');
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    
    const handleSubmit = async (event) => {
        event.preventDefault();
                
        // console.log(emailTerm);
        // try{

        createUserWithEmailAndPassword(auth, emailTerm, passTerm).then(
            (userCreds) => {
                    const user = userCreds.user;
                    console.log(user);
            }
        ).catch((error) => {
                const dataError = error.message;
                console.log(dataError);
        })
        // }catch (error) {
        //     const errorCode = error.code;
        //     console.log(errorCode);
        // }
        
    }
    

    return(
        <div>
            <h1>this is Login Pages</h1>
                <form onSubmit={handleSubmit} >
                    <div className="input-container">
                        <label>Username </label>
                        <input type="text" name="email" required 
                        onChange={(e) => setEmailTerm(e.target.value)}
                        />
                        {/* {renderErrorMessage("email")} */}
                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" name="password" required  autoComplete=""
                        onChange={(e) => setPassTerm(e.target.value)}
                        />
                        {/* {renderErrorMessage("pass")} */}
                    </div>
                    <div className="button-container">
                        <input type="submit" />
                    </div>
                </form>
        </div>
    )
}


export default Register;
