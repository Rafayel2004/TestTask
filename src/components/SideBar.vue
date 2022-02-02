<template>
  <div class="sidebar-container"  >
    <div class="library">
      <h2>Library</h2>
      <ul class="sidebar-menu list-unstyled pl-0">
        <li class="sidebar-li d-flex justify-content-around p-5">
          <div class="d-flex mt-1">
            <font-awesome-icon class="mt-1 mr-3" icon="caret-right"/>
            <p class="mb-0">My Books</p>
          </div>
          <div class="ml-auto">
            <h4 class="pa-1 text-secondary book-count">15</h4>
          </div>
        </li>
        <li class="sidebar-li d-flex justify-content-around p-5">
          <div class="d-flex mt-1">
            <font-awesome-icon class="mt-1 mr-3" icon="plus-circle"/>
            <p class="mb-0">Add new book</p>
          </div>
        </li>
      </ul>
      <div class="library">
        <h2>Settings</h2>
        <ul class="sidebar-menu list-unstyled pl-0">
          <li class="sidebar-li d-flex justify-content-around p-5">
            <div class="d-flex mt-1">
              <font-awesome-icon class="mt-1 mr-3" icon="adjust"/>
              <p class="mb-0">Dark Mode</p>
            </div>
            <div class="ml-auto custom-control custom-switch">
              <toggle-button :width="40" @change="onChangeEventHandler"/>
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

 }
</script>