<template>
    <section class="location-search">
        <div class="container">
            <div class="location-wrap">
                <form class="search-form">
                    <div class="venue-form">
                        <div class="location width maps">
                            <img src="../assets/images/location.svg" class="img-location" alt="map">
                            <div class="map">
                                <input type="text" placeholder="Ahmedabad Gujarat, India" />
                                <label class="map-label">Choose your destination</label>
                            </div>
                        </div>
                        <div class="date-picker width">
                            <b-form-datepicker id="datepicker-placeholder" placeholder="16 Jun, 2022" locale="en-US" :date-format-options="{ year: 'numeric', month: 'short', day: '2-digit' }"></b-form-datepicker>
                            <label class="map-label">Start date</label>
                        </div>
                        <div class="date-picker width">
                            <b-form-datepicker id="datepicker-placeholder" placeholder="20 Jun, 2024" locale="en-US" :date-format-options="{ year: 'numeric', month: 'short', day: '2-digit' }"></b-form-datepicker>
                            <label class="map-label">End date</label>
                        </div>
                        <div class="location width guest">
                            <img src="../assets/images/user.svg" class="img-location" alt="user">
                            <div class="map">
                                <h6>150</h6>
                                <label class="map-label">Guests</label>
                            </div>
                        </div>
                        <div class="search-btn width">
                            <button>
                                <img src="../assets/images/search.svg" alt="search">
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
    // import axios from "axios";

    // export default {
    //     data() {
    //         return {
    //             address: "",
    //             error: "",
    //         };
    //     },
    //     methods: {
    //         locatorButtonPressed() {
    //             if (navigator.geolocation) {
    //                 navigator.geolocation.getCurrentPosition(
    //                     position => {
    //                         this.getAddressFrom(position.coords.latitude, position.coords.longitude);
    //                     },
    //                     error => {
    //                         this.error = error.message;
    //                         // console.log(error.message);
    //                     },
    //                 )
    //             } else {
    //                 // this.error = error.message;
    //                 console.log("your browser does not support geolocation API");
    //             }
    //         },
    //         getAddressFrom(lat, long){
    //             axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long + "&key=AIzaSyC_JBXzwFk8PydSV8d9QCPuF8CIOTRTHzY", true).then(response => {
    //                 if(response.data.error_message){
    //                     this.error = response.data.error_message;
    //                     console.log(response.data.error_message);
    //                 }
    //                 else{
    //                     this.address = response.data.results[0].formatted_address
    //                     console.log(response.data.results[0].formatted_address);
    //                 }
    //             })
    //             .catch(error => {
    //                 this.error = error.message;
    //                 console.log(error.message);
    //             })
    //         }
    //     }
    // };
</script>