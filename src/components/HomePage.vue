<script setup>
import NavbarDefault from "./common/NavbarDefault.vue";
import FooterDefault from "./common/FooterDefault.vue";
import Header from "./common/Header.vue";
import ClothList from "./cloth/clothList.vue";
import NotificationExample from "./example/notifcationExample.vue";
</script>

<template>
  <NavbarDefault />
  <div class="container-fluid px-0">
    <Header title="Welcome to our store" 
      :image="'/banner.jpg'"
      centered="true"
      subtitle="We are a store that sells clothes"
    />
    <main class="main-content">
        <div class="container">
          <div class="row justify-content-center">
              <router-link to="/manage-products" class="btn btn-primary btn-lg">
                <i class="fas fa-cog me-2"></i>Manage Products
              </router-link>
          </div>
          <div class="row justify-content-center">
            <div class="col-12 col-md-10 col-lg-8">
              <ClothList />
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-12 col-md-10 col-lg-8">
              <NotificationExample />
            </div>
          </div>
        </div>
    </main>
  </div>
</template>

<style scoped>
.home-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}

.main-content {
  width: 100%;
  flex: 1;
}

.content-section {
  padding: 2rem 1rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .content-section {
    padding: 1rem 0.5rem;
  }
}

@media (min-width: 1400px) {
  .container {
    max-width: 1320px;
  }
}
</style>
