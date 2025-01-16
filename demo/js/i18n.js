class I18n {
  constructor() {
    this.currentLang = localStorage.getItem('lang') || 'zh-CN';
    this.translations = translations;
    this.isDropdownOpen = false;
    this.setupLanguageToggle();
  }

  setLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('lang', lang);
    this.updatePageContent();
    this.updateAriaLabels();
    this.toggleDropdown(); // Close dropdown after selection
  }

  t(key) {
    const keys = key.split('.');
    let value = this.translations[this.currentLang];
    
    for (const k of keys) {
      if (value === undefined) break;
      value = value[k];
    }
    
    return value || key;
  }

  updatePageContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      element.textContent = this.t(key);
    });
    this.updateAriaLabels();
  }

  setupLanguageToggle() {
    document.addEventListener('DOMContentLoaded', () => {
      const toggleButton = document.getElementById('language-toggle');
      const dropdown = document.getElementById('language-dropdown');
      
      if (toggleButton && dropdown) {
        toggleButton.addEventListener('click', (e) => {
          e.stopPropagation();
          this.toggleDropdown();
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
          if (!dropdown.contains(e.target) && this.isDropdownOpen) {
            this.toggleDropdown();
          }
        });

        // Handle keyboard navigation
        toggleButton.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.toggleDropdown();
          }
        });
      }

      // Initialize scene grids if they exist
      const featuredGrid = document.getElementById('featured-scenes-grid');
      const galleryGrid = document.getElementById('gallery-grid');
      
      if (featuredGrid) {
        SceneManager.renderSceneGrid('featured-scenes-grid', true);
      }
      if (galleryGrid) {
        SceneManager.renderSceneGrid('gallery-grid', false);
      }
    });
  }

  toggleDropdown() {
    const dropdown = document.getElementById('language-dropdown');
    const toggleButton = document.getElementById('language-toggle');
    
    if (dropdown && toggleButton) {
      this.isDropdownOpen = !this.isDropdownOpen;
      dropdown.classList.toggle('hidden', !this.isDropdownOpen);
      toggleButton.setAttribute('aria-expanded', this.isDropdownOpen);
    }
  }

  updateAriaLabels() {
    const toggleButton = document.getElementById('language-toggle');
    if (toggleButton) {
      toggleButton.setAttribute('aria-label', `${this.t('aria.current')}${this.t(`language.${this.currentLang === 'en-US' ? 'en' : 'zh'}`)}`)
    }
  }
}

// Initialize i18n
const i18n = new I18n();
document.addEventListener('DOMContentLoaded', () => i18n.updatePageContent()); 