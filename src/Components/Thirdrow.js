import React from 'react';
import { motion } from 'framer-motion';

const Thirdrow = () => {
    const space = {
        'font-size': '16px',
    };
  return (
    <div className='container1 align-item-center'>
   
    <div className="  row align-items-center">
      <div className="col-sm-4 text-center">
        <div className="card text-center justify-content-center mb-3 ms-md-3" style={{ width: '209px' }}>
          <div className="card-body align-items-center">
        
          <h5 className="card-title text-center"><img src="https://i.postimg.cc/h4rj1wnG/Free.png"/></h5>
          <span className='text-center' style={space}><b>standard plan</b></span> 
            <p className="card-text" style={{ whiteSpace: 'nowrap' }}>
            <ul className=" custom-list list-unstyled">
                <li > unlimited bandwith</li>
                <li>Encrypted Connection</li>
                <li className='l'>Yes Traffic Logs has been........</li>
                <li>Works on All Devices</li>
                </ul>
                <button type="button" class=" mt-5 btn btn-outline-danger text-center ps-4 pe-4 rounded-5 mb-2">Select</button>
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card text-center mb-3 mb-md-0" style={{ width: '209px' }}>
          <div className="card-body">
            <h5 className="card-title text-center"><img src="https://i.postimg.cc/h4rj1wnG/Free.png"/></h5>
            <span className='text-center' style={space}><b>standard plan</b></span> 
            <p className="card-text" style={{ whiteSpace: 'nowrap' }}>
            <ul className=" custom-list list-unstyled">
                <li style={{ whiteSpace: 'nowrap' }} > unlimited bandwith</li>
                <li style={{ whiteSpace: 'nowrap' }}> Encrypted Connection</li>
                <li className="l"style={{ whiteSpace: 'nowrap' }}>Yes Traffic Logs has been........</li>
                <li  style={{ whiteSpace: 'nowrap' }}>Works on All Devices</li>
                </ul>
                <button type="button" class=" mt-5 btn btn-outline-danger text-center ps-4 pe-4 rounded-5 mb-2">Select</button>
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card text-center mb-3 mb-md-0" style={{ width: '209px' }}>
          <div className="card-body">
          <h5 className="card-title text-center"><img src="https://i.postimg.cc/h4rj1wnG/Free.png"/></h5>
          <p className="card-text" style={{ whiteSpace: 'nowrap' }}>
            <ul className=" custom-list list-unstyled">
                <li > unlimited bandwith</li>
                <li>Encrypted Connection</li>
                <li className='l'>Yes Traffic Logs has been........</li>
                <li>Works on All Devices</li>
                </ul>

                <button type="button" class="buttonC mt-5 btn btn-outline-danger text-center ps-4 pe-4 rounded-5 mb-2">Select</button>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className='container text-center'>
   <span className='left' style={space}><b>Huge Global Network of Fast VPN</b></span> 
    <p className='mt-5'>See LaslesVPN everywhere to make it easier for you when you move locations.</p>
    
    </div>
   
{/* map */}
<div className="container map ">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="card border-0 mb-5" style={{ width: "46rem" }}>
        <img className="card-img-top text-center" src="https://i.postimg.cc/Jh5FC396/Huge-Global.png" alt="Card image cap"/>
    
       <div className="mt-4">
       <img className="card-img-top text-center" src="https://i.postimg.cc/L8TBVmw7/Sponsored.png" alt="Card image cap"/>
       </div>

      </div>
    </div>
  </div>
</div>






   {/*  */}
   
    </div>
  );
}

export default Thirdrow;
