import { useState, useEffect } from "react"
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom"
import { login,reset } from "../features/auth/authSlice";
import Loading from "./Loading";

function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const navigate = useNavigate();
    const dispatch= useDispatch();

    const {user,isLoading,isSuccess,isError,message} = useSelector((state) => state.auth)
    useEffect(()=>{
        
        if(isSuccess || user)
        navigate('/')
        dispatch(reset())
    },[user,isError,isLoading,isSuccess,message,navigate,dispatch])



    const onChange = (e) =>{
        setFormData((data)=> ({
            ...data,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email,
            password,
        }
        dispatch(login(userData));
    }

    if(isLoading){
        return <Loading/>
    }

    return (
        <>
        <div className="heading"> Login</div>
        <div className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="email" className="form-control" id='email' name='email' value={email} placeholder="Enter your email" onChange={onChange} />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id='password' name='password' value={password} placeholder="Enter password" onChange={onChange} />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-block">Login</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default Login