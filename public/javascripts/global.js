$(document).ready(function(){

// choice of themes for site
  $('#theme_one').click(theme_one);
  $('#theme_two').click(theme_two);
  $('#theme_three').click(theme_three);
  $('#theme_four').click(theme_four);
  $('#theme_five').click(theme_five);


  function theme_one() {

  $("body").css("background-color", "#262626");
  $("#gallery_title").css("color", "#416BA6");
  $(".menu_list").css("color", "#E3E3E3");
  $(".img").css("filter", "none");
  $("#load_art").css("background", "linear-gradient(black, grey)");
  $("#load_art1").css("background", "linear-gradient(black, grey)");

  }
  function theme_two() {

  $("body").css("background-color", "#353E67");
  $("#gallery_title").css("color", "#C65652");
  $(".menu_list").css("color", "#3DA198");
  $("#load_art").css("background", "linear-gradient(#864D49, #A37D6E)");
  $("#load_art1").css("background", "linear-gradient(#864D49, #A37D6E)");

  }

  function theme_three() {

  $("body").css("background-color", "#59523C");
  $("#gallery_title").css("color", "#A68C3F");
  $(".menu_list").css("color", "#F2D4C2");
  $("#load_art").css("background", "linear-gradient(#A68053, #BF7960)");
  $("#load_art1").css("background", "linear-gradient(#A68053, #BF7960)");

  }

  function theme_four() {

  $("body").css("background-color", "#A1C0C6");
  $("#gallery_title").css("color", "#DE7163");
  $(".menu_list").css("color", "#E9F0EF");
    $(".img").css("filter", "none");
    $("#load_art").css("background", "linear-gradient(#A68053, #F2D4C2)");
    $("#load_art1").css("background", "linear-gradient(#A68053, #F2D4C2)");
    $("a").css("color", "white");
  }

  function theme_five() {

  $("body").css("background-color", "white");
  $("#gallery_title").css("color", "black");
  $(".menu_list").css("color", "black");
  $(".img").css("filter", "grayscale(100%)");
  $("#load_art").css("background", "linear-gradient(grey, white)");
  $("#load_art1").css("background", "linear-gradient(grey, white)");
  $(".image_selection1").css("filter", "grayscale(100%)");
  $(".image_selection2").css("filter", "grayscale(100%)");


  }
});



  $(function() {
    $("#random").click(function() {
    var filterArray =['none','greyscale','sepia','blur','saturate','invert','opacity','hue','contrast'];
    var itemOne = filterArray[Math.floor(Math.random()*filterArray.length)];
    var itemTwo = filterArray[Math.floor(Math.random()*filterArray.length)];



    $('#main').removeClass();
    $('#main_outer').removeClass();
    $('#main').addClass("image_selection1 image " +itemOne);
    $('#main_outer').addClass("image_selection1 image " +itemTwo);



});
});

  $(function() {
    $("#searchArtists").click(function() {

      var searchbox = $("#searchbar").val();
      $('#gallery_header').html('');
      $("#gallery_header").css({"display":"block", "visibility":"visible"});
      $("#load_art1").css({"display":"none", "visibility":"hidden"});


        $.ajax({
            url: "/gallery",
            type: "POST",
            dataType: "json",
            data: {
                id: searchbox
            },
            success: function (data) {

            var arrayLength = Object.keys(data.results).length;

            for (var i = 0; i < arrayLength; i++) {
              var name = data.results[i].all_artists;
              var resname = name.split(" "); //separate object using comma's (Used to get full name as it was being cut off due to the use of spaces)
              var title = data.results[i].title;
              var restitle = title.split(" ");
            var html = "<a class ='image_selection' href='#' id ="+data.results[i].thumbnailUrl+" name ="+resname+" alt="+restitle+"><figure id =image_wrapper><img class ='img' src="+data.results[i].thumbnailUrl+" id ="+data.results[i].thumbnailUrl+" alt="+data.results[i].title+"><p id='artist_name'>"+data.results[i].all_artists+"</p></figure></a>";
            $('#gallery_header').append(html); // append html to div

            }
            $('html,body').animate({
               scrollTop: $("#gallery_header").offset().top},
               'slow');

           },


        });
        });

});



  $(function() {
  $("#gallery_header").on("click",".image_selection", function(){
    var idimg = $(this).attr('id'); // get attributes
    var name1 = $(this).attr('name'); // get attributes
    var title1 = $(this).attr('alt'); // get attributes

    name = name1.replace(/^[, ]+|[, ]+$|[, ]+/g, " ").trim(); // remove commas to make it a normal string with spaces again
    title = title1.replace(/^[, ]+|[, ]+$|[, ]+/g, " ").trim();

    $('#artworktitle').html('');
    $('#artworktitle').append(title);


    $.ajax({ // ajax request to load the Artist information div with the image clicked on (and associated information)
        url: "/explore",
        type: "POST",
        dataType: "json",
        data: {
            id: name // use the name as a parameter
        },
        success: function (data) {
          $('#artistInformation').html(''); // clear the existing artist information before showing another

          var html = "<h3>"+ data.results[0].fc + "</h3><p> Date: "+data.results[0].date+"</p><p> Total Artworks: "
           + data.results[0].totalWorks+ "<p> Birth Place: "+ data.results[0].birth.place.name+", " + data.results[0].birth.time.startYear+
           "<p><a class ='link' href="+data.results[0].url + ">"
           +data.results[0].url +"</a></p>";

           if(html != ' '){
          $('#artistInformation').append(html); // append html to div
        }
         else{
           $('#artistInformation').append('none');
         }
       },
       error: function(err){

       }
    });



            $("#load_art1").css({"display":"block", "visibility":"visible"});
            $(".image_selection1").attr('src',idimg);
            $(".image_selection2").attr('src',idimg);
            $("#main_outer").attr('width',400);
            $("#main_outer").attr('height',400);
            $("#main").attr('width',350);
            $("#main").attr('height',350);


             $('html,body').animate({
                scrollTop: $("#load_art1").offset().top},
                'slow');
            });


});

  $(function() {
    $(".image_selection").click(function() {
      var idimg = $(this).attr('id');
      var name = $(this).attr('name');
      var title = $(this).attr('alt');

      $('#artworktitle').html('');
      $('#artworktitle').append(title);


      $.ajax({
          url: "/explore",
          type: "POST",
          dataType: "json",
          data: {
              id: name
          },
          success: function (data) {
            var artistName = data.results[0].fc;
            var res = artistName.split(" ");

            $('#artistInformation').html(''); // clear the existing artist information before showing another

            var html = "<h3>"+ data.results[0].fc + "</h3><p> Date: "+data.results[0].date+"</p><p> Total Artworks: "
             + data.results[0].totalWorks+ "<p> Birth Place: "+ data.results[0].birth.place.name+", " + data.results[0].birth.time.startYear+
             "<p><a href="+data.results[0].url + ">"
             +data.results[0].url +"</a></p>";


             if(html != ''){
            $('#artistInformation').append(html); // append html to div
          }
           else{
             $('#artistInformation').append('none');
           }
         },
         error: function(err){

         }
      });

            var dataimg = {};
            dataimg.img = idimg;

           $("#load_art").css({"display":"block", "visibility":"visible"});
           $(".image_selection1").attr('src',idimg);
           $(".image_selection2").attr('src',idimg);
           $("#main_outer").attr('width',400);
           $("#main_outer").attr('height',400);
           $("#main").attr('width',350);
           $("#main").attr('height',350);

               $('html,body').animate({
                  scrollTop: $("#load_art").offset().top},
                  'slow');
              });





            $(".image_selection2").click(function() {
              var img2id = $(this).attr('id');
              var className = (img2id +" image_selection2");
          //    console.log(img2id);
              $('#main').removeClass();
              $('#main').addClass(className);
              var classnameof = $('#main').attr('class');


        });



        });
