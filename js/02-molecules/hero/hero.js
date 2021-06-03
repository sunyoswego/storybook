"use strict";jQuery(function(a){var b=document.querySelectorAll(".hero iframe"),c=document.querySelectorAll(".video-blocks iframe"),d=[],e=!1;"true"==Cookies.get("reduced-motion")&&(e=!0),b.forEach(function(a){console.log("found a hero video"),d.push(new Vimeo.Player(a))}),c.forEach(function(a){console.log("found those video blocks"),d.push(new Vimeo.Player(a))}),console.log("REDUCED MOTION COOKIE SET: "+Cookies.get("reduced-motion")),b.length&&a(".hero").append("<button class=\"video-controls\" aria-label=\"enable reduced motion mode\"><svg class=\"icon icon-pause2\">\n  <use xlink:href=\"/themes/custom/sunyoswego/svg/symbol-defs.svg#icon-pause2\"></use>\n</svg> </button>"),c.length&&a(".video-blocks").append("<button class=\"video-controls\" aria-label=\"disable reduced motion mode\"><svg class=\"icon icon-pause2\">\n  <use xlink:href=\"/themes/custom/sunyoswego/svg/symbol-defs.svg#icon-pause2\"></use>\n</svg> </button>"),e?(d.forEach(function(a){a.on("play",function(){a.pause()})}),a("button.video-controls").each(function(){a(this).html("<svg class=\"icon icon-play4\">\n  <use xlink:href=\"/themes/custom/sunyoswego/svg/symbol-defs.svg#icon-play4\"></use>\n</svg> ")})):gsap.to(".hero img",{opacity:1,duration:1,ease:"expo.out"}),(c.length||b.length)&&a("button.video-controls").each(function(){a(this).click(function(){e?(a(this).attr("aria-label","enable reduced motion mode"),d.forEach(function(b){b.off("play"),b.play(),a("button.video-controls").html("<svg class=\"icon icon-pause2\">\n  <use xlink:href=\"/themes/custom/sunyoswego/svg/symbol-defs.svg#icon-pause2\"></use>\n</svg> "),Cookies.set("reduced-motion","false"),e=!1})):(a(this).attr("aria-label","disable reduced motion mode"),d.forEach(function(b){b.on("play",function(){b.pause()}),b.pause(),a("button.video-controls").html("<svg class=\"icon icon-play4\">\n  <use xlink:href=\"/themes/custom/sunyoswego/svg/symbol-defs.svg#icon-play4\"></use>\n</svg> "),Cookies.set("reduced-motion","true"),e=!0}))})})});