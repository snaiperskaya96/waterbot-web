function animationSidebar(i,t){i[0]&&($current_li_distance=i.parent("li").position().top-10,button_text=i.html(),$(".moving-tab").css("width","230px"),t?$(".moving-tab").css({transform:"translate3d(0,"+$current_li_distance+"px, 0)",transition:"all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)"}):$(".moving-tab").css({transform:"translate3d(0,"+$current_li_distance+"px, 0)"}),setTimeout(function(){$(".moving-tab").html(button_text)},100))}$(document).ready(function(){$moving_tab=$('<div class="moving-tab"/>'),$(".sidebar .nav-container").append($moving_tab),$this=$(".sidebar .nav").find("li.active a"),animationSidebar($this,!1),$("div").removeClass(".moving-tab"),window.history&&window.history.pushState&&$(window).on("popstate",function(){setTimeout(function(){$this=$(".sidebar .nav").find("li.active a"),animationSidebar($this,!0)},1)})}),$(window).resize(function(){$this=$(".sidebar .nav").find("li.active a"),animationSidebar($this,!0)}),$(".sidebar .nav > li > a").click(function(){$this=$(this),animationSidebar($this,!0)});