<template>
  <div class="image-gallery">
    <div v-for="(image, index) in images" :key="index" class="image-container">
      <img 
        :src="image.src" 
        :alt="image.alt" 
        @click="openModal(index)"
        class="gallery-image"
      >
      <div class="image-caption">{{ image.alt }}</div>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="modal" @click="closeModal" tabindex="0" @keyup.esc="closeModal">
      <div class="modal-content">
        <span class="close" @click.stop="closeModal">&times;</span>
        <img 
          :src="images[currentImageIndex].src" 
          :alt="images[currentImageIndex].alt" 
          class="modal-image"
          :class="{ 
            'zoomed': zoomLevel === 1,
            'scrolling': isScrolling 
          }"
          :style="imageStyle"
          @click.stop="handleImageClick"
          @wheel.stop.prevent="handleScroll"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageGallery',
  data() {
    return {
      showModal: false,
      currentImageIndex: 0,
      zoomLevel: 0,
      translateX: 0,
      translateY: 0,
      isScrolling: false,
      _scrollTimeout: null,
      rawImages: [
        { 
          path: '/photography/DSC02612.jpg',
          alt: 'Hoʻokipa, Maui, Jan 2025'
        },
        {
          path: '/photography/DSC03314.jpg',
          alt: 'Haleakalā, Maui, Jan 2025'
        },
        {
          path: '/photography/RSC00326.jpg',
          alt: 'Waiʻānapanapa, Maui, Jan 2025'
        }
      ]
    }
  },
  computed: {
    images() {
      return this.rawImages.map(img => ({
        src: this.$withBase(img.path),
        alt: img.alt
      }))
    },
    imageStyle() {
      if (this.zoomLevel === 1) {
        return {
          transform: `scale(2) translate(${this.translateX}px, ${this.translateY}px)`
        }
      }
      return {
        transform: 'scale(1)'
      }
    }
  },
  methods: {
    openModal(index) {
      this.currentImageIndex = index
      this.showModal = true
      this.zoomLevel = 0
      this.resetPosition()
      document.body.style.overflow = 'hidden'
      document.addEventListener('keyup', this.handleEscKey)
    },
    closeModal() {
      this.showModal = false
      this.zoomLevel = 0
      this.resetPosition()
      document.body.style.overflow = 'auto'
      document.removeEventListener('keyup', this.handleEscKey)
    },
    resetPosition() {
      this.translateX = 0
      this.translateY = 0
    },
    handleImageClick() {
      if (this.zoomLevel === 0) {
        this.zoomLevel = 1
      } else {
        this.zoomLevel = 0
      }
      this.resetPosition()
    },
    handleScroll(event) {
      if (this.zoomLevel === 1) {
        if (!this.isScrolling) {
          this.isScrolling = true
        }
        // Adjust movement speed
        const moveSpeed = 1
        this.translateX -= event.deltaX * moveSpeed / 2
        this.translateY -= event.deltaY * moveSpeed / 2
        
        // Debounce the scrolling state
        clearTimeout(this._scrollTimeout)
        this._scrollTimeout = setTimeout(() => {
          this.isScrolling = false
        }, 100)
      }
    },
    handleEscKey(event) {
      if (event.key === 'Escape') {
        this.closeModal()
      }
    }
  }
}
</script>

<style scoped>
.image-gallery {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0;
}

.image-container {
  position: relative;
  margin: 10px;
  text-align: center;
}

.gallery-image {
  width: 100%;
  height: auto;
  cursor: pointer;
  transition: opacity 0.2s;
}

.gallery-image:hover {
  opacity: 0.9;
}

.image-caption {
  margin-top: 5px;
  font-size: 0.9em;
  color: #666;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: background-color 0.3s ease;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90vh;
}

.modal-image {
  max-width: 90%;
  max-height: 90vh;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

.modal-image.scrolling {
  transition: none;
}

.modal-image.zoomed {
  will-change: transform;
}

.close {
  position: absolute;
  top: -40px;
  right: 0;
  color: white;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover {
  color: #ccc;
}
</style>
