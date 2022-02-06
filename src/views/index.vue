<template>
  <div class="container p-0 mt-5 ml-1">
    <Topbar @changeStyle="changeStyle" @searchBook="searchBook" />
      <table v-if="alignCenter" class="table table-borderless">
        <thead>
        <tr>
          <th>Book Title and Author</th>
          <th>Genre</th>
          <th>Reading Progress</th>
          <th>Last Opened</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="book in data" :key="book.id">
          <td class="d-flex align-items-center ">
            <img class="book-card-list"

                        :src="book.image | image" alt="">

            <p class="ml-3">
              <strong>{{ book['name'] }}</strong><br>
              {{ book['author'] }}
            </p>
          </td>
          <td class="pt-7">{{book['genre']['name']}}</td>
          <td class="pt-7">{{book['book_percentage'] + "%"}}</td>
          <td class="pt-7">12 Minutes ago</td>
        </tr>
        </tbody>
      </table>
    <div class="d-flex mt-3 flex-wrap" v-if="cube">
      <div class="book-card mr-2" v-for="book in data" :key="book.id">
              <v-img class="book-card-img"
                  height="360"
                  :src="book.image | image">
              </v-img>
                <span class="percentage">{{book['book_percentage'] + "%"}}</span>
                <span class="book-genre">{{book['genre']['name']}}</span>
                <div class="book-info mt-3 ml-1">
                 <p>
                   <strong>{{book['name']}}</strong><br>
                   {{book['author']}}
                 </p>
                </div>
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
.book-card-list {
  width: 60px;
  height: 90px;
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
  data() {
    return {
      data: null,
      cube: false,
      alignCenter: true,
    }
  },
  components: {
    Topbar
  },
  methods: {
    changeStyle(val) {
      console.log(val)
      if(val === 'alightCenter'){
        this.cube = false;
        this.alignCenter = true
      } else {
        this.cube = true;
        this.alignCenter = false
      }
    },
    searchBook(val) {
      let url = '/books/search?search=' + val;
      this.axios.get(url).then((res) => {
        this.data = res.data;
      })
    }
  },
  mounted() {
    this.axios.get('/books').then((res) => {
      this.data = res.data;
    })
  },
  filters: {
    image(imageUrl) {
      console.log(imageUrl)
      console.log(process.env.VUE_APP_API_URl + 'storage/' + imageUrl)
      return process.env.VUE_APP_API_URl + 'storage/' + imageUrl
    }
  }
}

</script>
