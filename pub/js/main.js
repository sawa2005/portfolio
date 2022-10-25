var _this=this,time=document.getElementById("date"),nav=document.querySelector("nav"),welcome=document.getElementById("welcome-text"),projects=document.getElementById("projects-text"),experience=document.getElementById("experience-text"),education=document.getElementById("education-text"),contact=document.getElementById("contact-text"),navInfo=document.getElementById("nav-info"),seeMore=document.getElementById("see-more"),projectsIcon=document.getElementById("projects-icon"),experienceIcon=document.getElementById("experience-icon"),educationIcon=document.getElementById("education-icon"),contactIcon=document.getElementById("contact-icon");function updateTime(){var e=(new Date).toLocaleTimeString("en-GB",{hour:"numeric",minute:"numeric"});time.innerText=e}updateTime(),setInterval((function(){updateTime()}),1e3),window.addEventListener("scroll",(function(){var e=_this.scrollY;0==e&&(navInfo.style.opacity="1",seeMore.style.opacity="1"),e>0&&(navInfo.style.opacity="0",seeMore.style.opacity="0"),e>612&&e<1500?(_this.document.body.style.backgroundColor="#21103e",welcome.style.opacity="15%",projects.style.opacity="100%",experience.style.opacity="15%",education.style.opacity="15%",contact.style.opacity="15%",projectsIcon.style.transform="scale(1.25)",experienceIcon.style.transform="scale(1)",educationIcon.style.transform="scale(1)",contactIcon.style.transform="scale(1)"):e>1500&&e<3064?(_this.document.body.style.backgroundColor="#193225",welcome.style.opacity="15%",projects.style.opacity="15%",experience.style.opacity="100%",education.style.opacity="15%",contact.style.opacity="15%",projectsIcon.style.transform="scale(1)",experienceIcon.style.transform="scale(1.25)",educationIcon.style.transform="scale(1)",contactIcon.style.transform="scale(1)"):e>3064&&e<4258?(_this.document.body.style.backgroundColor="#161c30",welcome.style.opacity="15%",projects.style.opacity="15%",experience.style.opacity="15%",education.style.opacity="100%",contact.style.opacity="15%",projectsIcon.style.transform="scale(1)",experienceIcon.style.transform="scale(1)",educationIcon.style.transform="scale(1.25)",contactIcon.style.transform="scale(1)"):e>4258?(_this.document.body.style.backgroundColor="#6c1d2b",welcome.style.opacity="15%",projects.style.opacity="15%",experience.style.opacity="15%",education.style.opacity="15%",contact.style.opacity="100%",projectsIcon.style.transform="scale(1)",experienceIcon.style.transform="scale(1)",educationIcon.style.transform="scale(1)",contactIcon.style.transform="scale(1.25)"):(_this.document.body.style.backgroundColor="#101010",welcome.style.opacity="100%",projects.style.opacity="15%",experience.style.opacity="15%",education.style.opacity="15%",contact.style.opacity="15%",projectsIcon.style.transform="scale(1)",experienceIcon.style.transform="scale(1)",educationIcon.style.transform="scale(1)",contactIcon.style.transform="scale(1)")})),window.addEventListener("load",(function(){welcome.style.opacity="100%",setTimeout((function(){_this.document.body.style.opacity="1"}),1e3),window.innerWidth>900?setTimeout((function(){nav.style.transform="translateX(0px)"}),2e3):nav.style.transform="translateX(0px)",setTimeout((function(){navInfo.style.opacity="1",seeMore.style.opacity="1"}),3500)})),function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof module&&module.exports?module.exports=t():e.Rellax=t()}("undefined"!=typeof window?window:global,(function(){var e=function(t,o){var n=Object.create(e.prototype),r=0,i=0,a=0,s=0,l=[],c=!0,p=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)},d=null,m=!1;try{var u=Object.defineProperty({},"passive",{get:function(){m=!0}});window.addEventListener("testPassive",null,u),window.removeEventListener("testPassive",null,u)}catch(e){}var y=window.cancelAnimationFrame||window.mozCancelAnimationFrame||clearTimeout,f=window.transformProp||function(){var e=document.createElement("div");if(null===e.style.transform){var t,o=["Webkit","Moz","ms"];for(t in o)if(void 0!==e.style[o[t]+"Transform"])return o[t]+"Transform"}return"transform"}();if(n.options={speed:-2,verticalSpeed:null,horizontalSpeed:null,breakpoints:[576,768,1201],center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,verticalScrollAxis:"y",horizontalScrollAxis:"x",callback:function(){}},o&&Object.keys(o).forEach((function(e){n.options[e]=o[e]})),o&&o.breakpoints&&function(){if(3===n.options.breakpoints.length&&Array.isArray(n.options.breakpoints)){var e,t=!0,o=!0;if(n.options.breakpoints.forEach((function(n){"number"!=typeof n&&(o=!1),null!==e&&n<e&&(t=!1),e=n})),t&&o)return}n.options.breakpoints=[576,768,1201],console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted")}(),t||(t=".rellax"),0<(u="string"==typeof t?document.querySelectorAll(t):[t]).length){if(n.elems=u,n.options.wrapper&&!n.options.wrapper.nodeType){if(!(u=document.querySelector(n.options.wrapper)))return void console.warn("Rellax: The wrapper you're trying to use doesn't exist.");n.options.wrapper=u}var w,x=function(){for(var e=0;e<l.length;e++)n.elems[e].style.cssText=l[e].style;for(l=[],i=window.innerHeight,s=window.innerWidth,e=n.options.breakpoints,w=s<e[0]?"xs":s>=e[0]&&s<e[1]?"sm":s>=e[1]&&s<e[2]?"md":"lg",v(),e=0;e<n.elems.length;e++){var t=void 0,o=n.elems[e],r=o.getAttribute("data-rellax-percentage"),a=o.getAttribute("data-rellax-speed"),p=o.getAttribute("data-rellax-xs-speed"),d=o.getAttribute("data-rellax-mobile-speed"),m=o.getAttribute("data-rellax-tablet-speed"),u=o.getAttribute("data-rellax-desktop-speed"),y=o.getAttribute("data-rellax-vertical-speed"),f=o.getAttribute("data-rellax-horizontal-speed"),h=o.getAttribute("data-rellax-vertical-scroll-axis"),A=o.getAttribute("data-rellax-horizontal-scroll-axis"),E=o.getAttribute("data-rellax-zindex")||0,T=o.getAttribute("data-rellax-min"),z=o.getAttribute("data-rellax-max"),L=o.getAttribute("data-rellax-min-x"),S=o.getAttribute("data-rellax-max-x"),k=o.getAttribute("data-rellax-min-y"),j=o.getAttribute("data-rellax-max-y"),Y=!0;p||d||m||u?t={xs:p,sm:d,md:m,lg:u}:Y=!1,p=n.options.wrapper?n.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,n.options.relativeToWrapper&&(p=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)-n.options.wrapper.offsetTop);var B=n.options.vertical&&(r||n.options.center)?p:0,O=n.options.horizontal&&(r||n.options.center)?n.options.wrapper?n.options.wrapper.scrollLeft:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0;p=B+o.getBoundingClientRect().top,d=o.clientHeight||o.offsetHeight||o.scrollHeight,m=O+o.getBoundingClientRect().left,u=o.clientWidth||o.offsetWidth||o.scrollWidth,B=r||(B-p+i)/(d+i),r=r||(O-m+s)/(u+s),n.options.center&&(B=r=.5),t=Y&&null!==t[w]?Number(t[w]):a||n.options.speed,y=y||n.options.verticalSpeed,f=f||n.options.horizontalSpeed,h=h||n.options.verticalScrollAxis,A=A||n.options.horizontalScrollAxis,a=g(r,B,t,y,f),o=o.style.cssText,Y="",(r=/transform\s*:/i.exec(o))&&(Y=(r=(Y=o.slice(r.index)).indexOf(";"))?" "+Y.slice(11,r).replace(/\s/g,""):" "+Y.slice(11).replace(/\s/g,"")),l.push({baseX:a.x,baseY:a.y,top:p,left:m,height:d,width:u,speed:t,verticalSpeed:y,horizontalSpeed:f,verticalScrollAxis:h,horizontalScrollAxis:A,style:o,transform:Y,zindex:E,min:T,max:z,minX:L,maxX:S,minY:k,maxY:j})}I(),c&&(window.addEventListener("resize",x),c=!1,b())},v=function(){var e=r,t=a;return r=n.options.wrapper?n.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset,a=n.options.wrapper?n.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset,n.options.relativeToWrapper&&(r=((document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset)-n.options.wrapper.offsetTop),!!(e!=r&&n.options.vertical||t!=a&&n.options.horizontal)},g=function(e,t,o,r,i){var a={};return e=100*(i||o)*(1-e),t=100*(r||o)*(1-t),a.x=n.options.round?Math.round(e):Math.round(100*e)/100,a.y=n.options.round?Math.round(t):Math.round(100*t)/100,a},h=function(){window.removeEventListener("resize",h),window.removeEventListener("orientationchange",h),(n.options.wrapper?n.options.wrapper:window).removeEventListener("scroll",h),(n.options.wrapper?n.options.wrapper:document).removeEventListener("touchmove",h),d=p(b)},b=function(){v()&&!1===c?(I(),d=p(b)):(d=null,window.addEventListener("resize",h),window.addEventListener("orientationchange",h),(n.options.wrapper?n.options.wrapper:window).addEventListener("scroll",h,!!m&&{passive:!0}),(n.options.wrapper?n.options.wrapper:document).addEventListener("touchmove",h,!!m&&{passive:!0}))},I=function(){for(var e,t=0;t<n.elems.length;t++){var o=l[t].verticalScrollAxis.toLowerCase(),c=l[t].horizontalScrollAxis.toLowerCase();e=-1!=o.indexOf("x")?r:0,o=-1!=o.indexOf("y")?r:0;var p=-1!=c.indexOf("x")?a:0;c=-1!=c.indexOf("y")?a:0,c=(e=g((e+p-l[t].left+s)/(l[t].width+s),(o+c-l[t].top+i)/(l[t].height+i),l[t].speed,l[t].verticalSpeed,l[t].horizontalSpeed)).y-l[t].baseY,o=e.x-l[t].baseX,null!==l[t].min&&(n.options.vertical&&!n.options.horizontal&&(c=c<=l[t].min?l[t].min:c),n.options.horizontal&&!n.options.vertical&&(o=o<=l[t].min?l[t].min:o)),null!=l[t].minY&&(c=c<=l[t].minY?l[t].minY:c),null!=l[t].minX&&(o=o<=l[t].minX?l[t].minX:o),null!==l[t].max&&(n.options.vertical&&!n.options.horizontal&&(c=c>=l[t].max?l[t].max:c),n.options.horizontal&&!n.options.vertical&&(o=o>=l[t].max?l[t].max:o)),null!=l[t].maxY&&(c=c>=l[t].maxY?l[t].maxY:c),null!=l[t].maxX&&(o=o>=l[t].maxX?l[t].maxX:o),n.elems[t].style[f]="translate3d("+(n.options.horizontal?o:"0")+"px,"+(n.options.vertical?c:"0")+"px,"+l[t].zindex+"px) "+l[t].transform}n.options.callback(e)};return n.destroy=function(){for(var e=0;e<n.elems.length;e++)n.elems[e].style.cssText=l[e].style;c||(window.removeEventListener("resize",x),c=!0),y(d),d=null},x(),n.refresh=x,n}console.warn("Rellax: The elements you're trying to select don't exist.")};return e}));