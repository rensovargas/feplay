(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var riot=require("riot");riot.tag("app",'<button onclick="{fivetimesdata}">*5 the world</button> <ul> <li each="{data}">{v}</li> </ul>',function(){var t=this;t.data=[{v:1},{v:2},{v:3},{v:4}],fivetimesdata=function(){t.data.forEach(function(t){return t.v*=5})}});
},{"riot":3}],2:[function(require,module,exports){
require("./app.html"),require("riot").mount("app");
},{"./app.html":1,"riot":3}],3:[function(require,module,exports){
!function(){function e(e){var t={val:e},n=e.split(/\s+in\s+/);return n[1]&&(t.val=w(0)+n[1],n=n[0].slice(w(0).length).trim().split(/,\s*/),t.key=n[0],t.pos=n[1]),t}function t(e,t,n){var r={};return r[e.key]=t,e.pos&&(r[e.pos]=n),r}function n(n,r,i){function u(e,t,n){d.splice(e,0,t),m.splice(e,0,n)}l(n,"each");var a,c=n.outerHTML,s=n.previousSibling,p=n.parentNode,d=[],m=[];i=e(i),r.one("update",function(){p.removeChild(n)}).one("premount",function(){p.stub&&(p=r.root)}).on("update",function(){var e=x(i.val,r);if(e){if(!Array.isArray(e)){var n=JSON.stringify(e);if(n==a)return;a=n,f(m,function(e){e.unmount()}),d=[],m=[],e=Object.keys(e).map(function(n){return t(i,n,e[n])})}f(v(d,e),function(e){var t=d.indexOf(e),n=m[t];n&&(n.unmount(),d.splice(t,1),m.splice(t,1))});var l=p.childNodes,g=[].indexOf.call(l,s);f(e,function(n,f){var s=e.indexOf(n,f),v=d.indexOf(n,f);if(0>s&&(s=e.lastIndexOf(n,f)),0>v&&(v=d.lastIndexOf(n,f)),0>v){!a&&i.key&&(n=t(i,n,s));var h=new o({tmpl:c},{before:l[g+1+s],parent:r,root:p,item:n});return h.mount(),u(s,n,h)}return i.pos&&m[v][i.pos]!=s&&(m[v].one("update",function(e){e[i.pos]=s}),m[v].update()),s!=v?(p.insertBefore(l[g+v+1],l[g+s+1]),u(s,d.splice(v,1)[0],m.splice(v,1)[0])):void 0}),d=e.slice()}})}function r(e,t,n){d(e,function(e){if(1==e.nodeType){var r=g(e);if(r&&!e.getAttribute("each")){var i=new o(r,{root:e,parent:t});t.tags[e.getAttribute("name")||r.name]=i,n.push(i)}f(e.attributes,function(n){/^(name|id)$/.test(n.name)&&(t[n.value]=e)})}})}function i(e,t,r){function i(e,t,n){if(t.indexOf(w(0))>=0){var i={dom:e,expr:t};r.push(s(i,n))}}d(e,function(e){var r=e.nodeType;if(3==r&&"STYLE"!=e.parentNode.tagName&&i(e,e.nodeValue),1==r){var o=e.getAttribute("each");return o?(n(e,t,o),!1):(f(e.attributes,function(t){var n=t.name,r=n.split("__")[1];return i(e,t.value,{attr:r||n,bool:r}),r?(l(e,n),!1):void 0}),g(e)?!1:void 0)}})}function o(e,t){function n(){f(Object.keys(N),function(e){l[e]=x(N[e],v||a)})}function o(e){if(f(h,function(t){t[e?"mount":"unmount"]()}),v){var t=e?"on":"off";v[t]("update",a.update)[t]("unmount",a.unmount)}}var u,a=y.observable(this),l=m(t.opts)||{},d=p(e.tmpl),v=t.parent,g=[],h=[],b=t.root,w=t.item,C=e.fn,N={};C&&b.riot||(b.riot=!0,s(this,{parent:v,root:b,opts:l,tags:{}},w),f(b.attributes,function(e){N[e.name]=e.value}),this.update=function(e){s(a,e,w),n(),a.trigger("update",w),c(g,a,w),a.trigger("updated")},this.mount=function(){if(n(),C&&C.call(a,l),o(!0),i(d,a,g),a.update(),a.trigger("premount"),C)for(;d.firstChild;)b.appendChild(d.firstChild);else u=d.firstChild,b.insertBefore(u,t.before||null);b.stub&&(a.root=b=v.root),a.trigger("mount")},this.unmount=function(){var e=C?b:u,t=e.parentNode;if(t){if(v)t.removeChild(e);else for(;b.firstChild;)b.removeChild(b.firstChild);o(),a.trigger("unmount"),a.off("*"),delete b.riot}},r(d,this,h))}function u(e,t,n,r,i){n[e]=function(e){e=e||window.event,e.which=e.which||e.charCode||e.keyCode,e.target=e.target||e.srcElement,e.currentTarget=n,e.item=i,t.call(r,e)!==!0&&(e.preventDefault&&e.preventDefault(),e.returnValue=!1);var o=i?r.parent:r;o.update()}}function a(e,t,n){e&&(e.insertBefore(n,t),e.removeChild(t))}function c(e,t,n){f(e,function(e){var r=e.dom,i=e.attr,o=x(e.expr,t),c=e.dom.parentNode;if(null==o&&(o=""),c&&"TEXTAREA"==c.tagName&&(o=o.replace(/riot-/g,"")),e.value!==o){if(e.value=o,!i)return r.nodeValue=o;if(l(r,i),"function"==typeof o)u(i,o,r,t,n);else if("if"==i){var f=e.stub;o?f&&a(f.parentNode,f,r):(f=e.stub=f||document.createTextNode(""),a(r.parentNode,r,f))}else if(/^(show|hide)$/.test(i))"hide"==i&&(o=!o),r.style.display=o?"":"none";else if("value"==i)r.value=o;else if("riot-"==i.slice(0,5))i=i.slice(5),o?r.setAttribute(i,o):l(r,i);else{if(e.bool){if(r[i]=o,!o)return;o=i}"object"!=typeof o&&r.setAttribute(i,o)}}})}function f(e,t){for(var n,r=0,i=(e||[]).length;i>r;r++)n=e[r],null!=n&&t(n,r)===!1&&r--;return e}function l(e,t){e.removeAttribute(t)}function s(e,t,n){return t&&f(Object.keys(t),function(n){e[n]=t[n]}),n?s(e,n):e}function p(e){var t=e.trim().slice(1,3).toLowerCase(),n=/td|th/.test(t)?"tr":"tr"==t?"tbody":"div",r=document.createElement(n);return r.stub=!0,r.innerHTML=e,r}function d(e,t){if(e)if(t(e)===!1)d(e.nextSibling,t);else for(e=e.firstChild;e;)d(e,t),e=e.nextSibling}function v(e,t){return e.filter(function(e){return t.indexOf(e)<0})}function m(e){function t(){}return t.prototype=e,new t}function g(e){return N[e.tagName.toLowerCase()]}function h(e){var t=document.createElement("style");t.innerHTML=e,document.head.appendChild(t)}function b(e,t,n){var r=N[t];return r&&e&&(r=new o(r,{root:e,opts:n})),r&&r.mount?(r.mount(),C.push(r),r.on("unmount",function(){C.splice(C.indexOf(r),1)})):void 0}var y={version:"v2.0.12",settings:{}};y.observable=function(e){e=e||{};var t={},n=0;return e.on=function(r,i){return"function"==typeof i&&(i._id="undefined"==typeof i._id?n++:i._id,r.replace(/\S+/g,function(e,n){(t[e]=t[e]||[]).push(i),i.typed=n>0})),e},e.off=function(n,r){return"*"==n?t={}:n.replace(/\S+/g,function(e){if(r)for(var n,i=t[e],o=0;n=i&&i[o];++o)n._id==r._id&&(i.splice(o,1),o--);else t[e]=[]}),e},e.one=function(t,n){return n&&(n.one=1),e.on(t,n)},e.trigger=function(n){for(var r,i=[].slice.call(arguments,1),o=t[n]||[],u=0;r=o[u];++u)r.busy||(r.busy=1,r.apply(e,r.typed?[n].concat(i):i),r.one?(o.splice(u,1),u--):o[u]!==r&&u--,r.busy=0);return e},e},function(e,t){function n(){return u.hash.slice(1)}function r(e){return e.split("/")}function i(e){e.type&&(e=n()),e!=o&&(a.trigger.apply(null,["H"].concat(r(e))),o=e)}if(this.top){var o,u=location,a=e.observable(),c=window,f=e.route=function(e){e[0]?(u.hash=e,i(e)):a.on("H",e)};f.exec=function(e){e.apply(null,r(n()))},f.parser=function(e){r=e},c.addEventListener?c.addEventListener(t,i,!1):c.attachEvent("on"+t,i)}}(y,"hashchange");var w=function(e,t,n){return function(r){return t=y.settings.brackets||e,n!=t&&(n=t.split(" ")),r&&r.test?t==e?r:RegExp(r.source.replace(/\{/g,n[0].replace(/(?=.)/g,"\\")).replace(/\}/g,n[1].replace(/(?=.)/g,"\\")),r.global?"g":""):n[r]}}("{ }"),x=function(){function e(e,n){return e=(e||w(0)+w(1)).replace(w(/\\{/g),"￰").replace(w(/\\}/g),"￱"),n=r(e,w(/{[\s\S]*?}/g)),new Function("d","return "+(n[0]||n[2]||n[3]?"["+n.map(function(e,n){return n%2?t(e,!0):'"'+e.replace(/\n/g,"\\n").replace(/"/g,'\\"')+'"'}).join(",")+'].join("")':t(n[1])).replace(/\uFFF0/g,w(0)).replace(/\uFFF1/g,w(1))+";")}function t(e,t){return e=e.replace(/\n/g," ").replace(w(/^[{ ]+|[ }]+$|\/\*.+?\*\//g),""),/^\s*[\w- "']+ *:/.test(e)?"["+e.replace(/\W*([\w- ]+)\W*:([^,]+)/g,function(e,t,r){return r.replace(/[^&|=!><]+/g,n)+'?"'+t.trim()+'":"",'})+'].join(" ").trim()':n(e,t)}function n(e,t){return e=e.trim(),e?"(function(v){try{v="+(e.replace(o,function(e,t,n){return n?"(d."+n+"===undefined?window."+n+":d."+n+")":e})||"x")+"}finally{return "+(t===!0?'!v&&v!==0?"":v':"v")+"}}).call(d)":""}function r(e,t){var n=[],r=0;return e.replace(t,function(t,i){n.push(e.slice(r,i),t),r=i+t.length}),n.concat(e.slice(r))}var i={},o=/(['"\/]).*?[^\\]\1|\.\w*|\w*:|\b(?:(?:new|typeof|in|instanceof) |(?:this|true|false|null|undefined)\b|function *\()|([a-z_$]\w*)/gi;return function(t,n){return t&&(i[t]=i[t]||e(t))(n)}}(),C=[],N={};y.tag=function(e,t,n,r){"function"==typeof n?r=n:n&&h(n),N[e]={name:e,tmpl:t,fn:r}},y.mount=function(e,t,n){function r(e){var r=t||e.tagName.toLowerCase(),o=b(e,r,n);o&&i.push(o)}"*"==e&&(e=Object.keys(N).join(", ")),"object"==typeof t&&(n=t,t=0);var i=[];return e.tagName?(r(e),i[0]):(f(document.querySelectorAll(e),r),i)},y.update=function(){return f(C,function(e){e.update()})},y.mountTo=y.mount,y.util={brackets:w,tmpl:x},"object"==typeof exports?module.exports=y:"function"==typeof define&&define.amd?define(function(){return y}):this.riot=y}();
},{}]},{},[2])


//# sourceMappingURL=index.js.map