(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{56:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return o})),a.d(n,"rightToc",(function(){return c})),a.d(n,"default",(function(){return s}));a(0);var t=a(78);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}function p(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)a=p[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)a=p[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o={id:"app_packaging",title:"Application packaging",sidebar_label:"Application packaging"},c=[],l={rightToc:c},i="wrapper";function s(e){var n=e.components,a=p(e,["components"]);return Object(t.b)(i,r({},l,a,{components:n,mdxType:"MDXLayout"}),Object(t.b)("p",null,"You can package your Hydra app along with your configuration.\nThere is a working example ",Object(t.b)("a",r({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/config_from_package/demos/hydra_app_example"}),"here"),"."),Object(t.b)("p",null,"To install it, check-out the Hydra repo.\nYou can run it with:"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"$ python demos/hydra_app_example/hydra_app/main.py\ndataset:\n  name: imagenet\n  path: /datasets/imagenet\n")),Object(t.b)("p",null,"To install it, use:"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-text"}),"$ pip install demos/hydra_app_example/\nLooking in indexes: https://pypi.org/simple, http://100.97.64.150\nProcessing ./demos/hydra_app_example\nBuilding wheels for collected packages: hydra-app\n  Building wheel for hydra-app (setup.py) ... done\n  Created wheel for hydra-app: filename=hydra_app-0.1-cp36-none-any.whl size=2098 sha256=664e4acca715cb8a2c0041a56ee0a7bda44e5a562efe3d8fa7e9d210a12f9627\n  Stored in directory: /tmp/pip-ephem-wheel-cache-e_e9v2k4/wheels/92/ed/23/2b589a6b3a31dbb1f01f224da50dcba825e6d597c2ec125690\nSuccessfully built hydra-app\nInstalling collected packages: hydra-app\n  Found existing installation: hydra-app 0.1\n    Uninstalling hydra-app-0.1:\n      Successfully uninstalled hydra-app-0.1\nSuccessfully installed hydra-app-0.1\n")),Object(t.b)("p",null,"Once it's installed, you can run it with hydra_app:"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"$ hydra_app\ndataset:\n  name: imagenet\n  path: /datasets/imagenet\n")),Object(t.b)("p",null,"The installed app will use the packaged configuration files, and not the one from the checkout out repository."))}s.isMDXComponent=!0},78:function(e,n,a){"use strict";a.d(n,"a",(function(){return c})),a.d(n,"b",(function(){return u}));var t=a(0),r=a.n(t),p=r.a.createContext({}),o=function(e){var n=r.a.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):Object.assign({},n,e)),a},c=function(e){var n=o(e.components);return r.a.createElement(p.Provider,{value:n},e.children)};var l="mdxType",i={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=Object(t.forwardRef)((function(e,n){var a=e.components,t=e.mdxType,p=e.originalType,c=e.parentName,l=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===n.indexOf(t)&&(a[t]=e[t]);return a}(e,["components","mdxType","originalType","parentName"]),s=o(a),u=t,d=s[c+"."+u]||s[u]||i[u]||p;return a?r.a.createElement(d,Object.assign({},{ref:n},l,{components:a})):r.a.createElement(d,Object.assign({},{ref:n},l))}));function u(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var p=a.length,o=new Array(p);o[0]=s;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[l]="string"==typeof e?e:t,o[1]=c;for(var u=2;u<p;u++)o[u]=a[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);