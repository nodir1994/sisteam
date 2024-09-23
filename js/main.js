$(document).ready(function () {
  $(".btn-toggle-sidebar").on('click', function () {
    $('.sidebar-block').toggleClass('closed')
    $(".sidebar-block .accordion-menu .btn-toggle-accordion").removeClass('isOpen')
    $(".sidebar-block .accordion-menu .body-accordion").slideUp()
  })

  launch_notification = () => {
    let notification = document.getElementById("toast")
    notification.className = "show";
    setTimeout(() => { notification.className = notification.className.replace("show", ""); }, 4000);
  }

  $(document).on('click', ".sidebar-block:not(.closed) .accordion-menu .btn-toggle-accordion", function () {
    $(this).toggleClass('isOpen')
    $(this).next().slideToggle()
  })

  $(document).on('click', ".mobile-menu .accordion-menu .btn-toggle-accordion", function () {
    $(this).toggleClass('isOpen')
    $(this).next().slideToggle()
  })

  $(".client_id").on('click', function () {
    $("#copy-text-input").select();
    document.execCommand("copy");
    launch_notification()
  })

  $("#imageUpload").change(function (data) {

    var imageFile = data.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(imageFile);

    reader.onload = function (evt) {
      $('#imagePreview').attr('src', evt.target.result);
      $('#imagePreview').hide();
      $('#imagePreview').fadeIn(650);
    }

  });

  $("body").click(function (e) {
    if (!$(e.target).is(".language_block *,.language_block")) {
      $(".language_block").removeClass("active");
    }

    if (
      !$(e.target).is(
        ".mobile-menu .mobile-menu-body, .mobile-menu .mobile-menu-body *"
      )
    ) {
      $(".mobile-menu").removeClass("active");
      $("body").removeClass("opened");
    }
  });

  $(document).on("click", ".open-sidebar", function () {
    $(".mobile-menu").addClass("active");
    $("body").addClass("opened");
  });


})




$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > $(window).height()) {
      $(".scrollup").addClass("showed");
    } else {
      $(".scrollup").removeClass("showed");
    }
  });

  $(".scrollup").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });


  $("[data-fancybox]").fancybox({
    youtube: {
      controls: 1,
      showinfo: 1,
    },
    vimeo: {
      color: "f00",
    },
  });



  $(document).on("click", ".toggle_password span", function () {
    $(this).parent().toggleClass("show");
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  });

  $(document).on("click", ".mobile__menu .close", function () {
    $(".mobile__menu").removeClass("active");
    $("body").removeClass("opened");
  });

  if ($(window).width() < 1024) {
    $("section.home_faculty .right__faculty .swiper-container").after(
      $("section.home_faculty .all_faculty ")
    );
  }

  $(document).on("click", ".home_faculty ul li a", function (e) {
    e.preventDefault();
    $(".home_faculty ul li a").removeClass("active");
    $(this).addClass("active");
  });
});
