import React from 'react'

export const Navbar = () => {
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
    <div className='container'>
    <nav class="navbar navbar-expand-lg bg-body-tertiary justify-content-space-around">
    <div class="container-fluid justify-content-space-around">
    <img src="https://i.postimg.cc/dVJ6wyX4/Vector.png"></img><a class="navbar-brand" href="#"><span style={t1} >Lasles</span><span style={t2}>VPN</span></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class=" Ar navbar-nav me-auto mb-2 mb-lg-3 ">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" style={stylel}>About</a>
          </li>
        
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" style={stylel}>Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" style={stylel}>pricing</a>
          </li>
          <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#" style={stylel}>testonomials</a>
</li>
<li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#" style={stylel}>Help</a>
</li>
        </ul>
        <form class="d-flex" role="search">
          <p className='pe-3 mt-1'>sign in</p>
          <button type="button" class="btn btn-outline-danger text-center ps-4 pe-4 rounded-5 mb-2">Sign up</button>
        </form>
      </div>
    </div>
  </nav>
  </div>
  )
}
