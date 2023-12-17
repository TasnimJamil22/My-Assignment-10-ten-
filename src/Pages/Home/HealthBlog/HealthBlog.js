import React from 'react';
import { Link } from 'react-router-dom';

const HealthBlog = () => {
    const blogs = [
        {"id": "1", "name":"How to manage your relationshiip","img":"https://images.unsplash.com/photo-1608389168343-ba8aa0cb3a63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"},
        {"id": "2", "name":"Is it always my fault?","img":"https://images.unsplash.com/photo-1574102289244-69b848408915?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"},
        {"id": "3", "name":"How to manage your Anger","img":"https://images.unsplash.com/photo-1525785967371-87ba44b3e6cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"},
        {"id": "4", "name":"Start today..not tomorrow","img":"https://images.unsplash.com/photo-1547483238-f400e65ccd56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"},
        
    ]
    return (
        <div className='container  '>
            <div className='row  '>
            <h2 style={{color:'#929AAB'}} className='mt-5'>Our Blogs</h2>
             
                {
                    blogs.map(blog => <div key={blog.id} className=' col-lg-3 col-md-6 col-sm-12   mx-auto  my-2 py-2 mx-1 rounded'>
                         
                        <div className=' inner rounded'>
                        <img src={blog.img}  className="w-100 rounded " alt="" />
                        </div>
                        <Link className='text-decoration-none text-secondary'><h6 style={{color:'#929AAB'}}>{blog.name}</h6></Link>
                         
                    </div>)
                }
             

            </div>
            <div className='my-5'>
                <div className='bg-secondary w-100 my-5' style={{height:'1px',backgrounColor:'#dadced' }}></div>
            </div>
        </div>
    );
};

export default HealthBlog;