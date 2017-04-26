

$('#logo-img').click((e)=>{
  const img = $('#logo-img');
  console.log('click');

  //Rotate OK logo
  $('#logo-img').addClass('add_rotateLogo');
  // $('#logo-img').removeClass('imgHover');

  //Slide Left navigation:
  $('nav>a:nth-child(1)').addClass('add_slideNav');
  setTimeout(()=>{
    $('nav>a:nth-child(2)').addClass('add_slideNav');
  },500);
  setTimeout(()=>{
    $('nav>a:nth-child(3)').addClass('add_slideNav');
  },1000);

  //SlideDown first-name and last-name
  setTimeout(()=>{
    $('#first-name').fadeIn(500);
  },500);
  setTimeout(()=>{
    $('#last-name').fadeIn(500);
  },1000);
});
