import * as $ from "jquery";



export const isScrolledIntoView =  (elem) => {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();
  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}








  export const fadeIn =  () => {
//   $(window).scroll(function () {
//     var mypos = $(window).scrollTop();
//     $(".fadeIn").each(function () {
//         if (mypos > $(this).offset().top - 150) {
//             $(this).css('opacity', 1);
//         };
//     });
// });
}



