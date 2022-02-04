<template>
  <div id="app" >
    <v-app>
      <v-navigation-drawer app class="app-navigation">
        <SideBar />
      </v-navigation-drawer>


      <!-- Sizes your content based upon application components -->
      <v-main>

        <!-- Provides the application the proper gutter -->
        <v-container fluid>

          <!-- If using vue-router -->
          <router-view></router-view>
        </v-container>
      </v-main>

      <v-footer app>
        <!-- -->
      </v-footer>
    </v-app>
  </div>
</template>

<style>
  .app-bar {
    margin-left: 20px;
    margin-right: 20px;
    height: 90px !important;
    box-shadow: none !important;
    background-color: #fff !important;
    border-bottom: 2px solid lightgray !important;
  }
  .app-navigation {
    border-right: 2px solid lightgray;

  }
</style>

<script>
import SideBar from "@/components/SideBar";
export default {
  components: {SideBar}
}
</script>