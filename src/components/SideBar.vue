<template>
  <div class="sidebar-container"  >
    <div class="library">
      <h2>Library</h2>
      <ul class="sidebar-menu list-unstyled pl-0">
        <li class="sidebar-li d-flex ">
          <div class="d-flex mt-1">
            <font-awesome-icon class="mt-1 mr-3" icon="caret-right"/>
            <p class="mb-0">My Books</p>
          </div>
          <div class="ml-auto">
            <h4 class="p-1 text-secondary book-count">{{bookCount}}</h4>
          </div>
        </li>
        <li class="sidebar-li d-flex ">
          <div class="d-flex mt-1">
            <font-awesome-icon class="mt-1 mr-3" icon="plus-circle"/>
            <p class="mb-0">Add new book</p>
          </div>
        </li>
      </ul>
      <div class="library">
        <h2>Settings</h2>
        <ul class="sidebar-menu list-unstyled pl-0">
          <li class="sidebar-li d-flex ">
            <div class="d-flex mt-1">
              <font-awesome-icon class="mt-1 mr-3" icon="adjust"/>
              <p class="mb-0">Dark Mode</p>
            </div>
            <div class="ml-auto custom-control custom-switch">
              <toggle-button @change="changeMode" :width="40"/>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
  .sidebar-container {
    margin-left: 36px;
    margin-top: 24px ;
  }
  .book-count {
    background-color: #F9F9F9;
    border-radius: 25%;
    font-size: 15px;
  }
  .sidebar-li {
    margin: 18px 19px 18px 0;
  }
  .sidebar-li div p {
    font-size: 15px;
  }
</style>

<script>
 export default {
   data() {
     return {
       bookCount: null,
     }
   },
    methods: {
      changeMode() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      }
    },
   mounted() {
     this.axios.get('/books').then((res) => {
       this.bookCount = res.data.length;
     })
   },
 }
</script>