(function() {
  var key = 'zirvworld-dark';
  var html = document.documentElement;
  function setDark(on) {
    if (on) { html.classList.add('dark-mode'); } else { html.classList.remove('dark-mode'); }
    try { localStorage.setItem(key, on ? '1' : ''); } catch(e) {}
  }
  var stored;
  try { stored = localStorage.getItem(key); } catch(e) {}
  if (stored === '1') { setDark(true); }
  window.addEventListener('load', function() {
    var btn = document.getElementById('dark-toggle');
    if (!btn) return;
    btn.textContent = html.classList.contains('dark-mode') ? '☀ Light' : '☾ Dark';
    btn.addEventListener('click', function() {
      var on = !html.classList.contains('dark-mode');
      setDark(on);
      btn.textContent = on ? '☀ Light' : '☾ Dark';
    });
  });
})();
