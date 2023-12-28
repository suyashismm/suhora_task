import { useState, useEffect } from "react"
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom"
import { signup,reset } from "../features/auth/authSlice";
import Loading from "./Loading";
// import toast from 'react-toastify'


function SignUp() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formData;

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
            name,
            email,
            password
        }
        dispatch(signup(userData))
    }
    if(isLoading){
        return <Loading/>
    }

    return (
        <>
        <div className="heading">Signup</div>
        <div className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" id='name' name='name' value={name} placeholder="Enter your Name" onChange={onChange} />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" id='email' name='email' value={email} placeholder="Enter your email" onChange={onChange} />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id='password' name='password' value={password} placeholder="Enter password" onChange={onChange} />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-block">SignUp</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default SignUp