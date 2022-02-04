<template>
  <div class="container p-0 mt-5 ml-1">
    <Topbar />
    <div class="d-flex justify-content-between mt-3 flex-wrap">
      <div class="book-card">
      <v-img class="book-card-img"
          height="360"
          src="@/assets/images/Vector.jpg">
      </v-img>

      </div>
      <div class="book-card">
      <v-img class="book-card-img"
          height="360"
          src="@/assets/images/image2.jpg">
      </v-img>
        <span class="percentage">12%</span>
        <span class="book-genre">Fantasy</span>
      </div >
      <div class="book-card">
      <v-img class="book-card-img"
          height="360"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png">
      </v-img>
      </div>
      <div class="book-card">
      <v-img class="book-card-img"
          height="360"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png">
      </v-img>
      </div>
      <div class="book-card">
      <v-img class="book-card-img"
             height="360"
             src="https://cdn.vuetifyjs.com/images/cards/cooking.png">
      </v-img>
      </div>
      <div class="book-card">
        <v-img class="book-card-img"
               height="360"
               src="@/assets/images/Vector.jpg">
        </v-img>
        <span class="percentage">72%</span>
        <span class="book-genre">Fiction</span>
      </div>
    </div>
  </div>
</template>


<style>

.book-card-img {
  border-radius: 25px;
}
.book-card {
  width: 240px;
  margin-bottom: 10px;
  position: relative;
}
.percentage {
  position: absolute;
  top: 10px;
  left: 15px;
  color: white;
  padding: 3px 20px;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.4);
}
.book-genre {
  position: absolute;
  top: 320px;
  right: 10px;
  background: rgba(0, 0, 0, 0.4);
  padding: 3px 20px;
  border-radius: 15px;
  color: white;
}
</style>
<script>
import Topbar from "@/components/Topbar";
export default {
  name: 'HelloWorld',
  components: {
    Topbar
  }
}

</script>
