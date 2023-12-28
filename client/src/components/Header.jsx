import { FaSignInAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux'
// import { logout,reset } from '../features/auth/authSlice';

function Header() {


    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const { user } = useSelector((state) => state.auth)

    // const onLogout = () => {
    //     dispatch(logout())
    //     dispatch(reset())
    //     navigate('/')
    // }

    return (
    <div className='header'>
        <div className='logo'>
            <Link to='/'>Home</Link>
        </div>
        <ul>
            <li><Link to='/login'><FaSignInAlt/>Login</Link></li>
            <li><Link to='/signup'><FaUser/>SignUp</Link></li>
            
        </ul >
    </div >
  )
}

export default Header