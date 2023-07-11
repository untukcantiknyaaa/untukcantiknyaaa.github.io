$("#time")
  .countdown("2023/07/13 00:00:00")
  .on("update.countdown", function (event) {
    var $this = $(this).html(
      event.strftime(
        "" +
          '<span class="h1 font-weight-bold">%D</span> Hari' +
          '<span class="h1 font-weight-bold">%H</span> Jam' +
          '<span class="h1 font-weight-bold">%M</span> Menit' +
          '<span class="h1 font-weight-bold">%S</span> Detik'
      )
    );
  })
  .on("finish.countdown", function (event) {
    window.location.href = "otw.html";
  });
