export function setupMenuToggle() {
  const toggleButton = document.getElementById('toggle-button');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  const list = document.getElementById('nav-section');

  toggleButton.addEventListener('click', () => {
    const isOpen = menuIcon.classList.contains('hidden');

    if (isOpen) {
      // Menu sedang terbuka, maka tutup
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      list.classList.remove('top-[100px]', 'opacity-100');
      list.classList.add('top-[400px]', 'opacity-0');
    } else {
      // Menu sedang tertutup, maka buka
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
      list.classList.remove('top-[400px]', 'opacity-0');
      list.classList.add('top-[100px]', 'opacity-100');
    }
  });
}
