(function () {
  function getOrCreateToggleButton() {
    const existing = document.querySelector('[data-theme-toggle="dark"]');
    if (existing) return existing;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'toggle-button';
    btn.dataset.themeToggle = 'dark';
    btn.setAttribute('aria-label', 'Toggle dark mode');
    btn.textContent = 'Dark Mode';

    btn.addEventListener('click', function () {
      document.body.classList.toggle('darkmode');
      btn.textContent = document.body.classList.contains('darkmode')
        ? 'Light Mode'
        : 'Dark Mode';
    });

    // Use the same placement style defined in styles.css
    document.body.appendChild(btn);
    return btn;
  }

  function syncInitialState(btn) {
    const isDark = document.body.classList.contains('darkmode');
    btn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
  }

  document.addEventListener('DOMContentLoaded', function () {
    const btn = getOrCreateToggleButton();
    syncInitialState(btn);
  });
})();

