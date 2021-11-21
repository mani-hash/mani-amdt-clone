$("#footer-navbar").hide();

function navbar_view(bool_val) {
  if (bool_val == true) {
    $("#footer-navbar").show();
    $("#footer-navbar").addClass("d-flex");
  } else if (bool_val == false) {
    $("#footer-navbar").hide();
    $("#footer-navbar").removeClass("d-flex");
  }
}

function navbar_collapse_fix() {
  if (screen.width <= 991) {
    $("#navbar-toggle-btn").click();
  }
}



function small_screen_fix() {
  if (screen.width <= 767) {
    $(".content-change").removeClass("container-fluid");
    
  } else {
    $(".content-change").addClass("container-fluid");
    
  }
}

function nav_fix(val) {
  let index_url = window.location.href;

  let url_arr = index_url.split("/");

  let last_url = url_arr[url_arr.length - 1];

  if (val != false) {
    last_url = val;
  }

  if (last_url == "" || last_url == "#home") {
    $(".content-change").attr("id", "includeContent1");
    $("#includeContent1").load("home.html");
    $("#dorm1").addClass("active");
    navbar_view(true);
    $("body").attr("id", "home");
  } else if (last_url == "#amdt-quiz") {
    $(".content-change").attr("id", "includeContent2");
    $("#includeContent2").load("quiz.html");
    $("#dorm2").addClass("active");
    navbar_view(true);
    $("body").attr("id", "amdt-quiz");
  } else if (last_url == "#my-creative-page") {
    $(".content-change").attr("id", "includeContent3");
    $("#includeContent3").load("creative-page.html");
    $("#dorm3").addClass("active");
    navbar_view(true);
    $("body").attr("id", "my-creative-page");
  } else if (last_url == "#about-the-developer") {
    $(".content-change").attr("id", "includeContent4");
    $("#includeContent4").load("about-dev.html");
    $("#dorm4").addClass("active");
    navbar_view(false);
    $("body").attr("id", "about-the-developer");
  } else if (last_url == "#contact-us") {
    $(".content-change").attr("id", "includeContent5");
    $("#includeContent5").load("contact-us.html");
    $("#dorm5").addClass("active");
    navbar_view(true);
    $("body").attr("id", "contact-us");
  } else {
    $(".content-change").load("invalid.html");
  }
}

$(function () {
  $("#dorm1").click(function () {
    $(".nav-link").removeClass("active");
    nav_fix("#home");
    navbar_collapse_fix();
    document.getElementById("home").scrollIntoView();
  });

  $("#dorm2").click(function () {
    $(".nav-link").removeClass("active");
    nav_fix("#amdt-quiz");
    navbar_collapse_fix();
    document.getElementById("amdt-quiz").scrollIntoView();
  });

  $("#dorm3").click(function () {
    $(".nav-link").removeClass("active");
    nav_fix("#my-creative-page");
    navbar_collapse_fix();
    document.getElementById("my-creative-page").scrollIntoView();
  });

  $("#dorm4").click(function () {
    $(".nav-link").removeClass("active");
    nav_fix("#about-the-developer");
    navbar_collapse_fix();
    document.getElementById("about-the-developer").scrollIntoView();
  });

  $("#dorm5").click(function () {
    $(".nav-link").removeClass("active");
    nav_fix("#contact-us");
    navbar_collapse_fix();
    document.getElementById("contact-us").scrollIntoView();
  });
});

nav_fix(false);

window.addEventListener("resize", function (event) {
  small_screen_fix();
});

small_screen_fix();
