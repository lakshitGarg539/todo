import {React, useState} from 'react'
import Input from './Input';
import logo from '../Assets/logo.png';
export default function Navbar() {
  const [searchterm, setsearchterm] = useState("");
  return <>
    <nav class="navbar navbar-dark bg-dark">
    <div className="container-fluid">
      <div>
    <img src={logo} alt="" style={{width:"1.7em"}} />
    <a className="navbar-brand px-2" href="#">To-Do</a>
      </div>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{setsearchterm(e.target.value)}}/>
    </form>
  </div>
</nav>

  <Input searchterm = {searchterm}/>
  </>
}
