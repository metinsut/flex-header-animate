let previousPosition = window.pageYOffset || document.documentElement.scrollTop;
window.addEventListener("scroll", () => {
   runHeight();
});

const runHeight = () => {
   const header = document.getElementsByClassName("header-root")[0];
   const menu = document.getElementsByClassName("menu")[0];
   const footer = document.getElementsByClassName("footer-root")[0];
   currentPosition = window.pageYOffset || document.documentElement.scrollTop;
   let px = "px";
   let position = menu.getBoundingClientRect().top;
   if (position >= 50) {
      header.style.height = `${menu.getBoundingClientRect().top}${px}`;
   } else if (position <= -400) {
      if (previousPosition > currentPosition) {
         setTimeout(() => {
            header.style.height = "50px";
            footer.style.height = "50px";
         }, 500);
      } else {
         header.style.height = 0;
         footer.style.height = 0;
      }
   }
   previousPosition = currentPosition;
};
