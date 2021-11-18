import React from "react";
import LogInButton from "./LogInButton";

function SignUp() {
    return (
        <div class="modal modal-signin position-static d-block bg-secondary py-5" tabindex="-1" role="dialog" id="modalSignin">
            <div class="modal-dialog" role="document">
                <div class="modal-content rounded-5 shadow">
                    <div class="modal-header p-5 pb-4 border-bottom-0">
                        <h2 class="fw-bold mb-0">Sign up for free</h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body p-5 pt-0">
                        <form class="">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control rounded-4" id="floatingName" placeholder="Richeese Nabati"></input>
                                <label for="floatingName">Full name</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="date" class="form-control rounded-4" id="floatinDOB" placeholder="dd/mm/yyyy"></input>
                                <label for="floatingDOB">Date of Birth</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="tel" class="form-control rounded-4" id="floatingTel" placeholder="0123456789"></input>
                                <label for="floatingTel">Phone number</label>
                            </div>
                            
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control rounded-4" id="floatingPassword" placeholder="Password"></input>
                                <label for="floatingPassword">Password</label>
                            </div>
                            <label>
                                <input type="checkbox" style={{marginRight: 5}} value="remember-me"></input>
                                Receive restaurant's new offers.
                            </label>

                            <div class="d-flex links">
                                    Already have an account? <a href="#" class="ml-2" style={{marginLeft: 2}}> Login here.</a>
                            </div>

                            <button class="w-100 mb-2 btn btn-lg rounded-4 btn-primary" style={{marginTop: 5}} type="submit">Sign up</button>
                            <small class="text-muted">By clicking Sign up, you agree to the terms of use.</small>
                            <hr class="my-4"></hr>
                            <h2 class="fs-5 fw-bold mb-3">Or use a third-party</h2>
                            <LogInButton thirdParty = "Log in with Facebook" icon = "#facebook" style = "w-100 py-2 mb-3 btn btn-outline-primary rounded-4"/>
                            <LogInButton thirdParty = "Log in with Google" icon = "#google" style = "w-100 py-2 mb-1 btn btn-outline-danger rounded-4"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;