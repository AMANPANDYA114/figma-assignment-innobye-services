import React from 'react'

const Hero = () => {
    const type = {
        'list-style-type': 'none',
      }; 
      const space = {
        'font-size': '22px',
    };
      
  return (
 
    <div className='container mt-5'>
    <div className="row">
      <div className="col-sm-6">
        <div className="card border-0">
          <div className="card-body">
          <img
  src="https://i.postimg.cc/RZffBrHJ/Illustration-2.png"
  alt="Illustration"
  style={{
    width: '70%',
    height: 'auto',
    objectFit: 'cover',
    display: 'block',
    margin: '0 auto',
  }}
/>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card border-0">
          <div className="card-body">
            <h5 className="card-title text-center">We provide many<br/> <span>features you can Use</span> </h5> 
            <p className="card-text  text-center" >You can explore the features that we provide with fun and <br/>have their own functions each feature.</p>
           <li className='mb-4 text-center' style={type}><span><img  className ="me-3" src='https://i.postimg.cc/rwDG0gwG/Group-1120.png'/></span>powerfull online protection</li>
           <li className='mb-4 text-center' style={type}><span><img className ="me-3" src='https://i.postimg.cc/rwDG0gwG/Group-1120.png'/></span>Internet without borders.</li>
     
           <li className='mb-4 text-center' style={type}><span><img className ="me-3" src='https://i.postimg.cc/rwDG0gwG/Group-1120.png'/></span>No specific time limits.</li>
          </div>
        </div>
      </div>
    </div>

    <div className='container text-center'>
   <span className='mb-' style={space}><b>Choose your plan</b></span> 
    <p className='mt-5'>Let's choose the package that is best for you and explore it happily and<br/> cheerfully.</p>
    
    </div>
  </div>
  


  )
}

export default Hero