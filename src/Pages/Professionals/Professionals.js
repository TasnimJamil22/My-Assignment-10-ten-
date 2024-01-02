import React, { useEffect, useState } from 'react';
import Professional from './Professional/Professional';

const Professionals = () => {
    const [professionals,setProfessionals] = useState([]);
    useEffect(()=>{
        fetch('/professionals.json')
        .then(res=>res.json())
        .then(data=>setProfessionals(data))
    },[])
    return (
        <div className='container text-center '>
            <h2 className='pt-4'><span style={{color:'#929AAB'}}>Meet</span> Our Professionals</h2>
             <p style={{color:'#929AAB'}}>Our specialists are always here for you....</p>
             
            <div className='row px-auto mx-auto'>
                {
                    professionals.map(professional=> <Professional
                    key={professional.id}
                    professional={professional}
                    >
                    </Professional>)
                }
            </div>
            
        </div>
    );
};

export default Professionals;