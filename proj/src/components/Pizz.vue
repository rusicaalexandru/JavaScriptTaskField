<template>
  <div>
    <br>
      <v-row justify="center">
        <v-btn
            color="primary"
            dark
            @click.stop="dialog = true"
        >
          Cart
        </v-btn>

        <v-dialog
            v-model="dialog"
            max-width="350"
        >
          <v-card>
            <v-card-title class="headline">
              Cart
            </v-card-title>
            <v-card-text v-for="(item, index) in this.cart" :key="index">
              {{ item.name }}
              <v-spacer></v-spacer>
              $ {{ item.price }}
              <v-btn @click="deletePizz(index)">
                Delete
              </v-btn>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  color="green darken-1"
                  text
                  @click="order"
              >
                Order
              </v-btn>

              <v-btn
                  color="green darken-1"
                  text
                  @click="dialog = false"
              >
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    <v-card
        v-for="(item, index) in pizzas"
        :key="index"
        class="mx-auto my-12"
        max-width="374"
    >
      <template slot="progress">
        <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
        ></v-progress-linear>
      </template>

      <v-img
          height="250"
          :src="item.photo"
      ></v-img>

      <v-card-title>{{ item.name }}</v-card-title>

      <v-card-text>
        <v-row
            align="center"
            class="mx-0"
        >
          <v-rating
              :value="item.rating"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
          ></v-rating>

          <div class="grey--text ms-4">
            {{ item.rating }}
          </div>
        </v-row>

        <div class="my-4 subtitle-1">
          {{ item.description }}
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-title>$ {{ item.price }}</v-card-title>

      <v-card-actions>
        <v-btn
            color="deep-purple lighten-2"
            text
            @click="addToCard(item)"
        >
          Add to Cart
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Pizz",
  data: () => ({
    pizzas: [
      {
        name: "Mario",
        photo: "https://media.gettyimages.com/photos/cheesy-pepperoni-pizza-picture-id938742222?k=6&m=938742222&s=612x612&w=0&h=on_9ZYG1SG4Xgk7BLZSlaXJl8VYb6ZePDHTN6zukDHM=",
        price: 30,
        description: "SI de gustos mAi",
        rating: 4.5
      },
      {
        name: "Neapolitana",
        photo: "https://media.gettyimages.com/photos/marinara-pizza-picture-id184969517?k=6&m=184969517&s=612x612&w=0&h=8EhmqkyqVzX33RF8YU91yL3dsZ-S_WVfTZ9PzFbHm68=",
        price: 20,
        description: "SI de gustos mAi",
        rating: 4.2
      },
      {
        name: "SHOTO TAM",
        photo: "https://media.gettyimages.com/photos/deluxe-pizza-with-pepperoni-sausage-mushrooms-and-peppers-picture-id1198079266?k=6&m=1198079266&s=612x612&w=0&h=jJRtoqmI3p_8qOmEWRBTC7cpK19RFWJnkIwMt-Pvn5w=",
        price: 24,
        description: "SI de gustos mAi",
        rating: 4.7
      }
    ],
    cart: [],
    dialog: false
  }),

  methods: {
    addToCard(item) {
      this.cart.push(item)
      console.log(this.cart)
    },
    order() {
      this.cart = [];
      this.dialog = false;
    },
    deletePizz(id) {
      this.cart.splice(id, 1);
    }
  },
}
</script>

<style scoped>

</style>