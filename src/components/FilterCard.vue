<template>
  <div class="col-span-1 bg-white rounded-3xl custom-shadow h-fit">
    <div class="flex justify-between p-6">
      <h3 class="text-primary_color font-semibold">Filter</h3>
      <button class="text-Paragraph_color cursor-pointer">Clear all</button>
    </div>
    <hr class="border-[1px] -mt-1" />
    <div class="p-6">
      <div class="mb-4">
        <h3 class="text-primary_color font-semibold mb-2">Payment Method</h3>
        <label class="mr-4">
          <input type="checkbox" class="input" id="cash" value="cash" />
          <span class="custom-checkbox"></span>
        </label>
        <label class="text-Paragraph_color" for="cash">Cash</label><br />
        <label class="mr-4">
          <input type="checkbox" class="input" id="card" value="card" />
          <span class="custom-checkbox"></span>
        </label>
        <label class="text-Paragraph_color" for="card">Card</label><br />
      </div>
      <div class="mb-4">
        <h3 class="text-primary_color font-semibold mb-2">Car Type</h3>
        <label class="mr-4">
          <input type="checkbox" class="input" id="sedan" value="sedan" />
          <span class="custom-checkbox"></span>
        </label>
        <label class="text-Paragraph_color" for="sedan">Sedan</label><br />
        <label class="mr-4">
          <input type="checkbox" class="input" id="suv" value="suv" />
          <span class="custom-checkbox"></span>
        </label>
        <label class="text-Paragraph_color" for="suv">SUV</label><br />
        <label class="mr-4">
          <input
            type="checkbox"
            class="input"
            id="hatchback"
            value="hatchback"
          />
          <span class="custom-checkbox"></span>
        </label>
        <label class="text-Paragraph_color" for="hatchback">Hatchback</label
        ><br />
        <label class="mr-4">
          <input
            type="checkbox"
            class="input"
            id="crossover"
            value="crossover"
          />
          <span class="custom-checkbox"></span>
        </label>
        <label class="text-Paragraph_color" for="crossover">Crossover</label
        ><br />
        <label class="mr-4">
          <input type="checkbox" class="input" id="coupe" value="coupe" />
          <span class="custom-checkbox"></span>
        </label>
        <label class="text-Paragraph_color" for="coupe">Coupe</label><br />
      </div>
      <div class="mb-4">
        <h3 class="text-primary_color font-semibold mb-2">Brands</h3>
        <label class="mr-4">
          <input type="checkbox" class="input" id="toyota" value="toyota" />
          <span class="custom-checkbox"></span>
        </label>
        <label class="text-Paragraph_color" for="toyota">Toyota</label><br />
        <label class="mr-4">
          <input type="checkbox" class="input" id="nissan" value="nissan" />
          <span class="custom-checkbox"></span>
        </label>
        <label class="text-Paragraph_color" for="nissan">Nissan</label><br />
        <label class="mr-4">
          <input type="checkbox" class="input" id="mercedes" value="mercedes" />
          <span class="custom-checkbox"></span>
        </label>
        <label class="text-Paragraph_color" for="mercedes">Mercedes</label
        ><br />
        <label class="mr-4">
          <input type="checkbox" class="input" id="bmw" value="bmw" />
          <span class="custom-checkbox"></span>
        </label>
        <label class="text-Paragraph_color" for="bmw">BMW</label><br />
        <label class="mr-4">
          <input type="checkbox" class="input" id="hyundai" value="hyundai" />
          <span class="custom-checkbox"></span>
        </label>
        <label class="text-Paragraph_color" for="hyundai">Hyundai</label><br />
        <label class="mr-4">
          <input type="checkbox" class="input" id="kia" value="kia" />
          <span class="custom-checkbox"></span>
        </label>
        <label class="text-Paragraph_color" for="kia">Kia</label><br />
        <label class="mr-4">
          <input type="checkbox" class="input" id="audi" value="audi" />
          <span class="custom-checkbox"></span>
        </label>
        <label class="text-Paragraph_color" for="audi">Audi</label><br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterCard",
};
</script>

<style>
.input[type="checkbox"] {
  display: none;
}

.custom-checkbox {
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 1.8px solid #6b7280;
  border-radius: 2px;
  position: relative;
  cursor: pointer;
}

.custom-checkbox::after {
  content: "";
  position: absolute;
  top: 54%;
  left: 50%;
  transform: translate(-55%, -55%);
  width: 8px;
  height: 8px;
  background-color: #6b7280;
  border-radius: 2px;
  opacity: 0;
}

.input[type="checkbox"]:checked + .custom-checkbox::after {
  opacity: 1;
}
</style>
