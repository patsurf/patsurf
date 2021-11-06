window.onload = function () 
{   const lookup_country = document.querySelector('#lookup-country');
    const lookup_cities=document.querySelector('#lookup-cities');
    var result = document.querySelector('#result');
    $.ajax({
      url: 'world.php',
      type: 'GET',
      success: function(response) 
      {result.innerHTML=response;}
  
    }); 
    lookup_country.addEventListener('click', function(event) {
        event.preventDefault();
        var search =document.getElementById("country").value;
        $.ajax({
          url: 'world.php',
          type: 'GET',
          data: { "country": search,"context":"countries"},
          success: function(response) 
          {result.innerHTML=response;}
      
        });         
    });
    lookup_cities.addEventListener('click', function(event) {
      event.preventDefault();
      var search =document.getElementById("country").value;
      $.ajax({
        url: 'world.php',
        type: 'GET',
        data: { "country": search,"context":"cities"},
        success: function(response) 
        {result.innerHTML=response;}
    
      });         
  });

    
}
