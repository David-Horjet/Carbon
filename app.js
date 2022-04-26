// Introduction to Website

const no1 = prompt('If you are not a robot 🤖, Please type "Yes" ');

if (no1 === 'Yes') {
    alert('Welcome to Carbon');
    var nam = prompt('What is your name?')
    if (nam) {
        alert(`Welcome ${nam} 🤓😜`);
    } else {
        alert('Please provide a name na 🙍')
        document.write('Please reload the webpage to type in your name')
    }
} else {
    alert('You are a robot 😕 for not typing that "Yes" 😏');
    alert('Sha view the webpage 😲')
}


// Dropping of Mobile Nav

const menuList = document.getElementById('hamburger');
const closeList = document.getElementById('hamburger-close');
const nav = document.getElementById('mobile-nav');

menuList.addEventListener('click', show);
closeList.addEventListener('click', leave);

function show() {
    nav.style.display = 'block';
    closeList.style.display = 'block';
    menuList.style.display = 'none';
}

function leave() {
    nav.style.display = 'none';
    closeList.style.display = 'none';
    menuList.style.display = 'block';
}

// Scrolling effect in section nine

const download = document.getElementById('download');
const register = document.getElementById('register');
const start = document.getElementById('start');

window.addEventListener('scroll', function () {
    var top = window.scrollY;
    console.log(top);
    if (top > 0 && top < 5100) {
        download.style.opacity = 1;
        register.style.opacity = 0;
        start.style.opacity = 0;
        download.style.position = 'sticky';
    } else if (top > 5100 && top < 5590) {
        download.style.opacity = 0;
        register.style.opacity = 1;
        start.style.opacity = 0;
    } else if (top > 5590 && top < 10000) {
        download.style.opacity = 0;
        register.style.opacity = 0;
        start.style.opacity = 1;
    } else {
        download.style.opacity = 1;
        register.style.opacity = 1;
        start.style.opacity = 1;
    }
})


// Carousel Testimonials Script

const testimonials = document.querySelector('.testimonials');
const scroller = testimonials.querySelector('.scroller');
const nextBtn = testimonials.querySelector('.btn.next');
const prevBtn = testimonials.querySelector('.btn.prev');
const itemWidth = testimonials.querySelector('.testimony').clientWidth;

nextBtn.addEventListener('click', scrollToNextItem);
prevBtn.addEventListener('click', scrollToPrevItem);

function scrollToNextItem() {
    if (scroller.scrollLeft < (scroller.scrollWidth - itemWidth))
        // The scroll position is not at the beginning of last item
        scroller.scrollBy({
            left: itemWidth,
            top: 0,
            behavior: 'smooth'
        });
    else
        // Last item reached. Go back to first item by setting scroll position to 0
        scroller.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth'
        });
}

function scrollToPrevItem() {
    if (scroller.scrollLeft != 0)
        // The scroll position is not at the beginning of first item
        scroller.scrollBy({
            left: -itemWidth,
            top: 0,
            behavior: 'smooth'
        });
    else
        // This is the first item. Go to last item by setting scroll position to scroller width
        scroller.scrollTo({
            left: scroller.scrollWidth,
            top: 0,
            behavior: 'smooth'
        });
}



// Dropdown Effect in the Footer

const drop = document.getElementById('drop');
const hidden = document.getElementById('hidden');
const hide = document.getElementById('hide');

drop.addEventListener('click', open);
hide.addEventListener('click', close);

function open() {
    hidden.style.display = 'block';
    hide.style.display = 'block';
    drop.style.display = 'none';
}

function close() {
    hidden.style.display = 'none';
    hide.style.display = 'none';
    drop.style.display = 'block';
}