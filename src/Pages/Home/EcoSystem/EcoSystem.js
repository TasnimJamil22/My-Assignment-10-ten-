import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'; 
import img from '../../Images/eco2.avif';

const EcoSystem = () => {
    return (
        <div className='mx-lg-5 '>
            <div className='d-lg-flex justify-content-center bg-light py-5 px-4 rounded'>
                <div>
                    <img src={img} className='rounded w-100 my-4'   alt="" />
                </div>
                <div className='mx-5 my-auto text-start'>
                  <FontAwesomeIcon icon={faLeaf}  style={{color:'#D3D5FD', height:'60px'}}/>
                    <h5 className='mr-5'>We give you Right Ecosystem</h5>
                    <p className='mr-5 ' style={{color:'#929AAB'}}>We will give you a right ecosystem to make yourself better for Mindfulness. </p>
                </div>
            </div>
        </div>
    );
};

export default EcoSystem;