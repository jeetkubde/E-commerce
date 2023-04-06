const createNev = () => {
  let nav = document.querySelector(".navbar");

  nav.innerHTML = `
  <div class="nav">
  <img src="/img/dark-logo.png" class="brand-logo" alt="">
  <div class="nav-items">
    <div class="search">
      <input type="type" class="search-box" placeholder="Search Brand, Product">
      <button class="search-btn">Search</button>
    </div>
    <a href="contact.html"><img src="/img/user.png" alt=""></a>
    <a href="#"><img src="/img/cart.png " alt=""></a>
  </div>
</div>
<ul class="links-container">
  <li class="link-item"><a href="#" class="link">Home</a></li>
  <li class="link-item"><a href="#" class="link">Men</a></li>
  <li class="link-item"><a href="#" class="link">women</a></li>
  <li class="link-item"><a href="#" class="link">Kids</a></li>
  <li class="link-item"><a href="#" class="link">accessories </a></li>
</ul>
  `;
}

createNev();