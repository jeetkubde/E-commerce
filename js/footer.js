const createFooter = () => {
  let footer = document.querySelector('footer');
  footer.innerHTML = `
  <div class="footer-content">
  <img src="img/light-logo.png" alt="" class="logo">
  <div class="footer-ul-container">
    <ul class="category">
      <li class="category-title">men</li>
      <li><a href="#" class="footer-link">t-shirt</a></li>
      <li><a href="#" class="footer-link">shirt</a></li>
      <li><a href="#" class="footer-link">sweatshirt</a></li>
      <li><a href="#" class="footer-link">jeans</a></li>
      <li><a href="#" class="footer-link">trousers</a></li>
      <li><a href="#" class="footer-link">shoes</a></li>
      <li><a href="#" class="footer-link">formal</a></li>
      <li><a href="#" class="footer-link">casuala</a></li>
      <li><a href="#" class="footer-link">sports</a></li>
      <li><a href="#" class="footer-link">watch</a></li>
    </ul>
    <ul class="category">
      <li class="category-title">women</li>
      <li><a href="#" class="footer-link">t-shirt</a></li>
      <li><a href="#" class="footer-link">shirt</a></li>
      <li><a href="#" class="footer-link">sweatshirt</a></li>
      <li><a href="#" class="footer-link">jeans</a></li>
      <li><a href="#" class="footer-link">trousers</a></li>
      <li><a href="#" class="footer-link">shoes</a></li>
      <li><a href="#" class="footer-link">formal</a></li>
      <li><a href="#" class="footer-link">casuala</a></li>
      <li><a href="#" class="footer-link">sports</a></li>
      <li><a href="#" class="footer-link">watch</a></li>
    </ul>
  </div>
 
</div>
<p class="footer-title">About campany</p>
<p class="info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus iure itaque, animi labore ut, harum odit dolor quas nobis possimus facilis deserunt enim! Dolor reiciendis est voluptatibus iure, iste alias incidunt quam, illum laboriosam hic sequi sunt culpa! Voluptatem nobis accusantium minus corporis fugiat voluptates voluptatibus saepe reprehenderit debitis tempora iste vel voluptas similique alias, consequuntur mollitia accusamus doloremque veniam excepturi dolor dolores! Dolores harum consectetur beatae atque saepe nemo quaerat eum quis totam. Inventore, tempora eius. Est, alias modi!</p>
<p class="info">Support email - jeetkubde10@gmail.com</p>

<div class="footer-social">
  <div>
    <a href="#" class="social-link">terms & services</a>
    <a href="#" class="social-link">privacy page</a>
  </div>
  <div>
    <a href="#" class="social-link">intragram</a>
    <a href="#" class="social-link">facebook</a>
    <a href="#" class="social-link">Whatapp</a>
  </div>
</div>
  `;
}
createFooter();