import { React, useState } from 'react'
import Input from './Input';
import logo from '../Assets/logo.png';

export default function Navbar() {
  const [searchterm, setsearchterm] = useState("");
  return <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={logo} width="30" height="30" class="d-inline-block align-top mx-1" alt="" />
          To-Do
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page">Home</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{
              setsearchterm(e.target.value);
            }} />
          </form>
        </div>
      </div>
    </nav >

    <Input searchterm={searchterm} />
  </>
}
