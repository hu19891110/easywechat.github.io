!function(){"use strict";function e(){var e=this.value;"zh-cn"===e&&(e=""),location.href=window.location.href.replace(/(zh-cn|en)/g,e)}document.getElementById("lang-select").addEventListener("change",e),document.getElementById("mobile-lang-select").addEventListener("change",e)}(),function(){"use strict";function e(){var e=n.scrollTop;e>i?c.classList.add("fixed"):c.classList.remove("fixed")}var t=document.getElementById("header"),n=document.getElementById("container"),c=document.getElementById("article-toc"),o=document.getElementById("article-toc-top"),i=t.clientHeight;c&&(n.addEventListener("scroll",function(){window.requestAnimationFrame(e)}),e(),o.addEventListener("click",function(e){e.preventDefault(),n.scrollTop=0}))}(),function(){"use strict";var e=document.getElementsByTagName("body")[0],t=document.getElementById("mobile-nav-toggle"),n=(document.getElementById("container"),document.getElementById("mobile-nav-dimmer")),c="mobile-nav-on";t&&(t.addEventListener("click",function(t){t.preventDefault(),t.stopPropagation(),e.classList.toggle(c)}),n.addEventListener("click",function(t){e.classList.contains(c)&&(t.preventDefault(),e.classList.remove(c))}))}();