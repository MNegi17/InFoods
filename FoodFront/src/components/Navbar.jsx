import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-Light">
        <div className="container-fluid d-flex justify-content-between">
          {/* Logo on the left */}
          <Link className="navbar-brand" to={'/'}>
            InFOOD
          </Link>

          {/* Navbar links on the right */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item me-3">
                <Link className="nav-link active" aria-current="page" to={'/'}>
                  Home
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link">My Orders</Link>
              </li>
              <li>
                <Link to={'/login'}>
                  <button type="button " className=" me-3 btn btn-outline-warning">
                    Login
                  </button>
                </Link>
              </li>
              <li>
                <Link to={'/createUser'}>
                  <button type="button" className=" me-3 btn btn-outline-danger">
                    SignUp
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
