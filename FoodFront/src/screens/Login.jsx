import React,{useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom'

export default function Login() {
  const [details,setDetails] = useState({email:"",password:""})
  const navigate = useNavigate();

    const clickhandler = (a)=>{
        setDetails({...details,[a.target.name]:a.target.value})
    }

   const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/loginUser',{
          method:'POST',
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify({
            email:details.email,
            password:details.password
          })
        });
        const json = await response.json()
        console.log(json)
        if(!response.ok){
          alert("Enter Valid Credentials")            
        }
        if(response.ok){
          localStorage.setItem("authToken",json.authToken);
          console.log(localStorage.getItem("authToken"));
          navigate('/')            
        }
   }
  return (
    <div id="login">
    <form id='loginform' onSubmit={handleSubmit}>
      <h1>Login</h1><br />
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control"  id="exampleInputEmail1" onChange={clickhandler} name='email' value={details.email}/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" onChange={clickhandler} name='password' value={details.password} />
    </div>
    <button type="submit" className="btn btn-primary">Login</button>
    <Link to="/createUser" className='m-3 btn btn-danger'>I'm a new user</Link>
  </form>
  </div>
  )
}
