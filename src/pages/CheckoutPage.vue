<template>
  <div class="bg-bg_color">
    <div class="container px-4 md:px-10 mx-auto pt-16 pb-14">

      <!-- ------------------------------------------upper bars------------------------------------------- -->
      <div class="flex flex-nowrap">
        <div class="p-bar-container">
          <div class="p-bar-full">
          </div>
        </div>

        <div class="p-bar-container">
          <div class="p-bar-full">
          </div>
        </div>

        <div class="p-bar-container">
          <div class="p-bar-empty">
          </div>
        </div>
      </div>

      <!-- ---------------------------------------review your booking---------------------------------------- -->
       <div class="flex justify-start md:justify-between flex-col lg:flex-row pt-24">
        <div class="flex py-3 lg:py-0 px-0">
          <img src="../assets/home-images/icons/arrow_back_24px.svg" alt="" class="w-6">
          <h2 class="text-3xl ps-4 font-medium">Review your booking</h2>
        </div>
        <p class="text-xl px-0 mx-0">Total: LE <span class="text-4xl font-semibold">12,125</span>.63</p>
       </div>
       <h3 class="text-2xl mt-10">ID verification</h3>

       <div class="flex">
        <!-- ----------------------------------------form start----------------------------------------------------- -->

        <div class="form-container w-full lg:w-2/3 pe-1">
          <hr class="bg-line_color h-0.5 mt-3 mb-6">
          <form action="">
            <div class="flex justify-between flex-wrap">

            <section class="w-full md:w-2/5">
              <h3 class="text-2xl mb-3 w-full">First name</h3>
              <input type="text" placeholder="Enter your legal first name" name="f-name" id="f-name" class="ps-2 pe-14 py-2 mb-6 border-gray-200 border-2 rounded-lg bg-gray-50 w-full">
            </section>

            <section class="w-full md:w-2/5">
              <h3 class="text-2xl mb-3 w-full">Last name</h3>
              <input type="text" placeholder="Enter your legal last name" name="l-name" id="l-name" class="ps-2 pe-14 py-2 mb-6 border-gray-200 border-2 rounded-lg bg-gray-50 w-full">
            </section>
            

            <section class="w-full md:w-2/5">
              <h3 class="text-2xl mb-3">Front-side photo of ID</h3>
              <div class="upload-file mb-6">
                <label for="front-id" class="text-white bg-black rounded-lg ps-2 pe-2 py-2 flex justify-between">
                  <span>Upload Your Photo </span>
                  <img src="../assets/home-images/icons/document-upload.svg" alt="" class="w-6">
                </label>
                <input type="file" id="front-id" name="front-id" class="hidden" @change="handleFileChange">
                <span class="border-1"> {{ fileName }}</span>
              </div>
            </section>


            <section class="w-full md:w-2/5">
              <h3 class="text-2xl mb-3">Back-side photo of ID</h3>
              <div class="upload-file mb-6">
                <label for="front-id" class="text-white bg-black rounded-lg ps-2 pe-2 py-2 flex justify-between">
                  <span>Upload Your Photo </span>
                  <img src="../assets/home-images/icons/document-upload.svg" alt="" class="w-6">
                </label>
                <input type="file" id="back-id" name="back-id" class="hidden" @change="handleFileChange">
                <span class="border-1"> {{ fileName }}</span>
              </div>
            </section>

            <section class="w-full">
              <h3 class="text-2xl mt-10">Payment Method</h3>
              <hr class="bg-line_color h-0.5 mt-3 mb-6">
            </section>

            <section class="w-full md:w-2/5">
              <h3 class="text-2xl mb-3 w-full">Name on card</h3>
              <input type="text" placeholder="Enter the name on the card" name="card-name" id="card-name" class="ps-2 pe-14 py-2 mb-6 border-gray-200 border-2 rounded-lg bg-gray-50 w-full">
            </section>

            <section class="w-full md:w-2/5">
              <h3 class="text-2xl mb-3 w-full">Card number</h3>
              <input type="text" placeholder="Enter the card number" name="card-no" id="card-no" class="ps-2 pe-14 py-2 mb-6 border-gray-200 border-2 rounded-lg bg-gray-50 w-full">
            </section>

            <section class="w-full md:w-2/5">
              <h3 class="text-2xl mb-3 w-full">Expiry date</h3>
              <input type="date" name="fname" id="expiry" class="ps-2 pe-14 py-2 mb-6 border-gray-200 border-2 rounded-lg bg-gray-50 w-full">
            </section>

            <section class="w-full md:w-2/5">
              <h3 class="text-2xl mb-3 w-full">CVC</h3>
              <input type="text" placeholder="Enter the CVC" name="cvc" id="cvc" class="ps-2 pe-14 py-2 mb-6 border-gray-200 border-2 rounded-lg bg-gray-50 w-full">
            </section>

          </div>
          </form>
        </div>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckoutPage",

  data(){
    return{
      fileName : ''
    };
  },
  methods: {
    handleFileChange(event){
      const file = event.target.files[0];
      this.fileName = file? file.name : ''
    }
  },
};
</script>
