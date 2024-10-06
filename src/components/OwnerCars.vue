<template>
  <div class="text-primary_color flex flex-col relative">
    <button
      @click="
        isAdding = true;
        sformError = false;
        fformError = false;
        carExists = false;
      "
      class="bg-green hover:bg-green_hover text-slate-50 px-6 py-2.5 mb-8 rounded-lg self-end flex gap-2"
    >
      <img src="../assets/ownerDashImges/add.svg" /> {{ $t("ownerCars.addCar") }}
    </button>
    <div class="overflow-x-auto">
      <table
        class="w-full text-sm text-left rtl:text-right text-Paragraph_color"
      >
        <thead class="text-xs uppercase">
          <tr>
            <th scope="col" class="px-6 py-3">{{ $t("ownerCars.carModel") }}</th>
            <th scope="col" class="px-6 py-3">{{ $t("ownerCars.brand") }}</th>
            <th scope="col" class="px-6 py-3">{{ $t("ownerCars.color") }}</th>
            <th scope="col" class="px-6 py-3">{{ $t("ownerCars.type") }}</th>
            <th scope="col" class="px-6 py-3">{{ $t("ownerCars.price") }}</th>
            <th scope="col" class="px-6 py-3">{{ $t("ownerCars.number") }}</th>
            <th scope="col" class="px-6 py-3">{{ $t("ownerCars.rating") }}</th>
            <th scope="col" class="px-6 py-3">{{ $t("ownerCars.setStatus") }}</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="car in cars"
            :key="car"
            class="bg-white border-b rounded-2xl animated"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-primary_color whitespace-nowrap"
            >
              {{ car.name }}
            </th>
            <td class="px-6 py-4">{{ car.brand }}</td>
            <td class="px-6 py-4">{{ car.color }}</td>
            <td class="px-6 py-4">{{ car.type }}</td>
            <td class="px-6 py-4">{{ car.price }} LE</td>
            <td class="px-6 py-4">{{ car.number }}</td>
            <td class="px-6 py-4">{{ car.rating }}</td>
            <td class="ps-6 py-4">
              <button
                @click="setAvalability(car.id)"
                :class="
                  car.available
                    ? 'bg-green hover:bg-green_hover rounded text-slate-50 p-2'
                    : 'bg-gray-900 rounded text-slate-50 p-2 text-[10px]'
                "
              >
                {{ car.available ? this.$t("ownerCars.available") : this.$t("ownerCars.notAvailable") }}
              </button>
            </td>
            <td class="pr-6 py-4">
              <button
                @click="deleteCar(car.id)"
                class="bg-red hover:bg-red_hover rounded text-slate-50 p-2"
              >
                {{ $t("ownerCars.delete") }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="">
      <form
        @submit.prevent
        v-if="isAdding"
        class="absolute top-[-100px] bg-white rounded-2xl w-full custom-shadow p-10 transition-all"
      >
        <!-- first form -->
        <div v-if="!nextForm" class="flex justify-between flex-wrap">
          <div class="w-[47%]">
            <label for="carModel">{{ $t("ownerCars.carModel") }}</label><br />
            <input
              type="text"
              v-model="carOptions.name"
              id="carModel"
              name="carModel"
              class="border border-border_color text-black text-sm rounded-lg p-2.5 w-full my-3"
            />
          </div>
          <div class="w-[47%]">
            <label for="brand">{{ $t("ownerCars.brand") }}</label>
            <select
              v-model="carOptions.brand"
              name="brand"
              id="brand"
              class="border border-border_color text-black text-sm rounded-lg p-2.5 w-full my-3"
            >
              <option value="ACURA">ACURA</option>
              <option value="ASTON MARTIN">ASTON MARTIN</option>
              <option value="AUDI">AUDI</option>
              <option value="BENTLEY">BENTLEY</option>
              <option value="BMW">BMW</option>
              <option value="BUICK">BUICK</option>
              <option value="CADILLAC">CADILLAC</option>
              <option value="CHEVROLET">CHEVROLET</option>
              <option value="CHRYSLER">CHRYSLER</option>
              <option value="DODGE">DODGE</option>
              <option value="FERRARI">FERRARI</option>
              <option value="FORD">FORD</option>
              <option value="GMC">GMC</option>
              <option value="HONDA">HONDA</option>
              <option value="HUMMER">HUMMER</option>
              <option value="HYUNDAI">HYUNDAI</option>
              <option value="INFINITI">INFINITI</option>
              <option value="ISUZU">ISUZU</option>
              <option value="JAGUAR">JAGUAR</option>
              <option value="JEEP">JEEP</option>
              <option value="KIA">KIA</option>
              <option value="LAMBORGHINI">LAMBORGHINI</option>
              <option value="LAND ROVER">LAND ROVER</option>
              <option value="LEXUS">LEXUS</option>
              <option value="LINCOLN">LINCOLN</option>
              <option value="LOTUS">LOTUS</option>
              <option value="MASERATI">MASERATI</option>
              <option value="MAYBACH">MAYBACH</option>
              <option value="MAZDA">MAZDA</option>
              <option value="MERCEDES-BENZ">MERCEDES-BENZ</option>
              <option value="MERCURY">MERCURY</option>
              <option value="MINI">MINI</option>
              <option value="MITSUBISHI">MITSUBISHI</option>
              <option value="NISSAN">NISSAN</option>
              <option value="PONTIAC">PONTIAC</option>
              <option value="PORSCHE">PORSCHE</option>
              <option value="Renault">Renault</option>
              <option value="ROLLS-ROYCE">ROLLS-ROYCE</option>
              <option value="SAAB">SAAB</option>
              <option value="SATURN">SATURN</option>
              <option value="SUBARU">SUBARU</option>
              <option value="SUZUKI">SUZUKI</option>
              <option value="TOYOTA">TOYOTA</option>
              <option value="VOLKSWAGEN">VOLKSWAGEN</option>
              <option value="VOLVO">VOLVO</option>
              <option value="WILLIAMS">WILLIAMS</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div class="w-[47%]">
            <label for="color">{{ $t("ownerCars.color") }}</label>
            <input
              v-model="carOptions.color"
              type="text"
              id="color"
              name="color"
              class="border border-border_color text-black text-sm rounded-lg p-2.5 w-full my-3"
            />
          </div>
          <div class="w-[47%]">
            <label for="type">{{ $t("ownerCars.type") }}</label>
            <select
              v-model="carOptions.type"
              name="type"
              id="type"
              class="border border-border_color text-black text-sm rounded-lg p-2.5 w-full my-3"
            >
              <option value="Sedan">{{ $t("filterCard.sedan") }}</option>
              <option value="SUV">{{ $t("filterCard.suv") }}</option>
              <option value="Hatchback">{{ $t("filterCard.hatchback") }}</option>
              <option value="Coupe">{{ $t("filterCard.coupe") }}</option>
              <option value="Crossover">{{ $t("filterCard.crossover") }}</option>
              <option value="Convertible">{{ $t("filterCard.convertible") }}</option>
              <option value="Truck">Truck</option>
              <option value="Van">{{ $t("filterCard.van") }}</option>
            </select>
          </div>
          <div class="w-[47%]">
            <label for="price">{{ $t("ownerCars.price") }}</label>
            <input
              v-model="carOptions.price"
              type="number"
              id="price"
              name="price"
              class="border border-border_color text-black text-sm rounded-lg p-2.5 w-full my-3"
            />
          </div>
          <div class="w-[47%]">
            <label for="number">{{ $t("ownerCars.number") }}</label>
            <input
              v-model.trim="carOptions.number"
              type="text"
              id="number"
              name="number"
              class="border border-border_color text-black text-sm rounded-lg p-2.5 w-full my-3"
            />
          </div>

          <div class="w-[47%]">
            <label for="fuel">{{ $t("ownerCars.fuelType") }}</label>
            <select
              v-model="carOptions.fuel"
              name="fuel"
              id="fuel"
              class="border border-border_color text-black text-sm rounded-lg p-2.5 w-full my-3"
            >
              <option value="Petrol">{{ $t("ownerCars.petrol") }}</option>
              <option value="Diesel">{{ $t("ownerCars.gas") }}</option>
              <option value="Electric">{{ $t("ownerCars.electric") }}</option>
            </select>
          </div>

          <div class="w-[47%]">
            <label for="pickup-location">{{ $t("ownerCars.location") }}</label>
            <select
              v-model="carOptions.location"
              class="border border-border_color text-black text-sm rounded-lg p-2.5 w-full my-3"
              id="pickup-location"
            >
              <option>Cairo</option>
              <option>Alexandria</option>
              <option>Giza</option>
              <option>Qalyubia</option>
              <option>Port Said</option>
              <option>Suez</option>
              <option>Gharbia</option>
              <option>Dakahlia</option>
              <option>Asyut</option>
              <option>Fayoum</option>
              <option>Sharqia</option>
              <option>Ismailia</option>
              <option>Aswan</option>
              <option>Beheira</option>
              <option>Minya</option>
              <option>Damietta</option>
              <option>Luxor</option>
              <option>Qena</option>
              <option>Beni Suef</option>
              <option>Sohag</option>
              <option>Monufia</option>
              <option>Red Sea</option>
              <option>Kafr el-Sheikh</option>
              <option>North Sinai</option>
              <option>Matruh</option>
              <option>New Valley</option>
              <option>South Sinai</option>
            </select>
          </div>
          <div class="w-full hidden">
            <label for="image">{{ $t("ownerCars.img") }}</label>
            <input
              type="file"
              id="image"
              ref="image"
              name="image"
              class="border border-border_color text-primary_color text-sm rounded-lg p-2.5 w-full my-3"
            />
          </div>
          <div class="self-end">
            <button
              @click="next()"
              class="bg-green hover:bg-green_hover text-slate-50 px-10 py-2.5 my-4 rounded-lg mr-2"
            >
              {{ $t("ownerCars.next") }}
            </button>
            <button
              @click="isAdding = false"
              class="bg-red hover:bg-red_hover text-slate-50 px-8 py-2.5 rounded-lg"
            >
              {{ $t("ownerCars.cancel") }}
            </button>
          </div>
        </div>
        <p class="text-red" v-if="fformError">{{ $t("ownerCars.allFieldsRequired") }}</p>

        <!-- second form -->

        <div v-if="nextForm" class="flex justify-between flex-wrap -m-4">
          <div class="w-full">
            <label for="gear">{{ $t("ownerCars.gear") }}</label><br />
            <input
              @click="carOptions.manualOrAuto = 'Automatic'"
              name="gear"
              type="button"
              id="automatic"
              :value="this.$t('ownerCars.automatic')"
              :class="
                carOptions.manualOrAuto === 'Automatic'
                  ? style.activeOption
                  : style.unActiveOption
              "
            />
            <input
              @click="carOptions.manualOrAuto = 'Manual'"
              name="gear"
              type="button"
              id="manual"
              :value="this.$t('ownerCars.manual')"
              :class="
                carOptions.manualOrAuto === 'Manual'
                  ? style.activeOption
                  : style.unActiveOption
              "
            />
          </div>
          <div class="w-full">
            <label for="morefeatures">{{ $t("ownerCars.addMoreFeatures") }}</label><br />
            <input
              @click="carFeatures.Airconditioner = !carFeatures.Airconditioner"
              name="morefeatures"
              type="button"
              id="air-conditioning"
              :value="this.$t('ownerCars.airConditioning')"
              :class="
                carFeatures.Airconditioner
                  ? style.activeOption
                  : style.unActiveOption
              "
            />
            <input
              @click="carFeatures.GPS = !carFeatures.GPS"
              name="morefeatures"
              type="button"
              id="GPS"
              :value="this.$t('ownerCars.gps')"
              :class="
                carFeatures.GPS ? style.activeOption : style.unActiveOption
              "
            />
            <input
              @click="carFeatures.ABS = !carFeatures.ABS"
              name="morefeatures"
              type="button"
              id="ABS"
              :value="this.$t('ownerCars.abs')"
              :class="
                carFeatures.ABS ? style.activeOption : style.unActiveOption
              "
            />
            <input
              @click="carFeatures.monitor = !carFeatures.monitor"
              name="morefeatures"
              type="button"
              id="monitor"
              :value="this.$t('ownerCars.monitor')"
              :class="
                carFeatures.monitor ? style.activeOption : style.unActiveOption
              "
            />
            <input
              @click="carFeatures.sunroof = !carFeatures.sunroof"
              name="morefeatures"
              type="button"
              id="sunroof"
              :value="this.$t('ownerCars.sunroof')"
              :class="
                carFeatures.sunroof ? style.activeOption : style.unActiveOption
              "
            />
            <input
              @click="carFeatures.heater = !carFeatures.heater"
              name="morefeatures"
              type="button"
              id="heater"
              :value="this.$t('ownerCars.heater')"
              :class="
                carFeatures.heater ? style.activeOption : style.unActiveOption
              "
            />
            <input
              @click="carFeatures.airbag = !carFeatures.airbag"
              name="morefeatures"
              type="button"
              id="airbag"
              :value="this.$t('ownerCars.airbag')"
              :class="
                carFeatures.airbag ? style.activeOption : style.unActiveOption
              "
            />
            <input
              @click="carFeatures.wifi = !carFeatures.wifi"
              name="morefeatures"
              type="button"
              id="wifi"
              :value="this.$t('ownerCars.wifi')"
              :class="
                carFeatures.wifi ? style.activeOption : style.unActiveOption
              "
            />
          </div>

          <div class="w-full">
            <label for="image">{{ $t("ownerCars.img") }}</label>
            <input
              type="file"
              ref="image"
              id="image"
              name="image"
              class="border border-border_color text-primary_color text-sm rounded-lg p-2.5 w-full my-3"
            />
          </div>
          <div class="w-full">
            <label for="description">{{ $t("carPage.car.description") }}</label>
            <textarea
              name="description"
              v-model="carOptions.description"
              id="description"
              class="border border-border_color text-black text-sm rounded-lg p-2.5 w-full my-3"
            ></textarea>
          </div>
          <div class="self-end ml-auto">
            <button
              @click="addCar()"
              class="bg-green hover:bg-green_hover text-slate-50 px-10 py-2.5 mr-2 rounded-lg"
            >
              {{ $t("ownerCars.addCar") }}
            </button>
            <button
              @click="nextForm = false"
              class="bg-red hover:bg-red_hover text-slate-50 px-8 py-2.5 rounded-lg"
            >
              {{ $t("ownerCars.back") }}
            </button>
          </div>
        </div>
        <p class="text-red" v-if="sformError">
          You need to add a description and an image
        </p>
        <p class="text-red" v-if="carExist">
          A car with this number already exists
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import { storage } from "@/firebase";
import { ref, uploadBytes, deleteObject } from "firebase/storage";
import axios from "axios";
export default {
  name: "OnwerCars",
  props: ["id"],
  data() {
    return {
      carOptions: {
        available: true,
        rating: "Not rated",
        ratingCount: 0,
        ratingSum: 0,
        price: "",
        brand: "",
        name: "",
        color: "",
        type: "",
        number: "",
        description: "",
        owner: this.id,
        location: "",
        fuel: "",
        manualOrAuto: "Automatic",
      },
      cars: {},
      style: {
        unActiveOption:
          "bg-slate-100   text-black text-sm rounded-lg p-2.5 my-3 mx-1 cursor-pointer",
        activeOption:
          "bg-gray-900   text-slate-50 text-sm rounded-lg p-2.5 my-3 mx-1 cursor-pointer",
      },
      isAdding: false,
      nextForm: false,
      fformError: false,
      sformError: false,
      carExist: "",

      carFeatures: {
        Airconditioner: false,
        GPS: false,
        ABS: false,
        monitor: false,
        sunroof: false,
        heater: false,
        airbag: false,
        wifi: false,
      },
    };
  },
  created() {
    this.getCars();
  },
  methods: {
    next() {
      if (
        this.carOptions.name &&
        this.carOptions.price &&
        this.carOptions.color &&
        this.carOptions.type &&
        this.carOptions.number &&
        this.carOptions.fuel &&
        this.carOptions.location &&
        this.carOptions.brand
      ) {
        this.nextForm = true;
        this.fformError = false;
      } else {
        this.fformError = true;
      }
    },
    getCars() {
      axios
        .get("https://carrento-9ea05-default-rtdb.firebaseio.com/cars.json")
        .then((response) => {
          if (response.data) {
            for (let car in response.data) {
              if (response.data[car].owner === this.id) {
                this.cars[car] = response.data[car];
                console.log(Object.values(this.cars));
              }
            }
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    setAvalability(id) {
      axios
        .put(
          `https://carrento-9ea05-default-rtdb.firebaseio.com/cars/${id}.json`,
          {
            ...this.cars[id],
            available: !this.cars[id].available,
          }
        )
        .then(() => {
          this.cars[id].available = !this.cars[id].available;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    uploadImage(id) {
      const storageRef = ref(storage, `cars/${id}`);
      uploadBytes(storageRef, this.$refs.image.files[0]).then((snapshot) => {
        console.log(snapshot);
      });
    },

    addCar() {
      const newCar = {
        ...this.carOptions,
        number: this.carOptions.number.replace(/ /g, ""),
        features: this.carFeatures,
        id: this.carOptions.number.replace(/ /g, ""),
      };

      if (newCar.description && this.$refs.image.files[0]) {
        if (Object.keys(this.cars).length > 0) {
          this.carExist = Object.values(this.cars).some(
            (car) => car.number === newCar.number
          );

          if (this.carExist) {
            return;
          }
        }

        this.uploadImage(newCar.id);
        axios
          .put(
            `https://carrento-9ea05-default-rtdb.firebaseio.com/cars/${newCar.id}.json`,
            newCar
          )
          .then(() => {
            this.cars[newCar.id] = newCar;
          })
          .catch((e) => {
            console.log(e);
          });
        this.isAdding = false;
        this.nextForm = false;

        this.carOptions = {
          price: "",
          brand: "",
          name: "",
          color: "",
          type: "",
          number: "",
          description: "",
          fuel: "",
          manualOrAuto: "Automatic",
          ratingSum: 0,
          ratingCount: 0,
        };

        this.carFeatures = {
          airConditioning: false,
          GPS: false,
          ABS: false,
          monitor: false,
          sunroof: false,
          heater: false,
          airbag: false,
          wifi: false,
        };
        console.log(newCar);

        this.sformError = false;
        this.carExists = false;
      } else {
        this.sformError = true;
      }
    },

    deleteCar(id) {
      const agree = confirm("Are you sure you want to delete this car?");

      if (agree) {
        axios
          .delete(
            `https://carrento-9ea05-default-rtdb.firebaseio.com/cars/${id}.json`
          )
          .then(() => {
            delete this.cars[id];
            deleteObject(ref(storage, `cars/${id}`));
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
  },
};
</script>

<style>
.animated {
  animation: animat 0.5s;
}
@keyframes animat {
  0% {
    opacity: 0;
    background-color: white;
  }
  100% {
    opacity: 1;
    background-color: transparent;
  }
}
</style>
