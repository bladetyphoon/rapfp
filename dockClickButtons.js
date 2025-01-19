function app1Function() {
  setTimeout(() => {window.open("https://sites.google.com/view/heyitadm1nsdontblock/apps/ai/ai-chat");}, 100);
}

function app2Function() {
  console.log('App 2 clicked!')
}

function app3Function() {
  console.log('App 3 clicked!');
  // Additional functionality for App 3
}

function app4Function() {
  console.log('App 4 clicked!');
  // Additional functionality for App 4
}

function app5Function() {
  console.log('App 5 clicked!');
  // Additional functionality for App 5
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
