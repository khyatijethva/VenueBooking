<template>
    <section class="section blog-section">
        <div class="container">
            <div class="blog-wrapper">
                <div class="coloured-heading flex-head">
                    <h3>From the <span>VenueBooking Blog</span></h3>
                    <a href="#" class="view-all">View All <b-icon-chevron-right /> </a>
                </div>
                <b-row>
                    <b-col cols="12" md="4">
                        <div class="blog-box">
                            <img src="../assets/images/news1.png" alt="news">
                            <div class="blog-content">
                                <span class="category">Maximus</span>
                                <h6>Sodales vivamus</h6>
                                <div class="blog-data">
                                    <span class="desc" v-if="!readMoreActivated">{{longText.slice(0, 120)}}... </span>
                                    <a v-if="!readMoreActivated" @click="activateReadMore" href="javascript:void(0)">Read more</a>
                                    <span class="desc" v-if="readMoreActivated" v-html="longText"></span>
                                </div>
                            </div>
                        </div>
                    </b-col>
                    <b-col cols="12" md="4">
                        <div class="blog-box">
                            <img src="../assets/images/news2.jpg" alt="news">
                            <div class="blog-content">
                                <span class="category">Maximus</span>
                                <h6>Massa lobortis pharetra</h6>
                                <div class="blog-data">
                                    <span class="desc" v-if="!readMoreActivated">{{longText.slice(0, 120)}}... </span>
                                    <a v-if="!readMoreActivated" @click="activateReadMore" href="javascript:void(0)">Read more</a>
                                    <span class="desc" v-if="readMoreActivated" v-html="longText"></span>
                                </div>
                            </div>
                        </div>
                    </b-col>
                    <b-col cols="12" md="4">
                        <div class="blog-box">
                            <img src="../assets/images/news.jpg" alt="news">
                            <div class="blog-content">
                                <span class="category">Maximus</span>
                                <h6>Sodales vivamus</h6>
                                <div class="blog-data">
                                    <span class="desc" v-if="!readMoreActivated">{{longText.slice(0, 120)}}... </span>
                                    <a v-if="!readMoreActivated" @click="activateReadMore" href="javascript:void(0)">Read more</a>
                                    <span class="desc" v-if="readMoreActivated" v-html="longText"></span>
                                </div>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "ReadMore",
        data(){
            return {
                longText: `Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat tincidunt. Nam sem lacus, ornare non ante So while I may not pretty boy, your heart is amiss
                Play it like a villain 'cause she caught in a wave
                Tonight I am walkin' away`,
                readMoreActivated: false
            }
        },
        methods: {
            activateReadMore(){
                this.readMoreActivated = true;
            },
        }
    }
</script>