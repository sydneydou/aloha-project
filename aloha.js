
$(function() {


$(".sub").on("click", function() {
    //http://www.jquerybyexample.net/2011/04/validate-email-address-using-jquery.html
  
    function validateEmail(sEmail) {
      var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      console.log(filter.test(sEmail));
      if (filter.test(sEmail)) {
        return true;
      } else {
        return false;
      }
    }
  
    const sEmail = $(".mail").val();
  
    if (validateEmail(sEmail)) {
      alert("Thanks for Subscribing!");
    } else {
      alert("Invalid Email");
     
    }
     $(sEmail).val(" ");
  });
  
 
  
  $(".product-all").flickity({
    
    cellAlign: "left",
    contain: true
  });
  

  
  $(".product-all").on("focus", function() {
    $(this).addClass("product-click");
  });
  
  $(".product-all").on("blur", function() {
    $(this).removeClass("product-click");
  });
  
  

  
  $(".main-navigation li").on("focus", function() {
      $(this).addClass("nav-click");
    });
    
    $(".main-navigation li").on("blur", function() {
      $(this).removeClass("nav-click");
    });
  

  
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top-100
            },
            1000
          );
          return false;
        }
      }
    });
  });



  $(".products span").on("focus", function(){
      $(this).addClass("product-focus");
  });

  $(".products span").on("blur", function() {
    $(this).removeClass("product-focus");
  });
  });
