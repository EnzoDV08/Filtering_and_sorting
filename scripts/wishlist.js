// Remove button
$(document).ready(function() {
  $(".remove-btn").click(function() {
    $(this).closest("tr").remove();
  });
});

$(document).ready(function() {
  // Highlight row on hover
  $('tbody tr').hover(
    function() {
      $(this).addClass('highlight');
    },
    function() {
      $(this).removeClass('highlight');
    }
  );

  // Show remove message on remove button click
  $('.remove-btn').click(function() {
    var plantName = $(this).closest('tr').find('td:nth-child(2)').text();
    var message = 'Removing ' + plantName + ' from your wishlist.';
    alert(message);

    // Cool animation on remove
    $(this).closest('tr').fadeOut(500, function() {
      $(this).remove();
    });
  });
});

  
  