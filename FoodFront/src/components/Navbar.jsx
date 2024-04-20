import { Link } from "react-router-dom";


export function Navbar(){
    return(
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-Light">
  <div className="container-fluid">
    <Link className="navbar-brand" to={'/'}>InFOOD</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" >My Orders</Link>
        </li>
       <li><Link to={'/login'}> <button type="button" className="btn btn-outline-warning">Login</button></Link></li>
       <li><Link to={'/createUser'}> <button type="button" className="btn btn-outline-danger">SignUp</button></Link></li>
      </ul>
    </div>
  </div>
</nav>
    </div>
    )
}