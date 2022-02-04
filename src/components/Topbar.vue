<template>
  <div class="topBar-container">
    <div class="topBar-header d-flex justify-content-between">
      <div>
        <h6 class="header">Book Library</h6>
      </div>
      <div class="ms-auto mt-3">
        <div>
          <span class="icon-base active">
          <font-awesome-icon class="fa-lg " icon="th"/>
            </span>
          <span class="icon-base">
          <font-awesome-icon class="fa-lg " icon="align-center"/>
          </span>
            <span class="icon-base active">
          <font-awesome-icon class="fa-lg " icon="search"/>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .topBar-container {
    width: 100%;
    margin-top: 20px;
    border-bottom: 2px solid lightgray;
  }
  .header {

    font-size: 30px;
  }
  .icon-base {
    margin-right: 10px;
    padding: 5px;
  }
  .active {
    background-color: #F9F9F9;
  }

</style>

<script>

</script>