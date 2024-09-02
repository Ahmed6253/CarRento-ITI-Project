<template>

    <div class="md:mx-10 mx-4 lg:mx-20 my-20">
        <router-link class="flex mb-8">
            <svg class="me-4 my-auto"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="black" />
            </svg>
            <h4 class="semi-header font-medium">Confirm payment</h4>
        </router-link>

        <div class="card-style p-11">
            <div class="grid grid-cols-2">
                <div>
                    <h2 class="font-semibold semi-header">Mercedes-Benz AMG</h2>
                    <div>

                    </div>
                </div>
                <div>
                    <img src="../assets/images/car-info.png" class="ms-20"/>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
export default {
    name: "ConfirmPaymentPage",
};
</script>