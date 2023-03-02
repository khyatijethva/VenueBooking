<template>
  <div class="page-main">
    <HeaderView />
    <div class="main-home">
        <section class="banner-section">
            <div class="container">
              <carousel :nav="false" :items="1" :mouseDrag="true" :touchDrag="true" :smartSpeed="1200"> 
                  <div class="slide">
                    <div class="venue-image">
                      <img src="../assets/images/mumbai.jpg" alt="slider" />
                    </div>
                    <div class="venue-content">
                        <h1>Find your venue in your desire location</h1>
                        <p>Integer ac interdum lacus. Nunc porta semper lacus a varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    </div>
                  </div>
                  <div class="slide">
                    <div class="venue-image">
                      <img src="../assets/images/mumbai.jpg" alt="slider" />
                    </div>
                    <div class="venue-content">
                        <h1>Find your venue in your desire Path</h1>
                        <p>Integer ac interdum lacus. Nunc porta semper lacus a varius. Integer ac interdum lacus. Nunc porta semper lacus a varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    </div>
                  </div>
                  <div class="slide">
                    <div class="venue-image">
                      <img src="../assets/images/mumbai.jpg" alt="slider" />
                    </div>
                    <div class="venue-content">
                        <h1>Find your venue in your desire location 2</h1>
                        <p>Integer ac interdum lacus. Integer ac interdum lacus. Nunc porta semper lacus a varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    </div>
                  </div>
                  <div class="slide">
                    <div class="venue-image">
                      <img src="../assets/images/mumbai.jpg" alt="slider" />
                    </div>
                    <div class="venue-content">
                        <h1>Find your venue in your desire location</h1>
                        <p>Integer ac interdum lacus. Integer ac interdum lacus. Nunc porta semper lacus a varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    </div>
                  </div>
                  
              </carousel>
            </div>
        </section>

        <LocationSearch />
        <PopularEvent />
        <VenueBooking />
        <ClientReview />
        <BlogView />
        <ChooseVenue />
    </div>

    <FooterView />
  </div>
</template>

<script>
import HeaderView from '@/components/HeaderView.vue'
import LocationSearch from '@/components/LocationSearch.vue'
import PopularEvent from '@/components/PopularEvent.vue'
import VenueBooking from '@/components/VenueBooking.vue'
import ClientReview from '@/components/ClientReview.vue'
import BlogView from '@/components/BlogView.vue'
import ChooseVenue from '@/components/ChooseVenue.vue'
import FooterView from '@/components/FooterView.vue'

import carousel from 'vue-owl-carousel'

export default {
  name: 'HomeView',
  components: {
    HeaderView,
    carousel,
    LocationSearch,
    PopularEvent,
    VenueBooking,
    ClientReview,
    BlogView,
    ChooseVenue,
    FooterView
}
}
</script>
