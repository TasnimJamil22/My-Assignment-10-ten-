import React from 'react';
import { Carousel } from 'react-bootstrap';

const ClientsFeedBack = () => {
    return (
        <div className='my-5 py-5'>
            <h2 className='py-4'>Clients <span style={{color:'#929AAB'}}>Feedback</span></h2>
            <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block  rounded-circle mx-auto "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwV-ZlYIzt99NtF3VYo78ImnMOqftNDiMDvci5pXZZJ-hzWhqsSvre_E4UCqoJ7hJMUX4&usqp=CAU"
          style={{height:"100px", width:"100px"}}
          alt="First slide"
        /> <br />
        <p className='pb-3 mx-5'>I am truly impressed with how you have managed to meet every goal set before you </p>
        <Carousel.Caption>
           
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block  rounded-circle mx-auto "
          src="https://contact-centres.com/wp-content/uploads/2017/03/sjs.john_.agent_.image_.march_.2017-600x400.jpg"
          style={{height:"100px", width:"100px"}}
          alt="First slide"
        /> <br />
        <p className='pb-3 mx-5'>I am truly impressed with how you have managed to meet every goal set before you </p>
        <Carousel.Caption>
           
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block  rounded-circle mx-auto "
          src="https://watermark.lovepik.com/photo/20211130/large/lovepik-customer-service-men-picture_501220977.jpg"
          style={{height:"100px", width:"100px"}}
          alt="First slide"
        /> <br />
        <p className='pb-3 mx-5'>I am truly impressed with how you have managed to meet every goal set before you </p>
        <Carousel.Caption>
           
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default ClientsFeedBack;