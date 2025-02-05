// Initialize featured scenes grid
document.addEventListener('DOMContentLoaded', function() {
    // Get the featured scenes container
    const featuredScenesGrid = document.getElementById('featured-scenes-grid');
    if (featuredScenesGrid) {
        // Get featured scenes and render them
        const featuredScenes = SceneManager.getFeaturedScenes();
        featuredScenesGrid.innerHTML = featuredScenes.map(scene => SceneManager.renderSceneCard(scene)).join('');
        
        // Initialize video hover effects
        SceneManager.setupVideoHoverEffects();
    }

    // Initialize language dropdown
    const languageToggle = document.getElementById('language-toggle');
    const languageDropdown = document.getElementById('language-dropdown');
    
    if (languageToggle && languageDropdown) {
        languageToggle.addEventListener('click', () => {
            const isExpanded = languageToggle.getAttribute('aria-expanded') === 'true';
            languageToggle.setAttribute('aria-expanded', !isExpanded);
            languageDropdown.classList.toggle('hidden');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (event) => {
            if (!languageToggle.contains(event.target)) {
                languageToggle.setAttribute('aria-expanded', 'false');
                languageDropdown.classList.add('hidden');
            }
        });
    }
});