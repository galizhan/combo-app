import{a as x0,b as Q}from"/build/_shared/chunk-4XMV4Z2X.js";import{a as S,n as Z0,q as M0,w as f0}from"/build/_shared/chunk-4WBX2LQN.js";import{b as M,c as k}from"/build/_shared/chunk-MEPKJ2VW.js";var j=M(T=>{"use strict";function Y0(i,a,t){var r=a.slidesToShow,e=a.currentSlide;return t.length>2*r?i+2*r:e>=t.length?t.length+i:i}function K0(i,a){if(a.length>2*i){for(var t={},r=a.length-2*i,e=a.length-r,l=r,o=0;o<e;o++)t[o]=l,l++;var c=a.length+e,h=c+a.slice(0,2*i).length,n=0;for(o=c;o<=h;o++)t[o]=n,n++;var d=c,s=0;for(o=e;o<d;o++)t[o]=s,s++;return t}t={};var p=3*a.length,u=0;for(o=0;o<p;o++)t[o]=u,++u===a.length&&(u=0);return t}function X0(i,a){return a.length<i?a:a.length>2*i?a.slice(a.length-2*i,a.length).concat(a,a.slice(0,2*i)):a.concat(a,a)}function Q0(i,a){return a.length>2*i?2*i:a.length}function $0(i,a,t){var r,e=i.currentSlide,l=i.slidesToShow,o=i.itemWidth,c=i.totalItems,h=0,n=0,d=e===0,s=a.length-(a.length-2*l);return a.length<l?(n=h=0,d=r=!1):a.length>2*l?((r=e>=s+a.length)&&(n=-o*(h=e-a.length)),d&&(n=-o*(h=s+(a.length-2*l)))):((r=e>=2*a.length)&&(n=-o*(h=e-a.length)),d&&(n=t.showDots?-o*(h=a.length):-o*(h=c/3))),{isReachingTheEnd:r,isReachingTheStart:d,nextSlide:h,nextPosition:n}}Object.defineProperty(T,"__esModule",{value:!0}),T.getOriginalCounterPart=Y0,T.getOriginalIndexLookupTableByClones=K0,T.getClones=X0,T.getInitialSlideInInfiniteMode=Q0,T.checkClonesPosition=$0});var $=M(W=>{"use strict";Object.defineProperty(W,"__esModule",{value:!0});var J0=!1;function t1(i,a,t,r){var e=0,l=r||t;return a&&l&&(e=i[l].partialVisibilityGutter||i[l].paritialVisibilityGutter),e}function a1(i,a){var t;return a[i]&&(t=(100/a[i].items).toFixed(1)),t}function r1(i,a,t){return Math.round(t/(a+(i.centerMode?1:0)))}W.getPartialVisibilityGutter=t1,W.getWidthFromDeviceType=a1,W.getItemClientSideWidth=r1});var L=M(V=>{"use strict";Object.defineProperty(V,"__esModule",{value:!0});var J=$();function t0(i){var a=i.slidesToShow;return i.totalItems<a}function i1(i,a){var t,r=i.domLoaded,e=i.slidesToShow,l=i.containerWidth,o=i.itemWidth,c=a.deviceType,h=a.responsive,n=a.ssr,d=a.partialVisbile,s=a.partialVisible,p=Boolean(r&&e&&l&&o);n&&c&&!p&&(t=J.getWidthFromDeviceType(c,h));var u=Boolean(n&&c&&!p&&t);return{shouldRenderOnSSR:u,flexBisis:t,domFullyLoaded:p,partialVisibilityGutter:J.getPartialVisibilityGutter(h,d||s,c,i.deviceType),shouldRenderAtAll:u||p}}function e1(i,a){var t=a.currentSlide,r=a.slidesToShow;return t<=i&&i<t+r}function A0(i,a,t){var r=t||i.transform;return!a.infinite&&i.currentSlide===0||t0(i)?r:r+i.itemWidth/2}function l1(i){return!(0<i.currentSlide)}function V0(i){var a=i.currentSlide,t=i.totalItems;return!(a+i.slidesToShow<t)}function H0(i,a,t,r){a===void 0&&(a=0);var e=i.currentSlide,l=i.slidesToShow,o=V0(i),c=!t.infinite&&o,h=r||i.transform;if(t0(i))return h;var n=h+e*a;return c?n+(i.containerWidth-(i.itemWidth-a)*l):n}function C0(i,a){return i.rtl?-1*a:a}function o1(i,a,t){var r=a.partialVisbile,e=a.partialVisible,l=a.responsive,o=a.deviceType,c=a.centerMode,h=t||i.transform,n=J.getPartialVisibilityGutter(l,r||e,o,i.deviceType);return C0(a,e||r?H0(i,n,a,t):c?A0(i,a,t):h)}function c1(i,a){var t=i.domLoaded,r=i.slidesToShow,e=i.containerWidth,l=i.itemWidth,o=a.deviceType,c=a.responsive,h=a.slidesToSlide||1,n=Boolean(t&&r&&e&&l);return a.ssr&&a.deviceType&&!n&&Object.keys(c).forEach(function(d){var s=c[d].slidesToSlide;o===d&&s&&(h=s)}),n&&Object.keys(c).forEach(function(d){var s=c[d],p=s.breakpoint,u=s.slidesToSlide,A=p.max,y=p.min;u&&window.innerWidth>=y&&window.innerWidth<=A&&(h=u)}),h}V.notEnoughChildren=t0,V.getInitialState=i1,V.getIfSlideIsVisbile=e1,V.getTransformForCenterMode=A0,V.isInLeftEnd=l1,V.isInRightEnd=V0,V.getTransformForPartialVsibile=H0,V.parsePosition=C0,V.getTransform=o1,V.getSlidesToSlide=c1});var w0=M(a0=>{"use strict";Object.defineProperty(a0,"__esModule",{value:!0});var h1=function(i,a,t){var r;return function(){var e=arguments;r||(i.apply(this,e),r=!0,typeof t=="function"&&t(!0),setTimeout(function(){r=!1,typeof t=="function"&&t(!1)},a))}};a0.default=h1});var y0=M(r0=>{"use strict";function n1(i,a){var t=a.partialVisbile,r=a.partialVisible,e=a.centerMode,l=a.ssr,o=a.responsive;if((t||r)&&e)throw new Error("center mode can not be used at the same time with partialVisible");if(!o)throw l?new Error("ssr mode need to be used in conjunction with responsive prop"):new Error("Responsive prop is needed for deciding the amount of items to show on the screen");if(o&&typeof o!="object")throw new Error("responsive prop must be an object")}Object.defineProperty(r0,"__esModule",{value:!0}),r0.default=n1});var B0=M(i0=>{"use strict";Object.defineProperty(i0,"__esModule",{value:!0});var g1=L();function d1(i,a,t){t===void 0&&(t=0);var r,e,l=i.slidesToShow,o=i.currentSlide,c=i.itemWidth,h=i.totalItems,n=g1.getSlidesToSlide(i,a),d=o+1+t+l+(0<t?0:n);return e=d<=h?-c*(r=o+t+(0<t?0:n)):h<d&&o!==h-l?-c*(r=h-l):r=void 0,{nextSlides:r,nextPosition:e}}i0.populateNextSlides=d1});var S0=M(e0=>{"use strict";Object.defineProperty(e0,"__esModule",{value:!0});var s1=S(),u1=L(),p1=L();function v1(i,a,t){t===void 0&&(t=0);var r,e,l=i.currentSlide,o=i.itemWidth,c=i.slidesToShow,h=a.children,n=a.showDots,d=a.infinite,s=u1.getSlidesToSlide(i,a),p=l-t-(0<t?0:s),u=(s1.Children.toArray(h).length-c)%s;return e=0<=p?(r=p,n&&!d&&0<u&&p1.isInRightEnd(i)&&(r=l-u),-o*r):r=p<0&&l!==0?0:void 0,{nextSlides:r,nextPosition:e}}e0.populatePreviousSlides=v1});var L0=M(l0=>{"use strict";function m1(i,a,t,r,e,l){var o,c,h=i.itemWidth,n=i.slidesToShow,d=i.totalItems,s=i.currentSlide,p=a.infinite,u=!1,A=Math.round((t-r)/h),y=Math.round((r-t)/h),B=t<e;if(e<t&&A<=n){o="right";var H=Math.abs(-h*(d-n)),x=l-(r-e),Z=s===d-n;(Math.abs(x)<=H||Z&&p)&&(c=x,u=!0)}return B&&y<=n&&(o="left",((x=l+(e-r))<=0||s===0&&p)&&(u=!0,c=x)),{direction:o,nextPosition:c,canContinue:u}}Object.defineProperty(l0,"__esModule",{value:!0}),l0.populateSlidesOnMouseTouchMove=m1});var c0=M(v=>{"use strict";Object.defineProperty(v,"__esModule",{value:!0});var G=j();v.getOriginalCounterPart=G.getOriginalCounterPart,v.getClones=G.getClones,v.checkClonesPosition=G.checkClonesPosition,v.getInitialSlideInInfiniteMode=G.getInitialSlideInInfiniteMode;var o0=$();v.getWidthFromDeviceType=o0.getWidthFromDeviceType,v.getPartialVisibilityGutter=o0.getPartialVisibilityGutter,v.getItemClientSideWidth=o0.getItemClientSideWidth;var _=L();v.getInitialState=_.getInitialState,v.getIfSlideIsVisbile=_.getIfSlideIsVisbile,v.getTransformForCenterMode=_.getTransformForCenterMode,v.getTransformForPartialVsibile=_.getTransformForPartialVsibile,v.isInLeftEnd=_.isInLeftEnd,v.isInRightEnd=_.isInRightEnd,v.notEnoughChildren=_.notEnoughChildren,v.getSlidesToSlide=_.getSlidesToSlide;var Z1=w0();v.throttle=Z1.default;var M1=y0();v.throwError=M1.default;var f1=B0();v.populateNextSlides=f1.populateNextSlides;var x1=S0();v.populatePreviousSlides=x1.populatePreviousSlides;var A1=L0();v.populateSlidesOnMouseTouchMove=A1.populateSlidesOnMouseTouchMove});var _0=M(O=>{"use strict";var V1=O&&O.__extends||function(){var i=function(a,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var l in e)e.hasOwnProperty(l)&&(r[l]=e[l])})(a,t)};return function(a,t){function r(){this.constructor=a}i(a,t),a.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}();Object.defineProperty(O,"__esModule",{value:!0});var H1=S();function C1(i){return"clientY"in i}O.isMouseMoveEvent=C1;var w1=function(i){function a(){return i!==null&&i.apply(this,arguments)||this}return V1(a,i),a}(H1.Component);O.default=w1});var b0=M(h0=>{"use strict";Object.defineProperty(h0,"__esModule",{value:!0});var y1=j(),B1=L();function S1(i,a,t,r){var e={},l=B1.getSlidesToSlide(a,t);return Array(i).fill(0).forEach(function(o,c){var h=y1.getOriginalCounterPart(c,a,r);if(c===0)e[0]=h;else{var n=e[c-1]+l;e[c]=n}}),e}h0.getLookupTableForNextSlides=S1});var I0=M(n0=>{"use strict";Object.defineProperty(n0,"__esModule",{value:!0});var q=S(),L1=j(),_1=b0(),T0=L(),b1=function(i){var a=i.props,t=i.state,r=i.goToSlide,e=i.getState,l=a.showDots,o=a.customDot,c=a.dotListClass,h=a.infinite,n=a.children;if(!l||T0.notEnoughChildren(t))return null;var d,s=t.currentSlide,p=t.slidesToShow,u=T0.getSlidesToSlide(t,a),A=q.Children.toArray(n);d=h?Math.ceil(A.length/u):Math.ceil((A.length-p)/u)+1;var y=_1.getLookupTableForNextSlides(d,t,a,A),B=L1.getOriginalIndexLookupTableByClones(p,A),H=B[s];return q.createElement("ul",{className:"react-multi-carousel-dot-list "+c},Array(d).fill(0).map(function(x,Z){var P,C;if(h){C=y[Z];var R=B[C];P=H===R||R<=H&&H<R+u}else{var U=A.length-p,N=Z*u;P=(C=U<N?U:N)===s||C<s&&s<C+u&&s<A.length-p}return o?q.cloneElement(o,{index:Z,active:P,key:Z,onClick:function(){return r(C)},carouselState:e()}):q.createElement("li",{"data-index":Z,key:Z,className:"react-multi-carousel-dot "+(P?"react-multi-carousel-dot--active":"")},q.createElement("button",{"aria-label":"Go to slide "+(Z+1),onClick:function(){return r(C)}}))}))};n0.default=b1});var P0=M(Y=>{"use strict";Object.defineProperty(Y,"__esModule",{value:!0});var z=S(),T1=function(i){var a=i.customLeftArrow,t=i.getState,r=i.previous,e=i.disabled,l=i.rtl;if(a)return z.cloneElement(a,{onClick:function(){return r()},carouselState:t(),disabled:e,rtl:l});var o=l?"rtl":"";return z.createElement("button",{"aria-label":"Go to previous slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--left "+o,onClick:function(){return r()},type:"button",disabled:e})};Y.LeftArrow=T1;var I1=function(i){var a=i.customRightArrow,t=i.getState,r=i.next,e=i.disabled,l=i.rtl;if(a)return z.cloneElement(a,{onClick:function(){return r()},carouselState:t(),disabled:e,rtl:l});var o=l?"rtl":"";return z.createElement("button",{"aria-label":"Go to next slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--right "+o,onClick:function(){return r()},type:"button",disabled:e})};Y.RightArrow=I1});var R0=M(d0=>{"use strict";Object.defineProperty(d0,"__esModule",{value:!0});var K=S(),g0=c0(),P1=function(i){var a=i.props,t=i.state,r=i.goToSlide,e=i.clones,l=i.notEnoughChildren,o=t.itemWidth,c=a.children,h=a.infinite,n=a.itemClass,d=a.itemAriaLabel,s=a.partialVisbile,p=a.partialVisible,u=g0.getInitialState(t,a),A=u.flexBisis,y=u.shouldRenderOnSSR,B=u.domFullyLoaded,H=u.partialVisibilityGutter;return u.shouldRenderAtAll?(s&&console.warn('WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'),K.createElement(K.Fragment,null,(h?e:K.Children.toArray(c)).map(function(x,Z){return K.createElement("li",{key:Z,"data-index":Z,onClick:function(){a.focusOnSelect&&r(Z)},"aria-hidden":g0.getIfSlideIsVisbile(Z,t)?"false":"true","aria-label":d||(x.props.ariaLabel?x.props.ariaLabel:null),style:{flex:y?"1 0 "+A+"%":"auto",position:"relative",width:B?((s||p)&&H&&!l?o-H:o)+"px":"auto"},className:"react-multi-carousel-item "+(g0.getIfSlideIsVisbile(Z,t)?"react-multi-carousel-item--active":"")+" "+n},x)}))):null};d0.default=P1});var E0=M(F=>{"use strict";var R1=F&&F.__extends||function(){var i=function(a,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var l in e)e.hasOwnProperty(l)&&(r[l]=e[l])})(a,t)};return function(a,t){function r(){this.constructor=a}i(a,t),a.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}();Object.defineProperty(F,"__esModule",{value:!0});var f=S(),m=c0(),I=_0(),k1=I0(),k0=P0(),O1=R0(),X=L(),w=400,O0="transform 400ms ease-in-out",E1=function(i){function a(t){var r=i.call(this,t)||this;return r.containerRef=f.createRef(),r.listRef=f.createRef(),r.state={itemWidth:0,slidesToShow:0,currentSlide:0,totalItems:f.Children.count(t.children),deviceType:"",domLoaded:!1,transform:0,containerWidth:0},r.onResize=r.onResize.bind(r),r.handleDown=r.handleDown.bind(r),r.handleMove=r.handleMove.bind(r),r.handleOut=r.handleOut.bind(r),r.onKeyUp=r.onKeyUp.bind(r),r.handleEnter=r.handleEnter.bind(r),r.setIsInThrottle=r.setIsInThrottle.bind(r),r.next=m.throttle(r.next.bind(r),t.transitionDuration||w,r.setIsInThrottle),r.previous=m.throttle(r.previous.bind(r),t.transitionDuration||w,r.setIsInThrottle),r.goToSlide=m.throttle(r.goToSlide.bind(r),t.transitionDuration||w,r.setIsInThrottle),r.onMove=!1,r.initialX=0,r.lastX=0,r.isAnimationAllowed=!1,r.direction="",r.initialY=0,r.isInThrottle=!1,r.transformPlaceHolder=0,r}return R1(a,i),a.prototype.resetTotalItems=function(){var t=this,r=f.Children.count(this.props.children),e=m.notEnoughChildren(this.state)?0:Math.max(0,Math.min(this.state.currentSlide,r));this.setState({totalItems:r,currentSlide:e},function(){t.setContainerAndItemWidth(t.state.slidesToShow,!0)})},a.prototype.setIsInThrottle=function(t){t===void 0&&(t=!1),this.isInThrottle=t},a.prototype.setTransformDirectly=function(t,r){var e=this.props.additionalTransfrom;this.transformPlaceHolder=t;var l=X.getTransform(this.state,this.props,this.transformPlaceHolder);this.listRef&&this.listRef.current&&(this.setAnimationDirectly(r),this.listRef.current.style.transform="translate3d("+(l+e)+"px,0,0)")},a.prototype.setAnimationDirectly=function(t){this.listRef&&this.listRef.current&&(this.listRef.current.style.transition=t?this.props.customTransition||O0:"none")},a.prototype.componentDidMount=function(){this.setState({domLoaded:!0}),this.setItemsToShow(),window.addEventListener("resize",this.onResize),this.onResize(!0),this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),this.props.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},a.prototype.setClones=function(t,r,e,l){var o=this;l===void 0&&(l=!1),this.isAnimationAllowed=!1;var c=f.Children.toArray(this.props.children),h=m.getInitialSlideInInfiniteMode(t||this.state.slidesToShow,c),n=m.getClones(this.state.slidesToShow,c),d=c.length<this.state.slidesToShow?0:this.state.currentSlide;this.setState({totalItems:n.length,currentSlide:e&&!l?d:h},function(){o.correctItemsPosition(r||o.state.itemWidth)})},a.prototype.setItemsToShow=function(t,r){var e=this,l=this.props.responsive;Object.keys(l).forEach(function(o){var c=l[o],h=c.breakpoint,n=c.items,d=h.max,s=h.min,p=[window.innerWidth];window.screen&&window.screen.width&&p.push(window.screen.width);var u=Math.min.apply(Math,p);s<=u&&u<=d&&(e.setState({slidesToShow:n,deviceType:o}),e.setContainerAndItemWidth(n,t,r))})},a.prototype.setContainerAndItemWidth=function(t,r,e){var l=this;if(this.containerRef&&this.containerRef.current){var o=this.containerRef.current.offsetWidth,c=m.getItemClientSideWidth(this.props,t,o);this.setState({containerWidth:o,itemWidth:c},function(){l.props.infinite&&l.setClones(t,c,r,e)}),r&&this.correctItemsPosition(c)}},a.prototype.correctItemsPosition=function(t,r,e){r&&(this.isAnimationAllowed=!0),!r&&this.isAnimationAllowed&&(this.isAnimationAllowed=!1);var l=this.state.totalItems<this.state.slidesToShow?0:-t*this.state.currentSlide;e&&this.setTransformDirectly(l,!0),this.setState({transform:l})},a.prototype.onResize=function(t){var r;r=!!this.props.infinite&&(typeof t!="boolean"||!t),this.setItemsToShow(r)},a.prototype.componentDidUpdate=function(t,r){var e=this,l=t.keyBoardControl,o=t.autoPlay,c=t.children,h=r.containerWidth,n=r.domLoaded,d=r.currentSlide;if(this.containerRef&&this.containerRef.current&&this.containerRef.current.offsetWidth!==h&&(this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),this.itemsToShowTimeout=setTimeout(function(){e.setItemsToShow(!0)},this.props.transitionDuration||w)),l&&!this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),!l&&this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),o&&!this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),o||!this.props.autoPlay||this.autoPlay||(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed)),c.length!==this.props.children.length?a.clonesTimeout=setTimeout(function(){e.props.infinite?e.setClones(e.state.slidesToShow,e.state.itemWidth,!0,!0):e.resetTotalItems()},this.props.transitionDuration||w):this.props.infinite&&this.state.currentSlide!==d&&this.correctClonesPosition({domLoaded:n}),this.transformPlaceHolder!==this.state.transform&&(this.transformPlaceHolder=this.state.transform),this.props.autoPlay&&this.props.rewind&&!this.props.infinite&&m.isInRightEnd(this.state)){var s=this.props.transitionDuration||w;a.isInThrottleTimeout=setTimeout(function(){e.setIsInThrottle(!1),e.resetAutoplayInterval(),e.goToSlide(0,void 0,!!e.props.rewindWithAnimation)},s+this.props.autoPlaySpeed)}},a.prototype.correctClonesPosition=function(t){var r=this,e=t.domLoaded,l=f.Children.toArray(this.props.children),o=m.checkClonesPosition(this.state,l,this.props),c=o.isReachingTheEnd,h=o.isReachingTheStart,n=o.nextSlide,d=o.nextPosition;this.state.domLoaded&&e&&(c||h)&&(this.isAnimationAllowed=!1,a.transformTimeout=setTimeout(function(){r.setState({transform:d,currentSlide:n})},this.props.transitionDuration||w))},a.prototype.next=function(t){var r=this;t===void 0&&(t=0);var e=this.props,l=e.afterChange,o=e.beforeChange;if(!m.notEnoughChildren(this.state)){var c=m.populateNextSlides(this.state,this.props,t),h=c.nextSlides,n=c.nextPosition,d=this.state.currentSlide;h!==void 0&&n!==void 0&&(typeof o=="function"&&o(h,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:n,currentSlide:h},function(){typeof l=="function"&&(a.afterChangeTimeout=setTimeout(function(){l(d,r.getState())},r.props.transitionDuration||w))}))}},a.prototype.previous=function(t){var r=this;t===void 0&&(t=0);var e=this.props,l=e.afterChange,o=e.beforeChange;if(!m.notEnoughChildren(this.state)){var c=m.populatePreviousSlides(this.state,this.props,t),h=c.nextSlides,n=c.nextPosition;if(h!==void 0&&n!==void 0){var d=this.state.currentSlide;typeof o=="function"&&o(h,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:n,currentSlide:h},function(){typeof l=="function"&&(a.afterChangeTimeout2=setTimeout(function(){l(d,r.getState())},r.props.transitionDuration||w))})}}},a.prototype.resetAutoplayInterval=function(){this.props.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},a.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize),this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),a.clonesTimeout&&clearTimeout(a.clonesTimeout),a.isInThrottleTimeout&&clearTimeout(a.isInThrottleTimeout),a.transformTimeout&&clearTimeout(a.transformTimeout),a.afterChangeTimeout&&clearTimeout(a.afterChangeTimeout),a.afterChangeTimeout2&&clearTimeout(a.afterChangeTimeout2),a.afterChangeTimeout3&&clearTimeout(a.afterChangeTimeout3)},a.prototype.resetMoveStatus=function(){this.onMove=!1,this.initialX=0,this.lastX=0,this.direction="",this.initialY=0},a.prototype.getCords=function(t){var r=t.clientX,e=t.clientY;return{clientX:X.parsePosition(this.props,r),clientY:X.parsePosition(this.props,e)}},a.prototype.handleDown=function(t){if(!(!I.isMouseMoveEvent(t)&&!this.props.swipeable||I.isMouseMoveEvent(t)&&!this.props.draggable||this.isInThrottle)){var r=this.getCords(I.isMouseMoveEvent(t)?t:t.touches[0]),e=r.clientX,l=r.clientY;this.onMove=!0,this.initialX=e,this.initialY=l,this.lastX=e,this.isAnimationAllowed=!1}},a.prototype.handleMove=function(t){if(!(!I.isMouseMoveEvent(t)&&!this.props.swipeable||I.isMouseMoveEvent(t)&&!this.props.draggable||m.notEnoughChildren(this.state))){var r=this.getCords(I.isMouseMoveEvent(t)?t:t.touches[0]),e=r.clientX,l=r.clientY,o=this.initialX-e,c=this.initialY-l;if(this.onMove){if(!(Math.abs(o)>Math.abs(c)))return;var h=m.populateSlidesOnMouseTouchMove(this.state,this.props,this.initialX,this.lastX,e,this.transformPlaceHolder),n=h.direction,d=h.nextPosition,s=h.canContinue;n&&(this.direction=n,s&&d!==void 0&&this.setTransformDirectly(d)),this.lastX=e}}},a.prototype.handleOut=function(t){this.props.autoPlay&&!this.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed));var r=t.type==="touchend"&&!this.props.swipeable,e=(t.type==="mouseleave"||t.type==="mouseup")&&!this.props.draggable;if(!r&&!e&&this.onMove){if(this.setAnimationDirectly(!0),this.direction==="right")if(this.initialX-this.lastX>=this.props.minimumTouchDrag){var l=Math.round((this.initialX-this.lastX)/this.state.itemWidth);this.next(l)}else this.correctItemsPosition(this.state.itemWidth,!0,!0);this.direction==="left"&&(this.lastX-this.initialX>this.props.minimumTouchDrag?(l=Math.round((this.lastX-this.initialX)/this.state.itemWidth),this.previous(l)):this.correctItemsPosition(this.state.itemWidth,!0,!0)),this.resetMoveStatus()}},a.prototype.isInViewport=function(t){var r=t.getBoundingClientRect(),e=r.top,l=e===void 0?0:e,o=r.left,c=o===void 0?0:o,h=r.bottom,n=h===void 0?0:h,d=r.right,s=d===void 0?0:d;return 0<=l&&0<=c&&n<=(window.innerHeight||document.documentElement.clientHeight)&&s<=(window.innerWidth||document.documentElement.clientWidth)},a.prototype.isChildOfCarousel=function(t){return!!(t instanceof Element&&this.listRef&&this.listRef.current)&&this.listRef.current.contains(t)},a.prototype.onKeyUp=function(t){var r=t.target;switch(t.keyCode){case 37:if(this.isChildOfCarousel(r))return this.previous();break;case 39:if(this.isChildOfCarousel(r))return this.next();break;case 9:if(this.isChildOfCarousel(r)&&r instanceof HTMLInputElement&&this.isInViewport(r))return this.next()}},a.prototype.handleEnter=function(t){I.isMouseMoveEvent(t)&&this.autoPlay&&this.props.autoPlay&&this.props.pauseOnHover&&(clearInterval(this.autoPlay),this.autoPlay=void 0)},a.prototype.goToSlide=function(t,r,e){var l=this;if(e===void 0&&(e=!0),!this.isInThrottle){var o=this.state.itemWidth,c=this.props,h=c.afterChange,n=c.beforeChange,d=this.state.currentSlide;typeof n!="function"||r&&(typeof r!="object"||r.skipBeforeChange)||n(t,this.getState()),this.isAnimationAllowed=e,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({currentSlide:t,transform:-o*t},function(){l.props.infinite&&l.correctClonesPosition({domLoaded:!0}),typeof h!="function"||r&&(typeof r!="object"||r.skipAfterChange)||(a.afterChangeTimeout3=setTimeout(function(){h(d,l.getState())},l.props.transitionDuration||w))})}},a.prototype.getState=function(){return this.state},a.prototype.renderLeftArrow=function(t){var r=this,e=this.props,l=e.customLeftArrow,o=e.rtl;return f.createElement(k0.LeftArrow,{customLeftArrow:l,getState:function(){return r.getState()},previous:this.previous,disabled:t,rtl:o})},a.prototype.renderRightArrow=function(t){var r=this,e=this.props,l=e.customRightArrow,o=e.rtl;return f.createElement(k0.RightArrow,{customRightArrow:l,getState:function(){return r.getState()},next:this.next,disabled:t,rtl:o})},a.prototype.renderButtonGroups=function(){var t=this,r=this.props.customButtonGroup;return r?f.cloneElement(r,{previous:function(){return t.previous()},next:function(){return t.next()},goToSlide:function(e,l){return t.goToSlide(e,l)},carouselState:this.getState()}):null},a.prototype.renderDotsList=function(){var t=this;return f.createElement(k1.default,{state:this.state,props:this.props,goToSlide:this.goToSlide,getState:function(){return t.getState()}})},a.prototype.renderCarouselItems=function(){var t=[];if(this.props.infinite){var r=f.Children.toArray(this.props.children);t=m.getClones(this.state.slidesToShow,r)}return f.createElement(O1.default,{clones:t,goToSlide:this.goToSlide,state:this.state,notEnoughChildren:m.notEnoughChildren(this.state),props:this.props})},a.prototype.render=function(){var t=this.props,r=t.deviceType,e=t.arrows,l=t.renderArrowsWhenDisabled,o=t.removeArrowOnDeviceType,c=t.infinite,h=t.containerClass,n=t.sliderClass,d=t.customTransition,s=t.additionalTransfrom,p=t.renderDotsOutside,u=t.renderButtonGroupOutside,A=t.className,y=t.rtl,B=m.getInitialState(this.state,this.props),H=B.shouldRenderOnSSR,x=B.shouldRenderAtAll,Z=m.isInLeftEnd(this.state),P=m.isInRightEnd(this.state),C=e&&!(o&&(r&&-1<o.indexOf(r)||this.state.deviceType&&-1<o.indexOf(this.state.deviceType)))&&!m.notEnoughChildren(this.state)&&x,R=!c&&Z,U=!c&&P,N=X.getTransform(this.state,this.props);return f.createElement(f.Fragment,null,f.createElement("div",{className:"react-multi-carousel-list "+h+" "+A,dir:y?"rtl":"ltr",ref:this.containerRef},f.createElement("ul",{ref:this.listRef,className:"react-multi-carousel-track "+n,style:{transition:this.isAnimationAllowed?d||O0:"none",overflow:H?"hidden":"unset",transform:"translate3d("+(N+s)+"px,0,0)"},onMouseMove:this.handleMove,onMouseDown:this.handleDown,onMouseUp:this.handleOut,onMouseEnter:this.handleEnter,onMouseLeave:this.handleOut,onTouchStart:this.handleDown,onTouchMove:this.handleMove,onTouchEnd:this.handleOut},this.renderCarouselItems()),C&&(!R||l)&&this.renderLeftArrow(R),C&&(!U||l)&&this.renderRightArrow(U),x&&!u&&this.renderButtonGroups(),x&&!p&&this.renderDotsList()),x&&p&&this.renderDotsList(),x&&u&&this.renderButtonGroups())},a.defaultProps={slidesToSlide:1,infinite:!1,draggable:!0,swipeable:!0,arrows:!0,renderArrowsWhenDisabled:!1,containerClass:"",sliderClass:"",itemClass:"",keyBoardControl:!0,autoPlaySpeed:3e3,showDots:!1,renderDotsOutside:!1,renderButtonGroupOutside:!1,minimumTouchDrag:80,className:"",dotListClass:"",focusOnSelect:!1,centerMode:!1,additionalTransfrom:0,pauseOnHover:!0,shouldResetAutoplay:!0,rewind:!1,rtl:!1,rewindWithAnimation:!1},a}(f.Component);F.default=E1});var D0=M(s0=>{"use strict";Object.defineProperty(s0,"__esModule",{value:!0});var D1=E0();s0.default=D1.default});var W0=M((n5,U0)=>{U0.exports=D0()});var D=k(S());var G0=k(W0());var q0="/build/_assets/styles-EGASMYHT.css";var E=k(S());var u0=k(S()),p0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},v0=u0.default.createContext&&u0.default.createContext(p0);var b=function(){return b=Object.assign||function(i){for(var a,t=1,r=arguments.length;t<r;t++){a=arguments[t];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(i[e]=a[e])}return i},b.apply(this,arguments)},W1=function(i,a){var t={};for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&a.indexOf(r)<0&&(t[r]=i[r]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var e=0,r=Object.getOwnPropertySymbols(i);e<r.length;e++)a.indexOf(r[e])<0&&Object.prototype.propertyIsEnumerable.call(i,r[e])&&(t[r[e]]=i[r[e]]);return t};function F0(i){return i&&i.map(function(a,t){return E.default.createElement(a.tag,b({key:t},a.attr),F0(a.child))})}function N0(i){return function(a){return E.default.createElement(q1,b({attr:b({},i.attr)},a),F0(i.child))}}function q1(i){var a=function(t){var r=i.attr,e=i.size,l=i.title,o=W1(i,["attr","size","title"]),c=e||t.size||"1em",h;return t.className&&(h=t.className),i.className&&(h=(h?h+" ":"")+i.className),E.default.createElement("svg",b({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,o,{className:h,style:b(b({color:i.color||t.color},t.style),i.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),l&&E.default.createElement("title",null,l),i.children)};return v0!==void 0?E.default.createElement(v0.Consumer,null,function(t){return a(t)}):a(p0)}function j0(i){return N0({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Circle_Check"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M15.81,10.4a.5.5,0,0,0-.71-.71l-3.56,3.56L9.81,11.52a.5.5,0,0,0-.71.71l2.08,2.08a.513.513,0,0,0,.71,0Z"}},{tag:"path",attr:{d:"M12,21.934A9.934,9.934,0,1,1,21.933,12,9.945,9.945,0,0,1,12,21.934ZM12,3.067A8.934,8.934,0,1,0,20.933,12,8.944,8.944,0,0,0,12,3.067Z"}}]}]}]})(i)}var g=k(f0()),F1=()=>[{title:"Hydrogen | Home"}],N1=()=>[{rel:"stylesheet",href:q0}],j1={superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5,partialVisibilityGutter:40},desktop:{breakpoint:{max:3e3,min:1024},items:3,partialVisibilityGutter:40},tablet:{breakpoint:{max:1024,min:464},items:2,partialVisibilityGutter:40},mobile:{breakpoint:{max:464,min:0},items:1,partialVisibilityGutter:40}};function z0(){let i=M0(),[a,t]=(0,D.useState)([null,null,null]),[r,e]=(0,D.useState)(1);return r===1?(0,g.jsxs)("div",{className:"home",children:[(0,g.jsx)("h1",{children:"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0432\u043E\u0435 \u043A\u043E\u043C\u0431\u043E"}),(0,g.jsx)(m0,{products:i.winterProducts,onClicked:l=>{a[0]=l,t(a)},title:"\u0417\u0438\u043C\u043D\u0435\u0435 \u043A\u043E\u043C\u0431\u043E"}),(0,g.jsx)(m0,{products:i.autumnProducts,onClicked:l=>{a[1]=l,t(a)},title:"\u041E\u0441\u0435\u043D\u043D\u0435\u0435 \u043A\u043E\u043C\u0431\u043E"}),(0,g.jsx)(m0,{products:i.summerProducts,onClicked:l=>{a[2]=l,t(a)},title:"\u041B\u0435\u0442\u043D\u0435\u0435 \u043A\u043E\u043C\u0431\u043E"}),(0,g.jsx)("div",{className:"flex justify-center w-full",children:(0,g.jsx)("button",{className:"border-2 border-gray-400 px-3 py-2",onClick:()=>e(2),children:"\u0414\u0430\u043B\u0435\u0435"})})]}):(0,g.jsx)(G1,{selectedItems:a,setStep:e})}function G1({selectedItems:i,setStep:a}){return(0,g.jsx)("div",{className:"flex justify-center",children:(0,g.jsxs)("div",{children:[(0,g.jsxs)("div",{className:"flex items-center",children:[(0,g.jsx)("h2",{className:"m-0",children:"\u0412\u044B \u0432\u044B\u0431\u0440\u0430\u043B\u0438: "}),(0,g.jsx)("button",{className:"border-2 border-gray-400 px-3 py-2 ml-5",onClick:()=>a(1),children:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u0440\u0443\u0433\u043E\u0435"})]}),(0,g.jsx)("div",{className:"flex mt-5",children:i.map(t=>(0,g.jsxs)("div",{children:[(0,g.jsx)(Q,{data:t.images.nodes[0],aspectRatio:"1/1",sizes:"(min-width: 45em) 10vw, 50vw"}),(0,g.jsx)("h3",{children:t.title})]}))}),(0,g.jsx)("div",{className:"flex justify-center mt-10",children:(0,g.jsxs)("form",{children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("label",{htmlFor:"number",children:"\u0424\u0418\u041E"}),(0,g.jsx)("input",{name:"number",className:"w-full"})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("label",{htmlFor:"number",children:"\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"}),(0,g.jsx)("input",{name:"number",className:"w-full"})]}),(0,g.jsx)("div",{className:"flex justify-center",children:(0,g.jsx)("button",{className:"border-2 border-gray-400 px-3 py-2 ml-5",onClick:()=>a(1),children:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"})})]})})]})})}function m0({products:i,onClicked:a,title:t}){let[r,e]=(0,D.useState)(null);return(0,g.jsxs)("div",{className:"recommended-products",children:[(0,g.jsx)("h2",{children:t}),(0,g.jsx)(D.Suspense,{fallback:(0,g.jsx)("div",{children:"Loading..."}),children:(0,g.jsx)(Z0,{resolve:i,children:({collection:l})=>(0,g.jsxs)("div",{children:[console.log(l),(0,g.jsx)(G0.default,{partialVisible:!0,responsive:j1,children:l.products.edges.map(o=>{let c=o.node;return(0,g.jsxs)("a",{className:"recommended-product pr-25 relative",onClick:()=>{e(c.id),a(c)},children:[r===c.id&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{className:"absolute w-full h-full top-0 right-0 ",style:{background:"rgba(0,0,0,0.2)"}}),(0,g.jsx)("div",{className:"absolute top-0 right-0",style:{zIndex:1e5},children:(0,g.jsx)(j0,{size:"3em",color:"green"})})]}),(0,g.jsx)(Q,{data:c.images.nodes[0],aspectRatio:"1/1",sizes:"(min-width: 45em) 10vw, 50vw"}),(0,g.jsx)("h4",{children:c.title}),(0,g.jsx)("small",{children:(0,g.jsx)(x0,{data:c.priceRange.minVariantPrice})}),(0,g.jsx)("h4",{children:"\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0440\u0430\u0437\u043C\u0435\u0440\u044B"}),(0,g.jsx)("div",{className:"flex",children:c.variants.nodes.map(h=>(console.log("variant",h.selectedOptions[0]),(0,g.jsx)("p",{className:"mr-2",children:h.selectedOptions[0].value})))})]},c.id)})})]})})}),(0,g.jsx)("br",{})]})}export{z0 as default,N1 as links,F1 as meta};
//# sourceMappingURL=/build/routes/_index-CCCAAS4E.js.map