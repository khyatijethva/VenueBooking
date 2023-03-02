<template>
    <div class="login-page">

        <section class="login-section">
            <div class="container">
                <div class="login-logo">
                    <a href="/"><img src="../assets/images/login/login-logo.svg" alt="logo" /></a>
                </div>
                <div class="login-wrapper">
                    <div class="back-page">
                        <a class="back-link" href="/login"><img src="../assets/images/owl-left.svg" alt="back"> Go back</a>
                        <a href="/" class="close-form"><b-icon-x-lg /></a>
                    </div>
                    <h3>Forgot password</h3>
                    <p>Please enter your email</p>
                    <b-form>
                        <b-form-group id="input-group-1" label="Email" label-for="input-1">
                            <b-form-input id="input-1" type="email" placeholder="dorothy.henderson@mail.com" required></b-form-input>
                        </b-form-group>
                        <b-button type="submit" variant="secondary">Submit</b-button>
                    </b-form>
                   <br>
                    <div class="forgot-pass">
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
