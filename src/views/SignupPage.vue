<template>
    <div class="login-page">

        <section class="login-section">
            <div class="container">
                <div class="login-logo">
                    <a href="/"><img src="../assets/images/login/login-logo.svg" alt="logo" /></a>
                </div>
                <div class="signup-wrapper">
                    <a href="/" class="close-form"><b-icon-x-lg /></a>
                    <h3>Sign up to book this location</h3>
                    <p>It’s almost yours! Just let the host know who’s asking.</p>
                    <b-form>
                        <b-row>
                            <b-col cols="12" md="6">
                                <b-form-group id="input-group-1" label="Full name" label-for="input-1">
                                    <b-form-input id="input-1" type="text" placeholder="Full Name" required></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col cols="12" md="6">
                                <b-form-group id="input-group-2" label="Email" label-for="input-2">
                                    <b-form-input id="input-2" type="email" placeholder="Email Address" required></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col cols="12" md="6">
                                <b-form-group id="input-group-3" label="Password" label-for="input-3">
                                    <b-form-input id="input-3" type="password" placeholder="*******************" required></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col cols="12" md="6">
                                <b-form-group id="input-group-4" label="Phone Number" label-for="input-4">
                                    <b-form-input id="input-4" type="tel" placeholder="Phone Number" required></b-form-input>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        
                        <b-button type="submit" variant="secondary">Continue</b-button>
                    </b-form>
                    <div class="seperator">
                        <span>or</span>
                    </div>
                    <div class="login-with-btns">
                        <a href="#" class="btn btn-logins">
                            <img src="../assets/images/login/google.svg" alt="logins">
                            <span>Continue with Google</span>
                        </a>
                        <a href="#" class="btn btn-logins">
                            <img src="../assets/images/login/facebook.svg" alt="logins">
                            <span>Continue with Facebook</span>
                        </a>
                        <a href="#" class="btn btn-logins">
                            <img src="../assets/images/login/apple.svg" alt="logins">
                            <span>Continue with Apple</span>
                        </a>
                    </div>
                    <div class="forgot-pass">
                        <span class="forgot-span">By clicking 'Continue' you agree to the VenueBook <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>.</span>
                        <p>Already have an account? <a href="\login">Login</a></p>
                    </div>
                </div>

                <div class="login-copyrights">
                    <p>Copyright © 2000-2022 VenueBooking, Inc. All rights reserved.</p>
                </div>
            </div>
        </section>

    </div>
</template>
