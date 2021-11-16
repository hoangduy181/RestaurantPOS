import React from "react";
// import "./login.css"
import LogInButton from "./LogInButton";
import {Link} from "react-router-dom"
// component 
//jsx

function LogIn() {
    //func handleClick
    return(
        <div className = "login">
            <div className="modal modal-signin position-static d-block bg-secondary py-5" tabindex="-1" role="dialog" id="modalSignin">
                <div className="modal-dialog" role="document">
                    <div className="modal-content rounded-5 shadow">
                    <div className="modal-header p-5 pb-4 border-bottom-0">
                        <h2 className="fw-bold mb-0">Log in</h2>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>  
                    <div className="modal-body p-5 pt-0">
                        <form className="">
                        <div className="form-floating mb-3">
                            <input type="tel" className="form-control rounded-4" id="floatingInput" placeholder="0123456789"></input>
                            <label for="floatingInput">Phone number</label>
                        </div>
                        <div className="form-floating mb-2">
                            <input type="password" className="form-control rounded-4" id="floatingPassword" placeholder="Password"></input>
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div className="d-flex justify-content-between">
                          <small class="mb-2"><Link to = "/signup">Sign up</Link></small>
                          <small class="mb-2"><Link to = "/resetpassword">Forgot password?</Link></small>
                        </div>
                        <button className="w-100 mb-2 btn btn-lg rounded-4 btn-primary" type="submit">Log in</button>
                        <hr className="my-4"></hr>
                        <h2 className="fs-5 fw-bold mb-3">Or use a third-party</h2>
                        <LogInButton thirdParty = "Log in with Facebook" icon = "#facebook" style = "w-100 py-2 mb-3 btn btn-outline-primary rounded-4"/>
                        <LogInButton thirdParty = "Log in with Google" icon = "#google" style = "w-100 py-2 mb-1 btn btn-outline-danger rounded-4"/>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default LogIn;


{/* <div class="modal modal-signin position-static d-block bg-secondary py-5" tabindex="-1" role="dialog" id="modalSignin">
  <div class="modal-dialog" role="document">
    <div class="modal-content rounded-5 shadow">
      <div class="modal-header p-5 pb-4 border-bottom-0">
        <!-- <h5 class="modal-title">Modal title</h5> -->
        <h2 class="fw-bold mb-0">Sign up for free</h2>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body p-5 pt-0">
        <form class="">
          <div class="form-floating mb-3">
            <input type="email" class="form-control rounded-4" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control rounded-4" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
          </div>
          <button class="w-100 mb-2 btn btn-lg rounded-4 btn-primary" type="submit">Sign up</button>
          <small class="text-muted">By clicking Sign up, you agree to the terms of use.</small>
          <hr class="my-4">
          <h2 class="fs-5 fw-bold mb-3">Or use a third-party</h2>
          <button class="w-100 py-2 mb-2 btn btn-outline-dark rounded-4" type="submit">
            <svg class="bi me-1" width="16" height="16"><use xlink:href="#twitter"/></svg>
            Sign up with Twitter
          </button>
          <button class="w-100 py-2 mb-2 btn btn-outline-primary rounded-4" type="submit">
            <svg class="bi me-1" width="16" height="16"><use xlink:href="#facebook"/></svg>
            Sign up with Facebook
          </button>
          <button class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-4" type="submit">
            <svg class="bi me-1" width="16" height="16"><use xlink:href="#github"/></svg>
            Sign up with GitHub
          </button>
        </form>
      </div>
    </div>
  </div>
</div> */}

