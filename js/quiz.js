document.title = "Quiz | AMDT";

$(function () {
  $(".sidebar-content").hide(); //hide all side bar content!

  //Toggle menu JavaScript Code
  var sidebarToggle = document.getElementById("sidebarToggle");
  if (sidebarToggle) {
    // Uncomment Below to persist sidebar toggle between refreshes
    // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
    //     document.body.classList.toggle('sb-sidenav-toggled');
    // }
    sidebarToggle.addEventListener("click", (event) => {
      event.preventDefault();
      document
        .getElementById("amdt-quiz")
        .classList.toggle("sb-sidenav-toggled");
      localStorage.setItem(
        "sb|sidebar-toggle",
        document.body.classList.contains("sb-sidenav-toggled")
      );
    });
  }

  $(".locked").hide(); //hide all lock svgs

  

  

  function next_back_btn(ques1) {
    $(".list-group-item").removeClass("active");
    $(ques1).addClass("active");
    sessionStorage.setItem("current_question", $(ques1).attr("id"));
    $(".sidebar-content").hide();
    $("#" + $(ques1).attr("id") + "_content").show();
    document.getElementById("sidebarToggle").scrollIntoView();
  }

  function validate_points(ques) {
    var corr_ans = "";
    var temp_points = 0;
    if (ques == 1) {
      corr_ans = "q1_radio3";
    } else if (ques == 2) {
      corr_ans = "q2_radio2";
    } else if (ques == 3) {
      corr_ans = "q3_radio1";
    } else if (ques == 4) {
      corr_ans = "q4_radio3";
    } else if (ques == 5) {
      corr_ans = "q5_radio4";
    } else if (ques == 6) {
      corr_ans = "q6_radio3";
    } else if (ques == 7) {
      corr_ans = "q7_radio2";
    } else if (ques == 8) {
      corr_ans = "q8_radio4";
    } else if (ques == 9) {
      corr_ans = "q9_radio1";
    } else if (ques == 10) {
      corr_ans = "q10_radio3";
    }

    if (localStorage.getItem("q" + ques + "_option") === corr_ans) {
      temp_points = 2;
    } else {
      temp_points = -1;
    }
    return temp_points;
  }

  function reset_click() {
    if (screen.width <= 767) {
      $("#sidebarToggle").click();
    } else {
      return false;
    }
  }

  $(".list-group-item").click(function () {
    reset_click();
  });

  if (localStorage.getItem("question_num") !== null) {
    $("#answered").html(localStorage.getItem("question_num")); //set the no of questions answered on refresh
  }

  if (localStorage.getItem("points") !== null) {
    $("#points").html(localStorage.getItem("points"));
  }

  if (localStorage.getItem("question_num") === null) {
    localStorage.setItem("question_num", 0);
  }

  if (localStorage.getItem("points") === null) {
    localStorage.setItem("points", 0);
  }

  var ques_answered = Number(localStorage.getItem("question_num"));
  var total_points = Number(localStorage.getItem("points"));

  if (sessionStorage.getItem("current_question") !== null) {
    var current_question = sessionStorage.getItem("current_question");
    $("#" + current_question).addClass("active");
  } else {
    sessionStorage.setItem("current_question", "main_menu");
    $("#main_menu").addClass("active");
  }

  //change content

  var active_bar = sessionStorage.getItem("current_question");

  $("#" + active_bar + "_content").show();

  //change active mark

  $(".list-group-item").click(function () {
    $(".list-group-item").removeClass("active");
    $(this).addClass("active");
    sessionStorage.setItem("current_question", $(this).attr("id"));
    $(".sidebar-content").hide();
    $("#" + $(this).attr("id") + "_content").show();
    document.getElementById("sidebarToggle").scrollIntoView();
  });

  //disabled code

  function remove_lock(bhrefs) {
    var locked_icons = document.getElementsByClassName("locked");

    for (var n1 = 0; n1 < bhrefs; n1++) {
      try {
        locked_icons[0].classList.remove("locked");
      } catch (err) {
        console.log(err.message);
      }
    }
  }

  //unlock available locked questions

  var locked_ques = 1;

  if (typeof document.getElementsByClassName("locked") !== "undefined") {
    while (locked_ques <= 10) {
      if (ques_answered === locked_ques) {
        remove_lock(locked_ques);
        break;
      }
      locked_ques += 1;
    }
  }

  // if (ques_answered )

  $(".locked").parent().addClass("disabled");

  // $(".locked").attr("src", "images/lock-fill.svg")
  $(".locked").show();

  //Start quiz button click code

  $("#start-quiz").click(function () {
    // $("#question_1").click();
    next_back_btn("#question_1");
  });

  $("#reset_quiz").click(function () {
    localStorage.clear();
    sessionStorage.clear();

    location.reload();
  });

  //mcq choice

  $(".sbmit").addClass("disabled");

  //question 1 verification

  if (localStorage.getItem("q1_option") !== null) {
    $("#" + localStorage.getItem("q1_option")).prop("checked", true);
    localStorage.setItem("question_num", 1);
    document.getElementsByClassName("sbmit")[0].classList.remove("disabled");

    //question 2 verification

    if (localStorage.getItem("q2_option") !== null) {
      $("#" + localStorage.getItem("q2_option")).prop("checked", true);
      localStorage.setItem("question_num", 2);
      document.getElementsByClassName("sbmit")[1].classList.remove("disabled");

      //question 3 verification

      if (localStorage.getItem("q3_option") !== null) {
        $("#" + localStorage.getItem("q3_option")).prop("checked", true);
        localStorage.setItem("question_num", 3);
        document
          .getElementsByClassName("sbmit")[2]
          .classList.remove("disabled");

        //question 4 verification

        if (localStorage.getItem("q4_option") !== null) {
          $("#" + localStorage.getItem("q4_option")).prop("checked", true);
          localStorage.setItem("question_num", 4);
          document
            .getElementsByClassName("sbmit")[3]
            .classList.remove("disabled");

          //question 5 verification

          if (localStorage.getItem("q5_option") !== null) {
            $("#" + localStorage.getItem("q5_option")).prop("checked", true);
            localStorage.setItem("question_num", 5);
            document
              .getElementsByClassName("sbmit")[4]
              .classList.remove("disabled");

            //question 6 verification

            if (localStorage.getItem("q6_option") !== null) {
              $("#" + localStorage.getItem("q6_option")).prop("checked", true);
              localStorage.setItem("question_num", 6);
              document
                .getElementsByClassName("sbmit")[5]
                .classList.remove("disabled");

              //question 7 verification

              if (localStorage.getItem("q7_option") !== null) {
                $("#" + localStorage.getItem("q7_option")).prop(
                  "checked",
                  true
                );
                localStorage.setItem("question_num", 7);
                document
                  .getElementsByClassName("sbmit")[6]
                  .classList.remove("disabled");

                //question 8 verification

                if (localStorage.getItem("q8_option") !== null) {
                  $("#" + localStorage.getItem("q8_option")).prop(
                    "checked",
                    true
                  );
                  localStorage.setItem("question_num", 8);
                  document
                    .getElementsByClassName("sbmit")[7]
                    .classList.remove("disabled");

                  //question 9 verification

                  if (localStorage.getItem("q9_option") !== null) {
                    $("#" + localStorage.getItem("q9_option")).prop(
                      "checked",
                      true
                    );
                    localStorage.setItem("question_num", 9);
                    document
                      .getElementsByClassName("sbmit")[8]
                      .classList.remove("disabled");

                    //question 10 verification

                    if (localStorage.getItem("q10_option") !== null) {
                      $("#" + localStorage.getItem("q10_option")).prop(
                        "checked",
                        true
                      );
                      localStorage.setItem("question_num", 10);
                      document
                        .getElementsByClassName("sbmit")[9]
                        .classList.remove("disabled");
                    } else if (sessionStorage.getItem("q10") !== null) {
                      $("#" + sessionStorage.getItem("q10")).prop(
                        "checked",
                        true
                      );
                      localStorage.setItem("question_num", 9);
                      document
                        .getElementsByClassName("sbmit")[9]
                        .classList.remove("disabled");
                    } else {
                      localStorage.setItem("question_num", 9);
                    }
                  } else if (sessionStorage.getItem("q9") !== null) {
                    $("#" + sessionStorage.getItem("q9")).prop("checked", true);
                    localStorage.setItem("question_num", 8);
                    document
                      .getElementsByClassName("sbmit")[8]
                      .classList.remove("disabled");
                  } else {
                    localStorage.setItem("question_num", 8);
                  }
                } else if (sessionStorage.getItem("q8") !== null) {
                  $("#" + sessionStorage.getItem("q8")).prop("checked", true);
                  localStorage.setItem("question_num", 7);
                  document
                    .getElementsByClassName("sbmit")[7]
                    .classList.remove("disabled");
                } else {
                  localStorage.setItem("question_num", 7);
                }
              } else if (sessionStorage.getItem("q7") !== null) {
                $("#" + sessionStorage.getItem("q7")).prop("checked", true);
                localStorage.setItem("question_num", 6);
                document
                  .getElementsByClassName("sbmit")[6]
                  .classList.remove("disabled");
              } else {
                localStorage.setItem("question_num", 6);
              }
            } else if (sessionStorage.getItem("q6") !== null) {
              $("#" + sessionStorage.getItem("q6")).prop("checked", true);
              localStorage.setItem("question_num", 5);
              document
                .getElementsByClassName("sbmit")[5]
                .classList.remove("disabled");
            } else {
              localStorage.setItem("question_num", 5);
            }
          } else if (sessionStorage.getItem("q5") !== null) {
            $("#" + sessionStorage.getItem("q5")).prop("checked", true);
            localStorage.setItem("question_num", 4);
            document
              .getElementsByClassName("sbmit")[4]
              .classList.remove("disabled");
          } else {
            localStorage.setItem("question_num", 4);
          }
        } else if (sessionStorage.getItem("q4") !== null) {
          $("#" + sessionStorage.getItem("q4")).prop("checked", true);
          localStorage.setItem("question_num", 3);
          document
            .getElementsByClassName("sbmit")[3]
            .classList.remove("disabled");
        } else {
          localStorage.setItem("question_num", 3);
        }
      } else if (sessionStorage.getItem("q3") !== null) {
        $("#" + sessionStorage.getItem("q3")).prop("checked", true);
        localStorage.setItem("question_num", 2);
        document
          .getElementsByClassName("sbmit")[2]
          .classList.remove("disabled");
      } else {
        localStorage.setItem("question_num", 2);
      }
    } else if (sessionStorage.getItem("q2") !== null) {
      $("#" + sessionStorage.getItem("q2")).prop("checked", true);
      localStorage.setItem("question_num", 1);
      document.getElementsByClassName("sbmit")[1].classList.remove("disabled");
    } else {
      localStorage.setItem("question_num", 1);
    }
  } else if (sessionStorage.getItem("q1") !== null) {
    $("#" + sessionStorage.getItem("q1")).prop("checked", true);
    localStorage.setItem("question_num", 0);
    document.getElementsByClassName("sbmit")[0].classList.remove("disabled");
  } else {
    localStorage.setItem("question_num", 0);
  }

  //question 1 radio option change

  $("input[name='q1']").change(function () {
    if ($(this).is(":checked")) {
      if (localStorage.getItem("q1_option") === null) {
        sessionStorage.setItem("q1", $(this).attr("id"));
      } else {
        localStorage.setItem("q1_option", $(this).attr("id"));
      }

      document.getElementsByClassName("sbmit")[0].classList.remove("disabled");
    }
  });

  //question 2 radio option change

  $("input[name='q2']").change(function () {
    if ($(this).is(":checked")) {
      if (localStorage.getItem("q2_option") === null) {
        sessionStorage.setItem("q2", $(this).attr("id"));
      } else {
        localStorage.setItem("q2_option", $(this).attr("id"));
      }

      document.getElementsByClassName("sbmit")[1].classList.remove("disabled");
    }
  });

  //question 3 radio option change

  $("input[name='q3']").change(function () {
    if ($(this).is(":checked")) {
      if (localStorage.getItem("q3_option") === null) {
        sessionStorage.setItem("q3", $(this).attr("id"));
      } else {
        localStorage.setItem("q3_option", $(this).attr("id"));
      }

      document.getElementsByClassName("sbmit")[2].classList.remove("disabled");
    }
  });

  //question 4 radio option change

  $("input[name='q4']").change(function () {
    if ($(this).is(":checked")) {
      if (localStorage.getItem("q4_option") === null) {
        sessionStorage.setItem("q4", $(this).attr("id"));
      } else {
        localStorage.setItem("q4_option", $(this).attr("id"));
      }

      document.getElementsByClassName("sbmit")[3].classList.remove("disabled");
    }
  });

  //question 5 radio option change

  $("input[name='q5']").change(function () {
    if ($(this).is(":checked")) {
      if (localStorage.getItem("q5_option") === null) {
        sessionStorage.setItem("q5", $(this).attr("id"));
      } else {
        localStorage.setItem("q5_option", $(this).attr("id"));
      }

      document.getElementsByClassName("sbmit")[4].classList.remove("disabled");
    }
  });

  //question 6 radio option change

  $("input[name='q6']").change(function () {
    if ($(this).is(":checked")) {
      if (localStorage.getItem("q6_option") === null) {
        sessionStorage.setItem("q6", $(this).attr("id"));
      } else {
        localStorage.setItem("q6_option", $(this).attr("id"));
      }

      document.getElementsByClassName("sbmit")[5].classList.remove("disabled");
    }
  });

  //question 7 radio option change

  $("input[name='q7']").change(function () {
    if ($(this).is(":checked")) {
      if (localStorage.getItem("q7_option") === null) {
        sessionStorage.setItem("q7", $(this).attr("id"));
      } else {
        localStorage.setItem("q7_option", $(this).attr("id"));
      }

      document.getElementsByClassName("sbmit")[6].classList.remove("disabled");
    }
  });

  //question 8 radio option change

  $("input[name='q8']").change(function () {
    if ($(this).is(":checked")) {
      if (localStorage.getItem("q8_option") === null) {
        sessionStorage.setItem("q8", $(this).attr("id"));
      } else {
        localStorage.setItem("q8_option", $(this).attr("id"));
      }

      document.getElementsByClassName("sbmit")[7].classList.remove("disabled");
    }
  });

  //question 9 radio option change

  $("input[name='q9']").change(function () {
    if ($(this).is(":checked")) {
      if (localStorage.getItem("q9_option") === null) {
        sessionStorage.setItem("q9", $(this).attr("id"));
      } else {
        localStorage.setItem("q9_option", $(this).attr("id"));
      }

      document.getElementsByClassName("sbmit")[8].classList.remove("disabled");
    }
  });

  //question 10 radio option change

  $("input[name='q10']").change(function () {
    if ($(this).is(":checked")) {
      if (localStorage.getItem("q10_option") === null) {
        sessionStorage.setItem("q10", $(this).attr("id"));
      } else {
        localStorage.setItem("q10_option", $(this).attr("id"));
      }

      document.getElementsByClassName("sbmit")[9].classList.remove("disabled");
    }
  });

  //question 1 next button

  $(".sbmit")
    .eq(0)
    .click(function () {
      $(".locked").eq(0).parent().removeClass("disabled");
      $(".locked").eq(0).hide();
      $(".locked").eq(0).removeClass("locked");

      if (sessionStorage.getItem("q1") !== null) {
        localStorage.setItem("q1_option", sessionStorage.getItem("q1"));
        localStorage.setItem("question_num", 1);
      }

      sessionStorage.removeItem("q1");
      // $("#question_2").click();
      next_back_btn("#question_2");
    });

  //question 2 next button

  $(".sbmit")
    .eq(1)
    .click(function () {
      $(".locked").eq(0).parent().removeClass("disabled");
      $(".locked").eq(0).hide();
      $(".locked").eq(0).removeClass("locked");

      if (sessionStorage.getItem("q2") !== null) {
        localStorage.setItem("q2_option", sessionStorage.getItem("q2"));
        localStorage.setItem("question_num", 2);
      }

      sessionStorage.removeItem("q2");
      // $("#question_3").click();
      next_back_btn("#question_3");
    });

  //question 3 next button

  $(".sbmit")
    .eq(2)
    .click(function () {
      $(".locked").eq(0).parent().removeClass("disabled");
      $(".locked").eq(0).hide();
      $(".locked").eq(0).removeClass("locked");

      if (sessionStorage.getItem("q3") !== null) {
        localStorage.setItem("q3_option", sessionStorage.getItem("q3"));
        localStorage.setItem("question_num", 3);
      }

      sessionStorage.removeItem("q3");
      // $("#question_4").click();
      next_back_btn("#question_4");
    });

  //question 4 next button

  $(".sbmit")
    .eq(3)
    .click(function () {
      $(".locked").eq(0).parent().removeClass("disabled");
      $(".locked").eq(0).hide();
      $(".locked").eq(0).removeClass("locked");

      if (sessionStorage.getItem("q4") !== null) {
        localStorage.setItem("q4_option", sessionStorage.getItem("q4"));
        localStorage.setItem("question_num", 4);
      }

      sessionStorage.removeItem("q4");
      // $("#question_5").click();
      next_back_btn("#question_5");
    });

  //question 5 next button

  $(".sbmit")
    .eq(4)
    .click(function () {
      $(".locked").eq(0).parent().removeClass("disabled");
      $(".locked").eq(0).hide();
      $(".locked").eq(0).removeClass("locked");

      if (sessionStorage.getItem("q5") !== null) {
        localStorage.setItem("q5_option", sessionStorage.getItem("q5"));
        localStorage.setItem("question_num", 5);
      }

      sessionStorage.removeItem("q5");
      // $("#question_6").click();
      next_back_btn("#question_6");
    });

  //question 6 next button

  $(".sbmit")
    .eq(5)
    .click(function () {
      $(".locked").eq(0).parent().removeClass("disabled");
      $(".locked").eq(0).hide();
      $(".locked").eq(0).removeClass("locked");

      if (sessionStorage.getItem("q6") !== null) {
        localStorage.setItem("q6_option", sessionStorage.getItem("q6"));
        localStorage.setItem("question_num", 6);
      }

      sessionStorage.removeItem("q6");
      // $("#question_7").click();
      next_back_btn("#question_7");
    });

  //question 7 next button

  $(".sbmit")
    .eq(6)
    .click(function () {
      $(".locked").eq(0).parent().removeClass("disabled");
      $(".locked").eq(0).hide();
      $(".locked").eq(0).removeClass("locked");

      if (sessionStorage.getItem("q7") !== null) {
        localStorage.setItem("q7_option", sessionStorage.getItem("q7"));
        localStorage.setItem("question_num", 7);
      }

      sessionStorage.removeItem("q7");
      // $("#question_8").click();
      next_back_btn("#question_8");
    });

  //question 8 next button

  $(".sbmit")
    .eq(7)
    .click(function () {
      $(".locked").eq(0).parent().removeClass("disabled");
      $(".locked").eq(0).hide();
      $(".locked").eq(0).removeClass("locked");

      if (sessionStorage.getItem("q8") !== null) {
        localStorage.setItem("q8_option", sessionStorage.getItem("q8"));
        localStorage.setItem("question_num", 8);
      }

      sessionStorage.removeItem("q8");
      // $("#question_9").click();
      next_back_btn("#question_9");
    });

  //question 9 next button

  $(".sbmit")
    .eq(8)
    .click(function () {
      $(".locked").eq(0).parent().removeClass("disabled");
      $(".locked").eq(0).hide();
      $(".locked").eq(0).removeClass("locked");

      if (sessionStorage.getItem("q9") !== null) {
        localStorage.setItem("q9_option", sessionStorage.getItem("q9"));
        localStorage.setItem("question_num", 9);
      }

      sessionStorage.removeItem("q9");
      // $("#question_10").click();
      next_back_btn("#question_10");
    });

  $(".sbmit")
    .eq(9)
    .click(function () {
      if (sessionStorage.getItem("q10") !== null) {
        localStorage.setItem("q10_option", sessionStorage.getItem("q10"));
        localStorage.setItem("question_num", 10);
      }

      sessionStorage.removeItem("q10");

      var iter2 = 1;
      var points = 0;

      while (iter2 <= 10) {
        points += validate_points(iter2);
        iter2 += 1;
      }

      if (points < 0) {
        points = 0;
      }

      if (points >= 12) {
        $("#model_2_label").html("Congratulations!");
        $("#model_2_label").removeClass("text-danger");
        $("#model_2_label").addClass("text-success");
        $(".modal-body").html("You have scored " + points + " out of 20!");
        $(".modal-body").addClass("normal-text");
      } else {
        $("#model_2_label").html("Try harder next time!");
        $("#model_2_label").removeClass("text-success");
        $("#model_2_label").addClass("text-danger");
        $(".modal-body").html(
          "You have recieved only " + points + " out of 20!"
        );
        $(".modal-body").addClass("normal-text");
      }

      localStorage.setItem("points", points);
      $("#points").html(localStorage.getItem("points"));

      $("#modal-btn").click();

      // $("#main_menu").click();
      next_back_btn("#main_menu");
    });

  //back button

  $(".bmit")
    .eq(0)
    .click(function () {
      // $("#main_menu").click();
      next_back_btn("#main_menu");
    });

  $(".bmit")
    .eq(1)
    .click(function () {
      // $("#question_1").click();
      next_back_btn("#question_1");
    });

  $(".bmit")
    .eq(2)
    .click(function () {
      // $("#question_2").click();
      next_back_btn("#question_2");
    });

  $(".bmit")
    .eq(3)
    .click(function () {
      // $("#question_3").click();
      next_back_btn("#question_3");
    });

  $(".bmit")
    .eq(4)
    .click(function () {
      // $("#question_4").click();
      next_back_btn("#question_4");
    });

  $(".bmit")
    .eq(5)
    .click(function () {
      // $("#question_5").click();
      next_back_btn("#question_5");
    });

  $(".bmit")
    .eq(6)
    .click(function () {
      // $("#question_6").click();
      next_back_btn("#question_6");
    });

  $(".bmit")
    .eq(7)
    .click(function () {
      // $("#question_7").click();
      next_back_btn("#question_7");
    });

  $(".bmit")
    .eq(8)
    .click(function () {
      // $("#question_8").click();
      next_back_btn("#question_8");
    });

  $(".bmit")
    .eq(9)
    .click(function () {
      // $("#question_9").click();
      next_back_btn("#question_9");
    });

  //change answered

  $(".sbmit").click(function () {
    $("#answered").html(localStorage.getItem("question_num"));
  });
});
