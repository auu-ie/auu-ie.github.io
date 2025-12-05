// Hamburger-Funktion 
function myFunction(x) {
  x.classList.toggle("change");
}

// 1. Elemente abrufen
const stickyHeader = document.getElementById('sticky-header');
const overlayText = document.getElementById('overlay-text');


// 2. Berechnung des Übergabepunkts
const headerHeight = 70; // Höhe des Headers in px, muss mit CSS übereinstimmen

// Funktion, die beim Scrollen ausgeführt wird
function handleScroll() {
    // Liefert die Position des Overlay-Text-Elements relativ zum Viewport
    const textRect = overlayText.getBoundingClientRect();
    
    // Bedingung 1: Großer Text (Overlay-Text) ausblenden/verschwinden lassen
    // Sobald der obere Rand des Overlay-Texts (textRect.top) die Unterkante des Headers (headerHeight = 70px) erreicht
    if (textRect.top < headerHeight) {
        // Text fängt an, hinter dem Header zu verschwinden -> Ausblenden
        overlayText.style.opacity = '0'; 
    } else {
        // Text ist vollständig unter dem Header sichtbar -> Einblenden
        overlayText.style.opacity = '1';
    }
    
    // Bedingung 2: Kleinen Text im Header einblenden
    // Der Übergang soll stattfinden, wenn der UNTERE Rand des Overlay-Texts (textRect.bottom) 
    // den OBEREN Rand des Viewports (0) erreicht oder überschreitet.
    const topOfViewport = 0; 
    
    if (textRect.bottom < topOfViewport) {
        // Der große Text ist komplett aus dem Bild verschwunden -> Header-Text einblenden
        stickyHeader.classList.add('show-header');
    } else {
        // Der große Text ist noch sichtbar -> Header-Text ausblenden
        stickyHeader.classList.remove('show-header');
    }
}

// Event-Listener hinzufügen
window.addEventListener('scroll', handleScroll);