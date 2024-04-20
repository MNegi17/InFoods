import React,{useState} from 'react'
import { Link } from 'react-router-dom'


export default function SignUp() {
    
    const [details,setDetails] = useState({name:"",email:"",password:"",geolocation:""})

    const clickhandler = (a)=>{
        setDetails({...details,[a.target.name]:a.target.value})
    }

   const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/createUser',{
          method:'POST',
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify({
            name:details.name,
            email:details.email,
            password:details.password,
            location:details.geolocation
          })
        });
        const json = await response.json()
        console.log(json)
        if(!response.ok){
          alert("Enter Valid Credentials")            
        }
   }

  return (
    <div id="signup">
    <form id='signform' onSubmit={handleSubmit}>
    <h1>Sign Up</h1><br />
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Name</label>
      <input type="text" className="form-control" id="name" onChange={clickhandler} name='name' value={details.name} />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control"  onChange={clickhandler} name='email' value={details.email}/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" onChange={clickhandler} name='password' value={details.password} />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputAddress" className="form-label">Address</label>
      <input type="" className="form-control" id="exampleInputaddress" onChange={clickhandler} name='geolocation' value={details.geolocation} />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
  </form>
  </div>
  )
}
