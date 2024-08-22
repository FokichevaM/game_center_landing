document.addEventListener("DOMContentLoaded", () => {
  const SCROLL_TOP_BUTTON = document.getElementById("scroll-top-button");
  const THEME_BUTTON = document.getElementById("theme-button");

  const Y_TO_SHOW_BUTTON = 300;
  const DM_CLASS = "dark-mode";
  const DM_STORAGE_KEY = "dm";

  const handleCheckDm = () => {
    const isDarkStorage = localStorage.getItem(DM_STORAGE_KEY);

    !!isDarkStorage && document.body.classList.add(DM_CLASS);
  };

  const handleCheckScrollButtonVisibility = () => {
    if (window.scrollY >= Y_TO_SHOW_BUTTON) {
      SCROLL_TOP_BUTTON.classList.add("visible");
    } else {
      SCROLL_TOP_BUTTON.classList.remove("visible");
    }
  };

  window.addEventListener("scroll", handleCheckScrollButtonVisibility, false);

  SCROLL_TOP_BUTTON?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  THEME_BUTTON?.addEventListener("click", () => {
    const isDark = document.body.classList.toggle(DM_CLASS);

    isDark
      ? localStorage.setItem(DM_STORAGE_KEY, true)
      : localStorage.removeItem(DM_STORAGE_KEY);
  });

  handleCheckDm();
  handleCheckScrollButtonVisibility();
});
