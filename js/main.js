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
    $(this).find("#copy-text-input").select()
    // $("#copy-text-input").select();
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

  $(".imgAdd").click(function () {
    $(this).closest(".row").find('.imgAdd').before('<div class="col-xl-2 col-lg-3 col-sm-4 col-6 imgUp"><div class="imagePreview"></div><label class="btn btn-primary">Upload<input type="file" class="uploadFile img" value="Upload Photo" style="width:0px;height:0px;overflow:hidden;"></label><i class="fa fa-times del"></i></div>');
  });
  $(document).on("click", "i.del", function () {
    // 	to remove card
    $(this).parent().remove();
    // to clear image
    // $(this).parent().find('.imagePreview').css("background-image","url('')");
  });
  $(function () {
    $(document).on("change", ".uploadFile", function () {
      var uploadFile = $(this);
      var files = !!this.files ? this.files : [];
      if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support

      if (/^image/.test(files[0].type)) { // only image file
        var reader = new FileReader(); // instance of the FileReader
        reader.readAsDataURL(files[0]); // read the local file

        reader.onloadend = function () { // set image data as background of div
          //alert(uploadFile.closest(".upimage").find('.imagePreview').length);
          uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url(" + this.result + ")");
        }
      }

    });
  });

  $('#kkkk').trigger('click')

  $('.select_2').select2();

  $("[data-fancybox]").fancybox({
    youtube: {
      controls: 1,
      showinfo: 1,
    },
    vimeo: {
      color: "f00",
    },
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



  $(document).on("click", ".mobile__menu .close", function () {
    $(".mobile__menu").removeClass("active");
    $("body").removeClass("opened");
  });

});
