import React from 'react'

function Header() {
  return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Blogger</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Post</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"></a>
              </li>
              <br />
      <li className="navbar-item">
        <input placeholder = "Search Content"/>
      </li>
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}


export default Header
