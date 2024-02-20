import React from 'react';
import CountUp from "react-countup";


import { motion } from 'framer-motion';
export const Secondrow = () => {
    const t1 = {
        'font-weight': 'bold',
      };
      const text2 = {
        'font-size': '16px',
        'position':'relative',
        // 'left': '60px'
      };
      const custom = {
        'font-size': '11px',
        backgroundColor: '#F53838',
        color: 'white',
        'position':'relative',
        // 'left': '70px'
      };
      const tb = {
        'font-weight': 'bold',
        'font-size': '23px',
        'border-left': '1px dotted black'
    };
    

      
  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col-sm-6">
          <div className="card border-0 ">
            <div className="card-body">
            <motion.h5
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="card-title text-center fw-bold fs-1"
    >
      Want anything to be<br />
      <span>easy with </span>
      <span style={t1}>Lasles VPN</span>
    </motion.h5>
              
              
              <p className="  card-text ms-0 " style={text2}>Provide a network for all your needs with ease and fun using LaslesVPN <br></br><span>discover interesting features from us..</span></p>
              <a href="#" className=" custom btn btn ms-5 ps-4 pe-4 mt-5" style={custom}>Get started</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card border-0">
            <div className="card-body">
            
             <img
  src="https://i.postimg.cc/TwXrGkRy/Illustration-1.png"
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
      </div>
<div className='container mb-5'>
      <div className="row mt-5 text-center font-weight-bold">
       
      <div class="col-sm-4" style={tb}><CountUp
                    start={1}
                    end={90}
                    duration={30}
                />+<br/>users</div>
<div class="col-sm-4" style={tb}><CountUp
                    start={1}
                    end={30}
                    duration={30}
                />+ <br/>locations</div>

<div class="col-sm-4" style={tb}><CountUp
                    start={1}
                    end={50}
                    duration={30}
                />+ <br/>servers</div>
</div>
</div>

    </div>


  );
};



