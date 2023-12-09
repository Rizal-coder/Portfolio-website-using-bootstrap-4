(function () {
  $(document).ready(function () {
    $(".page-scroll").on("click", function (e) {
      let attrHref = $(this).attr("href").replace(/[#]/, "");
      let elemenSectionId = $(`#${attrHref}`);
      let idSection = elemenSectionId.attr("id");
      if (attrHref == idSection) {
        $(".nav-link").attr("class", "nav-link page-scroll");
        $(this).addClass("active");
      }
      //   Animate
      $("html").animate(
        {
          scrollTop: Math.round(elemenSectionId.offset().top) - 50,
        },
        2000,
        "easeInOutBack"
      );
      e.preventDefault();
    });
  });
})();

// Parallax
// About
(function () {
  $(window).on("load", function () {
    // Add Class
    $(".pLeft").addClass("pMuncul");
    $(".pRight").addClass("pMuncul");
  });
})();

// Scroll Efect
(function () {
  // portfolio
  $(window).scroll(function () {
    let wScroll = $(document).scrollTop();
    if (wScroll > $(".portfolio").offset().top - 180) {
      $(".portfolio .card").each(function (i) {
        setTimeout(function () {
          $(".portfolio .card").eq(i).addClass("muncul");
        }, 350 * (i + 1));
      });
    }
  });
})();
