head.ready(function(){$("body").on("click",function(){$(".lang__list").slideUp(200)}),$(".lang").on("click",function(n){n.preventDefault(),n.stopPropagation(),$(this).find(".lang__list").slideToggle(200)}),$(".lang__list").on("click",function(n){n.stopPropagation()})});