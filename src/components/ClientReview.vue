<template>
    <section class="review-section section">
        <img src="../assets/images/shape-1.svg" class="client-shape" alt="shape">
        <div class="container">
            <div class="review-wrapper">
                <div class="review-border">
                    <b-row>
                        <b-col cols="12" md="4" lg="3">
                            <div class="coloured-heading">
                                <h3>What <br> our <span>client</span> <br> say</h3>
                            </div>
                        </b-col>
                        <b-col cols="12" md="8" lg="9">
                            <carousel :nav="true" :items="1" :dots="false" :mouseDrag="true" :touchDrag="true" :smartSpeed="1200">
                                <div class="review-slide">
                                    <div class="review-data"> 
                                        <p>Etiam convallis elementum sapien, a aliquam turpis aliquam vitae. Praesent sollicitudin felis vel mi facilisis posuere. Nulla ultrices facilisis justo, non varius nisl semper vel. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus at ante mattis, condimentum velit et, dignissim nunc. Integer quis tincidunt purus. Duis dignissim mauris vel elit commodo, eu hendrerit leo ultrices.</p>
                                        <p>Nulla vehicula vestibulum purus at rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur dignissim massa nec libero scelerisque rutrum.</p>
                                    </div>
                                    <div class="author">
                                        <img src="../assets/images/user.jpg" alt="user">
                                        <div class="author-detail">
                                            <h4>Fabio Ottaviani</h4>
                                            <p>Creative Developer, Studio Gusto</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="review-slide">
                                    <div class="review-data"> 
                                        <p>Etiam convallis elementum sapien, a aliquam turpis aliquam vitae. Praesent sollicitudin felis vel mi facilisis posuere. Nulla ultrices facilisis justo, non varius nisl semper vel. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus at ante mattis, condimentum velit et, dignissim nunc. Integer quis tincidunt purus. Duis dignissim mauris vel elit commodo, eu hendrerit leo ultrices.</p>
                                        <p>Nulla vehicula vestibulum purus at rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur dignissim massa nec libero scelerisque rutrum.</p>
                                    </div>
                                    <div class="author">
                                        <img src="../assets/images/user.jpg" alt="user">
                                        <div class="author-detail">
                                            <h4>Fabio Ottaviani</h4>
                                            <p>Creative Developer, Studio Gusto</p>
                                        </div>
                                    </div>
                                </div>
                            </carousel>
                        </b-col>
                    </b-row>
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
    