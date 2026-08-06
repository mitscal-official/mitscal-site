document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
document.querySelectorAll('[data-scroll]').forEach(el=>el.addEventListener('click',e=>{const id=el.getAttribute('href');if(id&&id.startsWith('#')){e.preventDefault();document.querySelector(id)?.scrollIntoView({behavior:'smooth'})}}));

// Mobile navigation generated once so every static page stays consistent.
document.querySelectorAll('.nav').forEach(nav=>{if(nav.querySelector('.mobile-nav'))return;const d=document.createElement('details');d.className='mobile-nav';d.innerHTML=`<summary>メニュー</summary><div class="mobile-nav-panel"><a href="business.html">企業・店舗向け</a><a href="creator.html">クリエイター向け</a><a href="safety.html">安心への取り組み</a><a href="faq.html">よくある質問</a><a href="about.html">運営について</a><a href="contact.html">お問い合わせ</a></div>`;nav.insertBefore(d,nav.querySelector('.nav-actions'));});
