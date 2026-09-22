(function(){
  var views = document.querySelectorAll('.view');
  var navLinks = document.querySelectorAll('[data-goto]');
  var mobileMenu = document.getElementById('mobileMenu');

  function goto(view){
    views.forEach(function(v){ v.classList.toggle('active', v.id === 'view-' + view); });
    document.querySelectorAll('.nav-link').forEach(function(l){
      if(l.dataset.goto === view){ l.setAttribute('aria-current','page'); }
      else { l.removeAttribute('aria-current'); }
    });
    mobileMenu.classList.remove('open');
    document.getElementById('menuOpenBtn').setAttribute('aria-expanded','false');
    window.scrollTo({top:0, behavior:'instant' in window ? 'instant' : 'auto'});
  }

  navLinks.forEach(function(el){
    el.addEventListener('click', function(e){
      e.preventDefault();
      goto(el.dataset.goto);
    });
  });

  document.getElementById('menuOpenBtn').addEventListener('click', function(){
    mobileMenu.classList.add('open');
    this.setAttribute('aria-expanded','true');
  });
  document.getElementById('menuCloseBtn').addEventListener('click', function(){
    mobileMenu.classList.remove('open');
    document.getElementById('menuOpenBtn').setAttribute('aria-expanded','false');
  });

  /* ---- Design system drawer ---- */
  var dsDrawer = document.getElementById('dsDrawer');
  document.getElementById('dsOpenLink').addEventListener('click', function(e){
    e.preventDefault(); dsDrawer.classList.add('open');
  });
  document.getElementById('dsCloseBtn').addEventListener('click', function(){
    dsDrawer.classList.remove('open');
  });

})();