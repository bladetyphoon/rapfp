function app1Function() {
  setTimeout(() => {
    loadNewContent("https://cdn.jsdelivr.net/gh/vidio-boy/Eaglercraft1.5.2@refs/heads/main/eaglercraft.1.5.2.html");
  }, 100);
}

function app2Function() {
  setTimeout(() => {
    loadNewContent("<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ReneTirado14/lbannana@3ad5bf7eab1a47660acd8fbe0c24d1119c7a0b6d/html/slope/TemplateData/style.css"> <script src="https://cdn.jsdelivr.net/gh/ReneTirado14/lbannana@3ad5bf7eab1a47660acd8fbe0c24d1119c7a0b6d/html/slope/TemplateData/UnityProgress.js"></script> <script src="https://cdn.jsdelivr.net/gh/ReneTirado14/lbannana@3ad5bf7eab1a47660acd8fbe0c24d1119c7a0b6d/html/slope/TemplateData/unityloader41.js"></script> <script> var gameInstance = UnityLoader.instantiate("gameContainer", "https://cdn.jsdelivr.net/gh/ReneTirado14/lbannana@3ad5bf7eab1a47660acd8fbe0c24d1119c7a0b6d/html/slope/Build/slope.json", {onProgress: UnityProgress,Module:{onRuntimeInitialized: function() {UnityProgress(gameInstance, "complete")}}}); </script> <script src="https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/addc4348-16c2-4645-9dff-f99b962e39ef%2Fscr.js"></script> <div class="webgl-content"> <div id="gameContainer" style="width: 100vw; height: 100vh"></div> </div>");
  }, 100);
}

function app3Function() {
  setTimeout(() => {
    loadNewContent("https://cdn.jsdelivr.net/gh/your-user/your-repo/app3-content.html");
  }, 100);
}

function app4Function() {
  setTimeout(() => {
    loadNewContent("<h1>App 4 Content</h1><p>Inline HTML for App 4.</p>");
  }, 100);
}

function app5Function() {
  setTimeout(() => {
    loadNewContent("https://cdn.jsdelivr.net/gh/your-user/your-repo/app5-content.html");
  }, 100);
}

// Function to load and embed new HTML content with a loading spinner
function loadNewContent(content) {
  dock.style.bottom = "-100px";
  showLoadingSpinner(); // Show the loading spinner

  // Check if content is a URL or pure HTML
  if (content.startsWith("http://") || content.startsWith("https://")) {
    // Fetch content from URL
    fetch(content)
      .then(response => response.text())
      .then(data => {
        replaceDocumentContent(data); // Replace the document with fetched content
      })
      .catch(error => {
        console.error('Error loading new content:', error);
        alert('Failed to load content. Please try again.');
      })
      .finally(() => {
        hideLoadingSpinner(); // Hide the loading spinner after fetch is complete
      });
  } else {
    // Content is pure HTML, directly replace the document
    replaceDocumentContent(content);
    hideLoadingSpinner(); // Hide spinner immediately since no fetching is needed
  }
}

// Function to replace the entire document with new content
function replaceDocumentContent(htmlContent) {
  document.open();
  document.write(htmlContent);
  document.close();
}

// Function to show the loading spinner
function showLoadingSpinner() {
  const spinner = document.createElement('div');
  spinner.id = 'loading-spinner';
  spinner.style.position = 'fixed';
  spinner.style.top = '50%';
  spinner.style.left = '50%';
  spinner.style.transform = 'translate(-50%, -50%)';
  spinner.style.zIndex = '9999';
  spinner.innerHTML = `
    <div style="
      width: 50px;
      height: 50px;
      border: 5px solid rgba(0, 0, 0, 0.1);
      border-top: 5px solid #fff;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    "></div>
    <style>
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    </style>
  `;
  document.body.appendChild(spinner);
}

// Function to hide the loading spinner
function hideLoadingSpinner() {
  const spinner = document.getElementById('loading-spinner');
  if (spinner) {
    spinner.remove();
  }
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
