const scenes = {
//   garden: {
//     id: 'garden',
//     author: '@VibrantNebula_Luma',
//     image: 'assets/images/garden.png',
//     video: 'assets/videos/garden.mov',
//     featured: true,
//     order: 1
//   },
//   truck: {
//     id: 'truck',
//     author: '@VibrantNebula_Luma',
//     image: 'assets/images/truck.png',
//     video: 'assets/videos/truck.mov',
//     featured: true,
//     order: 2
//   },
//   stump: {
//     id: 'stump',
//     author: '@kaioArt',
//     image: 'assets/images/stump.png',
//     video: 'assets/videos/stump.mov',
//     featured: true,
//     order: 3
//   },
//   bonsai: {
//     id: 'bonsai',
//     author: '@Capptis',
//     image: 'assets/images/bonsai.png',
//     video: 'assets/videos/bonsai.mov',
//     featured: true,
//     order: 4
//   },
//   dynamic_scenes: {
//     id: 'dynamic_scenes',
//     author: '@FrancLucent',
//     image: 'assets/images/dynamic_scenes.png',
//     video: 'assets/videos/dynamic_scenes.mov',
//     featured: true,
//     order: 5
//   },
//   vr: {
//     id: 'vr',
//     author: '@WebVRWorld',
//     image: 'assets/images/bonsai.png',
//     video: 'assets/videos/vr.mov',
//     featured: true,
//     order: 6
//   },
  biobay: {
    id: 'biobay',
    author: '@OceanicVisions',
    image: 'assets/images/biobay.png',
    video: 'assets/videos/biobay.mov',
    featured: true,
    order: 1
  }
};

// Helper functions for scene management
const SceneManager = {
  getAllScenes() {
    return Object.values(scenes).sort((a, b) => a.order - b.order);
  },

  getFeaturedScenes() {
    return Object.values(scenes)
      .filter(scene => scene.featured)
      .sort((a, b) => a.order - b.order);
  },

  getSceneById(id) {
    return scenes[id];
  },

  renderSceneCard(scene) {
    return `
      <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer" onclick="openDemo('${scene.id}')">
        <div class="media-container">
          <img src="${scene.image}" alt="${scene.id} Scene" class="card-image">
          <video class="card-video" muted loop playsinline preload="auto">
            <source src="${scene.video}" type="video/quicktime">
          </video>
        </div>
        <div class="p-4 sm:p-6">
          <h3 class="text-lg sm:text-xl font-semibold text-apple-text mb-2" data-i18n="scene.${scene.id}">${scene.id}</h3>
          <p class="text-sm text-gray-500">${scene.author}</p>
        </div>
      </div>
    `;
  },

  setupVideoHoverEffects() {
    const mediaContainers = document.querySelectorAll('.media-container');
    
    mediaContainers.forEach(container => {
      const video = container.querySelector('video');
      const image = container.querySelector('img');
      let fadeTimeout;
      
      container.addEventListener('mouseenter', () => {
        if (video) {
          clearTimeout(fadeTimeout);
          
          // Start video playback
          video.currentTime = 0;
          const playPromise = video.play();
          
          if (playPromise !== undefined) {
            playPromise.then(() => {
              // Video is ready to play
              image.classList.add('fade-out');
              video.classList.add('fade-in');
            }).catch(error => {
              console.log("Video playback failed:", error);
            });
          }
        }
      });
      
      container.addEventListener('mouseleave', () => {
        if (video) {
          // Remove animation classes
          image.classList.remove('fade-out');
          video.classList.remove('fade-in');
          
          // Add reverse animations
          image.classList.add('fade-in');
          video.classList.add('fade-out');
          
          // Set timeout to pause video after fade out
          fadeTimeout = setTimeout(() => {
            video.pause();
            video.currentTime = 0;
            
            // Clean up animation classes
            image.classList.remove('fade-in');
            video.classList.remove('fade-out');
          }, 1000); // Match the duration of the CSS animation
        }
      });
    });
  },

  renderSceneGrid(containerId, featured = false) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const scenesToRender = featured ? this.getFeaturedScenes() : this.getAllScenes();
    container.innerHTML = scenesToRender.map(scene => this.renderSceneCard(scene)).join('');
    
    // Initialize video hover effects after rendering
    this.setupVideoHoverEffects();
  }
}; 