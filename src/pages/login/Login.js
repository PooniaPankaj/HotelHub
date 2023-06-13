import { useContext, useState } from "react"
import "./login.css"
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined
    });

    const {  loading, error, dispatch } = useContext(AuthContext);


    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleClick = async (e)=>{
        // to prevent page from refreshing
        e.preventDefault();
        dispatch({type:"LOGIN_START"})
        try {
            const res = await axios.post("/auth/login",credentials)
            dispatch({type:"LOGIN_SUCCESS",payload:res.data})
            navigate("/");
        } catch (error) {
            dispatch({type:"LOGIN_FAILURE",payload:error.response.data})
        }

    }


    return (
        <div className="login">
            <div className="lContainer">
                <input type="text" placeholder="UserName " id="username" name="username" onChange={handleChange} className="lInput"></input>
                <input type="password" placeholder="Enter Password " id="password" name="password" onChange={handleChange} className="lInput"></input>
                <button className="lButton" onClick={handleClick} disabled={loading} >Login</button>
                {error && <span>{error.message}</span>}
            </div>

        </div>
    )
}

export default Login
