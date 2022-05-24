<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div>
    <b-container id="container" fluid class="p-0">
      <b-row id="header" class="m-0">
        <b-col><h1>Header</h1></b-col>
      </b-row>
      <b-row id="content" class="m-0">
        <b-col sm="8">
          <h2>Content left</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </b-col>
        <b-col sm="4">
          <h2>Content right</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </b-col>
      </b-row>
      <b-row id="footer" class="m-0">
        <b-col sm>Footer left</b-col>
        <b-col sm>Footer right</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
#container {
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

#content {
  overflow-y: scroll;
}

#header {
  background-color: orange;
}

#footer {
  background-color: olive;
}
</style>
