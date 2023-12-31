import React, { useContext } from 'react'; 
import google from '../../Images/SocialLogin/google (1).png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.config';
import { useNavigate , useLocation} from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const SocialLogin = () => {
    // const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const {user,loading,signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    var from = (location.state && location.state.from && location.state.from.pathname) || '/';

    if(user){
        navigate(from,{replace: true});
    }
    return (
        <div className='mx-auto'>
            <div> 
                <div className='d-flex w-50 justify-content-center mx-auto'>
                    <div className='w-50 my-4 px-3 ' style={{height:'1px',backgroundColor:'#D3D5FD'}}></div>
                    <p className='mx-3 mt-2'>or</p>
                    <div className='w-50 my-4   px-3' style={{height:'1px',backgroundColor:'#D3D5FD'}}></div>
                </div>
                
                    <div className='bg-light w-50 mx-auto p-3 rounded text-center'>
                    
                    <p>Sign In with <button onClick={()=>signInWithGoogle()} style={{backgroundColor:'#D3D5FD'}} className='btn btn-sm btn-light rounded'>
                        <img src={google} alt="" />Google</button></p>
                    </div>
                     
                 
            </div>
        </div>
    );
};

export default SocialLogin;