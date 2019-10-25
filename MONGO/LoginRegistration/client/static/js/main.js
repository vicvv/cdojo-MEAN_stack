$(document).ready(function(){
  $('.delete-animal').on('click', function(e){
    $target = $(e.target);
    const id = $target.attr('data-id');
    $.ajax({
      type:'DELETE',
      url: '/animals/'+id,
      success: function(response){
        alert('Deleting Animal');
        window.location.href='/';
      },
      error: function(err){
        console.log(err);
      }
    });
  });
});
