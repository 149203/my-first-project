$("#personal-reason").click(function () {
   $("#email-button").html("Email personal request");
});

$("#professional-reason").click(function () {
   $("#email-button").html("Email professional request");
});

$("#email-body").keypress(function () {
   $("#email-button").removeAttr("disabled");
});

$("#are-you-human").click(function () {
   $("#are-you-human").removeClass("is-invalid");
});

$("#email-button").click(function () {
   window.open(
      "mailto:alekandra.cawell@gmail.com?subject=Hello&body=" +
         $("#email-body").val(),
      "_blank"
   );
});
