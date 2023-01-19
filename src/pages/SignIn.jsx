import { PageTitle } from "../functions/pagetitle";

import { Link } from 'react-router-dom'

const SignIn = () => {

    PageTitle("SignIn")

    return (
    <>
        <div className="container-sm bg-theme-grey p-5">
        <h1 className="mb-3">Sign in</h1>
        <form id="loginForm" className="container-sm">
          <div className="mb-3">
            <label for="email" className="form-label">E-mail</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="user@example.com" required title="Must be a valid email" />
          </div>
  
          <div className="mb-3">
            <label for="email" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" placeholder="********" required minlength="8" title="Password must be minimum 8 characters long" />
          </div>
  
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="rememberMe" checked />
            <label className="form-check-label" for="rememberMe">Remember me</label>
          </div>
 
          <div className="d-grid my-4">
            <button type="submit" className="btn btn-secondary btn-lg">Login</button>
          </div>

          <div className="text-center my-2 text-dark">Don't have an user?</div>
          <div className="d-flex justify-content-center">
            <Link className="text-dark px-2 ps-6" to="#">Register for applicants</Link>
            <Link className="text-dark px-2 fs-6" to="#">Register for companies</Link>
          </div>
        </form>
      </div>
    </>
    )
}
export default SignIn;