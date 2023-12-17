import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = ({limit}) => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    const limitedServices = services.slice(0, limit);

    return (
        <div className='container text-center mt-5 mb-3'>
            <h2 style={{color:'#929AAB'}}>Our Services</h2>
            <div className='row px-auto mx-auto'>
                {
                    limitedServices.map(service=> <Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;