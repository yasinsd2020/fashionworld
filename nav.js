class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav>
        <div class="logo">
            <a href="home.html">ELLA MODEL</a>
        </div>

        <ul> 
            <li><a href="home.html" class="active">home</a></li>
            <li><a href="model.html">Models</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>

        <ul class="mobile-nav">
            <li><a href="home.html" class="active">home</a></li>
            <li><a href="model.html">Models</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">COntact</a></li>
        </ul>
    </nav>
    
    <div class="container">
        <div class="menu-btn"></div>
    </div>

    `
    }
} 
customElements.define('my-header',MyHeader)


class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML =  `<footer style="text-align: center; font-size: 18px; color: white;margin-bottom:1rem;">
        DevelopBy-yasin@20z20 
    </footer>
        `
    }
}
customElements.define('my-footer',MyFooter)

const nav = document.querySelector('nav');
const mobileNav = document.querySelector('.mobile-nav');
const menuBtn = document.querySelector('.menu-btn');
const container = document.querySelector('.container');
const navLinks = document.querySelectorAll('.mobile-nav a');


//Navigation Scrolling Animation

window.addEventListener('scroll', function () {
    if(this.pageYOffset > 100) {
        nav.classList.add('scrolled')
    } else {
        nav.classList.remove('scrolled')
    }
})

//Menu Btn Animation

container.addEventListener('click', function () {
    this.classList.toggle('active')

    if(this.classList.contains('active')) {
        mobileNav.classList.add('active')
    } else {
        mobileNav.classList.remove('active')
    }
})

navLinks.forEach(link => (link.addEventListener('click', function () {
    container.classList.remove('active');
    mobileNav.classList.remove('active');
})))

