(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{C2fA:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("8Y7J"),r=n("IheW");let c=(()=>{class e{constructor(e){this.http=e}getmachines(){return this.http.get("machine_list")}line(e){return this.http.get("report_filters?line="+e)}get_rreport(e){return this.http.get("re_route_cards?id="+e)}put_rreport(e){return this.http.put("re_reports",e)}getmodule(){return this.http.get("module_filters")}operat(e){return this.http.get("operator_filters?machine_name="+e.machine_name+"&&module="+e.module+"&&shift_num="+e.shift_num+"&&from_date="+e.date)}getshift(e){return this.http.get("shifts?module="+e)}getshifteff(){return this.http.get("shifts")}overall_report(e){return this.http.get("overall_report?machine_name="+e.machine_name+"&&module="+e.module+"&&shift_num="+e.shift_num+"&&from_date="+e.date+"&&select_type="+e.type)}first_page_loading(){return this.http.get("previous_shift")}overallll_report(e){return this.http.get("overall_report?machine_name="+e.machine_name+"&&module="+e.module+"&&shift_num="+e.shift_num+"&&from_date="+e.from_date)}overall_report_ing(e){return this.http.get("overall_report?machine_name="+e.machine_name+"&&module="+e.module+"&&shift_num="+e.shift_num+"&&from_date="+e.date)}overallls_report(e){return this.http.get("overall_report?machine_name="+e.machine_name+"&&module="+e.module+"&&shift_num="+e.shift_num+"&&from_date="+e.date+"&&select_type=Shiftwise")}overall_report_op(e){return this.http.get("overall_report?machine_name="+e.machine_name+"&&module="+e.module+"&&shift_num="+e.shift_num+"&&from_date="+e.date+"&&select_type="+e.type+"&&operator_id="+e.operator)}}return e.ngInjectableDef=a.Tb({factory:function(){return new e(a.Ub(r.c))},token:e,providedIn:"root"}),e})()},U0Oa:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var a=n("8Y7J");n("10VE"),n("SVse"),n("gnsf"),n("s7LF");var r=a.rb({encapsulation:2,styles:[],data:{}});function c(e){return a.Pb(2,[],null,null)}},Z5h4:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var a=n("8Y7J"),r=(n("r0V8"),n("SVse"),n("POq0")),c=(n("IP0z"),n("Xd0L")),o=(n("cUpR"),n("/HVE")),i=n("omvX"),l=(n("s7LF"),n("5GAg"),a.rb({encapsulation:2,styles:["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.91026}50%{animation-timing-function:cubic-bezier(0,0,.2,.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0,0,0,1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(.4,0,1,1);stroke-dashoffset:0}to{stroke-dashoffset:-22.91026}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0,0,.2,.1);opacity:1;transform:rotate(0)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(.14,0,0,1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0,0,.2,.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(.14,0,0,1);opacity:1;transform:rotate(0)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}100%,32.8%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0,0,.2,.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}@media (-ms-high-contrast:active){.mat-checkbox.cdk-keyboard-focused .mat-checkbox-frame{border-style:dotted}}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0,0,.2,.1),opacity 90ms cubic-bezier(0,0,.2,.1)}._mat-animation-noopable .mat-checkbox-background{transition:none}.mat-checkbox-persistent-ripple{width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media (hover:none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.91026;stroke-dasharray:22.91026;stroke-width:2.13333px}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0);border-radius:2px}@media (-ms-high-contrast:active){.mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0s mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0s mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0s mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0s mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0s mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:.5s linear 0s mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:.5s linear 0s mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:.3s linear 0s mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}"],data:{}}));function m(e){return a.Pb(2,[a.Lb(671088640,1,{_inputElement:0}),a.Lb(671088640,2,{ripple:0}),(e()(),a.tb(2,0,[["label",1]],null,16,"label",[["class","mat-checkbox-layout"]],[[1,"for",0]],null,null,null,null)),(e()(),a.tb(3,0,null,null,10,"div",[["class","mat-checkbox-inner-container"]],[[2,"mat-checkbox-inner-container-no-side-margin",null]],null,null,null,null)),(e()(),a.tb(4,0,[[1,0],["input",1]],null,0,"input",[["class","mat-checkbox-input cdk-visually-hidden"],["type","checkbox"]],[[8,"id",0],[8,"required",0],[8,"checked",0],[1,"value",0],[8,"disabled",0],[1,"name",0],[8,"tabIndex",0],[8,"indeterminate",0],[1,"aria-label",0],[1,"aria-labelledby",0],[1,"aria-checked",0]],[[null,"change"],[null,"click"]],(function(e,t,n){var a=!0,r=e.component;return"change"===t&&(a=!1!==r._onInteractionEvent(n)&&a),"click"===t&&(a=!1!==r._onInputClick(n)&&a),a}),null,null)),(e()(),a.tb(5,0,null,null,3,"div",[["class","mat-checkbox-ripple mat-ripple"],["matRipple",""]],[[2,"mat-ripple-unbounded",null]],null,null,null,null)),a.sb(6,212992,[[2,4]],0,c.u,[a.k,a.y,o.a,[2,c.k],[2,i.a]],{centered:[0,"centered"],radius:[1,"radius"],animation:[2,"animation"],disabled:[3,"disabled"],trigger:[4,"trigger"]},null),a.Ib(7,{enterDuration:0}),(e()(),a.tb(8,0,null,null,0,"div",[["class","mat-ripple-element mat-checkbox-persistent-ripple"]],null,null,null,null,null)),(e()(),a.tb(9,0,null,null,0,"div",[["class","mat-checkbox-frame"]],null,null,null,null,null)),(e()(),a.tb(10,0,null,null,3,"div",[["class","mat-checkbox-background"]],null,null,null,null,null)),(e()(),a.tb(11,0,null,null,1,":svg:svg",[[":xml:space","preserve"],["class","mat-checkbox-checkmark"],["focusable","false"],["version","1.1"],["viewBox","0 0 24 24"]],null,null,null,null,null)),(e()(),a.tb(12,0,null,null,0,":svg:path",[["class","mat-checkbox-checkmark-path"],["d","M4.1,12.7 9,17.6 20.3,6.3"],["fill","none"],["stroke","white"]],null,null,null,null,null)),(e()(),a.tb(13,0,null,null,0,"div",[["class","mat-checkbox-mixedmark"]],null,null,null,null,null)),(e()(),a.tb(14,0,[["checkboxLabel",1]],null,4,"span",[["class","mat-checkbox-label"]],null,[[null,"cdkObserveContent"]],(function(e,t,n){var a=!0;return"cdkObserveContent"===t&&(a=!1!==e.component._onLabelTextChange()&&a),a}),null,null)),a.sb(15,1196032,null,0,r.a,[r.b,a.k,a.y],null,{event:"cdkObserveContent"}),(e()(),a.tb(16,0,null,null,1,"span",[["style","display:none"]],null,null,null,null,null)),(e()(),a.Nb(-1,null,["\xa0"])),a.Eb(null,0)],(function(e,t){var n=t.component,r=e(t,7,0,150);e(t,6,0,!0,20,r,n._isRippleDisabled(),a.Fb(t,2))}),(function(e,t){var n=t.component;e(t,2,0,n.inputId),e(t,3,0,!a.Fb(t,14).textContent||!a.Fb(t,14).textContent.trim()),e(t,4,1,[n.inputId,n.required,n.checked,n.value,n.disabled,n.name,n.tabIndex,n.indeterminate,n.ariaLabel||null,n.ariaLabelledby,n._getAriaChecked()]),e(t,5,0,a.Fb(t,6).unbounded)}))}},dsV1:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("8Y7J"),r=n("IheW");let c=(()=>{class e{constructor(e){this.http=e}getmachines(){return this.http.get("get_machine_status2")}machine_count(){return this.http.get("machine_count")}getshift(){return this.http.get("shifts")}getshift2(e,t){return this.http.get("prev_dashboards?date="+e+"&&shift_no="+t)}getmachines1(e){return this.http.get("get_machine_status2?live="+e)}andon(){return this.http.get("r_get_status")}form_line(e){return this.http.get("line_wise_dashboards?line="+e)}pie(e,t){return this.http.get("live_machine_detail?line="+e+"&&machine="+t)}reason(e){return this.http.get("current_idle_reasons?machine="+e)}}return e.ngInjectableDef=a.Tb({factory:function(){return new e(a.Ub(r.c))},token:e,providedIn:"root"}),e})()},flk9:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("8Y7J"),r=n("IheW");let c=(()=>{class e{constructor(e){this.http=e}operator_create(e){return this.http.post("operators",e)}operator_get(e){return this.http.get("operators?page="+e+"&&per_page=10")}operator_put(e,t){return this.http.put("operators/"+t,e)}operator_delete(e){return this.http.delete("operators/"+e)}component_create(e){return this.http.post("components",e)}component_get(){return this.http.get("components")}component_put(e,t){return this.http.put("components/"+t,e)}component_delete(e){return this.http.delete("components/"+e)}}return e.ngInjectableDef=a.Tb({factory:function(){return new e(a.Ub(r.c))},token:e,providedIn:"root"}),e})()},nT1K:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("8Y7J"),r=n("IheW");let c=(()=>{class e{constructor(e){this.http=e}getlog(e,t){return this.http.get("log_activity?id="+e+"&&page="+t+"&&per_page=10")}}return e.ngInjectableDef=a.Tb({factory:function(){return new e(a.Ub(r.c))},token:e,providedIn:"root"}),e})()},vj0T:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("8Y7J"),r=n("IheW");let c=(()=>{class e{constructor(e){this.http=e}oee(){return this.http.get("oee_calculations")}operator(){return this.http.get("operator_list")}component(){return this.http.get("component_list")}componentById(e){return this.http.get("components/"+e)}shift(){return this.http.get("shifts")}user_delete(e){return this.http.delete("oee_calculations/"+e)}valuepost(e){return this.http.post("oee_calculations",e)}machines(){return this.http.get("oee_machine_list")}shift_put(e,t){return this.http.put("oee_calculations/"+t,e)}}return e.ngInjectableDef=a.Tb({factory:function(){return new e(a.Ub(r.c))},token:e,providedIn:"root"}),e})()},xjKI:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("8Y7J"),r=n("IheW");let c=(()=>{class e{constructor(e){this.http=e}alarm_history(e,t){return this.http.get("alarm_histories?page="+e+"&&per_page=20&&search="+t)}alarm_historyl(e){return this.http.get("alarm_histories?page="+e+"&&per_page=20")}alarm_history4(){return this.http.get("alarm_histories")}god(){return this.http.get("kpy_dashboard")}}return e.ngInjectableDef=a.Tb({factory:function(){return new e(a.Ub(r.c))},token:e,providedIn:"root"}),e})()}}]);