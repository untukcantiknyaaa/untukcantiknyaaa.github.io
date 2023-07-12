$(".start").click(function () {
  $(".stage1").fadeOut();
  fire_modal(
    // "https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/cake_modal.png",
    "",
    "Ayo buat kue!",
    "Cantik, karena ultah cantik sekarang cantik dirumah dan kita belum bisa ketemu jadi untuk kuenya sekarang buat online dulu yah xixi, ayok buat dan ikuti langkah-langkahnya ya..."
  );
});

progress = 1;

$(".modal_content button").click(function () {
  progress++;
  close_modal(progress);
});

function close_modal(callback) {
  modal.css("transform", "translateY(-50%) scale(0)");
  setTimeout(function () {
    $(".stage" + callback).fadeIn();
  }, 600);
}

function fire_modal(imgurl, title, content) {
  modal = $(".birthday_inner__modal");
  modal.find("h1").html(title);
  modal.find("img").attr("src", imgurl);
  modal.find("p").html(content);
  setTimeout(function () {
    modal.css("transform", "translateY(-50%) scale(1)");
  }, 1000);
}

mixing = false;
mixtimes = 0;

$(".mix_spoon").click(function () {
  if (mixing == false) {
    mixing = true;
    mixtimes++;
    $(".mix_spoon img").addClass("move");
    setTimeout(function () {
      $(".mix_spoon img").removeClass("move");
      mixing = false;
    }, 1000);
  }
  if (mixtimes == 6) {
    $(".stage2").fadeOut();
    fire_modal(
      //   "https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/mix_modal.png",
      "",
      "Adonan Tercampur Rata!",
      "Yeayyy pinter cantiknya aa, Sebelum ke tahap selanjutnya alangkah lebih baiknya senyum dulu okeyy, nah gitu jadinya kan tambah manis kuenya xixi"
    );
  }
});

$(".tin").draggable({
  revert: true,
});
$(".oven").droppable({
  drop: function (event, ui) {
    $(".stage3").fadeOut();
    fire_modal(
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/oven_modal.png",
      "Kuenya Sudah Matang xixi!",
      "Kuenya benar-benar matang dan terlihat sangat lezat. Sekarang saatnya menggabungkan bahan dasar ini dengan banyak bahan lain seperti selai,cokelat, dan lainnya. ayoo cantik lanjut.."
    );
  },
});

bases = 0;
fillings = 0;

$(".sponges .item_inner").click(function () {
  $(".sponges").addClass("inactive");
  $(".fillings").removeClass("inactive");
  t = $(this).attr("class").split(" ").pop();
  bases++;
  if (bases < 6) {
    add_sponge(t);
  }
});

$(".fillings .item_inner").click(function () {
  $(".fillings").addClass("inactive");
  $(".sponges").removeClass("inactive");
  f = $(this).attr("class").split(" ").pop();
  fillings++;
  if (fillings < 7) {
    add_filling(f);
  }
});

function add_sponge(t) {
  $(".cakemake").prepend(
    '<div style="width:' +
      (200 - bases * 20) +
      'px" class="sponge sponge-' +
      t +
      '"><div></div><div></div><div></div><div></div><div></div></div>'
  );
  $(".sponges h5 span").html(bases);
}

$(".startagain").click(function () {
  $(".cakemake").html('<div class="base"></div>');
  bases = 0;
  fillings = 0;
  $(".sponges h5 span").html(bases);
  $(".fillings h5 span").html(fillings);
  $(".fillings").removeClass("inactive");
  $(".sponges").addClass("inactive");
});
function add_filling(f) {
  $(".cakemake").prepend(
    '<div style="width:' +
      (200 - bases * 20) +
      'px" class="filling filling-' +
      f +
      '"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>'
  );
  $(".fillings h5 span").html(fillings);
}

function fin() {
  $("h1,h2,.options,.startagain,.add").fadeOut();

  setTimeout(function () {
    $(".cakemake").fadeIn();
    $(".cakemake").animate({ "margin-top": "0px" });
  }, 1000);
  add_candle();
  // $(".svg").addClass("text");
}

function add_candle() {
  var stages = $(".cakemake > div").length;
  var h = (stages / 2) * 41 + 22 + "px";
  console.log(stages);
  $(".cakemake").prepend(
    '<div class="candle" id="candle"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/candle.png" /></div>'
  );
  $(".svg .tiup-lilin-text").show();
  setTimeout(function () {
    $("#candle").click(function () {
      $(this).hide();
      $(".svg .tiup-lilin-text").fadeOut();
      $(".svg .happy-text").fadeIn();
      $(".confetti").show();
      $(".sa").fadeIn();
    });
  }, 2200);
}

$(".add").click(function () {
  fin();
});

$(".sa").click(function () {
  window.location.href = "letter.html";
});
