function loadNavbar() {

 const container = document.getElementById('navbar-container');

 // Create nav element
 const nav = document.createElement('nav');
 nav.className = 'navbar navbar-expand-lg navbar-dark bg-dark';

 // Create div
 const navDiv = document.createElement('div');
 navDiv.className = 'collapse navbar-collapse';
 navDiv.id = 'navbarNav';

 // Create ul
 const ul = document.createElement('ul');
 ul.className = 'navbar-nav';

 // Create nav items
 const navItems = [
 { text: 'Home', href: '../resources/views/index.html' },
 { text: 'Sports', href: '../resources/views/sports.html' }
 ];
 navItems.forEach(item => {
 const li = document.createElement('li');
 li.className = 'nav-item';
 const a = document.createElement('a');
 a.className = 'nav-link';
 a.href = item.href;
 a.textContent = item.text;
 li.appendChild(a);
 ul.appendChild(li);
 });

 // Assemble the navbar
 navDiv.appendChild(ul);
 nav.appendChild(navDiv);
 container.appendChild(nav)
 
}