<template>
    <section class="popular-event">
        <img src="../assets/images/shape-1.svg" class="shape-icon" alt="shape">
        <div class="container">
            <div class="heading">
                <h3>Popular</h3>
            </div>
            <div class="event-wrapper">
                <div class="event-tab">
                    <b-tabs card>
                        <b-tab title="Events" active>
                            <b-card-text>
                                <b-row>
                                    <b-col cols="12" lg="4" md="6">
                                        <div class="event-box">
                                            <a href="#">
                                                <img src="../assets/images/news.jpg" alt="news">
                                                <div class="news-desc">
                                                    <div class="news-head">
                                                        <h5>Meeting</h5>
                                                        <p>180000 Venues</p>
                                                    </div>
                                                    <img src="../assets/images/news-arw.svg" alt="news">
                                                </div>
                                            </a>
                                        </div>
                                    </b-col>
                                    <b-col cols="12" lg="4" md="6">
                                        <div class="event-box">
                                            <a href="#">
                                                <img src="../assets/images/news1.png" alt="news">
                                                <div class="news-desc">
                                                    <div class="news-head">
                                                        <h5>Birthday party</h5>
                                                        <p>32546 Venues</p>
                                                    </div>
                                                    <img src="../assets/images/news-arw.svg" alt="news">
                                                </div>
                                            </a>
                                        </div>
                                    </b-col>
                                    <b-col cols="12" lg="4" md="12" class="part-column">
                                        <div class="event-box">
                                            <a href="#">
                                                <img src="../assets/images/news2.jpg" alt="news">
                                                <div class="news-desc">
                                                    <div class="news-head">
                                                        <h5>Wedding Venue</h5>
                                                        <p>32546 Venues</p>
                                                    </div>
                                                    <img src="../assets/images/news-arw.svg" alt="news">
                                                </div>
                                            </a>
                                        </div>
                                        <b-row cols="2">
                                            <b-col>
                                                <div class="event-box">
                                                    <a href="#">
                                                        <img src="../assets/images/news1.png" alt="news">
                                                        <div class="news-desc">
                                                            <div class="news-head">
                                                                <h5>Trade shows</h5>
                                                                <p>32546 Venues</p>
                                                            </div>
                                                            <img src="../assets/images/news-arw.svg" alt="news">
                                                        </div>
                                                    </a>
                                                </div>
                                            </b-col>
                                            <b-col>
                                                <div class="event-box">
                                                    <a href="#">
                                                        <img src="../assets/images/mumbai.jpg" alt="news">
                                                        <div class="news-desc">
                                                            <div class="news-head">
                                                                <h5>Social events</h5>
                                                                <p>32546 Venues</p>
                                                            </div>
                                                            <img src="../assets/images/news-arw.svg" alt="news">
                                                        </div>
                                                    </a>
                                                </div>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>
                                <ul class="tags">
                                    <li><a href="#">Webinars</a></li>
                                    <li><a href="#">Classes</a></li>
                                    <li><a href="#">Interactive performances</a></li>
                                    <li><a href="#">Summits</a></li>
                                    <li><a href="#">Auctions</a></li>
                                    <li><a href="#">Exercise classes</a></li>
                                    <li><a href="#">Themed parties</a></li>
                                    <li><a href="#">Gala dinners</a></li>
                                    <li><a href="#">Music festivals</a></li>
                                    <li><a href="#">Food festivals</a></li>
                                    <li><a href="#">Conferences</a></li>
                                    <li><a href="#">Boutique shops</a></li>
                                    <li><a href="#">Reunions</a></li>
                                    <li><a href="#">Food collaborations</a></li>
                                    <li><a href="#">Sponsored sporting events</a></li>
                                    <li><a href="#">Other</a></li>
                                </ul>
                            </b-card-text>
                        </b-tab>
                        <b-tab title="Venues">
                            <carousel class="slider_event" :nav="true" :items="4" :dots="false" :mouseDrag="true" :touchDrag="true" :smartSpeed="800" :margin="30"
                            :responsive="{0:{items: 1},575:{items: 2},991:{items: 3},1199:{items: 4}}" >
                                <div class="product-box">
                                    <div class="product-image">
                                        <img src="../assets/images/news.jpg" alt="venue">
                                        <div class="productoffer">
                                            <span class="label-off">20% off</span>
                                            <a href="#" class="wishlist">
                                                <b-icon-heart />
                                            </a>
                                        </div>
                                        <div class="rating">
                                            <b-icon-star-half /> 4.8
                                        </div>
                                    </div>
                                    <div class="product-description">
                                        <h6><a href="#">Entire serviced classy moutain house</a></h6>
                                        <div class="product-views">
                                            <p><b-icon-pin-map /> Mumbai, India</p>
                                            <p><b-icon-people /> 150-180 capacity</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-box">
                                    <div class="product-image">
                                        <img src="../assets/images/news.jpg" alt="venue">
                                        <div class="productoffer">
                                            <span class="label-off">20% off</span>
                                            <a href="#" class="wishlist">
                                                <b-icon-heart />
                                            </a>
                                        </div>
                                        <div class="rating">
                                            <b-icon-star-half /> 4.8
                                        </div>
                                    </div>
                                    <div class="product-description">
                                        <h6><a href="#">Entire serviced classy moutain house</a></h6>
                                        <div class="product-views">
                                            <p><b-icon-pin-map /> Mumbai, India</p>
                                            <p><b-icon-people /> 150-180 capacity</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-box">
                                    <div class="product-image">
                                        <img src="../assets/images/news.jpg" alt="venue">
                                        <div class="productoffer">
                                            <span class="label-off">20% off</span>
                                            <a href="#" class="wishlist">
                                                <b-icon-heart />
                                            </a>
                                        </div>
                                        <div class="rating">
                                            <b-icon-star-half /> 4.8
                                        </div>
                                    </div>
                                    <div class="product-description">
                                        <h6><a href="#">Entire serviced classy moutain house</a></h6>
                                        <div class="product-views">
                                            <p><b-icon-pin-map /> Mumbai, India</p>
                                            <p><b-icon-people /> 150-180 capacity</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-box">
                                    <div class="product-image">
                                        <img src="../assets/images/news.jpg" alt="venue">
                                        <div class="productoffer">
                                            <span class="label-off">20% off</span>
                                            <a href="#" class="wishlist">
                                                <b-icon-heart />
                                            </a>
                                        </div>
                                        <div class="rating">
                                            <b-icon-star-half /> 4.8
                                        </div>
                                    </div>
                                    <div class="product-description">
                                        <h6><a href="#">Entire serviced classy moutain house</a></h6>
                                        <div class="product-views">
                                            <p><b-icon-pin-map /> Mumbai, India</p>
                                            <p><b-icon-people /> 150-180 capacity</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-box">
                                    <div class="product-image">
                                        <img src="../assets/images/news.jpg" alt="venue">
                                        <div class="productoffer">
                                            <span class="label-off">20% off</span>
                                            <a href="#" class="wishlist">
                                                <b-icon-heart />
                                            </a>
                                        </div>
                                        <div class="rating">
                                            <b-icon-star-half /> 4.8
                                        </div>
                                    </div>
                                    <div class="product-description">
                                        <h6><a href="#">Entire serviced classy moutain house</a></h6>
                                        <div class="product-views">
                                            <p><b-icon-pin-map /> Mumbai, India</p>
                                            <p><b-icon-people /> 150-180 capacity</p>
                                        </div>
                                    </div>
                                </div>
                            </carousel>
                        </b-tab>
                        <b-tab title="Location">
                            <b-card-text>
                                <b-row>
                                    <b-col cols="12" lg="4" md="6">
                                        <div class="event-box">
                                            <a href="#">
                                                <img src="../assets/images/news.jpg" alt="news">
                                                <div class="news-desc">
                                                    <div class="news-head">
                                                        <h5>Meeting</h5>
                                                        <p>15000 Venues</p>
                                                    </div>
                                                    <img src="../assets/images/news-arw.svg" alt="news">
                                                </div>
                                            </a>
                                        </div>
                                    </b-col>
                                    <b-col cols="12" lg="4" md="6">
                                        <div class="event-box">
                                            <a href="#">
                                                <img src="../assets/images/news1.png" alt="news">
                                                <div class="news-desc">
                                                    <div class="news-head">
                                                        <h5>Birthday party</h5>
                                                        <p>4500 Venues</p>
                                                    </div>
                                                    <img src="../assets/images/news-arw.svg" alt="news">
                                                </div>
                                            </a>
                                        </div>
                                    </b-col>
                                    <b-col cols="12" lg="4" md="12" class="part-column">
                                        <div class="event-box">
                                            <a href="#">
                                                <img src="../assets/images/news2.jpg" alt="news">
                                                <div class="news-desc">
                                                    <div class="news-head">
                                                        <h5>Wedding Venue</h5>
                                                        <p>32546 Venues</p>
                                                    </div>
                                                    <img src="../assets/images/news-arw.svg" alt="news">
                                                </div>
                                            </a>
                                        </div>
                                        <b-row cols="2">
                                            <b-col>
                                                <div class="event-box">
                                                    <a href="#">
                                                        <img src="../assets/images/news1.png" alt="news">
                                                        <div class="news-desc">
                                                            <div class="news-head">
                                                                <h5>Trade shows</h5>
                                                                <p>32546 Venues</p>
                                                            </div>
                                                            <img src="../assets/images/news-arw.svg" alt="news">
                                                        </div>
                                                    </a>
                                                </div>
                                            </b-col>
                                            <b-col>
                                                <div class="event-box">
                                                    <a href="#">
                                                        <img src="../assets/images/mumbai.jpg" alt="news">
                                                        <div class="news-desc">
                                                            <div class="news-head">
                                                                <h5>Social events</h5>
                                                                <p>6300 Venues</p>
                                                            </div>
                                                            <img src="../assets/images/news-arw.svg" alt="news">
                                                        </div>
                                                    </a>
                                                </div>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>
                                <ul class="tags">
                                    <li><a href="#">Webinars</a></li>
                                    <li><a href="#">Classes</a></li>
                                    <li><a href="#">Interactive performances</a></li>
                                    <li><a href="#">Summits</a></li>
                                    <li><a href="#">Auctions</a></li>
                                    <li><a href="#">Exercise classes</a></li>
                                    <li><a href="#">Themed parties</a></li>
                                    <li><a href="#">Gala dinners</a></li>
                                    <li><a href="#">Music festivals</a></li>
                                    <li><a href="#">Food festivals</a></li>
                                    <li><a href="#">Conferences</a></li>
                                    <li><a href="#">Boutique shops</a></li>
                                    <li><a href="#">Reunions</a></li>
                                    <li><a href="#">Food collaborations</a></li>
                                    <li><a href="#">Sponsored sporting events</a></li>
                                    <li><a href="#">Other</a></li>
                                </ul>
                            </b-card-text>
                        </b-tab>
                    </b-tabs>
                </div>
            </div>
        </div>
    </section>
</template>



<script>
    import carousel from 'vue-owl-carousel'
    
    export default {
        name: 'ClientReview',
        components: {
            carousel,
        }
    }
</script>
    