(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{478:function(e,t,n){"use strict";n.r(t);n(73),n(50),n(48);var r=n(40),o=n(103),u=n(316),i=function(e){var t,n=e.length-1,r=e.slice();do{t=!1;for(var o=0;o<n;o+=1)if(r[o]>r[o+1]){var u=r[o];r[o]=r[o+1],r[o+1]=u,t=!0}n-=1}while(t);return r},a=Object(o.c)({name:"worker-function-example",setup:function(){var e=Object(o.n)(15e3),t=Object(u.n)({refreshMs:10}).now,n=Object(r.a)(Array(5e4)).map((function(){return Math.floor(1e6*Math.random())})),a=Object(o.n)([]),c=Object(o.a)((function(){return a.value.slice(0,10)})),l=Object(o.a)((function(){return a.value.slice(-10)})),s=Object(u.Z)(i,{timeout:e}),v=s.exec;return{now:t,timeout:e,firstSegment:c,lastSegment:l,sortArray:function(){a.value=i(n)},sortWorker:function(){v(n).then((function(e){return a.value=e})).catch((function(e){return a.value=["error",e]}))},working:s.loading,error:s.error,cancelled:s.cancelled}}}),c=n(27),l=Object(c.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("Sort")]),e._v(" "),n("p",[e._v("time: "+e._s(e.now))]),e._v(" "),n("h6",[e._v("\n    If UI thread is working the refresh rate should go down and the time will\n    stop\n  ")]),e._v(" "),n("div",[n("label",[e._v("Timeout")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.timeout,expression:"timeout",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.timeout},on:{input:function(t){t.target.composing||(e.timeout=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),n("p",[e._v("\n    Numbers:\n    "),n("b",[e._v(e._s(e.firstSegment))]),e._v("...\n    "),n("b",[e._v(e._s(e.lastSegment))])]),e._v(" "),n("ul",[n("li",[n("button",{on:{click:e.sortArray}},[e._v("Function")])]),e._v(" "),n("li",[n("button",{attrs:{disabled:e.working},on:{click:e.sortWorker}},[e._v("Worker")]),e._v(" "),e.cancelled?n("p",{style:{color:"red"}},[e._v(e._s(e.error))]):e._e()])])])}),[],!1,null,null,null);t.default=l.exports}}]);