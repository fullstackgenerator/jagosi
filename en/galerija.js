$(document).ready(function() {
    // Initialize Fancybox
    $('[data-fancybox="gallery"]').fancybox({
      loop: true,
      infobar: false,
      buttons: [
        "zoom",
        "slideShow",
        "fullScreen",
        "thumbs",
        "close"
      ],
      animationEffect: "fade",
      animationDuration: 300,
      afterLoad: function(instance, current) {
        // Increase image size by 30%
        current.width += current.width * 0.3;
        current.height += current.height * 0.3;

        // Add left and right arrows for navigation
        instance.$refs.arrowLeft.add(instance.$refs.arrowRight).css('display', 'block');

        // Close on click outside the image
        $(document).on('click', function(e) {
          if (!$(e.target).closest('.fancybox-container, .popup-btn').length) {
            instance.close();
          }
        });
      }
    });
  });