<template>
    <section class="venue-booking section">
        <img src="../assets/images/bookshape.svg" class="shape-2" alt="shape">
        <div class="container">
            <div class="book_venue">
                <b-row>
                <b-col cols="12" lg="6">
                    <img src="../assets/images/coloured.svg" class="colour-bg" alt="background">
                    <div class="location-book">
                        <form action="">
                            <div class="wrap">
                                <button class="search-btn"><b-icon-search /></button>
                                <div class="search-row">
                                    <label for="">Location</label>
                                    <input type="search" name="location" id="location" placeholder="Ahmedabad |">
                                </div>
                            </div>
                        </form>
                    </div>
                </b-col>
                <b-col cols="12" lg="6">
                    <div class="booking-data">
                        <div class="coloured-heading">
                            <h3>Why <span>VenueBooking?</span></h3>
                        </div>
                        <div class="booking-accordion" role="tablist">
                            <b-card no-body>
                                <b-card-header role="tab">
                                    <b-button block v-b-toggle.accordion-1><img src="../assets/images/accordian.svg" alt="sccordian" />Easy to search venue</b-button>
                                </b-card-header>
                                <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed condimentum est. Mauris arcu odio, vestibulum quis dapibus sit amet, finibus id turpis. Aliquam semper fringilla semper. Sed nec velit sit amet dolor pulvinar feugiat. Suspendisse blandit, nulla sed interdum egestas, nibh ex maximus arcu, non posuere sem nulla in augue.
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card no-body>
                                <b-card-header role="tab">
                                    <b-button block v-b-toggle.accordion-2><img src="../assets/images/accordian.svg" alt="sccordian" />Honest pricing</b-button>
                                </b-card-header>
                                <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed condimentum est. Mauris arcu odio, vestibulum quis dapibus sit amet, finibus id turpis. Aliquam semper fringilla semper. Sed nec velit sit amet dolor pulvinar feugiat. Suspendisse blandit, nulla sed interdum egestas, nibh ex maximus arcu, non posuere sem nulla in augue.                                     
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card no-body>
                                <b-card-header role="tab">
                                    <b-button block v-b-toggle.accordion-3><img src="../assets/images/accordian.svg" alt="sccordian" />Smooth bookings</b-button>
                                </b-card-header>
                                <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed condimentum est. Mauris arcu odio, vestibulum quis dapibus sit amet, finibus id turpis. Aliquam semper fringilla semper. Sed nec velit sit amet dolor pulvinar feugiat. Suspendisse blandit, nulla sed interdum egestas, nibh ex maximus arcu, non posuere sem nulla in augue.
                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                        </div>
                    </div>
                </b-col>
                </b-row>
            </div>
        </div>
    </section>
</template>
