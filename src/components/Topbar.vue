<template>
  <div class="topBar-container">
    <div class="topBar-header d-flex justify-content-between">
      <div>
        <h6 class="header">Book Library</h6>
      </div>
      <div class="ms-auto mt-3">
        <div>
          <span class="icon-base active" @click="changeStyle('cube')">
          <font-awesome-icon class="fa-lg " icon="th"/>
            </span>
          <span class="icon-base" @click="changeStyle('alightCenter')">
          <font-awesome-icon class="fa-lg " icon="align-center"/>
          </span>
            <span class="icon-base active" @click="search">
          <font-awesome-icon class="fa-lg " icon="search"/>
          </span>
          <input @input="searchBook" type="text" class="border" ref="search" v-if="openSearch">
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
    cursor: pointer;
    margin-right: 10px;
    padding: 5px;
  }
  .active {
    background-color: #F9F9F9;
  }

</style>

<script>
  export default {
    data() {
      return {
        openSearch: false
      }
    },
    methods: {
      changeStyle(style) {
        this.$emit('changeStyle', style)
      },
      search() {
        this.openSearch = true;
        this.$nextTick(() => {
          this.$refs.search.focus()
        })
      },
      searchBook(event) {
        this.$emit('searchBook', event.target.value)
      }
    }
  }
</script>