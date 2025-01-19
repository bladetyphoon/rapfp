// dockEffects.js
const dock = document.querySelector('.dock');
const dockItems = document.querySelectorAll('.dock-item');

dock.addEventListener('mousemove', (e) => {
  const rect = dock.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;

  dockItems.forEach((item, index) => {
    const itemRect = item.getBoundingClientRect();
    const itemCenterX = itemRect.left + itemRect.width / 2 - rect.left;

    const distance = Math.abs(mouseX - itemCenterX);
    const scale = Math.max(1, 2.0 - distance / 250);

    const verticalOffset = (scale - 1) * 15;
    item.style.transform = `scale(${scale})`;

    const dynamicMargin = 10 + (scale - 1) * 25;
    item.style.margin = `0 ${dynamicMargin}px`;

    item.style.bottom = `${verticalOffset}px`;
  });
});

dock.addEventListener('mouseleave', () => {
  dockItems.forEach((item) => {
    item.style.transform = 'scale(1)';
    item.style.margin = '0 8px';
    item.style.bottom = '0px';
  });
});
