import React, { useState } from 'react'
import Animation from './Animation'
import Services from './Services'
export default function LoginSingup() {
  const [login ,setLogin] =useState('SingUp here')
  const handleLoginClick=()=>{
    setLogin('Login here')
  }
  function handleForm(e){
   e.preventdefault()
   console.log(e.target.value)
  }
  return (
    <div>

 <div className="row mt-3 "  data-aos="fade-right">
    <div className="card col-6 offset-3">
    <h2>{login}</h2>
   
      <form onSubmit={handleForm} noValidate className="needs-validation">

        <div className="mb-3">
          <label htmlFor="title" className="form-label">Enter Email</label>
          <input name="listing[title]" placeholder="email@gmail.com" type="text" className="form-control" required />
          <div className="valid-feedback"> Email look goods</div>
          <div className="invalid-feedback">Enter Email</div>
        </div>
        
      

        <div className="mb-3">
          <label htmlFor="location" className="form-label">Enter Name</label>
          <input name="listing[location]" id='location' placeholder="enter name" type="text" className="form-control" required />
          <div className="valid-feedback"> name is nice!</div>
          <div className="invalid-feedback">Enter name right name</div>
        </div>
 {login=='SingUp here' ? <> <div className="col-auto">
    <label htmlFor="inputPassword6" className="col-form-label">Password</label>
  </div>
  <div className="col-auto">
    <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
  </div>
  <div className="col-auto">
    <span id="passwordHelpInline" className="form-text">
      Must be 8-20 characters long.
    </span>
  </div></> :<></>}

 


        <div className="mb-3  "><button className="btn btn-dark add-btn col-8 mt-3">Add</button>  </div>
        </form>
         <p>Alredy have an account ?<button className='btn  btn-danger' onClick={handleLoginClick}> {login=='SingUp here'?<>Login here</>:<>SingUp Here</>} </button></p>
     
    </div> 
   </div>
   <Services />
    </div>
  )
}
