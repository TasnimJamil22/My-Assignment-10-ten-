import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import ClientsFeedBack from './ClientsFeedBack/ClientsFeedBack';
import EcoSystem from './EcoSystem/EcoSystem';
import FAQ from './FAQ/FAQ';
import HealthBlog from './HealthBlog/HealthBlog';

const Home = () => {
   

    return (
       <div className='mx-auto'>
         <div className='mt-4 mx-auto '>
             
             {/* search field */}
             <InputGroup size="sm" className="mb-3 w-50 mx-auto">
         <Form.Control
           placeholder="Recipient's username"
           aria-label="Recipient's username"
           aria-describedby="basic-addon2"
         />
         <Button variant="outline-secondary" id="button-addon2">
           Button
         </Button>
       </InputGroup>
 
             <Banner></Banner>
             <Services limit={6}></Services>
             <HealthBlog></HealthBlog>
             <EcoSystem></EcoSystem>
             {/* <Services></Services> */}
             <ClientsFeedBack></ClientsFeedBack>
             <FAQ></FAQ>
             
         </div>
       </div>
    );
};

export default Home;