import React from 'react';
export default function Footer() {
    const stylel={
        color:'#4F5665',
      }
      const t1={
        color:'#4F5665',
        color:'black',
      }
      const t2={
        fontWeight: 'bold',
        color:'black',
      }
  return (
    <div className="contai footer text-center">
      <div className="row">
        {/* First Set of Products */}
        <div className="col-md-3 d-flex justify-content-center">
          <div className="product" style={{ marginRight: '10px' }}> {/* Adjusted margin */}
          <img src="https://i.postimg.cc/dVJ6wyX4/Vector.png"></img><a class="navbar-brand" href="#"><span style={t1} >Lasles</span><span style={t2}>VPN</span></a>
            <ul className="list-unstyled">
              <li className="text-center">LaslesVPN is a private virtual network that has unique features and has high security.</li> {/* Centered text */}
            
            </ul>
          </div>
        </div>
        {/* Second Set of Products */}
        <div className="col-md-3 d-flex justify-content-center">
          <div className="product" style={{ marginRight: '10px' }}> {/* Adjusted margin */}
            <p className="text-center"><strong>Product</strong></p> {/* Centered text */}
            <ul className="list-unstyled">
              <li className="text-center">Download</li> {/* Centered text */}
              <li className="text-center">Price</li> {/* Centered text */}
              <li className="text-center">Locations</li> {/* Centered text */}
              <li className="text-center">servers</li> {/* Centered text */}
              <li className="text-center">countreis</li> {/* Centered text */}
            </ul>
          </div>
        </div>
        {/* Third Set of Products */}
        <div className="col-md-3 d-flex justify-content-center">
          <div className="product" style={{ marginRight: '10px' }}> {/* Adjusted margin */}
            <p className="text-center"><strong>Engage</strong></p> {/* Centered text */}
            <ul className="list-unstyled">
              <li className="text-center">Tutorail </li> {/* Centered text */}
              <li className="text-center">about</li> {/* Centered text */}
              <li className="text-center">privacy policy</li> {/* Centered text */}
              <li className="text-center">FAQ </li> {/* Centered text */}
              <li className="text-center">help</li> {/* Centered text */}
              <li className="text-center">contact</li> {/* Centered text */}
            </ul>
          </div>
        </div>
        {/* Fourth Set of Products */}
        <div className="col-md-3 d-flex justify-content-center">
          <div className="product">
            <p className="text-center"><strong>Earn money</strong></p> {/* Centered text */}
            <ul className="list-unstyled">
            <li className="text-center">Affilated</li> {/* Centered text */}
              <li className="text-center">become partner</li> {/* Centered text */}
            
            
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
