const AREA = document.body;
const CIRCLE1 = document.querySelector('.circle1');
const CIRCLE2 = document.querySelector('.circle2');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function mouseCoordinates(e) {
    // Capture the event object (mouse movement).
    // Get X coordinate (distance from left viewport edge) via clientX property.
    // Take total window width, subtract current coordinate and width of circle.
    // Do the same for Y coordinate (distance from top viewport edge).
    var horizontalPosition = windowWidth - e.clientX - 26;
    var verticalPosition= windowHeight - e.clientY - 26;

    // Set horizontal and vertical position.
    CIRCLE1.style.left = horizontalPosition + 'px';
    CIRCLE1.style.top = verticalPosition + 'px';

    CIRCLE2.style.left = (1.5*horizontalPosition) + 'px';
    CIRCLE2.style.top = (1.3*verticalPosition) + 'px';
}

function changeColorOnTouch() {
    CIRCLE1.style.backgroundColor = "green";
    CIRCLE1.style.borderColor = "green";

    CIRCLE2.style.backgroundColor = "violet";
    CIRCLE2.style.borderColor = "violet";
}

// When the mouse moves, run the mouseCoordinates function.
AREA.addEventListener('mousemove', mouseCoordinates, false);

// When the mouse touches the circle, run the changeColorOnTouch function.
CIRCLE1.addEventListener('mouseenter', changeColorOnTouch, false);
CIRCLE2.addEventListener('mouseenter', changeColorOnTouch, false);

// When the mouse leaves the circle, remove inline styles with an anonymous function.
CIRCLE1.addEventListener('mouseleave', function(){CIRCLE1.removeAttribute("style");}, false);
CIRCLE2.addEventListener('mouseleave', function(){CIRCLE2.removeAttribute("style");}, false);
