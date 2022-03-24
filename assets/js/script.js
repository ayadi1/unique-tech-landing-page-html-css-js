const iconMenuMobile = document.getElementById("iconMenuMobile");
const mobileMenu = document.getElementById("mobileMenu");
mobileMenu.isShowing = false;
const show = () => {
  mobileMenu.isShowing = true;
  mobileMenu.classList.add("showMenu");
};
const hade = () => {
  mobileMenu.isShowing = false;
  mobileMenu.classList.remove("showMenu");
};
iconMenuMobile.addEventListener("click", () => {
  console.log(mobileMenu.isShowing);
  if (mobileMenu.isShowing) {
    hade();
  } else {
    show();
  }
});
