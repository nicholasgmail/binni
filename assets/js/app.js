(()=>{"use strict";var e;e=function(){var e=document.documentElement;(function(){var e=document.querySelector(".slug-card");if(e){var t=e.querySelector(".btn-scroll__left"),o=e.querySelector(".row"),n=e.querySelector(".btn-scroll__right"),r=e.querySelector(".item").clientWidth;n.addEventListener("click",(function(){o.scrollLeft<o.scrollWidth-r?o.scrollBy({left:r,top:0,behavior:"smooth"}):o.scrollTo({left:0,top:0,behavior:"smooth"})})),t.addEventListener("click",(function(){0!=o.scrollLeft?o.scrollBy({left:-r,top:0,behavior:"smooth"}):o.scrollTo({left:o.scrollWidth,top:0,behavior:"smooth"})}))}})(),function(){var e=[].slice.call(document.querySelectorAll("img.lazy"));if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype){var t=new IntersectionObserver((function(e,o){e.forEach((function(e){if(e.isIntersecting){var o=e.target;setTimeout((function(){o.src=o.dataset.src,o.srcset=o.dataset.srcset,o.classList.remove("lazy"),t.unobserve(o)}),500)}}))}));e.forEach((function(e){t.observe(e)}))}}();var t=document.querySelector("#toTop");window.addEventListener("scroll",(function(){e.scrollTop>=500&&t.classList.contains("d-none")&&t.classList.toggle("d-none"),e.scrollTop<500&&!t.classList.contains("d-none")&&t.classList.toggle("d-none")})),t.addEventListener("click",(function(){!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:700,o=document.scrollingElement||document.documentElement,n=o.scrollTop,r=e-n,c=+new Date,s=function(e,t,o,n){return(e/=n/2)<1?o/2*e*e+t:-o/2*(--e*(e-2)-1)+t};!function l(){var i=+new Date-c;o.scrollTop=parseInt(s(i,n,r,t)),i<t?requestAnimationFrame(l):o.scrollTop=e}()}(0,400)}))},"loading"!=document.readyState?e():document.addEventListener("DOMContentLoaded",e)})();