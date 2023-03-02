<template>
    <div class="login-page">

        <section class="login-section">
            <div class="container">
                <div class="login-logo">
                    <a href="/"><img src="../assets/images/login/login-logo.svg" alt="logo" /></a>
                </div>
                <div class="login-wrapper">
                    <a href="/" class="close-form"><b-icon-x-lg /></a>
                    <h3>Welcome back</h3>
                    <p>Please Login</p>
                    <b-form>
                        <b-form-group id="input-group-1" label="Email" label-for="input-1">
                            <b-form-input id="input-1" type="email" placeholder="dorothy.henderson@mail.com" required></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-2" label="Password" label-for="input-2">
                            <b-form-input id="input-2" type="password" placeholder="*******************" required></b-form-input>
                        </b-form-group>
                        <b-button type="submit" variant="secondary">Login</b-button>
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
                        <span class="forgot-span"><a href="/forgotpassword">Forgot password?</a></span>
                        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
                    </div>
                </div>

                <div class="login-copyrights">
                    <p>Copyright © 2000-2022 VenueBooking, Inc. All rights reserved.</p>
                </div>
            </div>
        </section>

    </div>
</template>
