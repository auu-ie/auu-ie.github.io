// 1. Hamburger-Menü
function myFunction(x) {
  x.classList.toggle("change");
}

// 2. Scroll-Effekte (Header & Overlay)
function handleScroll() {
  const stickyHeader = document.getElementById('sticky-header');
  const overlayText = document.getElementById('overlay-text');
  const headerHeight = 90;

  // Falls kein Overlay-Text da ist (z.B. Kontaktseite), Header immer zeigen
  if (!overlayText) {
    stickyHeader.classList.add('show-header');
    return;
  }

  const textRect = overlayText.getBoundingClientRect();

  // Overlay ausblenden, wenn es den Header berührt
  overlayText.style.opacity = (textRect.top < headerHeight) ? '0' : '1';

  // Header einblenden, wenn der Overlay-Text oben komplett aus dem Bild ist
  if (textRect.bottom < 0) {
    stickyHeader.classList.add('show-header');
  } else {
    stickyHeader.classList.remove('show-header');
  }
}

window.addEventListener('scroll', handleScroll);

// 3. Filter-Funktion (Produkte/Spalten)
function filterSelection(category) {
  const columns = document.querySelectorAll(".column");
  
  columns.forEach(col => {
    // Wenn "all" gewählt oder Kategorie im Klassennamen enthalten ist
    if (col.classList.contains(category)) {
      col.classList.add("show");
    } else {
      col.classList.remove("show");
    }
  });
}

// Initialer Aufruf
filterSelection("twenty");

// 4. Button-Logik (Aktiv-Status)
const btnContainer = document.getElementById("buttonContainer");
if (btnContainer) {
  const btns = btnContainer.querySelectorAll(".button");

  btns.forEach(btn => {
    // Initial den richtigen Button auf "active" setzen (20$/kg)
    if (btn.textContent.includes('20$/kg')) {
      btn.classList.add("active");
    }

    // Klick-Event für alle Buttons
    btn.addEventListener("click", function() {
      // Entferne "active" von allen anderen Buttons im Container
      btnContainer.querySelector(".button.active")?.classList.remove("active");
      // Füge "active" dem geklickten Button hinzu
      this.classList.add("active");
    });
  });
}