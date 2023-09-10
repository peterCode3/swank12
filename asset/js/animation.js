// function isElementInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }
  
//   function handleScroll() {
//     const sections = document.querySelectorAll('.main_serv');
  
//     sections.forEach((section) => {
//       const elements = section.querySelectorAll('.sr_main');
//       const sectionTop = section.getBoundingClientRect().top;
  
//       elements.forEach((element) => {
//         if (isElementInViewport(element)) {
//           element.classList.add('visible');
//         }
//       });
  
//       // Adjust the scroll position to trigger the animation
//       const scrollPosition = window.pageYOffset - sectionTop;
//       if (scrollPosition >= 0) {
//         section.style.setProperty('--scroll-position', `${scrollPosition}px`);
//       }
//     });
//   }
  
//   // Listen for the scroll event and trigger the animation when scrolling within sections with class "main_serv"
//   document.addEventListener('DOMContentLoaded', () => {
//     handleScroll();
//     window.addEventListener('scroll', handleScroll);
//   });
  