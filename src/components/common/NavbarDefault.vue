<script setup>
import { ref, watch } from "vue";
import { RouterLink } from "vue-router";

// Define props
const props = defineProps({
  transparent: {
    type: Boolean,
    default: false
  },
  light: {
    type: Boolean,
    default: false
  },
  dark: {
    type: Boolean,
    default: false
  },
  sticky: {
    type: Boolean,
    default: false
  },
  darkText: {
    type: Boolean,
    default: false
  }
});

// Text color handling
let textDark = ref(props.darkText);

const getTextColor = () => {
  if (props.transparent && textDark.value) return "text-dark";
  if (props.transparent) return "text-white";
  return "text-dark";
};

watch(
  () => textDark.value,
  (newValue) => {
    textDark.value = newValue;
  }
);
</script>

<template>
  <nav
    class="navbar navbar-expand-lg top-0"
    :class="{
      'z-index-3 w-100 shadow-none navbar-transparent position-absolute my-3':
        props.transparent,
      'my-3 blur border-radius-lg z-index-3 py-2 shadow py-2 start-0 end-0 mx-4 position-absolute mt-4':
        props.sticky,
      'navbar-light bg-white py-3': props.light,
      'navbar-dark bg-gradient-dark z-index-3 py-3': props.dark
    }"
  >
    <div
      :class="
        props.transparent || props.light || props.dark
          ? 'container'
          : 'container-fluid px-0'
      "
    >
      <!-- Brand Logo -->
      <RouterLink
        class="navbar-brand font-weight-bolder ms-sm-3"
        :class="getTextColor()"
        to="/"
      >
        Your Brand
      </RouterLink>

      <!-- Mobile Toggle Button -->
      <button
        class="navbar-toggler shadow-none ms-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon mt-2">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
      </button>

      <!-- Navigation Links -->
      <div class="collapse navbar-collapse" id="navigation">
        <ul class="navbar-nav ms-auto">
          <!-- Home -->
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              :class="getTextColor()"
              to="/"
              active-class="active"
            >
              <i class="fas fa-home me-2"></i>
              Home
            </RouterLink>
          </li>

          <!-- Products -->
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              :class="getTextColor()"
              to="/products"
              active-class="active"
            >
              <i class="fas fa-shopping-bag me-2"></i>
              Products
            </RouterLink>
          </li>

          <!-- About -->
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              :class="getTextColor()"
              to="/about"
              active-class="active"
            >
              <i class="fas fa-info-circle me-2"></i>
              About
            </RouterLink>
          </li>

          <!-- Contact -->
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              :class="getTextColor()"
              to="/contact"
              active-class="active"
            >
              <i class="fas fa-envelope me-2"></i>
              Contact
            </RouterLink>
          </li>

          <!-- Admin Dashboard -->
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              :class="getTextColor()"
              to="/admin"
              active-class="active"
            >
              <i class="fas fa-user-shield me-2"></i>
              Admin
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  transition: all 0.3s ease;
}

.navbar-brand {
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.nav-link {
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
}

.nav-link:hover {
  transform: translateY(-1px);
}

.nav-link.active {
  font-weight: 600;
  position: relative;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 1rem;
  right: 1rem;
  height: 2px;
  background: currentColor;
  border-radius: 2px;
}

/* Mobile menu styles */
@media (max-width: 991.98px) {
  .navbar-collapse {
    padding: 1rem;
    border-radius: 0.5rem;
    background: white;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  .navbar-transparent .navbar-collapse {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
  }

  .nav-link {
    color: #344767 !important;
    padding: 0.75rem 1rem;
  }

  .nav-link:hover {
    background: #f8f9fa;
    border-radius: 0.5rem;
  }
}
</style>
