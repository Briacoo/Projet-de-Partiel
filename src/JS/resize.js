window.addEventListener('load', () => {
    // Récupérer la hauteur de l'écran
    const screenHeight = window.innerHeight;
  
    // Définir la hauteur du header en fonction de la hauteur de l'écran
    const headerHeight = Math.floor(screenHeight * 0.1); // 10% de la hauteur de l'écran
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
  
    // Définir la hauteur du footer en fonction de la hauteur de l'écran
    const footerHeight = Math.floor(screenHeight * 0.154); // 20% de la hauteur de l'écran
    document.documentElement.style.setProperty('--footer-height', `${footerHeight}px`);
  });