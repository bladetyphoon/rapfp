function app1Function() {
  setTimeout(() => {
    loadNewContent("https://cdn.jsdelivr.net/gh/vidio-boy/Eaglercraft1.5.2@refs/heads/main/eaglercraft.1.5.2.html");
  }, 100);
}

function app2Function() {
  setTimeout(() => {
    loadNewContent("https://cdn.jsdelivr.net/gh/your-user/your-repo/app2-content.html");
  }, 100);
}

function app3Function() {
  setTimeout(() => {
    loadNewContent("https://cdn.jsdelivr.net/gh/your-user/your-repo/app3-content.html");
  }, 100);
}

function app4Function() {
  setTimeout(() => {
    loadNewContent("https://cdn.jsdelivr.net/gh/your-user/your-repo/app4-content.html");
  }, 100);
}

function app5Function() {
  setTimeout(() => {
    loadNewContent("https://cdn.jsdelivr.net/gh/your-user/your-repo/app5-content.html");
  }, 100);
}

// Function to load and embed new HTML content on the entire page
function loadNewContent(url) {
  dock.style.bottom = "-100px"; 
  fetch(url)
    .then(response => response.text())
    .then(data => {
      // Replace the entire document with the new HTML
      document.open(); // Opens the document for writing
      document.write(data); // Writes the fetched HTML into the document
      document.close(); // Closes the document and renders the new content
    })
    .catch(error => console.error('Error loading new content:', error));
}

// Add click effect to each dock item and assign individual functions
document.getElementById('app1').addEventListener('click', app1Function);
document.getElementById('app2').addEventListener('click', app2Function);
document.getElementById('app3').addEventListener('click', app3Function);
document.getElementById('app4').addEventListener('click', app4Function);
document.getElementById('app5').addEventListener('click', app5Function);

// Add click effect to each dock item
dockItems.forEach(item => {
  item.addEventListener('click', () => {
    // Add 'clicked' class for the effect
    item.classList.add('clicked');
    
    // Remove the 'clicked' class after 0.2 seconds (duration of the effect)
    setTimeout(() => {
      item.classList.remove('clicked');
    }, 200);
  });
});
