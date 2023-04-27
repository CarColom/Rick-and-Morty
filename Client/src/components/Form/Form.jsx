import { useState } from "react";
import validation from "../Validation/Validation";
import style from "./Form.module.css";
import Fondo from "../../Imagenes/Fondo.mp4"

const Form = ({ login }) => {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return(

  
        <form className={style.form} onSubmit={handleSubmit}>
      <video
      className={style.myvideo}
      autoPlay
      muted
      loop
      src={Fondo}
    />
     
            
            <label htmlFor="email" style={{ color: "white"}}>Email: </label>
            <input type="email" name='email' value={userData.email} onChange={handleChange}/>
            {errors.email && <p style={{ color: "blue", fontSize: "10px" }}>{errors.email}</p>}
            <label htmlFor="password" style={{ color: "white"}}>Password: </label>
            <input type="text" name="password" value={userData.password} onChange={handleChange}/>
            {errors.password && <p style={{ color: "blue", fontSize: "10px"}}>{errors.password}</p>}

            <button>Submit</button>
        </form>
        
    )
}

export default Form;