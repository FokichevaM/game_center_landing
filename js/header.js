document.addEventListener("DOMContentLoaded", () => {
  const BODY = document.body;
  const SUB_HEADER_MENU = document.getElementsByClassName("slide-in-menu")[0];
  const BURGER_BUTTON = document.getElementsByClassName("burger")[0];

  BURGER_BUTTON?.addEventListener("click", () => {
    SUB_HEADER_MENU?.classList.toggle("visible");
    BODY?.classList.toggle("fixed");
  });
});
