<script setup>
const props = defineProps({
  image: {
    type: String,
    default: ''
  },
  title: {
    type: [String, Object],
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  description: {
    type: [String, Object],
    default: ''
  },
  overlay: {
    type: Object,
    default: () => ({
      color: 'primary',
      opacity: 6
    })
  },
  height: {
    type: String,
    default: '75vh'
  },
  centered: {
    type: Boolean,
    default: false
  },
  fullWidth: {
    type: Boolean,
    default: false
  }
});

const getOverlayClass = () => {
  const baseClass = 'position-absolute start-0 top-0 w-100 h-100';
  const colorClass = `bg-gradient-${props.overlay.color}`;
  const opacityClass = `opacity-${props.overlay.opacity}`;
  return `${baseClass} ${colorClass} ${opacityClass}`;
};
</script>

<template>
  <header class="header-component position-relative">
    <!-- Background Image Section -->
    <div
      class="page-header min-vh-50 position-relative"
      :style="{
        backgroundImage: `url(${image})`,
        height,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }"
    >
      <!-- Overlay -->
      <div :class="getOverlayClass()"></div>

      <!-- Content Container -->
      <div 
        class="position-relative"
        :class="[
          fullWidth ? 'container-fluid px-5' : 'container',
          { 'text-center': centered }
        ]"
      >
        <div class="row h-100 align-items-center">
          <div 
            :class="[
              centered ? 'col-lg-8 mx-auto' : 'col-lg-7',
              'position-relative z-index-2 pt-5 pb-4'
            ]"
          >
            <!-- Title -->
            <component
              :is="title?.variant || 'h1'"
              class="text-white mb-3"
              :class="title?.class"
              v-if="title"
            >
              {{ typeof title === 'object' ? title.text : title }}
            </component>

            <!-- Subtitle -->
            <h3 
              v-if="subtitle"
              class="text-white opacity-8 mb-3"
            >
              {{ subtitle }}
            </h3>

            <!-- Description -->
            <p 
              v-if="description"
              class="lead text-white opacity-8 mb-4"
              :class="description?.class"
            >
              {{ typeof description === 'object' ? description.text : description }}
            </p>

            <!-- Slot for additional content -->
            <slot name="content" />
          </div>
        </div>
      </div>
    </div>

    <!-- Additional content slot -->
    <slot />
  </header>
</template>

<style scoped>
.header-component {
  width: 100%;
  overflow: hidden;
}

.page-header {
  background-position: center;
  background-size: cover;
  margin: 0;
  padding: 0;
  border: 0;
  display: flex;
  align-items: center;
}

/* Smooth transitions */
.page-header,
.page-header * {
  transition: all 0.3s ease;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .page-header {
    min-height: 50vh !important;
  }

  .container-fluid {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
}

/* Optional: Add animation for content */
.position-relative {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
