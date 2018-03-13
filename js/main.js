$(document).ready(function() {
  $('.carousel').carousel();
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
  setInterval(function() {
    $('.carousel').carousel('next');
  }, 5000);

  var form = $('#form');
  // Set up an event listener for the contact form.
  $(form).submit(function(event) {
    // Stop the browser from submitting the form.
    event.preventDefault();
    var formData = $(form).serialize();
    $.ajax({
      type: 'POST',
      url: $(form).attr('action'),
      data: formData
    }).done(function(response) {
      // Make sure that the formMessages div has the 'success' class.
      $('#success').removeClass('error');
      $('#success').addClass('success');

      // Set the message text.
      $('#success').text(response);

      // Clear the form.
      $('#name').val('');
      $('#email').val('');
      $('#textarea').val('');
    }).fail(function(data) {
      // Make sure that the formMessages div has the 'error' class.
      $('#success').removeClass('success');
      $('#success').addClass('error');

      // Set the message text.
      if (data.responseText !== '') {
        $('#success').text(data.responseText);
      } else {
        $('#success').text('Oops! An error occured and your message could not be sent.');
      }
    });
  });
});
