const defaultCameraConfig = {
  cameraUp: [0, -1, 0],
  initialCameraPosition: [5, 50, 25],
  initialCameraLookAt: [0, 0, 0],
  cameraBounds: {
    minX: 0, maxX: 10,
    minY: 0, maxY: 100,
    minZ: 0, maxZ: 50
  }
};

const scenes = {
//   garden: {
//     id: 'garden',
//     author: '@VibrantNebula_Luma',
//     image: 'assets/images/garden.png',
//     video: 'assets/videos/garden.mov',
//     featured: true,
//     order: 1,
//     splatPath: 'assets/data/garden/garden.splat',
//     camera: {
//       cameraUp: [0, 1, 0],
//       initialCameraPosition: [1, 1, 1],
//       initialCameraLookAt: [0, 0, 0]
//     }
//   },
//   truck: {
//     id: 'truck',
//     author: '@VibrantNebula_Luma',
//     image: 'assets/images/truck.png',
//     video: 'assets/videos/truck.mov',
//     featured: true,
//     order: 2,
//     splatPath: 'assets/data/truck/truck.ply',
//     camera: {
//       initialCameraPosition: [2, 0, 2]
//     }
//   },
//   stump: {
//     id: 'stump',
//     author: '@kaioArt',
//     image: 'assets/images/stump.png',
//     video: 'assets/videos/stump.mov',
//     featured: true,
//     order: 3,
//     splatPath: 'assets/data/stump/stump.ksplat'
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
    author: '@YiXin',
    image: 'assets/images/biobay.png',
    video: 'assets/videos/biobay.mov',
    featured: true,
    order: 1,
    splatPath: 'assets/data/biobay/biobay.splat',
    tags: ['自然', '水景', '夜景'],
    camera: {
      cameraUp: [0, -1, 0],
      initialCameraPosition: [-130, -70, -105],
      initialCameraLookAt: [40, 20, -10],
      cameraBounds: {
        minX: -200, maxX: 200,
        minY: -300, maxY: 0,
        minZ: -200, maxZ: 200
      }
    }
  },
  town: {
    id: 'town',
    author: '@YiXin',
    image: 'assets/images/town.png',
    video: 'assets/videos/town.mov',
    featured: true,
    order: 2,
    splatPath: 'assets/data/town.splat',
    tags: ['建筑', '城市', '户外'],
    camera: {
      initialCameraPosition: [9, 100, 100],
      initialCameraLookAt: [0, 0, 0],
      cameraUp : [ 0,0,1],
      cameraBounds: {
        minX: 0, maxX: 20,
        minY: 0, maxY: 200,
        minZ: 0, maxZ: 200
      }
    }
  },
  trees: {
    id: 'trees',
    author: '@YiXin',
    image: 'assets/images/trees.png',
    video: 'assets/videos/trees.mov',
    featured: true,
    order: 3,
    splatPath: 'assets/data/trees.ksplat',
    tags: ['自然', '植物', '户外'],
    camera: {
      initialCameraPosition: [0.5, -0.5, 0.5],
      initialCameraLookAt: [0, 0, 0],
      cameraUp : [ 0, -1,0],
      cameraBounds: {
        minX: -2, maxX: 2,
        minY: -2, maxY: 2,
        minZ: -2, maxZ: 2
      }
    }
  },
  statue1: {
    id: 'statue1',
    author: '@YiXin',
    image: 'assets/images/statue1.png',
    video: 'assets/videos/statue1.mov',
    featured: false,
    order: 4,
    splatPath: 'assets/data/statue1.splat',
    tags: ['艺术', '雕塑', '室内'],
    camera: {
      initialCameraPosition: [3.76554, -7.01168, -7.74641],
      initialCameraLookAt: [0.27373, -2.61047, -0.16645],
      cameraUp : [ 0.00000, -1.00000, 0.00000],
      cameraBounds: {
        minX: -10, maxX: 10,
        minY: -30, maxY: 0,
        minZ: -10, maxZ: 10
      }
    }
  },
  statue2: {
    id: 'statue2',
    author: '@YiXin',
    image: 'assets/images/statue2.png',
    video: 'assets/videos/statue2.mov',
    featured: false,
    order: 5,
    splatPath: 'assets/data/statue2.splat',
    tags: ['艺术', '雕塑', '室内'],
    camera: {
      initialCameraPosition: [10.91659, -12.10261, 13.39398],
      initialCameraLookAt: [-0.46246, -2.24977, -1.86982],
      cameraUp : [ 0.00000, -1.00000, 0.00000],
      cameraBounds: {
        minX: -30, maxX: 30,
        minY: -60, maxY: 0,
        minZ: -30, maxZ: 30
      }
    }
  },
  statue3: {
    id: 'statue3',
    author: '@YiXin',
    image: 'assets/images/statue3.png',
    video: 'assets/videos/statue3.mov',
    featured: false,
    order: 6,
    splatPath: 'assets/data/statue3.splat',
    tags: ['艺术', '雕塑', '室内'],
    camera: {
      initialCameraPosition: [9.29481, -8.13224, -5.60735],
      initialCameraLookAt: [-0.48946, -1.28182, 2.11262],
      cameraUp : [ 0.00000, -1.00000, 0.00000],
      cameraBounds: {
        minX: -30, maxX: 30,
        minY: -60, maxY: 0,
        minZ: -30, maxZ: 30
      }
    }
  },
  town53: {
    id: 'town53',
    author: '@Fregettia',
    image: 'assets/images/town53.png',
    video: 'assets/videos/town.mov',
    featured: true,
    order: 7,
    tags: ['建筑', '城市', '户外'],
    externalUrl: 'https://scenes.data-clouds.com/scene1/index.htm'
  },
  kiln: {
    id: 'kiln',
    author: '@Fregettia',
    image: 'assets/images/kiln.png',
    video: 'assets/videos/town.mov',
    featured: true,
    order: 8,
    tags: ['建筑', '城市', '户外'],
    externalUrl: 'https://scenes.data-clouds.com/scene2/index.htm'
  },
  temple1: {
    id: 'temple1',
    author: '@Fregettia',
    image: 'assets/images/temple1.png',
    video: 'assets/videos/town.mov',
    featured: true,
    order: 9,
    tags: ['建筑', '城市', '户外'],
    externalUrl: 'https://scenes.data-clouds.com/scene3/index.htm'
  },
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

  getAllTags() {
    const tagSet = new Set();
    Object.values(scenes).forEach(scene => {
      if (scene.tags) {
        scene.tags.forEach(tag => tagSet.add(tag));
      }
    });
    return Array.from(tagSet).sort();
  },

  getScenesByTag(tag) {
    return Object.values(scenes)
      .filter(scene => scene.tags && scene.tags.includes(tag))
      .sort((a, b) => a.order - b.order);
  },

  renderSceneCard(scene) {
    const clickHandler = scene.externalUrl 
      ? `window.open('${scene.externalUrl}', '_blank')` 
      : `window.open('scene.html?scene=${scene.id}', '_blank')`;

    const sceneTitle = i18n.t(`scene.${scene.id}`);
    const sceneDescription = i18n.t(`scene.descriptions.${scene.id}`, { defaultValue: '' });
    const descriptionHtml = sceneDescription ? 
      `<p class="text-sm text-gray-600 mt-2">${sceneDescription}</p>` : '';

    return `
      <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer" onclick="${clickHandler}">
        <div class="media-container">
          <img src="${scene.image}" alt="${sceneTitle}" class="card-image">
          <video class="card-video" muted loop playsinline preload="auto">
            <source src="${scene.video}" type="video/quicktime">
          </video>
        </div>
        <div class="p-4 sm:p-6">
          <h3 class="text-lg sm:text-xl font-semibold text-apple-text mb-2">${sceneTitle}</h3>
          <p class="text-sm text-gray-500">${scene.author}</p>
          ${scene.tags ? `<div class="mt-2 flex flex-wrap gap-2">
            ${scene.tags.map(tag => `<span class="text-xs px-2 py-1 bg-gray-100 rounded-full">${tag}</span>`).join('')}
          </div>` : ''}
        </div>
      </div>
    `;
  },

  setupVideoHoverEffects() {
    const mediaContainers = document.querySelectorAll('.media-container');
    
    mediaContainers.forEach(container => {
      const video = container.querySelector('video');
      const image = container.querySelector('img');
      let isHovering = false;
      let currentPlayPromise = null;
      
      if (video) {
        // Ensure video is muted and preloaded
        video.muted = true;
        video.preload = "auto";
        // Load the video initially
        video.load();
      }
      
      container.addEventListener('mouseenter', () => {
        if (!video) return;
        isHovering = true;
        
        // Show video and hide image immediately
        video.style.opacity = '1';
        image.style.opacity = '0';
        
        // If there's an existing play promise, wait for it to resolve/reject
        if (currentPlayPromise) {
          currentPlayPromise
            .then(() => {
              // Previous play completed, start new playback
              startPlayback();
            })
            .catch(() => {
              // Previous play failed, try again
              startPlayback();
            });
        } else {
          startPlayback();
        }
        
        function startPlayback() {
          if (!isHovering) return;
          
          video.currentTime = 0;
          currentPlayPromise = video.play();
          
          if (currentPlayPromise !== undefined) {
            currentPlayPromise
              .catch(error => {
                if (error.name === "NotAllowedError") {
                  // Auto-play was prevented, show paused state
                  video.style.opacity = '0';
                  image.style.opacity = '1';
                }
              });
          }
        }
      });
      
      container.addEventListener('mouseleave', () => {
        if (!video) return;
        isHovering = false;
        
        // Show image and hide video immediately
        video.style.opacity = '0';
        image.style.opacity = '1';
        
        // If there's a current play promise, wait for it before pausing
        if (currentPlayPromise !== undefined) {
          currentPlayPromise
            .then(() => {
              if (!isHovering) {
                video.pause();
                video.currentTime = 0;
              }
            })
            .catch(() => {
              // Play was already interrupted, no need to pause
            });
        } else {
          video.pause();
          video.currentTime = 0;
        }
      });
    });
  },

  searchScenes(query) {
    query = query.toLowerCase();
    return Object.values(scenes).filter(scene => {
      const matchTitle = scene.id.toLowerCase().includes(query);
      const matchAuthor = scene.author.toLowerCase().includes(query);
      const matchTags = scene.tags ? scene.tags.some(tag => tag.toLowerCase().includes(query)) : false;
      // 添加中文名称搜索支持
      const chineseName = translations['zh-CN'].scene[scene.id];
      const matchChineseName = chineseName ? chineseName.toLowerCase().includes(query) : false;
      return matchTitle || matchAuthor || matchTags || matchChineseName;
    });
  },

  renderSceneGrid(containerId, searchQuery = '', selectedTag = null) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let scenesToRender = searchQuery ? this.searchScenes(searchQuery) : this.getAllScenes();
    if (selectedTag && selectedTag !== 'all') {
      scenesToRender = scenesToRender.filter(scene => scene.tags && scene.tags.includes(selectedTag));
    }
    scenesToRender.sort((a, b) => a.order - b.order);
    container.innerHTML = scenesToRender.map(scene => this.renderSceneCard(scene)).join('');
    
    // Initialize video hover effects after rendering
    this.setupVideoHoverEffects();
  }
};