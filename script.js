document.addEventListener("DOMContentLoaded", function() {
    var menuToggleInput = document.getElementById('menuToggleInput');
    var menuItems = document.querySelectorAll('#menu a');

    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            menuToggleInput.checked = false;
        });
    });
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle scroll event
  function handleScroll() {
    const elements = document.querySelectorAll('.landingBgRazvoj, .landingBgZnanje, .landingBgIzboljsave');
    elements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('visible');
      }
    });
  }
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);

  function handleParallax() {
    const razvoj = document.querySelector('.razvoj');
    const scrollPosition = window.scrollY;
    razvoj.style.backgroundPositionX = -(scrollPosition * 0.1) + 'px'; // Adjust the 0.5 factor for desired parallax effect
  }
  
  // Add scroll event listener for parallax effect
  window.addEventListener('scroll', handleParallax);