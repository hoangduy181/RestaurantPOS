import React from "react";

function ForgotPwd() {
    return (
        <div class="modal modal-signin position-static d-block bg-secondary py-5" tabindex="-1" role="dialog" id="modalSignin">
            <div class="modal-dialog" role="document">
                <div class="modal-content rounded-5 shadow">
                    <div class="modal-header p-5 pb-4 border-bottom-0">
                        <h2 class="fw-bold mb-0">Forgot password</h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body p-5 pt-0">
                        <form class="">
                            <div class="form-floating mb-3">
                                <input type="tel" size="10" class="form-control rounded-4" id="floatingTel" placeholder="0123456789"></input>
                                <label for="floatingTel">Phone number</label>
                            </div>
                            <button class="w-100 mb-2 btn btn-lg rounded-4 btn-primary" style={{marginTop: 5}} type="submit">Send OTP</button>

                            <hr class="my-4"></hr>
                            <h2 class="fs-5 fw-bold mb-3">Enter verification code</h2>
                            <div id="otp" class="inputs d-flex flex-row justify-content-center mt-2"> 
                                <input class="m-2 text-center form-control rounded" type="text" id="input1" maxlength="1" /> 
                                <input class="m-2 text-center form-control rounded" type="text" id="input2" maxlength="1" /> 
                                <input class="m-2 text-center form-control rounded" type="text" id="input3" maxlength="1" /> 
                                <input class="m-2 text-center form-control rounded" type="text" id="input4" maxlength="1" /> 
                                <input class="m-2 text-center form-control rounded" type="text" id="input5" maxlength="1" /> 
                                <input class="m-2 text-center form-control rounded" type="text" id="input6" maxlength="1" /> 
                            </div>
                            <script src="./countDown.js"></script>
                            <div class="mt-3 content d-flex justify-content-center align-items-center"> 
                                <span>Didn't get the code?</span> <a href="#" class="text-decoration-none ms-3">Resend</a> 
                            </div>
                            <button class="w-100 mb-2 btn btn-lg rounded-4 btn-primary" style={{marginTop: 5}} type="submit">Verify OTP</button>
                        </form>
                    </div>
                </div>
            </div>
     </div>
    )
}

export default ForgotPwd;