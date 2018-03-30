let previousPosition = window.pageYOffset || document.documentElement.scrollTop;
window.addEventListener("scroll", () => {
   runHeight();
});

const scrollToTop = () => {
   window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });   
}

const runHeight = () => {
   const header = document.getElementsByClassName("header-root")[0];
   const menu = document.getElementsByClassName("menu")[0];
   const footer = document.getElementsByClassName("footer-root")[0];
   const content = document.getElementsByClassName("content")[0];
   console.log("---");
   console.log("TOP-POSITION..." + window.pageYOffset);
   console.log("WINDOW-SCROLL-POSITION..." + window.document.body.clientHeight);
   console.log("WINDOW-POSITION..." + window.innerHeight);
   console.log(
      "END OF BOTTOM..." +
         (window.document.body.scrollHeight - window.innerHeight ===
            window.pageYOffset)
   );
   currentPosition = window.pageYOffset || document.documentElement.scrollTop;
   let px = "px";
   let position = menu.getBoundingClientRect().top;

   if (window.pageYOffset === 0) {
      header.style.height = "130px";
      header.style.top = 0;
      footer.style.height = "50px";
      footer.style.bottom = 0;
      console.log("top");
   } else if (
      window.document.body.scrollHeight - window.innerHeight ===
      window.pageYOffset
   ) {
      header.style.height = "50px";
      header.style.top = 0;
      footer.style.height = "50px";
      footer.style.bottom = 0;
      console.log("bottom");
   } else {
      if (position >= 50) {
         header.style.height = `${menu.getBoundingClientRect().top}${px}`;
         console.log("50");
      } else if (position <= -300) {
         if (previousPosition > currentPosition) {
            header.style.height = "50px";
            header.style.top = 0;
            footer.style.height = "50px";
            footer.style.bottom = 0;
            console.log("up");
         } else {
            header.style.height = "50px";
            header.style.top = "-50px";
            footer.style.height = "50px";
            footer.style.bottom = "-50px";
            console.log("down");
         }
      }
   }
   previousPosition = currentPosition;
};
