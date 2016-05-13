/*! grafana - v3.0.1 - 2016-05-11
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["app/core/config","app/core/core_module"],function(a){function b(){return{restrict:"E",controller:e,bindToController:!0,controllerAs:"ctrl",template:f,scope:{mode:"@"}}}var c,d,e,f;return a("prefsControlDirective",b),{setters:[function(a){c=a},function(a){d=a}],execute:function(){e=function(){function a(a,b){this.backendSrv=a,this.$location=b,this.timezones=[{value:"",text:"Default"},{value:"browser",text:"Local browser time"},{value:"utc",text:"UTC"}],this.themes=[{value:"",text:"Default"},{value:"dark",text:"Dark"},{value:"light",text:"Light"}]}return a.$inject=["backendSrv","$location"],a.prototype.$onInit=function(){var a=this;return this.backendSrv.get("/api/"+this.mode+"/preferences").then(function(b){a.prefs=b,a.oldTheme=b.theme})},a.prototype.updatePrefs=function(){var a=this;if(this.prefsForm.$valid){var b={theme:this.prefs.theme,timezone:this.prefs.timezone,homeDashboardId:this.prefs.homeDashboardId};this.backendSrv.put("/api/"+this.mode+"/preferences",b).then(function(){window.location.href=c["default"].appSubUrl+a.$location.path()})}},a}(),a("PrefsControlCtrl",e),f='\n<form name="ctrl.prefsForm" class="section gf-form-group">\n  <h3 class="page-heading">首选项</h3>\n\n  <div class="gf-form">\n    <span class="gf-form-label width-9">皮肤模板</span>\n    <div class="gf-form-select-wrapper max-width-20">\n      <select class="gf-form-input" ng-model="ctrl.prefs.theme" ng-options="f.value as f.text for f in ctrl.themes"></select>\n    </div>\n  </div>\n\n  <div class="gf-form">\n    <span class="gf-form-label width-9">首页仪表盘</span>\n    <dashboard-selector class="gf-form-select-wrapper max-width-20 gf-form-select-wrapper--has-help-icon"\n                        model="ctrl.prefs.homeDashboardId">\n    </dashboard-selector>\n  </div>\n\n  <div class="gf-form">\n    <label class="gf-form-label width-9">时区</label>\n    <div class="gf-form-select-wrapper max-width-20">\n      <select class="gf-form-input" ng-model="ctrl.prefs.timezone" ng-options="f.value as f.text for f in ctrl.timezones"></select>\n    </div>\n  </div>\n\n  <div class="gf-form-button-row">\n    <button type="submit" class="btn btn-success" ng-click="ctrl.updatePrefs()">更新</button>\n  </div>\n</form>\n',d["default"].directive("prefsControl",b)}}});