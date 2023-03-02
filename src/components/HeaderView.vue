<template>
  <div id="app">
    <div class="header-wrap">
      <div class="container-fluid">
        <b-navbar toggleable="lg">
          <b-row>
            <b-col cols="6" xl="4" lg="3">
              <b-navbar-brand href="#">
                <img src="../assets/images/logo.svg" alt="logo" />
              </b-navbar-brand>
            </b-col>
            <b-col cols="6" xl="8" lg="9">
              <div class="button-toggle">
                <ul class="notifications">
                  <li>
                    <a href="#" class="heart">
                      <b-icon-heart />
                    </a>
                  </li>
                  <li>
                    <a href="#" class="bell">
                      <b-icon-bell />
                    </a>
                  </li>
                </ul>
                <b-navbar-toggle target="nav-collapse">
                  <span></span>
                  <span></span>
                  <span></span>
                </b-navbar-toggle>
              </div>
              <b-collapse id="nav-collapse" is-nav>
                <b-row>
                  <b-col lg="6" cols="12">
                    <b-navbar-nav>
                      <b-nav-item href="/" class="active">Home</b-nav-item>
                      <b-nav-item href="/venues">VENUES</b-nav-item>
                      <b-nav-item href="/contact">CONTACT</b-nav-item>
                    </b-navbar-nav>
                  </b-col>

                  <b-col lg="6" cols="12">
                    <div class="right-header">
                      <ul class="notifications">
                        <li>
                          <a href="#" class="heart">
                            <b-icon-heart />
                          </a>
                        </li>
                        <li>
                          <a href="#" class="bell">
                            <b-icon-bell />
                          </a>
                        </li>
                      </ul>
                      <a href="/login" class="btn btn-secondary btn-plain">LOGIN</a>
                      <a href="/signup" class="btn btn-secondary">SIGN UP</a>
                    </div>
                  </b-col>
                </b-row>
              </b-collapse>
            </b-col>
          </b-row>
        </b-navbar>
      </div>
    </div>
  </div>
</template>
