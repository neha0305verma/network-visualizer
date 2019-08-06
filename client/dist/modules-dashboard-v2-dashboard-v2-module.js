(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-dashboard-v2-dashboard-v2-module"],{

/***/ "./src/app/modules/dashboard-v2/components/color-panel/color-panel/color-panel.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/color-panel/color-panel/color-panel.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"panel\">\n        <p class=\"panelTitle\">Legend</p>\n        <div class=\"panelbody\" *ngIf=\"showDropDown\">\n            <ul class=\"panelList\" type=\"none\">\n                <ng-container *ngFor=\"let item of colorData\">\n                    <li class=\"item\" [ngStyle]=\"{color: item.color}\"><span class=\"circle\" [ngStyle]=\"{background: item.color}\"></span>{{item?.name}}</li>\n                </ng-container>\n            </ul>\n        </div>\n        <div class=\"dropDown\" (click)=\"toggleDropdown()\">\n            <i class=\"fas fa-chevron-up\" *ngIf=\"showDropDown\"></i>\n            <i class=\"fas fa-chevron-down\" *ngIf=\"!showDropDown\"></i>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/color-panel/color-panel/color-panel.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/color-panel/color-panel/color-panel.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  width: 250px;\n  background-color: transparent;\n  position: absolute;\n  right: 0;\n  padding-right: 20px;\n  padding-top: 20px;\n  z-index: 9900; }\n\n.panel {\n  background-color: white;\n  border-radius: 10px;\n  width: 150px;\n  margin: auto;\n  margin-right: 0; }\n\n.panelTitle, .panelbody {\n  padding: 10px 5px; }\n\n.panelTitle {\n  font-size: 1rem;\n  font-weight: 400;\n  text-align: center; }\n\n.panelList {\n  padding-left: 14px; }\n\n.item {\n  word-wrap: break;\n  line-height: 2; }\n\n.circle {\n  width: 16px;\n  height: 16px;\n  display: inline-block;\n  border-radius: 50%;\n  margin-right: 8px; }\n\n.dropDown {\n  cursor: pointer; }\n\n.dropDown i {\n    display: block;\n    text-align: center;\n    font-size: 20px;\n    padding-bottom: 8px; }\n\n.display-ok {\n  display: block; }\n\n.no-display {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25laGEvTmVoYVZlcm1hL1N1bmJpcmQvUHJvamVjdHMvTmV0d29yay1WaXN1YWxpemVyL25ldHdvcmstdmlzdWFsaXplci9jbGllbnQvc3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC12Mi9jb21wb25lbnRzL2NvbG9yLXBhbmVsL2NvbG9yLXBhbmVsL2NvbG9yLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBYTtFQUNiLDZCQUE2QjtFQUM3QixrQkFBbUI7RUFDbkIsUUFBUztFQUNULG1CQUFtQjtFQUNuQixpQkFBa0I7RUFDbEIsYUFBYyxFQUFBOztBQUdsQjtFQUNJLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksaUJBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksZUFBZTtFQUNmLGdCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUdsQjtFQUNBLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFHakI7RUFDSSxlQUFlLEVBQUE7O0FBRG5CO0lBR1EsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQW9CLEVBQUE7O0FBSTVCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLGFBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkLXYyL2NvbXBvbmVudHMvY29sb3ItcGFuZWwvY29sb3ItcGFuZWwvY29sb3ItcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gICAgd2lkdGggOiAyNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xuICAgIHJpZ2h0IDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmctdG9wIDogMjBweDtcbiAgICB6LWluZGV4IDogOTkwMDtcbn1cblxuLnBhbmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoIDogMTUwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLnBhbmVsVGl0bGUsIC5wYW5lbGJvZHkge1xuICAgIHBhZGRpbmcgOiAxMHB4IDVweDtcbn1cblxuLnBhbmVsVGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodCA6IDQwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wYW5lbExpc3Qge1xuICAgIHBhZGRpbmctbGVmdCA6IDE0cHg7XG59XG5cbi5pdGVtIHtcbiAgICB3b3JkLXdyYXA6YnJlYWsgO1xuICAgIGxpbmUtaGVpZ2h0OiAyO1xufVxuXG4uY2lyY2xlIHtcbndpZHRoOiAxNnB4O1xuaGVpZ2h0OiAxNnB4O1xuZGlzcGxheTogaW5saW5lLWJsb2NrO1xuYm9yZGVyLXJhZGl1czogNTAlO1xubWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5kcm9wRG93biB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGkge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tIDogOHB4O1xuICAgIH1cbn1cblxuLmRpc3BsYXktb2sge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubm8tZGlzcGxheSB7XG4gICAgZGlzcGxheSA6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/color-panel/color-panel/color-panel.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/color-panel/color-panel/color-panel.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ColorPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPanelComponent", function() { return ColorPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_colorService_color_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/colorService/color-service.service */ "./src/app/modules/dashboard-v2/services/colorService/color-service.service.ts");



var ColorPanelComponent = /** @class */ (function () {
    function ColorPanelComponent(colorSrvc) {
        this.colorSrvc = colorSrvc;
        this.colorObject = undefined;
        this.objectKeys = [];
        this.colorData = [];
        this.showDropDown = true;
    }
    ColorPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get color panel details
        this.colorSrvc.colorObj$.subscribe(function (data) {
            _this.colorObject = data;
            // console.log('color object is ', this.colorObject);
            _this.objectKeys = Object.keys(_this.colorObject);
            _this.processColors(_this.objectKeys, _this.colorObject);
            // console.log('processed color data is ', this.colorData);
        });
    };
    ColorPanelComponent.prototype.processColors = function (keyArray, colorObj) {
        var _this = this;
        if (!!keyArray.length || !!Object.keys(colorObj).length) {
            // both have the data , kindly process
            keyArray.map(function (key) {
                // for each key create a new object which has item name and item color
                _this.colorData.push({ name: key, color: colorObj[key] });
            });
        }
        else {
            console.log('empty key Array or colorObj in color panel');
            return [];
        }
    };
    ColorPanelComponent.prototype.toggleDropdown = function () {
        this.showDropDown = !this.showDropDown;
    };
    ColorPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-color-panel',
            template: __webpack_require__(/*! ./color-panel.component.html */ "./src/app/modules/dashboard-v2/components/color-panel/color-panel/color-panel.component.html"),
            styles: [__webpack_require__(/*! ./color-panel.component.scss */ "./src/app/modules/dashboard-v2/components/color-panel/color-panel/color-panel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_colorService_color_service_service__WEBPACK_IMPORTED_MODULE_2__["ColorServiceService"]])
    ], ColorPanelComponent);
    return ColorPanelComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/create-nodes/create-nodes.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/create-nodes/create-nodes.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <!--<a href=\"#\" class=\"deleteLink\"><span class=\"fas fa-plus-circle\">&nbsp;Delete Node</span></a> -->\n    <div class=\"btn-group nodes\">\n        <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n      Node\n    </button>\n        <div class=\"dropdown-menu\">\n            <a class=\"dropdown-item create\" (click)=\"createNode()\" data-toggle=\"modal\" data-target=\"#createNodeModal\"><span class=\"fas fa-plus-circle\"></span>Create Node</a>\n            <a class=\"dropdown-item edit\" (click)=\"editNode()\"><span class=\"far fa-edit\"></span>Edit Node</a>\n            <a class=\"dropdown-item delete\" (click)=\"deleteNode()\"><span class=\"far fa-trash-alt\"></span>Delete Node</a>\n        </div>\n    </div>\n    <div class=\"btn-group relationships\">\n        <button type=\"button\" class=\"btn btn-success dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n      Relationships\n    </button>\n        <div class=\"dropdown-menu\">\n            <a class=\"dropdown-item create\" (click)=\"createRelation()\" data-toggle=\"modal\" data-target=\"#createRelationModal\"><span class=\"fas fa-plus-circle\"></span>Create Relationship</a>\n            <a class=\"dropdown-item edit\" (click)=\"editRelation()\"><span class=\"far fa-edit\"></span>Edit Relationship</a>\n            <a class=\"dropdown-item delete\" (click)=\"deleteRelation()\"><span class=\"far fa-trash-alt\"></span>Delete Relationship</a>\n        </div>\n    </div>\n</div>\n<!--modal template to show when node is to be created-->\n<div class=\"modal fade\" id=\"createNodeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"NodeModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"NodeModalLabel\" *ngIf=\"popupConfig.createNodePopup === true\">Create Node</h5>\n                <h5 class=\"modal-title\" id=\"NodeModalLabel\" *ngIf=\"popupConfig.editNodePopup === true\">Edit Node</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"modalItem\">\n                    <p class=\"sectionName\">\n                        Type\n                    </p>\n                    <span class=\"inputSpan\">\n              <!-- <sui-multi-select [(ngModel)]=\"selectedType\" (ngModelChange)=\"updateProperties($event)\" [options]=\"typeOptions\" [maxSelected]=\"1\" #type>\n                  <div class=\"ui icon search input\">\n                      <i class=\"search icon\"></i>\n                      <input suiSelectSearch type=\"text\" placeholder=\"Search Type...\">\n                  </div>\n                  <div class=\"scrolling menu\">\n                      <sui-select-option *ngFor=\"let o of type.filteredOptions\" [value]=\"o\">\n\n                      </sui-select-option>\n\n                  </div>\n              </sui-multi-select> -->\n              <sui-select class=\"selection\"\n              [(ngModel)]=\"selectedType\"\n              (ngModelChange)=\"updateProperties($event)\"\n              [options]=\"typeOptions\"\n              [isSearchable]=\"searchable\"\n              [isDisabled]=\"disabledBox\"\n              #select>\n      <sui-select-option *ngFor=\"let option of select.filteredOptions\"\n                         [value]=\"option\">\n      </sui-select-option>\n  </sui-select>\n            </span>\n                </div>\n                <div class=\"modalItem\" *ngIf=\"labelProperties?.length > 0 && selectedType?.length > 0\">\n                    <h5 class=\"propertyLabel\">\n                        Properties <span class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"top\" [title]=\"toolTipText\"></span>\n                    </h5>\n                    <ng-container *ngFor=\"let data of labelProperties\">\n                        <div class=\"modalItem\">\n                            <p class=\"sectionName\">{{data}}</p>\n                            <span class=\"inputSpan\"><input type=\"text\" id=\"id_{{data}}\"></span>\n                        </div>\n                    </ng-container>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" style=\"color: red;\">Cancel</button>\n                <button type=\"button\" class=\"btn btn-primary create\" (click)=\"submitModal()\" *ngIf=\"popupConfig.createNodePopup === true\">Create</button>\n                <button type=\"button\" class=\"btn btn-primary create\" (click)=\"submitModal('edit')\" *ngIf=\"popupConfig.editNodePopup === true\" id=\"edit_btn\">Update</button>\n            </div>\n        </div>\n    </div>\n    <!--modal node create end-->\n\n\n    <!--modal relationship start-->\n    <div class=\"modal fade\" id=\"createRelationModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"RelModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"RelModalLabel\">Create Relationship</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"modalItem\">\n                        <p class=\"sectionName\">\n                            Type\n                        </p>\n                        <span class=\"inputSpan\">\n              <sui-multi-select [(ngModel)]=\"selectedType\" (ngModelChange)=\"updateRelProperties($event)\" [options]=\"relationTypeOptions\" [maxSelected]=\"1\" #typeRel>\n                  <div class=\"ui icon search input\">\n                      <i class=\"search icon\"></i>\n                      <input suiSelectSearch type=\"text\" placeholder=\"Search Type...\">\n                  </div>\n                  <div class=\"scrolling menu\">\n                      <sui-select-option *ngFor=\"let o of typeRel.filteredOptions\" [value]=\"o\">\n\n                      </sui-select-option>\n\n                  </div>\n              </sui-multi-select>\n            </span>\n                    </div>\n                    <div class=\"modalItem\" *ngIf=\"typeProperties.length > 0\">\n                        <h5 class=\"propertyLabel\">\n                            Properties <span class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"top\" [title]=\"toolTipText\"></span>\n                        </h5>\n                        <ng-container *ngFor=\"let data of typeProperties\">\n                            <div class=\"modalItem\">\n                                <p class=\"sectionName\">{{data}}</p>\n                                <span class=\"inputSpan\"><input type=\"text\" id=\"id_{{data}}\"></span>\n                            </div>\n                        </ng-container>\n                    </div>\n                    <!-- <h5 class=\"propertyLabel\">\n            Connection <span class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"top\" [title]=\"toolTipText\"></span>\n        </h5>\n          <div class=\"relationScope\">\n            <div class=\"modalItem\">\n              <p class=\"sectionName\">From</p>\n              <span class=\"inputSpan\">\n                <sui-multi-select [(ngModel)]=\"selectedNodeNameSource\" (ngModelChange)=\"updateList('to',selectedNodeNameSource)\" [options]=\"fromNames\" [maxSelected]=\"1\" #NodeFromName>\n                  <div class=\"ui icon search input\">\n                      <i class=\"search icon\"></i>\n                      <input suiSelectSearch type=\"text\" placeholder=\"Search Node...\">\n                  </div>\n                  <div class=\"scrolling menu\">\n                      <sui-select-option *ngFor=\"let o of NodeFromName.filteredOptions\" [value]=\"o\">\n\n                      </sui-select-option>\n\n                  </div>\n              </sui-multi-select>\n              </span>\n          </div>\n          <div class=\"modalItem\">\n            <p class=\"sectionName\">To</p>\n            <span class=\"inputSpan\">\n              <sui-multi-select [(ngModel)]=\"selectedNodeNameTarget\" (ngModelChange)=\"updateList('from',selectedNodeNameTarget)\" [options]=\"toNames\" [maxSelected]=\"1\" #NodeToName>\n                <div class=\"ui icon search input\">\n                    <i class=\"search icon\"></i>\n                    <input suiSelectSearch type=\"text\" placeholder=\"Search Node...\">\n                </div>\n                <div class=\"scrolling menu\">\n                    <sui-select-option *ngFor=\"let o of NodeToName.filteredOptions\" [value]=\"o\">\n\n                    </sui-select-option>\n\n                </div>\n            </sui-multi-select>\n            </span>\n        </div>\n          </div> -->\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" style=\"color: red;\">Cancel</button>\n                    <button type=\"button\" class=\"btn btn-primary create\" (click)=\"submitRelModal()\">Create</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--modal relationship end-->"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/create-nodes/create-nodes.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/create-nodes/create-nodes.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid .btn-group {\n  margin-right: 20px; }\n\n.btn-group:active {\n  outline: none;\n  text-decoration: none; }\n\n.createLink, .editLink, .deleteLink {\n  text-decoration: none;\n  font-size: 12px; }\n\n.dropdown-menu .dropdown-item {\n  cursor: pointer; }\n\n.dropdown-menu .dropdown-item span {\n    margin-right: 8px; }\n\n.dropdown-menu .dropdown-item:active {\n  background-color: white; }\n\n.dropdown-menu .create:hover {\n  color: blue; }\n\n.dropdown-menu .edit:hover {\n  color: green; }\n\n.dropdown-menu .delete:hover {\n  color: red; }\n\n.modal-header {\n  background: #5f5f5f;\n  color: white;\n  border-color: #5f5f5f; }\n\n.modal-header button.close {\n    color: white; }\n\n.modalItem {\n  padding: 10px; }\n\n.modalItem .fa-info-circle {\n    font-size: 14px;\n    cursor: pointer; }\n\n.sectionName {\n  display: inline-block;\n  margin: 0;\n  max-width: 50%; }\n\n.inputSpan {\n  position: absolute;\n  left: 50%; }\n\n.inputSpan input {\n    border: 1px solid #acacac;\n    outline: none; }\n\n.propertyLabel {\n  padding-top: 13px;\n  padding-bottom: 13px;\n  text-align: center; }\n\ninput[disabled=\"true\"] {\n  cursor: not-allowed; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25laGEvTmVoYVZlcm1hL1N1bmJpcmQvUHJvamVjdHMvTmV0d29yay1WaXN1YWxpemVyL25ldHdvcmstdmlzdWFsaXplci9jbGllbnQvc3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC12Mi9jb21wb25lbnRzL2NyZWF0ZS1ub2Rlcy9jcmVhdGUtbm9kZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxhQUFjO0VBQ2QscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0kscUJBQXFCO0VBQ3JCLGVBQWUsRUFBQTs7QUFHbkI7RUFFUSxlQUFlLEVBQUE7O0FBRnZCO0lBSVksaUJBQWtCLEVBQUE7O0FBSjlCO0VBUVEsdUJBQXVCLEVBQUE7O0FBUi9CO0VBV1EsV0FBWSxFQUFBOztBQVhwQjtFQWNRLFlBQWEsRUFBQTs7QUFkckI7RUFpQlEsVUFBVyxFQUFBOztBQUluQjtFQUNJLG1CQUFvQjtFQUNwQixZQUFhO0VBQ2IscUJBQXFCLEVBQUE7O0FBSHpCO0lBS1EsWUFBYSxFQUFBOztBQUdyQjtFQUNJLGFBQWMsRUFBQTs7QUFEbEI7SUFHUSxlQUFnQjtJQUNoQixlQUFlLEVBQUE7O0FBSXZCO0VBQ0kscUJBQXNCO0VBQ3RCLFNBQVU7RUFDVixjQUFlLEVBQUE7O0FBR25CO0VBQ0ksa0JBQW1CO0VBQ25CLFNBQVUsRUFBQTs7QUFGZDtJQUlRLHlCQUEwQjtJQUMxQixhQUFjLEVBQUE7O0FBSXRCO0VBQ0ksaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkLXYyL2NvbXBvbmVudHMvY3JlYXRlLW5vZGVzL2NyZWF0ZS1ub2Rlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQgLmJ0bi1ncm91cCB7XG4gICAgbWFyZ2luLXJpZ2h0IDogMjBweDtcbn1cblxuLmJ0bi1ncm91cDphY3RpdmUge1xuICAgIG91dGxpbmUgOiBub25lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNyZWF0ZUxpbmssIC5lZGl0TGluaywgLmRlbGV0ZUxpbmsge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5kcm9wZG93bi1tZW51IHtcbiAgICAuZHJvcGRvd24taXRlbSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQgOiA4cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmRyb3Bkb3duLWl0ZW06YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIC5jcmVhdGU6aG92ZXIge1xuICAgICAgICBjb2xvciA6IGJsdWU7XG4gICAgfVxuICAgIC5lZGl0OmhvdmVyIHtcbiAgICAgICAgY29sb3IgOiBncmVlbjtcbiAgICB9XG4gICAgLmRlbGV0ZTpob3ZlciB7XG4gICAgICAgIGNvbG9yIDogcmVkO1xuICAgIH1cbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZCA6ICM1ZjVmNWY7XG4gICAgY29sb3IgOiB3aGl0ZTtcbiAgICBib3JkZXItY29sb3I6ICM1ZjVmNWY7XG4gICAgYnV0dG9uLmNsb3NlIHtcbiAgICAgICAgY29sb3IgOiB3aGl0ZTtcbiAgICB9XG59XG4ubW9kYWxJdGVtIHtcbiAgICBwYWRkaW5nIDogMTBweDtcbiAgICAuZmEtaW5mby1jaXJjbGUge1xuICAgICAgICBmb250LXNpemUgOiAxNHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuXG4uc2VjdGlvbk5hbWUge1xuICAgIGRpc3BsYXkgOiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luIDogMDtcbiAgICBtYXgtd2lkdGggOiA1MCU7XG59XG5cbi5pbnB1dFNwYW4ge1xuICAgIHBvc2l0aW9uIDogYWJzb2x1dGU7XG4gICAgbGVmdCA6IDUwJTtcbiAgICBpbnB1dCB7XG4gICAgICAgIGJvcmRlciA6IDFweCBzb2xpZCAjYWNhY2FjO1xuICAgICAgICBvdXRsaW5lIDogbm9uZTtcbiAgICB9XG59XG5cbi5wcm9wZXJ0eUxhYmVsIHtcbiAgICBwYWRkaW5nLXRvcDogMTNweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlucHV0W2Rpc2FibGVkPVwidHJ1ZVwiXSB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/create-nodes/create-nodes.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/create-nodes/create-nodes.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CreateNodesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNodesComponent", function() { return CreateNodesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_search_service_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/services/search-service/search.service */ "./src/app/modules/shared/services/search-service/search.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_modules_core_services_graph_data_service_graph_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/core/services/graph-data-service/graph-data.service */ "./src/app/modules/core/services/graph-data-service/graph-data.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var CreateNodesComponent = /** @class */ (function () {
    function CreateNodesComponent(SharedSrvc, graphSrvc, cdr) {
        this.SharedSrvc = SharedSrvc;
        this.graphSrvc = graphSrvc;
        this.cdr = cdr;
        this.nodeBtnEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.disabledBox = false;
        this.edgeBtnEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nodeTypes = [];
        this.nodeTypes2 = [];
        this.selectedType = [];
        this.typeOptions = [];
        this.toolTipText = '';
        this.labelProperties = [];
        this.relationTypeOptions = [];
        this.typeProperties = [];
        this.toNames = [];
        this.fromNames = [];
        this.editNodeConfig = {};
        this.deleteNodeConfig = {};
        this.queryObj = {
            raw: true,
            query: "MATCH (p) WITH DISTINCT keys(p) AS keys,p\n     with DISTINCT labels(p) as label,keys \n     UNWIND keys AS keyslisting WITH DISTINCT keyslisting AS allfields,label\n     RETURN collect(allfields),label"
        };
        this.popupConfig = {
            createNodePopup: false,
            editNodePopup: false,
            deleteNodePopup: false,
            createRelationPopup: false,
            editRelationPopup: false,
            deleteRelationPopup: false
        };
    }
    CreateNodesComponent.prototype.ngOnInit = function () {
        this.toolTipText = 'The Properties section can be left blank to set a default Node';
        $('.toolTipText').tooltip();
    };
    CreateNodesComponent.prototype.createNode = function () {
        var _this = this;
        this.popupConfig.createNodePopup = true;
        this.disabledBox = false;
        /* this.SharedSrvc.runQuery(this.queryObj).subscribe(data => {
          console.log('recieved label data from service ', data);
          this.processedData = this.processData(data);
          // extract types from the array
          this.extractLabels(this.processedData);
          this.typeOptions = _.cloneDeep(this.nodeTypes2);
        }, err => {
          console.log('An error occured while reading label data from the database');
        }); */
        this.getNodeTypes().subscribe(function (data) {
            _this.typeOptions = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](data);
        }, function (err) {
            console.log('An error occured while reading label data from the database', err);
            _this.typeOptions = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"]([]);
        });
    };
    CreateNodesComponent.prototype.editNode = function () {
        this.disabledBox = true;
        // this will send the edit event and then the app will wait for the node click event sent back to this component
        this.nodeBtnEvent.emit({ type: 'click', action: 'edit' });
    };
    CreateNodesComponent.prototype.deleteNode = function () {
        this.nodeBtnEvent.emit({ type: 'click', action: 'delete' });
    };
    CreateNodesComponent.prototype.createRelation = function () {
        var _this = this;
        this.graphSrvc.getGraphRelations().subscribe(function (response) {
            console.log('response recieved is ', response);
            _this.relationsData = response;
            var extractedTypes = _this.extractTypes(response);
            // pass it into the options for dropdown
            _this.relationTypeOptions = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](extractedTypes);
        }, function (err) {
            console.error('An error occured while fetching relations ', err);
        });
    };
    CreateNodesComponent.prototype.editRelation = function () {
        this.edgeBtnEvent.emit({ type: 'click', action: 'edit' });
    };
    CreateNodesComponent.prototype.deleteRelation = function () {
        this.edgeBtnEvent.emit({ type: 'click', action: 'delete' });
    };
    CreateNodesComponent.prototype.getNodeTypes = function () {
        var _this = this;
        return this.SharedSrvc.runQuery(this.queryObj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
            console.log('recieved label data from service ', data);
            _this.processedData = _this.processData(data);
            // extract types from the array
            _this.extractLabels(_this.processedData);
            // this.typeOptions = _.cloneDeep(this.nodeTypes2);
            return _this.nodeTypes2;
        }));
    };
    CreateNodesComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        $('#createNodeModal').on('hidden.bs.modal', function (e) {
            // this event will reset the popupConfig object so that everytime correct data is accessed
            _this.setAllToFalse();
        });
        if ((!!this.editData && !!this.editData.length) || (!!this.editData && !!Object.keys(this.editData).length)) {
            // console.log('edit data recieved is ', this.editData);
            this.editNodeConfig = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"]({ properties: this.editData['properties'], type: this.editData['type'][0], id: this.editData['id'] });
            // console.log('editNodeConfig is ', this.editNodeConfig);
            this.selectedType = null;
            this.getNodeTypes().subscribe(function (data) {
                _this.typeOptions = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](data);
                _this.selectedType = _this.editNodeConfig['type'];
                // trigger update properties to show data before hand
                _this.updateProperties(_this.selectedType);
                var prefilledInfo = _this.recreatePrefilledData(_this.editData['properties']);
                if (!!prefilledInfo) {
                    // console.log('recieved some prefilled info ', prefilledInfo);
                    // set the data into the modal
                    _this.prefillData('createNodeModal', prefilledInfo, _this.editNodeConfig['id']);
                }
                else {
                    // will allow the modal to be visible anyway
                    console.error('An error occured while prefilling the data, did not recieve anyhting');
                }
            }, function (err) {
                console.log('An error occured while reading label data from the database');
                _this.typeOptions = [];
            });
        }
    };
    CreateNodesComponent.prototype.prefillData = function (modalID, dataToFill, nodeID) {
        var _this = this;
        if (!modalID) {
            console.warn('cannot prefill data as modal id is not supplied');
        }
        else if (!Object.keys(dataToFill).length) {
            console.warn('Did not recieve any data to prefill');
        }
        else {
            // both are supplied, time to prefill the modal
            if ($("#" + modalID).length) {
                this.popupConfig.editNodePopup = true;
                this.showModal(modalID);
                // found the modal
                $("#" + modalID).on('shown.bs.modal', function (event) {
                    // capture the modal text boxes once it is visible
                    $("#" + modalID + " :text").each(function () {
                        var key = $(this).attr('id') || null;
                        if (Object.keys(dataToFill).indexOf(key) > -1) {
                            // assign this text box a prefilled value from dataToFill
                            $("[id='" + key + "']").val(dataToFill[key]);
                            // disable the Name box since it is unique fot the database
                            /* if (key === 'id_Name') {
                              $(`[id='${key}']`).attr('disabled', 'disabled');
                            } */
                        }
                    });
                    // add id of the node to the modal
                    _this.addAttribute('edit_btn', 'node_id', nodeID);
                });
            }
            else {
                console.warn('did not find any element with provided ID');
            }
        }
    };
    CreateNodesComponent.prototype.addAttribute = function (elementID, attributeKey, attributeValue) {
        $("[id='" + elementID + "']").attr(attributeKey, attributeValue);
    };
    CreateNodesComponent.prototype.recreatePrefilledData = function (prefilledData) {
        // main purpose is to attach id_ to the object keys so that it can be used to find elements in the modal
        if (Object.keys(prefilledData).length > 0) {
            // iterate on the keys and rename them
            var prefilledObj_1 = {};
            Object.keys(prefilledData).forEach(function (key) {
                var newKey = "id_" + key;
                prefilledObj_1[newKey] = prefilledData[key];
            });
            return prefilledObj_1;
        }
        else {
            return null;
        }
    };
    CreateNodesComponent.prototype.showModal = function (modalID) {
        $("#" + modalID).modal('show');
    };
    CreateNodesComponent.prototype.setAllToFalse = function () {
        var _this = this;
        Object.keys(this.popupConfig).forEach(function (key) {
            if (_this.popupConfig[key]) {
                _this.popupConfig[key] = false;
            }
        });
        this.selectedType = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"]([]);
    };
    CreateNodesComponent.prototype.submitModal = function (type) {
        if (type === void 0) { type = 'create'; }
        console.log(type);
        var nodeData = {
            id: null,
            properties: {},
            type: null
        };
        nodeData.type = [this.selectedType];
        $('#createNodeModal :text').each(function () {
            var key = $(this).attr('id') || null;
            var value = $(this).val() || null;
            nodeData.properties[key] = value;
        });
        try {
            nodeData = this.validateNodeData(nodeData);
            // hide the modal once the data is created properly
            $('#createNodeModal').modal('hide');
            if (type === 'create') {
                console.log('node created is ', nodeData);
                this.nodeBtnEvent.emit({ type: 'click', action: 'create', data: nodeData });
                this.popupConfig.createNodePopup = false;
            }
            else if (type === 'edit') {
                this.nodeBtnEvent.emit({ type: 'click', action: 'edit', data: nodeData, process: 'complete' });
                this.popupConfig.editNodePopup = false;
            }
        }
        catch (e) {
            console.log(e);
        }
    };
    CreateNodesComponent.prototype.validateNodeData = function (nodeObj) {
        if (Object.keys(nodeObj).length > 0) {
            if (nodeObj.hasOwnProperty('type') && nodeObj.type.length > 0) {
                if (nodeObj.hasOwnProperty('properties') && Object.keys(nodeObj.properties).length > 0) {
                    return this.cleanNodeData(nodeObj);
                }
                else {
                    throw new Error('Cannot create a node with no Name');
                }
            }
            else {
                throw new Error('Cannot create a node with no Type');
            }
        }
        else {
            throw new Error('Cannot create a node with no details');
        }
    };
    CreateNodesComponent.prototype.validateRelationData = function (relationObj) {
        if (Object.keys(relationObj).length > 0) {
            if (relationObj.hasOwnProperty('type') && relationObj.type.length > 0) {
                if (relationObj.hasOwnProperty('properties') && Object.keys(relationObj.properties).length > 0) {
                    return this.cleanRelationshipData(relationObj);
                }
                else {
                    // user did not specify any properties, its okay
                }
            }
            else {
                throw new Error('Cannot create a relation with no Type');
            }
        }
        else {
            throw new Error('cannot create a relation with no details');
        }
    };
    CreateNodesComponent.prototype.generateID = function () {
        // this function generates a new id for a the node which will be unique
        return Math.floor(Date.now() + Math.random());
    };
    CreateNodesComponent.prototype.processData = function (data) {
        if (data.length > 0) {
            var tempData_1 = [];
            data.forEach(function (label) {
                tempData_1.push({ type: label._fields[1], properties: label._fields[0] });
            });
            return tempData_1;
        }
        else
            return [];
    };
    CreateNodesComponent.prototype.extractLabels = function (data) {
        var _this = this;
        this.nodeTypes2 = [];
        data.forEach(function (label) {
            _this.nodeTypes2.push(label.type[0]);
        });
        // console.log('types are ', this.nodeTypes2);
    };
    CreateNodesComponent.prototype.updateProperties = function (event) {
        // fetch the properties of selected label and display it in the dropdown
        // console.log(event)
        this.labelProperties = this.getProperties([event]);
    };
    CreateNodesComponent.prototype.getProperties = function (labelName) {
        if (labelName.length > 0) {
            var fetchedProperties_1 = [];
            this.processedData.forEach(function (labelObj) {
                if (labelObj.type[0] === labelName[0]) {
                    fetchedProperties_1 = labelObj.properties;
                }
            });
            return fetchedProperties_1;
        }
        else {
            return [];
        }
    };
    CreateNodesComponent.prototype.removeDirtyData = function (dataObj) {
        var newPropertyObject = {};
        Object.keys(dataObj.properties).forEach(function (property) {
            if (property !== null && dataObj.properties[property] !== null) {
                // remove the id_ prefix in the key
                property = property.split('id_')[1];
                newPropertyObject[property] = dataObj.properties['id_' + property];
            }
        });
        return newPropertyObject;
    };
    CreateNodesComponent.prototype.cleanNodeData = function (nodeObj) {
        var newPropertyObject = {};
        // remove any null properties
        newPropertyObject = this.removeDirtyData(nodeObj);
        // assign it back to the original data
        nodeObj.properties = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](newPropertyObject);
        console.log('new properties are ', nodeObj);
        // assign a unique id to the node
        nodeObj['id'] = this.generateID();
        if (this.popupConfig.editNodePopup === true) {
            // assign the node id
            this.disabledBox = true;
            var nodeID = !isNaN($("#edit_btn").attr('node_id')) ? $("#edit_btn").attr('node_id') : null;
            console.log('node id is ', nodeID);
            nodeObj['id'] = nodeID;
        }
        // get the type array removed
        nodeObj['type'] = nodeObj['type'][0];
        return nodeObj;
    };
    CreateNodesComponent.prototype.cleanRelationshipData = function (relation) {
        var relationshipProperties = {};
        // remove any null properties
        relationshipProperties = this.removeDirtyData(relation);
        relation.properties = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](relationshipProperties);
        relation['type'] = relation['type'][0];
        return relation;
    };
    CreateNodesComponent.prototype.extractTypes = function (ObjectArray) {
        var typesArray = [];
        ObjectArray.forEach(function (obj) {
            typesArray.push(obj['type']);
        });
        return typesArray;
    };
    CreateNodesComponent.prototype.updateRelProperties = function (event) {
        var _this = this;
        // fetch the properties of selected type and display it in the dropdown
        this.typeProperties = this.getRelProperties(event);
        // trigger an api to get all the names of the nodes in the graph
        this.graphSrvc.getNodeNames().subscribe(function (response) {
            _this.fromNames = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](response);
            _this.toNames = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](response);
        }, function (error) {
            console.log(error);
            _this.fromNames = [];
            _this.toNames = [];
        });
    };
    CreateNodesComponent.prototype.getRelProperties = function (relType) {
        if (relType.length > 0) {
            var fetchedProperties_2 = [];
            this.relationsData.forEach(function (Obj) {
                if (Obj.type === relType[0]) {
                    fetchedProperties_2 = Obj['properties'];
                }
            });
            return fetchedProperties_2;
        }
        else {
            return [];
        }
    };
    CreateNodesComponent.prototype.submitRelModal = function () {
        var nodeData = {
            Name: null
        };
        var relationData = {
            type: null,
            properties: {}
        };
        var sourceNode = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](nodeData);
        var targetNode = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](nodeData);
        relationData.type = this.selectedType;
        sourceNode.Name = this.selectedNodeNameSource;
        targetNode.Name = this.selectedNodeNameTarget;
        // extract properties from modal if entered
        $('#createRelationModal :text').each(function () {
            var key = $(this).attr('id') || null;
            var value = $(this).val() || null;
            relationData.properties[key] = value;
        });
        console.log(relationData);
        try {
            relationData = this.validateRelationData(relationData);
            console.log('relationship created is ', relationData);
            // add the source and target nodes of this relation
            relationData['from'] = sourceNode.Name;
            relationData['to'] = targetNode.Name;
            this.edgeBtnEvent.emit({ type: 'click', action: 'create', data: relationData });
            // hide the modal once the data is created properly
            $('#createRelationModal').modal('hide');
        }
        catch (e) {
            console.log(e);
        }
    };
    CreateNodesComponent.prototype.updateList = function (key, name) {
        if (name.length > 0) {
            var ans = '';
            // if name is selected from source, remove it from target and vice versa
            if (key == 'from') {
                ans = lodash__WEBPACK_IMPORTED_MODULE_3__["remove"](this.fromNames, function (val) {
                    return val === name[0];
                });
                if (ans) {
                    this.fromNames = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.fromNames);
                }
            }
            else if (key == 'to') {
                ans = lodash__WEBPACK_IMPORTED_MODULE_3__["remove"](this.toNames, function (val) {
                    return val === name[0];
                });
                if (ans) {
                    this.toNames = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.toNames);
                }
            }
            else {
                // nothing
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateNodesComponent.prototype, "nodeBtnEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateNodesComponent.prototype, "edgeBtnEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CreateNodesComponent.prototype, "nodeTypes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateNodesComponent.prototype, "editData", void 0);
    CreateNodesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-nodes',
            template: __webpack_require__(/*! ./create-nodes.component.html */ "./src/app/modules/dashboard-v2/components/create-nodes/create-nodes.component.html"),
            styles: [__webpack_require__(/*! ./create-nodes.component.scss */ "./src/app/modules/dashboard-v2/components/create-nodes/create-nodes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_search_service_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"], src_app_modules_core_services_graph_data_service_graph_data_service__WEBPACK_IMPORTED_MODULE_4__["GraphDataService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], CreateNodesComponent);
    return CreateNodesComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/dashboard-v2-header/dashboard-header.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/dashboard-v2-header/dashboard-header.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-3\">\n    <div class=\"headerWrapper\">\n        <div class=\"row\">\n            <div class=\"col-3 logo left-logo\">\n                <img src=\"assets/societal-logo.png\" />\n            </div>\n            <div class=\"col-9 rightToolbar\">\n                <div class=\"dropdown\">\n                    <div class=\"profilePic\">\n                        <p>Hi Rishabh</p>\n                        <img src=\"./../../../../../assets/round_profile.jpg\" />\n                    </div>\n                    <div class=\"dropdown-content\">\n                        <a href=\"/profile\">PROFILE</a>\n                        <a href=\"/settings\">SETTINGS</a>\n                        <a href=\"/logout\">LOGOUT</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/dashboard-v2-header/dashboard-header.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/dashboard-v2-header/dashboard-header.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headerWrapper {\n  height: 10vh;\n  background: #fff; }\n\n.container-fluid {\n  background: #fff; }\n\n.rightToolbar {\n  height: 100%;\n  float: right;\n  width: 30%; }\n\n.login-button {\n  border-radius: 20px;\n  font-size: 14px;\n  line-height: 2;\n  min-width: 90px;\n  float: right;\n  background: #5f5f5f;\n  border: none;\n  text-decoration: none; }\n\n.login-button:active:focus {\n  background: #5f5f5e; }\n\n.login-button:hover {\n  box-shadow: 2px 7px 18px 1px rgba(95, 95, 95, 0.76);\n  transition: 0.7s; }\n\n.dropdown {\n  position: relative;\n  float: right;\n  z-index: 9998; }\n\n.dropdown:hover .dropdown-content {\n  display: block;\n  transition: 0.5s; }\n\n.dropdown-content:hover {\n  display: block; }\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: white;\n  padding: 0;\n  min-height: 120px;\n  min-width: 220px;\n  right: 1px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  z-index: 1; }\n\n.dropdown-content a {\n    padding: 20px 10px;\n    display: block;\n    text-decoration: none;\n    color: grey;\n    font-weight: 400; }\n\n.dropdown-content a:hover {\n    background-color: #5f5f5f;\n    color: white;\n    transition: 0.7s;\n    border-radius: 5px; }\n\n.profilePic {\n  margin-right: 30px;\n  border-radius: 50%;\n  display: -webkit-box; }\n\n.profilePic img {\n    cursor: pointer;\n    width: 70px;\n    height: 70px; }\n\n.profilePic img:hover {\n    width: 80px;\n    height: 80px;\n    transition: 0.5s; }\n\n.profilePic p {\n    margin-top: 30px;\n    margin-right: 20px;\n    cursor: pointer; }\n\n.profileDetails {\n  position: absolute;\n  background: whitesmoke;\n  color: black;\n  display: inline;\n  min-width: 100px; }\n\n.left-logo {\n  max-width: 20%; }\n\n.left-logo img {\n    max-height: 10vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25laGEvTmVoYVZlcm1hL1N1bmJpcmQvUHJvamVjdHMvTmV0d29yay1WaXN1YWxpemVyL25ldHdvcmstdmlzdWFsaXplci9jbGllbnQvc3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC12Mi9jb21wb25lbnRzL2Rhc2hib2FyZC12Mi1oZWFkZXIvZGFzaGJvYXJkLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVUsRUFBQTs7QUFHZDtFQUNJLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7RUFDZixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxtREFBbUQ7RUFDbkQsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFjLEVBQUE7O0FBR2xCO0VBRVEsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUl4QjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUVoQixVQUFVO0VBQ1YsK0NBQStDO0VBYy9DLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBeEJkO0lBV1Esa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsV0FBVztJQUNYLGdCQUFnQixFQUFBOztBQWZ4QjtJQWtCUSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0IsRUFBQTs7QUFNMUI7RUFDSSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG9CQUFvQixFQUFBOztBQUh4QjtJQUtRLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWSxFQUFBOztBQVBwQjtJQVVRLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCLEVBQUE7O0FBWnhCO0lBZVEsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlLEVBQUE7O0FBSXZCO0VBQ0ksa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGNBQWMsRUFBQTs7QUFEbEI7SUFHUSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkLXYyL2NvbXBvbmVudHMvZGFzaGJvYXJkLXYyLWhlYWRlci9kYXNoYm9hcmQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcldyYXBwZXIge1xuICAgIGhlaWdodDogMTB2aDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4ucmlnaHRUb29sYmFyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHdpZHRoOiAzMCU7XG59XG5cbi5sb2dpbi1idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyO1xuICAgIG1pbi13aWR0aDogOTBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubG9naW4tYnV0dG9uOmFjdGl2ZTpmb2N1cyB7XG4gICAgYmFja2dyb3VuZDogIzVmNWY1ZTtcbn1cblxuLmxvZ2luLWJ1dHRvbjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMnB4IDdweCAxOHB4IDFweCByZ2JhKDk1LCA5NSwgOTUsIDAuNzYpO1xuICAgIHRyYW5zaXRpb246IDAuN3M7XG59XG5cbi5kcm9wZG93biB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB6LWluZGV4IDogOTk5ODtcbn1cblxuLmRyb3Bkb3duOmhvdmVyIHtcbiAgICAuZHJvcGRvd24tY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgIH1cbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQ6aG92ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZHJvcGRvd24tY29udGVudCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtaW4taGVpZ2h0OiAxMjBweDtcbiAgICBtaW4td2lkdGg6IDIyMHB4O1xuICAgIC8vIHRvcDogODZweDtcbiAgICByaWdodDogMXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGEge1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cbiAgICBhOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVmNWY1ZjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjdzO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4ucHJvZmlsZVBpYyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBpbWcge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgfVxuICAgIGltZzpob3ZlciB7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgfVxuICAgIHAge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG5cbi5wcm9maWxlRGV0YWlscyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xufVxuXG4ubGVmdC1sb2dvIHtcbiAgICBtYXgtd2lkdGg6IDIwJTtcbiAgICBpbWcge1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMHZoO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/dashboard-v2-header/dashboard-header.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/dashboard-v2-header/dashboard-header.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: DashboardHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardHeaderComponent", function() { return DashboardHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardHeaderComponent = /** @class */ (function () {
    function DashboardHeaderComponent() {
    }
    DashboardHeaderComponent.prototype.ngOnInit = function () {
    };
    DashboardHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-header',
            template: __webpack_require__(/*! ./dashboard-header.component.html */ "./src/app/modules/dashboard-v2/components/dashboard-v2-header/dashboard-header.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-header.component.scss */ "./src/app/modules/dashboard-v2/components/dashboard-v2-header/dashboard-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardHeaderComponent);
    return DashboardHeaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/dashboard-v2-sidebar/dashboard-sidebar.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/dashboard-v2-sidebar/dashboard-sidebar.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper sidebar-wrapper\">\n    <div class=\"sidebarBody p-0\">\n        <div class=\"sidebarBodyTitle\">\n            <p>Filter By Attributes</p>\n        </div>\n        <div class=\"sidebarElements\">\n            <div class=\"item\">\n                <span class=\"\"></span><a class=\"item-text hoverable\" (click)=\"networkElementClick('Name');rotateObj.Name.rotate = !rotateObj.Name.rotate\" data-toggle=\"collapse\" href=\"#collapseExample\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\"\n                    [ngClass]=\"{'rotate': rotateObj?.Name.rotate, 'no-rotate': !rotateObj?.Name.rotate}\">Names<span class=\"ele-count count-org\">{{nameOptions.length}}</span></a>\n                <span class=\"fas fa-chevron-right\" data-toggle=\"collapse\" href=\"#collapseExample\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\" (click)=\"rotateObj.Name.rotate = !rotateObj.Name.rotate\" [ngClass]=\"{'rotate': rotateObj?.Name.rotate, 'no-rotate': !rotateObj?.Name.rotate}\"></span>\n                <div class=\"collapse\" id=\"collapseExample\">\n                    <sui-multi-select [(ngModel)]=\"selectedName\" [options]=\"nameOptions\" [maxSelected]=\"15\" (ngModelChange)=\"searchElement()\" #names>\n                        <div class=\"ui icon search input\">\n                            <i class=\"search icon\"></i>\n                            <input suiSelectSearch type=\"text\" placeholder=\"Search Name...\">\n                        </div>\n                        <div class=\"scrolling menu\">\n                            <sui-select-option *ngFor=\"let o of names.filteredOptions\" [value]=\"o\"></sui-select-option>\n                        </div>\n                    </sui-multi-select>\n                </div>\n            </div>\n            <div class=\"item\">\n                <span class=\"\"></span><a class=\"item-text hoverable\" (click)=\"networkElementClick('Type');rotateObj.Type.rotate = !rotateObj.Type.rotate\" data-toggle=\"collapse\" href=\"#collapseExample2\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample2\"\n                    [ngClass]=\"{'rotate': rotateObj?.Type.rotate, 'no-rotate': !rotateObj?.Type.rotate}\">Type<span class=\"ele-count count-department\">{{typeOptions.length}}</span></a>\n                <span class=\"fas fa-chevron-right\" data-toggle=\"collapse\" href=\"#collapseExample2\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample2\" (click)=\"rotateObj.Type.rotate = !rotateObj.Type.rotate\" [ngClass]=\"{'rotate': rotateObj?.Type.rotate, 'no-rotate': !rotateObj?.Type.rotate}\"></span>\n                <div class=\"collapse\" id=\"collapseExample2\">\n                    <sui-multi-select [(ngModel)]=\"selectedType\" [options]=\"typeOptions\" [maxSelected]=\"15\" #type>\n                        <div class=\"ui icon search input\">\n                            <i class=\"search icon\"></i>\n                            <input suiSelectSearch type=\"text\" placeholder=\"Search Type...\">\n                        </div>\n                        <div class=\"scrolling menu\">\n                            <sui-select-option *ngFor=\"let o of type.filteredOptions\" [value]=\"o\">\n\n                            </sui-select-option>\n\n                        </div>\n                    </sui-multi-select>\n                </div>\n            </div>\n            <div class=\"item\">\n                <span class=\"\"></span><a class=\"item-text hoverable\" (click)=\"networkElementClick('Represent');rotateObj.Represent.rotate = !rotateObj.Represent.rotate\" data-toggle=\"collapse\" href=\"#collapseExample3\" role=\"button\" aria-expanded=\"false\"\n                    aria-controls=\"collapseExample3\" [ngClass]=\"{'rotate': rotateObj?.Represent.rotate, 'no-rotate': !rotateObj?.Represent.rotate}\">Represent<span class=\"ele-count count-person\">{{representOptions.length}}</span></a>\n                <span class=\"fas fa-chevron-right\" data-toggle=\"collapse\" href=\"#collapseExample3\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample3\" (click)=\"rotateObj.Represent.rotate = !rotateObj.Represent.rotate\" [ngClass]=\"{'rotate': rotateObj?.Represent.rotate, 'no-rotate': !rotateObj?.Represent.rotate}\"></span>\n                <div class=\"collapse\" id=\"collapseExample3\">\n                    <sui-multi-select [(ngModel)]=\"selectedRepresent\" [options]=\"representOptions\" [maxSelected]=\"15\" #represent>\n                        <div class=\"ui icon search input\">\n                            <i class=\"search icon\"></i>\n                            <input suiSelectSearch type=\"text\" placeholder=\"Search Represent...\">\n                        </div>\n                        <div class=\"scrolling menu\">\n                            <sui-select-option *ngFor=\"let o of represent.filteredOptions\" [value]=\"o\"></sui-select-option>\n                        </div>\n                    </sui-multi-select>\n                </div>\n            </div>\n            <div class=\"item\">\n                <span class=\"\"></span><a class=\"item-text hoverable\" (click)=\"networkElementClick('Connection');rotateObj.Connection.rotate = !rotateObj.Connection.rotate\" data-toggle=\"collapse\" href=\"#collapseExample4\" role=\"button\" aria-expanded=\"false\"\n                    aria-controls=\"collapseExample4\" [ngClass]=\"{'rotate': rotateObj?.Connection.rotate, 'no-rotate': !rotateObj?.Connection.rotate}\">Connection<span class=\"ele-count count-person\">{{connectionOptions.length}}</span></a>\n                <span class=\"fas fa-chevron-right\" data-toggle=\"collapse\" href=\"#collapseExample4\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample4\" (click)=\"rotateObj.Connection.rotate = !rotateObj.Connection.rotate\" [ngClass]=\"{'rotate': rotateObj?.Connection.rotate, 'no-rotate': !rotateObj?.Connection.rotate}\"></span>\n                <div class=\"collapse\" id=\"collapseExample4\">\n                    <sui-multi-select [(ngModel)]=\"selectedConnection\" [options]=\"connectionOptions\" [maxSelected]=\"15\" #connection>\n                        <div class=\"ui icon search input\">\n                            <i class=\"search icon\"></i>\n                            <input suiSelectSearch type=\"text\" placeholder=\"Search Connection...\">\n                        </div>\n                        <div class=\"scrolling menu\">\n                            <sui-select-option *ngFor=\"let o of connection.filteredOptions\" [value]=\"o\"></sui-select-option>\n                        </div>\n                    </sui-multi-select>\n                </div>\n            </div>\n            <div class=\"item\">\n                <span class=\"\"></span><a class=\"item-text hoverable\" (click)=\"networkElementClick('Status');rotateObj.Status.rotate = !rotateObj.Status.rotate\" data-toggle=\"collapse\" href=\"#collapseExample5\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample5\"\n                    [ngClass]=\"{'rotate': rotateObj?.Status.rotate, 'no-rotate': !rotateObj?.Status.rotate}\">Status<span class=\"ele-count count-person\">{{statusOptions.length}}</span></a>\n                <span class=\"fas fa-chevron-right\" data-toggle=\"collapse\" href=\"#collapseExample5\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample5\" (click)=\"rotateObj.Status.rotate = !rotateObj.Status.rotate\" [ngClass]=\"{'rotate': rotateObj?.Status.rotate, 'no-rotate': !rotateObj?.Status.rotate}\"></span>\n                <div class=\"collapse\" id=\"collapseExample5\">\n                    <sui-multi-select [(ngModel)]=\"selectedStatus\" [options]=\"statusOptions\" [maxSelected]=\"15\" #status>\n                        <div class=\"ui icon search input\">\n                            <i class=\"search icon\"></i>\n                            <input suiSelectSearch type=\"text\" placeholder=\"Search Status...\">\n                        </div>\n                        <div class=\"scrolling menu\">\n                            <sui-select-option *ngFor=\"let o of status.filteredOptions\" [value]=\"o\"></sui-select-option>\n                        </div>\n                    </sui-multi-select>\n                </div>\n            </div>\n            <div class=\"item\">\n                <span class=\"\"></span><a class=\"item-text hoverable\" (click)=\"networkElementClick('Understanding');rotateObj.Understanding.rotate = !rotateObj.Understanding.rotate\" data-toggle=\"collapse\" href=\"#collapseExample6\" role=\"button\" aria-expanded=\"false\"\n                    aria-controls=\"collapseExample6\" [ngClass]=\"{'rotate': rotateObj?.Understanding.rotate, 'no-rotate': !rotateObj?.Understanding.rotate}\">SP Thinking<span class=\"ele-count count-person\">{{understandingOptions.length}}</span></a>\n                <span class=\"fas fa-chevron-right\" data-toggle=\"collapse\" href=\"#collapseExample6\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample6\" (click)=\"rotateObj.Understanding.rotate = !rotateObj.Understanding.rotate\" [ngClass]=\"{'rotate': rotateObj?.Understanding.rotate, 'no-rotate': !rotateObj?.Understanding.rotate}\"></span>\n                <div class=\"collapse\" id=\"collapseExample6\">\n                    <sui-multi-select [(ngModel)]=\"selectedUnderstanding\" [options]=\"understandingOptions\" [maxSelected]=\"15\" #understanding>\n                        <div class=\"ui icon search input\">\n                            <i class=\"search icon\"></i>\n                            <input suiSelectSearch type=\"text\" placeholder=\"Search Understanding...\">\n                        </div>\n                        <div class=\"scrolling menu\">\n                            <sui-select-option *ngFor=\"let o of understanding.filteredOptions\" [value]=\"o\"></sui-select-option>\n                        </div>\n                    </sui-multi-select>\n                </div>\n            </div>\n            <div class=\"item\">\n                <span class=\"\"></span><a class=\"item-text hoverable\" (click)=\"networkElementClick('Url');rotateObj.Url.rotate = !rotateObj.Url.rotate\" data-toggle=\"collapse\" href=\"#collapseExample7\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample7\"\n                    [ngClass]=\"{'rotate': rotateObj?.Url.rotate, 'no-rotate': !rotateObj?.Url.rotate}\">Url<span class=\"ele-count count-person\">{{urlOptions.length}}</span></a>\n                <span class=\"fas fa-chevron-right\" data-toggle=\"collapse\" href=\"#collapseExample7\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample7\" (click)=\"rotateObj.Url.rotate = !rotateObj.Url.rotate\" [ngClass]=\"{'rotate': rotateObj?.Url.rotate, 'no-rotate': !rotateObj?.Url.rotate}\"></span>\n                <div class=\"collapse\" id=\"collapseExample7\">\n                    <sui-multi-select [(ngModel)]=\"selectedUrl\" [options]=\"urlOptions\" [maxSelected]=\"15\" #url>\n                        <div class=\"ui icon search input\">\n                            <i class=\"search icon\"></i>\n                            <input suiSelectSearch type=\"text\" placeholder=\"Search Url...\">\n                        </div>\n                        <div class=\"scrolling menu\">\n                            <sui-select-option *ngFor=\"let o of url.filteredOptions\" [value]=\"o\"></sui-select-option>\n                        </div>\n                    </sui-multi-select>\n                </div>\n            </div>\n        </div>\n        <div class=\"btn-container d-flex justify-content-around\">\n            <div class=\"searchBtnWrapper btn-sidebar\">\n                <button class=\"btn btn-default btn-md searchBtn\" (click)=\"resetGraph()\">Reset</button>\n            </div>\n            <div class=\"searchBtnWrapper btn-sidebar\">\n                <button class=\"btn btn-default btn-md searchBtn\" (click)=\"searchGraph()\">Apply</button>\n            </div>\n\n        </div>\n        <div class=\"sidebarBodyTitle\">\n            <p>Filter By Relationships</p>\n        </div>\n        <div class=\"sidebarElements\">\n            <div class=\"item\">\n                <sui-multi-select [(ngModel)]=\"selectedRelation\" [options]=\"relationOptions\" [maxSelected]=\"5\" #relation>\n                    <div class=\"ui icon search input\">\n                        <i class=\"search icon\"></i>\n                        <input suiSelectSearch type=\"text\" placeholder=\"Search Relationships...\">\n                    </div>\n                    <div class=\"scrolling menu\">\n                        <sui-select-option *ngFor=\"let o of relation.filteredOptions\" [value]=\"o\"></sui-select-option>\n                    </div>\n                </sui-multi-select>\n                <!-- <div class=\"rel-tabs-container\" *ngFor=\"let r of relationOptions\">\n                    <div class=\"rel-tab\" (click)=\"relationclickEvent(r)\" id={{r}}>\n                        <p>{{r}}</p>\n                    </div>\n                </div> -->\n                <div class=\"btn-container d-flex justify-content-around\">\n                    <div class=\"searchBtnWrapper btn-sidebar\">\n                        <button class=\"btn btn-default btn-md searchBtn\" (click)=\"resetGraph()\">Reset</button>\n                    </div>\n                    <div class=\"searchBtnWrapper btn-sidebar\">\n                        <button class=\"btn btn-default btn-md searchBtn\" (click)=\"relationSearchGraph()\">Apply</button>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n        <!-- <div class=\"searchBtnWrapper btn-sidebar\">\n            <button class=\"btn btn-default btn-md searchBtn\" (click)=\"noderelationSearchGraph()\">Apply Both</button>\n        </div> -->\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/dashboard-v2-sidebar/dashboard-sidebar.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/dashboard-v2-sidebar/dashboard-sidebar.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Kanit&display=swap\");\n::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #F5F5F5; }\n::-webkit-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5; }\n::-webkit-scrollbar-thumb {\n  background-color: #5f5f5f; }\n.sidebar-wrapper {\n  position: absolute;\n  top: 13%;\n  left: 0;\n  overflow-y: auto;\n  z-index: 1;\n  width: 20%;\n  height: 87vh;\n  background: #fff; }\n.logo {\n  text-align: center; }\n.logo img {\n  cursor: pointer; }\n.sidebarBodyTitle {\n  font-family: 'Kanit', sans-serif;\n  font-size: 18px;\n  text-align: center; }\n.sidebarBodyTitle p {\n    padding: 0 10px;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    background: transparent;\n    color: #5f5f5f;\n    font-weight: bold;\n    border-radius: 5px;\n    transition: 1s;\n    text-align: left; }\n.sidebarElements {\n  width: 100%;\n  padding: 25px 0; }\n.item {\n  font-size: 16px;\n  width: 100%;\n  padding: 0; }\n.item span {\n    margin-right: 20px; }\n.hoverable:hover {\n  font-size: 18px;\n  transition: 0.5s; }\n.item,\n.item span {\n  min-height: 50px;\n  line-height: 2.7; }\n.item-text {\n  cursor: pointer;\n  text-decoration: none;\n  color: #000; }\n.fa-chevron-right {\n  float: right;\n  cursor: pointer; }\n.rotate {\n  transform: rotate(90deg);\n  transition: .8s; }\n.no-rotate {\n  transform: rotate(0deg);\n  transition: .8s; }\n.click-pink {\n  color: pink; }\n.hide {\n  display: none; }\n.show {\n  display: block; }\n.ui.teal.left.pointing.label {\n  background: #5f5f5f !important; }\n.searchBtnWrapper {\n  font-family: 'Kanit', sans-serif;\n  font-size: 18px;\n  text-align: center;\n  position: relative;\n  margin-bottom: 20px;\n  bottom: 0;\n  width: 100%; }\n.searchBtnWrapper button {\n    background: #e4e4e4;\n    color: #000;\n    min-width: 100px;\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); }\n.searchBtnWrapper button:active {\n    box-shadow: none;\n    transition: 0.5s; }\n.btn-sidebar {\n  display: inline; }\n.btn-container {\n  margin-bottom: 25px; }\n.rel-tabs-container {\n  display: inline-block; }\n.rel-tab p {\n  word-break: break-all;\n  cursor: pointer;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: bold;\n  font-size: 15px;\n  background-color: #F5F5F5;\n  color: #30333a;\n  margin: 4px;\n  padding: 3px 7px;\n  border-radius: 3px; }\n.ele-count {\n  border-radius: 50%;\n  padding: 8px;\n  margin-left: 10px;\n  text-align: center;\n  display: inline; }\n.wrapper hr {\n  margin-bottom: 2em;\n  margin-top: 0.15em; }\n.rel-tabs-container .selected {\n  box-shadow: -4px 4px 17px -8px rgba(0, 0, 0, 0.75); }\n.count-org {\n  background-color: #F5F5F5; }\n.count-person {\n  background-color: #F5F5F5; }\n.count-department {\n  background-color: #F5F5F5; }\nspan.ele-count.count-org {\n  padding: 9px 11px 9px 11px; }\n.c_ff4444 {\n  background-color: '#ff4444'; }\n.c_ffbb33 {\n  background-color: '#ffbb33'; }\n.c_00C851 {\n  background-color: '#00C851'; }\n.c_33b5e5 {\n  background-color: '#33b5e5'; }\n.c_CC0000 {\n  background-color: '#CC0000'; }\n.c_FF8800 {\n  background-color: '#FF8800'; }\n.c_007E33 {\n  background-color: '#007E33'; }\n.c_0099CC {\n  background-color: '#0099CC'; }\n.c_9933CC {\n  background-color: '#9933CC'; }\n.c_0d47a1 {\n  background-color: '#0d47a1'; }\n.c_2BBBAD {\n  background-color: '#2BBBAD'; }\n.c_c51162 {\n  background-color: '#c51162'; }\n@media screen and (max-width: 1100px) {\n  .sidebar-wrapper {\n    width: 25%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25laGEvTmVoYVZlcm1hL1N1bmJpcmQvUHJvamVjdHMvTmV0d29yay1WaXN1YWxpemVyL25ldHdvcmstdmlzdWFsaXplci9jbGllbnQvc3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC12Mi9jb21wb25lbnRzL2Rhc2hib2FyZC12Mi1zaWRlYmFyL2Rhc2hib2FyZC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlFQUFZO0FBQ1o7RUFFSSw0Q0FBNEM7RUFDNUMseUJBQXlCLEVBQUE7QUFHN0I7RUFDSSxVQUFVO0VBQ1YseUJBQXlCLEVBQUE7QUFHN0I7RUFDSSx5QkFBeUIsRUFBQTtBQUc3QjtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsT0FBTztFQUdQLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTtBQUdwQjtFQUNJLGtCQUFrQixFQUFBO0FBSXRCO0VBR1EsZUFBZSxFQUFBO0FBSXZCO0VBQ0ksZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixrQkFBa0IsRUFBQTtBQUh0QjtJQU1RLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsaUJBQWlCO0lBRWpCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0JBQWdCLEVBQUE7QUFJeEI7RUFDSSxXQUFXO0VBQ1gsZUFBZSxFQUFBO0FBR25CO0VBQ0ksZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVLEVBQUE7QUFIZDtJQU1RLGtCQUFrQixFQUFBO0FBSTFCO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQixFQUFBO0FBR3BCOztFQUVJLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTtBQUdwQjtFQUNJLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsV0FBVyxFQUFBO0FBR2Y7RUFDSSxZQUFZO0VBQ1osZUFBZSxFQUFBO0FBR25CO0VBQ0ksd0JBQXdCO0VBQ3hCLGVBQWUsRUFBQTtBQUduQjtFQUNJLHVCQUF1QjtFQUN2QixlQUFlLEVBQUE7QUFHbkI7RUFDSSxXQUFXLEVBQUE7QUFHZjtFQUNJLGFBQWEsRUFBQTtBQUdqQjtFQUNJLGNBQWMsRUFBQTtBQUdsQjtFQUNJLDhCQUE4QixFQUFBO0FBR2xDO0VBQ0ksZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsV0FBVyxFQUFBO0FBUGY7SUFVUSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQiwrQ0FBK0MsRUFBQTtBQWJ2RDtJQWdCUSxnQkFBZ0I7SUFDaEIsZ0JBQWdCLEVBQUE7QUFJeEI7RUFDSSxlQUFlLEVBQUE7QUFHbkI7RUFDSSxtQkFBbUIsRUFBQTtBQUd2QjtFQUNJLHFCQUFxQixFQUFBO0FBR3pCO0VBQ0kscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZiwyREFBMkQ7RUFDM0QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsY0FBc0I7RUFDdEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTtBQUd0QjtFQUVJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7QUFHbkI7RUFDSSxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7QUFHdEI7RUFHSSxrREFBa0QsRUFBQTtBQUd0RDtFQUNJLHlCQUF5QixFQUFBO0FBRzdCO0VBQ0kseUJBQXlCLEVBQUE7QUFHN0I7RUFDSSx5QkFBeUIsRUFBQTtBQUc3QjtFQUNJLDBCQUEwQixFQUFBO0FBRzlCO0VBQ0ksMkJBQ0osRUFBQTtBQUVBO0VBQ0ksMkJBQ0osRUFBQTtBQUVBO0VBQ0ksMkJBQ0osRUFBQTtBQUVBO0VBQ0ksMkJBQ0osRUFBQTtBQUVBO0VBQ0ksMkJBQ0osRUFBQTtBQUVBO0VBQ0ksMkJBQ0osRUFBQTtBQUVBO0VBQ0ksMkJBQ0osRUFBQTtBQUVBO0VBQ0ksMkJBQ0osRUFBQTtBQUVBO0VBQ0ksMkJBQ0osRUFBQTtBQUVBO0VBQ0ksMkJBQ0osRUFBQTtBQUVBO0VBQ0ksMkJBQ0osRUFBQTtBQUVBO0VBQ0ksMkJBQ0osRUFBQTtBQUdBO0VBQ0k7SUFDSSxVQUFVLEVBQUEsRUFDYiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkLXYyL2NvbXBvbmVudHMvZGFzaGJvYXJkLXYyLXNpZGViYXIvZGFzaGJvYXJkLXNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUthbml0JmRpc3BsYXk9c3dhcCcpO1xuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZjVmNWY7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEzJTtcbiAgICBsZWZ0OiAwO1xuICAgIC8vIHdpZHRoOiAyMyU7XG4gICAgLy8gaGVpZ2h0OiAxMDB2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHotaW5kZXg6IDE7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBoZWlnaHQ6IDg3dmg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmxvZ28ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvLyBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmxvZ28ge1xuICAgIGltZyB7XG4gICAgICAgIC8vIHdpZHRoOiA3MCU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG5cbi5zaWRlYmFyQm9keVRpdGxlIHtcbiAgICBmb250LWZhbWlseTogJ0thbml0Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHAge1xuICAgICAgICAvLyBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDhweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiAjNWY1ZjVmO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgLy8gYm94LXNoYWRvdzogMnB4IDdweCAxOHB4IDFweCByZ2JhKDk1LCA5NSwgOTUsIDAuNzYpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHRyYW5zaXRpb246IDFzO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbn1cblxuLnNpZGViYXJFbGVtZW50cyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMjVweCAwO1xufVxuXG4uaXRlbSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgLy8gcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHNwYW4ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgfVxufVxuXG4uaG92ZXJhYmxlOmhvdmVyIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLml0ZW0sXG4uaXRlbSBzcGFuIHtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyLjc7XG59XG5cbi5pdGVtLXRleHQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi5mYS1jaGV2cm9uLXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucm90YXRlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgdHJhbnNpdGlvbjogLjhzO1xufVxuXG4ubm8tcm90YXRlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB0cmFuc2l0aW9uOiAuOHM7XG59XG5cbi5jbGljay1waW5rIHtcbiAgICBjb2xvcjogcGluaztcbn1cblxuLmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnVpLnRlYWwubGVmdC5wb2ludGluZy5sYWJlbCB7XG4gICAgYmFja2dyb3VuZDogIzVmNWY1ZiAhaW1wb3J0YW50O1xufVxuXG4uc2VhcmNoQnRuV3JhcHBlciB7XG4gICAgZm9udC1mYW1pbHk6ICdLYW5pdCcsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlNGU0ZTQ7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB9XG4gICAgYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgfVxufVxuXG4uYnRuLXNpZGViYXIge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLmJ0bi1jb250YWluZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5yZWwtdGFicy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnJlbC10YWIgcCB7XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xuICAgIGNvbG9yOiByZ2IoNDgsIDUxLCA1OCk7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgcGFkZGluZzogM3B4IDdweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5lbGUtY291bnQge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lO1xufVxuXG4ud3JhcHBlciBociB7XG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICAgIG1hcmdpbi10b3A6IDAuMTVlbTtcbn1cblxuLnJlbC10YWJzLWNvbnRhaW5lciAuc2VsZWN0ZWQge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTRweCA0cHggMTdweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAtNHB4IDRweCAxN3B4IC04cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICBib3gtc2hhZG93OiAtNHB4IDRweCAxN3B4IC04cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cblxuLmNvdW50LW9yZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbn1cblxuLmNvdW50LXBlcnNvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbn1cblxuLmNvdW50LWRlcGFydG1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG59XG5cbnNwYW4uZWxlLWNvdW50LmNvdW50LW9yZyB7XG4gICAgcGFkZGluZzogOXB4IDExcHggOXB4IDExcHg7XG59XG5cbi5jX2ZmNDQ0NCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJyNmZjQ0NDQnXG59XG5cbi5jX2ZmYmIzMyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJyNmZmJiMzMnXG59XG5cbi5jXzAwQzg1MSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJyMwMEM4NTEnXG59XG5cbi5jXzMzYjVlNSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJyMzM2I1ZTUnXG59XG5cbi5jX0NDMDAwMCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJyNDQzAwMDAnXG59XG5cbi5jX0ZGODgwMCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJyNGRjg4MDAnXG59XG5cbi5jXzAwN0UzMyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJyMwMDdFMzMnXG59XG5cbi5jXzAwOTlDQyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJyMwMDk5Q0MnXG59XG5cbi5jXzk5MzNDQyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJyM5OTMzQ0MnXG59XG5cbi5jXzBkNDdhMSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJyMwZDQ3YTEnXG59XG5cbi5jXzJCQkJBRCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJyMyQkJCQUQnXG59XG5cbi5jX2M1MTE2MiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJyNjNTExNjInXG59XG5cbi8vIGFuIGF0dGVtcHQgdG8gbWFrZSBpdCBhIGJpdCByZXNwb25zaXZlXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAnMTEwMHB4Jykge1xuICAgIC5zaWRlYmFyLXdyYXBwZXIge1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/dashboard-v2-sidebar/dashboard-sidebar.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/dashboard-v2-sidebar/dashboard-sidebar.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DashboardSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardSidebarComponent", function() { return DashboardSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_modules_core_services_graph_data_service_graph_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/core/services/graph-data-service/graph-data.service */ "./src/app/modules/core/services/graph-data-service/graph-data.service.ts");
/* harmony import */ var src_app_modules_core_services_shared_graph_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/core/services/shared-graph.service */ "./src/app/modules/core/services/shared-graph.service.ts");




var DashboardSidebarComponent = /** @class */ (function () {
    function DashboardSidebarComponent(graphDataService, sharedGraphData) {
        this.graphDataService = graphDataService;
        this.sharedGraphData = sharedGraphData;
        this.rotateObj = {
            Name: {
                rotate: false,
                color: '#D2E5FE'
            },
            Type: {
                rotate: false,
                color: '#D2E5FE'
            },
            Represent: {
                rotate: false,
                color: '#D2E5FE'
            },
            Connection: {
                rotate: false,
                color: '#D2E5FE'
            },
            Status: {
                rotate: false,
                color: '#D2E5FE'
            },
            Understanding: {
                rotate: false,
                color: '#D2E5FE'
            },
            Url: {
                rotate: false,
                color: '#D2E5FE'
            }
        };
        this.defaultColor = {
            "Academia": 'c_ff4444',
            "Consulting": 'c_ffbb33',
            "Government": 'c_00C851',
            "Impact Investor": 'c_33b5e5',
            "International Agency": 'c_CC0000',
            "Media": 'c_FF8800',
            "NGO/CBO": 'c_007E33',
            "People": 'c_0099CC',
            "Philanthropy": 'c_9933CC',
            "Platform": 'c_0d47a1',
            "Private Sector": 'c_2BBBAD',
            "Research Institute": 'c_c51162'
        };
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nodeTypesEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nameOptions = [];
        this.relationOptions = [];
        this.typeOptions = [];
        this.representOptions = [];
        this.connectionOptions = [];
        this.statusOptions = [];
        this.understandingOptions = [];
        this.urlOptions = [];
        this.selectedRelationship = [];
        this.selectedName = [];
        this.selectedRelation = [];
        this.selectedType = [];
        this.selectedRepresent = [];
        this.selectedConnection = [];
        this.selectedStatus = [];
        this.selectedUnderstanding = [];
        this.selectedUrl = [];
        this.selectedGraph = [];
        this.graphData = {};
        this.count = 1;
        this.relstatus = false;
        this.edgesNewObject = [];
        this.nodesNewObject = [];
        this.graphInitData = [];
    }
    DashboardSidebarComponent.prototype.ngOnInit = function () {
        this.getGraph();
    };
    DashboardSidebarComponent.prototype.networkElementClick = function (element) {
        if (element) {
            this.eventClicked.emit(element);
        }
    };
    DashboardSidebarComponent.prototype.getGraph = function () {
        var _this = this;
        this.graphDataService.getNodeLabels().subscribe(function (data) {
            _this.graphInitData.push(data);
            var temname = [];
            var temstatus = [];
            var temrepresent = [];
            var temconnection = [];
            var temtype = [];
            var temunder = [];
            var temrelation = [];
            if (data) {
                data['Name'].filter(function (nodeName) {
                    temname.push(nodeName);
                });
                data['Type'].filter(function (nodeType) {
                    // let x ={
                    //   name:node,
                    //   color:this.defaultColor[node]
                    // }
                    temtype.push(nodeType);
                });
                data['Status'].filter(function (nodeStatus) {
                    temstatus.push(nodeStatus);
                });
                data['Represent'].filter(function (nodeRepresent) {
                    temrepresent.push(nodeRepresent);
                });
                data['Connection'].filter(function (nodeConnection) {
                    temconnection.push(nodeConnection);
                });
                data['Understanding of SP Thinking'].filter(function (nodeSP) {
                    temunder.push(nodeSP);
                });
                data['Relationships'].filter(function (nodeRelations) {
                    temrelation.push(nodeRelations);
                });
            }
            _this.nameOptions = temname;
            _this.typeOptions = temtype;
            // send the types array for further use to the modals
            _this.nodeTypesEvent.emit(temtype);
            _this.representOptions = temrepresent;
            _this.connectionOptions = temconnection;
            _this.understandingOptions = temunder;
            _this.statusOptions = temstatus;
            _this.relationOptions = temrelation;
        });
    };
    DashboardSidebarComponent.prototype.onlyUnique = function (value, index, self) {
        return self.indexOf(value) === index;
    };
    DashboardSidebarComponent.prototype.searchGraph = function () {
        var requestBody;
        if (this.selectedName.length > 0 || this.selectedType.length > 0 || this.selectedConnection.length > 0 || this.selectedRepresent.length > 0 || this.selectedStatus.length > 0 || this.selectedUnderstanding.length > 0) {
            this.selectedGraph = [];
            if (this.selectedName.length > 0) {
                this.selectedGraph.push({ type: "Name", value: this.selectedName });
            }
            if (this.selectedType.length > 0) {
                this.selectedGraph.push({ type: "Type", value: this.selectedType });
            }
            if (this.selectedConnection.length > 0) {
                this.selectedGraph.push({ type: "Connection", value: this.selectedConnection });
            }
            if (this.selectedRepresent.length > 0) {
                this.selectedGraph.push({ type: "Represent", value: this.selectedRepresent });
            }
            if (this.selectedStatus.length > 0) {
                this.selectedGraph.push({ type: "Status", value: this.selectedStatus });
            }
            if (this.selectedUnderstanding.length > 0) {
                this.selectedGraph.push({ type: "Understanding of SP Thinking", value: this.selectedUnderstanding });
            }
            if (this.selectedUrl.length > 0) {
                this.selectedGraph.push({ type: "Url", value: this.selectedUrl });
            }
            requestBody = { nodes: this.selectedGraph };
        }
        else {
            // if no selected element 
            requestBody = {};
        }
        this.sharedGraphData.setGraphData(requestBody);
        if (this.count === 1) {
            this.eventClicked.emit('search' + this.count);
            this.count = 2;
        }
        else {
            this.eventClicked.emit('search' + this.count);
            this.count = 1;
        }
    };
    // Method gives new edgesArray with related node ids
    DashboardSidebarComponent.prototype.getRelatedNodeIdArrayFromEdges = function (selectedNodeId) {
        if (this.graphInitData.length > 0) {
            // console.log('rel',this.relationOptions);
            var temArray_1 = [];
            this.graphInitData[0]['seperateEdges'].filter(function (edge) {
                if (selectedNodeId === edge.from) {
                    temArray_1.push(edge.to);
                }
                else if (selectedNodeId === edge.to) {
                    temArray_1.push(edge.from);
                }
            });
            temArray_1 = temArray_1.filter(this.onlyUnique);
            return temArray_1;
        }
    };
    // Method gives selected node id
    DashboardSidebarComponent.prototype.getSelectedNodeId = function (nodeName) {
        var temId;
        if (this.graphInitData.length > 0) {
            this.graphInitData[0]['seperateNodes'].filter(function (node) {
                if (nodeName === node.label) {
                    temId = node.id;
                }
            });
            return temId;
        }
    };
    DashboardSidebarComponent.prototype.searchElement = function () {
        var temdep = [];
        var temper = [];
        //   if(this.graphInitData.length>0){
        //   if(this.selectedName.length>0){
        //     this.selectedName.filter(name=>{
        //       let selectedNodeId=this.getSelectedNodeId(name);
        //       console.log('id',selectedNodeId);
        //       let temNewRelatedNodeId = this.getRelatedNodeIdArrayFromEdges(selectedNodeId);
        //       console.log('new',temNewRelatedNodeId);
        //       if(temNewRelatedNodeId){
        //         temNewRelatedNodeId.filter(id=>{
        //           this.graphInitData[0]['seperateNodes'].filter(node=>{
        //           if(id === node.id && node.type[0] === 'Department'){
        //             temdep.push(node.label);
        //           }else if(id === node.id && node.type[0] === 'Person'){
        //             temper.push(node.label);
        //             }
        //           });
        //         });
        //       }         
        //      });
        //      temdep = temdep.filter(this.onlyUnique);
        //      temper = temper.filter(this.onlyUnique);
        //     this.typeOptions = temdep;
        //     this.representOptions = temper;
        //   }
        // }
    };
    DashboardSidebarComponent.prototype.resetGraph = function () {
        this.getGraph();
        this.selectedName = [];
        this.selectedType = [];
        this.selectedRepresent = [];
        this.selectedStatus = [];
        this.selectedConnection = [];
        this.selectedUnderstanding = [];
        this.selectedUrl = [];
        this.selectedRelation = [];
        if (this.preSelectedRel) {
            var element = document.getElementById(this.preSelectedRel);
            element.classList.remove("selected");
        }
        this.eventClicked.emit('reset');
    };
    DashboardSidebarComponent.prototype.relationclickEvent = function (selectedRelation) {
        if (this.preSelectedRel) {
            var element = document.getElementById(this.preSelectedRel);
            element.classList.remove("selected");
        }
        var element = document.getElementById(selectedRelation);
        element.classList.add("selected");
        this.selectedRelationship = [];
        this.relstatus = !this.relstatus;
        this.selectedRelationship.push({ type: selectedRelation });
        var requestBody = { nodes: [], edges: this.selectedRelationship };
        console.log("re", requestBody);
        this.sharedGraphData.setGraphData(requestBody);
        if (this.count === 1) {
            this.eventClicked.emit('search' + this.count);
            this.count = 2;
        }
        else {
            this.eventClicked.emit('search' + this.count);
            this.count = 1;
        }
        this.preSelectedRel = selectedRelation;
    };
    // return all nodes with selected relation
    DashboardSidebarComponent.prototype.relationSearchGraph = function () {
        var _this = this;
        var requestBody;
        if (this.selectedRelation.length > 0) {
            this.selectedRelationship = [];
            this.selectedRelation.map(function (rel) {
                _this.selectedRelationship.push({ type: rel });
            });
            // let temNodes = [];
            // if(this.selectedName.length > 0 || this.selectedType.length > 0){
            //   let temnode = [];
            //    temnode = this.selectedNodeCheck();
            //   temnode.filter(node=>{
            //     temNodes.push(node);      
            //   })       
            // }
            // 
            //   if(temNodes.length > 0){
            //      requestBody= { nodes: temNodes, edges: this.selectedRelationship };
            //   }else{
            requestBody = { nodes: [], edges: this.selectedRelationship };
            // }
        }
        else {
            // if no selected element 
            requestBody = {};
        }
        this.sharedGraphData.setGraphData(requestBody);
        if (this.count === 1) {
            this.eventClicked.emit('search' + this.count);
            this.count = 2;
        }
        else {
            this.eventClicked.emit('search' + this.count);
            this.count = 1;
        }
    };
    // this return selected name and type
    DashboardSidebarComponent.prototype.selectedNodeCheck = function () {
        if (this.selectedName.length > 0 && this.selectedType.length > 0) {
            var temNodeArray = [];
            temNodeArray.push({ type: "Name", value: this.selectedName });
            temNodeArray.push({ type: "Type", value: this.selectedType });
            return temNodeArray;
        }
        else if (this.selectedType.length > 0) {
            return [{ type: "Type", value: this.selectedType }];
        }
        else if (this.selectedName.length > 0) {
            return [{ type: "Name", value: this.selectedName }];
        }
    };
    DashboardSidebarComponent.prototype.noderelationSearchGraph = function () {
        var _this = this;
        if (this.selectedName.length > 0 || this.selectedType.length > 0 || this.selectedConnection.length > 0 || this.selectedRepresent.length > 0 || this.selectedStatus.length > 0 || this.selectedUnderstanding.length > 0 && this.selectedRelation.length > 0) {
            this.selectedRelationship = [];
            this.selectedRelation.map(function (rel) {
                _this.selectedRelationship.push({ type: rel });
            });
        }
        this.selectedGraph = [];
        this.selectedGraph.push({ type: "Name", value: this.selectedName });
        this.selectedGraph.push({ type: "Type", value: this.selectedType });
        this.selectedGraph.push({ type: "Connection", value: this.selectedConnection });
        this.selectedGraph.push({ type: "Represent", value: this.selectedRepresent });
        this.selectedGraph.push({ type: "Status", value: this.selectedStatus });
        this.selectedGraph.push({ type: "Thinking", value: this.selectedUnderstanding });
        this.selectedGraph.push({ type: "Url", value: this.selectedUrl });
        var requestBody = { nodes: this.selectedGraph, edges: this.selectedRelationship };
        this.sharedGraphData.setGraphData(requestBody);
        if (this.count === 1) {
            this.eventClicked.emit('search' + this.count);
            this.count = 2;
        }
        else {
            this.eventClicked.emit('search' + this.count);
            this.count = 1;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DashboardSidebarComponent.prototype, "eventClicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DashboardSidebarComponent.prototype, "nodeTypesEvent", void 0);
    DashboardSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-sidebar',
            template: __webpack_require__(/*! ./dashboard-sidebar.component.html */ "./src/app/modules/dashboard-v2/components/dashboard-v2-sidebar/dashboard-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-sidebar.component.scss */ "./src/app/modules/dashboard-v2/components/dashboard-v2-sidebar/dashboard-sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_modules_core_services_graph_data_service_graph_data_service__WEBPACK_IMPORTED_MODULE_2__["GraphDataService"], src_app_modules_core_services_shared_graph_service__WEBPACK_IMPORTED_MODULE_3__["SharedGraphService"]])
    ], DashboardSidebarComponent);
    return DashboardSidebarComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/graph-v2-visualizer/graph-visualizer.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/graph-v2-visualizer/graph-visualizer.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-global-loader *ngIf=\"loader\"></app-global-loader>\n<app-color-panel *ngIf=\"!loader\"></app-color-panel>\n<div class=\"wrapper-countlimit\" *ngIf=\"!loader\">\n    <div class=\"selected-count\">{{selectedCount}} Elements Found</div>\n    <div class=\"nodeLimit\">\n        <p class=\"nodelimit-head\">Element Limit :</p>\n        <input type=\"text\" [(ngModel)]=nodeLimit (ngModelChange)=\"limitChange(nodeLimit, popup)\" suiPopup popupText=\"{{errorMessage}}\" popupTrigger=\"manual\" #popup=\"suiPopup\">\n    </div>\n    <div class=\"creationToolbar\">\n            <app-create-nodes [nodeTypes]=\"totalTypesArray\" [editData]=\"editNodeData\" (nodeBtnEvent)=\"nodeEventCapture($event)\" (edgeBtnEvent)=\"edgeEventCapture($event)\"></app-create-nodes>\n    </div>\n</div>\n<div class=\"graph-container\" id=\"graphViewer\">\n</div>\n<ng-template *ngIf=\"showlimiterror\" let-popup #popupTemplate>\n    <div class=\"header\">Rating</div>\n    <div class=\"content\">\n        <sui-rating class=\"star\" (click)=\"popup.close()\"></sui-rating>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/graph-v2-visualizer/graph-visualizer.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/graph-v2-visualizer/graph-visualizer.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".graph-container {\n  background: #F5F5F5;\n  height: 81vh;\n  width: 80%;\n  float: right; }\n\n.selected-count {\n  background: #F5F5F5;\n  word-break: break-all;\n  cursor: pointer;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 16px;\n  color: #30333a;\n  border-radius: 3px;\n  padding: 1em;\n  float: left; }\n\n.wrapper-countlimit {\n  width: 80%;\n  float: right; }\n\n.nodeLimit {\n  max-width: 200px;\n  top: 50px;\n  float: left;\n  border-radius: 3px;\n  padding: 1em;\n  background: #F5F5F5;\n  outline: none; }\n\n.creationToolbar {\n  top: 50px;\n  float: left;\n  padding: 1em;\n  outline: none; }\n\n.nodeLimit input {\n  width: 35%;\n  border: 0.3px solid #000;\n  padding: 5px;\n  border-radius: 2px; }\n\n.nodeLimit:focus {\n  outline: none; }\n\n.nodelimit-head {\n  display: inline;\n  margin-right: 3px; }\n\n@media screen and (max-width: 1100px) {\n  .graph-container,\n  .selected-count {\n    width: 75%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25laGEvTmVoYVZlcm1hL1N1bmJpcmQvUHJvamVjdHMvTmV0d29yay1WaXN1YWxpemVyL25ldHdvcmstdmlzdWFsaXplci9jbGllbnQvc3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC12Mi9jb21wb25lbnRzL2dyYXBoLXYyLXZpc3VhbGl6ZXIvZ3JhcGgtdmlzdWFsaXplci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZiwyREFBMkQ7RUFDM0QsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYSxFQUFBOztBQUdqQjtFQUNJLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxVQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJOztJQUVJLFVBQVUsRUFBQSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQtdjIvY29tcG9uZW50cy9ncmFwaC12Mi12aXN1YWxpemVyL2dyYXBoLXZpc3VhbGl6ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JhcGgtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xuICAgIGhlaWdodDogODF2aDtcbiAgICB3aWR0aDogODAlO1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLnNlbGVjdGVkLWNvdW50IHtcbiAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICMzMDMzM2E7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLndyYXBwZXItY291bnRsaW1pdCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5ub2RlTGltaXQge1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgdG9wOiA1MHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgYmFja2dyb3VuZDogI0Y1RjVGNTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uY3JlYXRpb25Ub29sYmFyIHtcbiAgICB0b3A6IDUwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5ub2RlTGltaXQgaW5wdXQge1xuICAgIHdpZHRoOiAzNSU7XG4gICAgYm9yZGVyOiAwLjNweCBzb2xpZCAjMDAwO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5ub2RlTGltaXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5ub2RlbGltaXQtaGVhZCB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIG1hcmdpbi1yaWdodDogM3B4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAnMTEwMHB4Jykge1xuICAgIC5ncmFwaC1jb250YWluZXIsXG4gICAgLnNlbGVjdGVkLWNvdW50IHtcbiAgICAgICAgd2lkdGg6IDc1JTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/graph-v2-visualizer/graph-visualizer.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/graph-v2-visualizer/graph-visualizer.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: GraphVisualizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphVisualizerComponent", function() { return GraphVisualizerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_modules_core_services_graph_data_service_graph_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/core/services/graph-data-service/graph-data.service */ "./src/app/modules/core/services/graph-data-service/graph-data.service.ts");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vis */ "./node_modules/vis/dist/vis.js");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vis__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_modules_core_services_shared_graph_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/core/services/shared-graph.service */ "./src/app/modules/core/services/shared-graph.service.ts");






var GraphVisualizerComponent = /** @class */ (function () {
    function GraphVisualizerComponent(graphService, sharedGraphService) {
        this.graphService = graphService;
        this.sharedGraphService = sharedGraphService;
        this.totalTypesArray = [];
        this.graphData = {};
        this.errorMessage = '';
        this.loader = true;
        this.defaultNodeLimit = 149;
        this.nodeLimit = 149;
        this.emptyNodeLimit = 179;
        this.colorConfig = {
            defaultColor: {
                "Academia": '#ff4444',
                "Consulting": '#ffbb33',
                "Government": '#00C851',
                "Impact Investor": '#33b5e5',
                "International Agency": '#CC0000',
                "Media": '#FF8800',
                "NGO/CBO": '#007E33',
                "People": '#0099CC',
                "Philanthropy": '#9933CC',
                "Platform": '#0d47a1',
                "Private Sector": '#2BBBAD',
                "Research Institute": '#c51162'
            },
            selectedColor: {
                "Academia": '#ff4444',
                "Consulting": '#ffbb33',
                "Government": '#00C851',
                "Impact Investor": '#33b5e5',
                "International Agency": '#CC0000',
                "Media": '#FF8800',
                "NGO/CBO": '#007E33',
                "People": '#0099CC',
                "Philanthropy": '#9933CC',
                "Platform": '#0d47a1',
                "Private Sector": '#2BBBAD',
                "Research Institute": '#c51162'
            }
        };
        this.editNodeData = null;
        this.networkInstance = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.graphOptions = {
            physics: false,
            edges: {
                smooth: {
                    type: 'dynamic'
                }
            },
            nodes: {
                shape: 'dot',
                scaling: {
                    customScalingFunction: function (min, max, total, value) {
                        return value / total;
                    },
                    min: 5,
                    max: 150
                }
            }
        };
    }
    GraphVisualizerComponent.prototype.ngOnInit = function () {
        this.loader = true;
        this.displayInitialGraph();
    };
    GraphVisualizerComponent.prototype.displayInitialGraph = function () {
        var _this = this;
        this.graphService.getInitialDataV2().subscribe(function (result) {
            console.log('recieved data from graph service', result);
            // set data for vis
            if (result.hasOwnProperty('seperateNodes')) {
                // add colors to nodes
                result['seperateNodes'] = _this.addColors(result['seperateNodes']);
                _this.graphData['nodes'] = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](result['seperateNodes']);
                _this.selectedCount = _this.graphData['nodes'].length;
            }
            if (result.hasOwnProperty('seperateEdges')) {
                _this.graphData['edges'] = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](result['seperateEdges']);
            }
            console.log('graphData :', _this.graphData);
            // display data
            var container = document.getElementById('graphViewer');
            _this.loader = false;
            _this.network = new vis__WEBPACK_IMPORTED_MODULE_3__["Network"](container, _this.graphData, _this.graphOptions);
        }, function (err) {
            console.error('An error occured while retrieving initial graph data', err);
            _this.loader = true;
            _this.graphData = {};
        });
    };
    GraphVisualizerComponent.prototype.ngOnChanges = function (changes) {
        this.changeNodeColor();
    };
    GraphVisualizerComponent.prototype.changeNodeColor = function () {
        var _this = this;
        if (this.event == 'search1' || this.event === 'search2') {
            this.loader = true;
            this.showGraphData();
        }
        else if (this.event === 'reset') {
            this.loader = true;
            this.nodeLimit = this.defaultNodeLimit;
            this.displayInitialGraph();
        }
        else {
            var previousData = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](this.graphData);
            // tslint:disable-next-line: no-string-literal
            if (!!this.graphData['nodes']) {
                var temgraph = this.graphData['nodes'].map(function (node) {
                    if (_this.event == node.type[0]) {
                        // node.color = this.colorConfig.defaultColor[node.type[0]];
                    }
                    else {
                        // node.color='#95BFF8';
                        return node;
                    }
                    return node;
                });
                previousData.nodes.clear();
                previousData.nodes = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](temgraph));
                this.graphData = previousData;
                this.reinitializeGraph();
            }
        }
    };
    GraphVisualizerComponent.prototype.reinitializeGraph = function () {
        var container = document.getElementById('graphViewer');
        this.network.setData(this.graphData);
    };
    GraphVisualizerComponent.prototype.showGraphData = function () {
        var _this = this;
        this.loader = true;
        var requestBody = this.sharedGraphService.getGraphData();
        // check for node limit
        if (this.nodeLimit === "") {
            requestBody["limit"] = this.emptyNodeLimit;
        }
        else if (!isNaN(this.nodeLimit)) {
            requestBody["limit"] = this.nodeLimit;
        }
        else {
            requestBody["limit"] = this.defaultNodeLimit;
        }
        this.graphService.getSearchDataV2(requestBody).subscribe(function (result) {
            // console.log('recieved data from graph service', result);
            // set data for vis
            if (result.hasOwnProperty('seperateNodes')) {
                result['seperateNodes'] = _this.addColors(result['seperateNodes']);
                _this.graphData['nodes'] = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](result['seperateNodes']);
                _this.selectedCount = _this.graphData['nodes'].length;
            }
            if (result.hasOwnProperty('seperateEdges')) {
                _this.graphData['edges'] = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](result['seperateEdges']);
            }
            // console.log('graphData :', this.graphData);
            // display data
            var container = document.getElementById('graphViewer');
            _this.network = new vis__WEBPACK_IMPORTED_MODULE_3__["Network"](container, _this.graphData, _this.graphOptions);
            _this.loader = false;
        }, function (err) {
            console.error('An error occured while retrieving initial graph data', err);
            _this.loader = true;
            _this.graphData = {};
        });
    };
    GraphVisualizerComponent.prototype.addColors = function (nodeObj) {
        var _this = this;
        // console.log(nodeObj);
        nodeObj.forEach(function (node) {
            if (node.hasOwnProperty('type') && node.type.length > 0) {
                node['color'] = _this.colorConfig.defaultColor[node.type[0]];
            }
        });
        // console.log(nodeObj);
        return nodeObj;
    };
    GraphVisualizerComponent.prototype.limitChange = function (limit, popup) {
        if (limit === "") {
            this.errorMessage = 'Only valid numbers allowed';
            popup.open();
            window.setTimeout(function () {
                popup.close();
            }, 3000);
        }
        else if (!isNaN(limit)) {
            this.nodeLimit = parseInt(limit);
        }
        else {
            this.errorMessage = 'Only valid numbers allowed';
            popup.open();
            window.setTimeout(function () {
                popup.close();
            }, 3000);
        }
    };
    GraphVisualizerComponent.prototype.nodeEventCapture = function (event) {
        var _this = this;
        if (Object.keys(event).length > 0) {
            if (event.action === 'create') {
                // handle the functionaluty of creating a node
                this.network.once('click', function (clickEvent) {
                    console.log(clickEvent);
                    // user should be able to fire an event onlyonce per dropdown click
                    if (clickEvent.nodes.length > 0 || clickEvent.edges.length > 0) {
                        // obviously a node cannot be created over another node or edge
                        alert('please click on an empty space to create a node');
                    }
                    else {
                        // user clicked on a good place to  create a node
                        // console.log(this.graphData);
                        var newNodeData = {
                            id: event.data.id,
                            label: event.data.properties.Name,
                            type: [event.data.type],
                            properties: event.data.properties
                        };
                        // let newNodeForVis = _.cloneDeep(newNodeData);
                        // make a request to create a node, if it succeedes only then show in the graph
                        _this.graphService.createNewNode(newNodeData).subscribe(function (response) {
                            console.log(response);
                            // add additional data for vis layout
                            // newNodeForVis = this.addData(newNodeForVis, clickEvent, event);
                            try {
                                var visNode = _this.addData(response['seperateNodes'][0], clickEvent, event);
                                // add the new node to the vis
                                _this.graphData['nodes'].add([visNode]);
                            }
                            catch (addErr) {
                                console.error('Error while adding the data node to vis ', addErr['message']);
                            }
                        }, function (error) {
                            console.error('An error occured while creating node in  database ', error);
                        });
                    }
                });
            }
            else if (event.action === 'edit' && !event.hasOwnProperty('process')) {
                // handle the functionality of editing the node
                console.log('Node edit is being clicked');
                this.network.once('click', function (clickEvent) {
                    console.log(clickEvent);
                    var clickedNode = _this.graphData['nodes'].get(clickEvent.nodes);
                    // if there are multiple nodes one above another, always select the top most one
                    if (clickedNode.length > 0) {
                        clickedNode = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](clickedNode[0]);
                    }
                    console.log('clicked Node is ', clickedNode);
                    _this.startEditProcess(clickedNode);
                });
            }
            else if (event.action === 'edit' && event.hasOwnProperty('process') && event.process === 'complete') {
                // this will be invoked when the user has clicked on edit feature and submitted the form with new data
                console.log('edit event captured with new data', event.data);
                // the process is to first create a node for data base update
                // once the node is updated , use the updated node from the database to update in the visJS
                var newNodeData = {
                    id: event.data.id,
                    label: event.data.properties.Name,
                    type: [event.data.type],
                    properties: event.data.properties
                };
                this.graphService.updateNode(newNodeData).subscribe(function (response) {
                    console.log('response from update node ', response);
                    try {
                        var updatedNode = response['seperateNodes'][0];
                        // logic to update node in vis data set
                        var visNode = _this.graphData['nodes'].get(updatedNode['id']);
                        // update everything except color and id
                        if ([visNode].length == 1) {
                            visNode['properties'] = updatedNode['properties'];
                            visNode['label'] = updatedNode['label'];
                            visNode['title'] = updatedNode['title'];
                            visNode['type'] = updatedNode['type'];
                            console.log('update node details are ', visNode);
                            // node was present, simply update it now
                            _this.graphData['nodes'].update(visNode);
                        }
                        console.log(visNode);
                    }
                    catch (updateErr) {
                        // any error encountered while updating the node in vis js
                        console.error('Error while upating the data node to vis ', updateErr['message']);
                    }
                }, function (err) {
                    console.error('An error occured while updating node in database ', err);
                });
            }
            else if (event.action === 'delete') {
                console.log('Node delete has been clicked');
                // handle the functionality of deleting the node
            }
            else {
                // invalid click event
                console.error('An invalid click event retrieved ', event);
            }
        }
    };
    GraphVisualizerComponent.prototype.edgeEventCapture = function (event) {
        var _this = this;
        if (Object.keys(event).length > 0) {
            if (event.action === 'create') {
                // handle the functionaluty of creating a node
                var newRelationData = {
                    type: [event.data.type],
                    properties: event.data.properties,
                    from: event.data.from[0],
                    to: event.data.to[0]
                };
                // make a request to create a node, if it succeedes only then show in the graph
                this.graphService.createNewRelation(newRelationData).subscribe(function (response) {
                    console.log(response);
                    try {
                        var visRelation = response['seperateEdges'][0];
                        // add the new node to the vis
                        _this.graphData['edges'].add([visRelation]);
                    }
                    catch (addErr) {
                        console.log('Error while adding the data relation to vis ', addErr['message']);
                    }
                }, function (error) {
                    console.log('error while reading new relation data from service ', error);
                });
            }
            else if (event.action === 'edit') {
                // handle the functionality of editing the node
            }
            else if (event.action === 'delete') {
                // handle the functionality of deleting the node
            }
            else {
                // invalid click event
                console.error('An invalid click event retrieved ', event);
            }
        }
    };
    GraphVisualizerComponent.prototype.serializeProperties = function (propertyObject) {
        if (propertyObject.constructor === Object) {
            var finalString_1 = '';
            lodash__WEBPACK_IMPORTED_MODULE_4__["forOwn"](Object.keys(propertyObject), function (key) {
                if (propertyObject[key].hasOwnProperty('low')) {
                    // if the key has an integer value then set the low value of it
                    propertyObject[key] = propertyObject[key]['low'];
                }
                finalString_1 += "<strong>" + key + " :</strong> " + propertyObject[key] + " <br>";
            });
            return finalString_1;
        }
        else
            return null;
    };
    GraphVisualizerComponent.prototype.addData = function (node, clickEvent, event) {
        node['x'] = clickEvent.pointer.canvas.x;
        node['y'] = clickEvent.pointer.canvas.y;
        // node['title'] = this.serializeProperties(event.data.properties);
        node['color'] = this.colorConfig.defaultColor[event.data.type];
        console.log('final node is ', node);
        return node;
    };
    GraphVisualizerComponent.prototype.addNodeColor = function (node) {
        var colorCode = this.colorConfig.defaultColor[node.type[0]] || null;
        if (colorCode) {
            node['color'] = colorCode;
            return node;
        }
        else {
            console.warn('Error while adding color to the node ', node['label']);
            return node;
        }
    };
    GraphVisualizerComponent.prototype.startEditProcess = function (clickedNode) {
        // to extract relevant information and send it back to the edit modal
        console.log(clickedNode);
        this.editNodeData = clickedNode;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GraphVisualizerComponent.prototype, "event", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GraphVisualizerComponent.prototype, "totalTypesArray", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GraphVisualizerComponent.prototype, "networkInstance", void 0);
    GraphVisualizerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-graph-visualizer',
            template: __webpack_require__(/*! ./graph-visualizer.component.html */ "./src/app/modules/dashboard-v2/components/graph-v2-visualizer/graph-visualizer.component.html"),
            styles: [__webpack_require__(/*! ./graph-visualizer.component.scss */ "./src/app/modules/dashboard-v2/components/graph-v2-visualizer/graph-visualizer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_modules_core_services_graph_data_service_graph_data_service__WEBPACK_IMPORTED_MODULE_2__["GraphDataService"], src_app_modules_core_services_shared_graph_service__WEBPACK_IMPORTED_MODULE_5__["SharedGraphService"]])
    ], GraphVisualizerComponent);
    return GraphVisualizerComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/main-v2/main.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/main-v2/main.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard-header></app-dashboard-header>\n<app-dashboard-sidebar (eventClicked)=\"childEventClicked($event)\" (nodeTypesEvent)=\"sendTypes($event)\"></app-dashboard-sidebar>\n<app-graph-visualizer [event]=\"clickedEvent\" [totalTypesArray]=\"totalTypesArray\"></app-graph-visualizer>"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/main-v2/main.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/main-v2/main.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkLXYyL2NvbXBvbmVudHMvbWFpbi12Mi9tYWluLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/main-v2/main.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/main-v2/main.component.ts ***!
  \***************************************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
        this.totalTypesArray = [];
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.childEventClicked = function (event) {
        this.clickedEvent = event;
    };
    MainComponent.prototype.sendTypes = function (event) {
        if (!!event && event.length > 0) {
            console.log('sending types', event);
            this.totalTypesArray = event;
        }
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/modules/dashboard-v2/components/main-v2/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/modules/dashboard-v2/components/main-v2/main.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard-v2/dashboard-v2-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/dashboard-v2-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: DashboardV2RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardV2RoutingModule", function() { return DashboardV2RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_main_v2_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main-v2/main.component */ "./src/app/modules/dashboard-v2/components/main-v2/main.component.ts");




var routes = [
    { path: "", component: _components_main_v2_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], data: { title: "dashboard" } }
];
var DashboardV2RoutingModule = /** @class */ (function () {
    function DashboardV2RoutingModule() {
    }
    DashboardV2RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashboardV2RoutingModule);
    return DashboardV2RoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/dashboard-v2/dashboard-v2.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/dashboard-v2.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dashboard_v2_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-v2-routing.module */ "./src/app/modules/dashboard-v2/dashboard-v2-routing.module.ts");
/* harmony import */ var _components_main_v2_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main-v2/main.component */ "./src/app/modules/dashboard-v2/components/main-v2/main.component.ts");
/* harmony import */ var _components_graph_v2_visualizer_graph_visualizer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/graph-v2-visualizer/graph-visualizer.component */ "./src/app/modules/dashboard-v2/components/graph-v2-visualizer/graph-visualizer.component.ts");
/* harmony import */ var _components_dashboard_v2_sidebar_dashboard_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dashboard-v2-sidebar/dashboard-sidebar.component */ "./src/app/modules/dashboard-v2/components/dashboard-v2-sidebar/dashboard-sidebar.component.ts");
/* harmony import */ var _components_dashboard_v2_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboard-v2-header/dashboard-header.component */ "./src/app/modules/dashboard-v2/components/dashboard-v2-header/dashboard-header.component.ts");
/* harmony import */ var ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-semantic-ui */ "./node_modules/ng2-semantic-ui/dist/public.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _components_color_panel_color_panel_color_panel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/color-panel/color-panel/color-panel.component */ "./src/app/modules/dashboard-v2/components/color-panel/color-panel/color-panel.component.ts");
/* harmony import */ var _components_create_nodes_create_nodes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/create-nodes/create-nodes.component */ "./src/app/modules/dashboard-v2/components/create-nodes/create-nodes.component.ts");













var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_main_v2_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"], _components_graph_v2_visualizer_graph_visualizer_component__WEBPACK_IMPORTED_MODULE_6__["GraphVisualizerComponent"], _components_dashboard_v2_sidebar_dashboard_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["DashboardSidebarComponent"], _components_dashboard_v2_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_8__["DashboardHeaderComponent"],
                _components_color_panel_color_panel_color_panel_component__WEBPACK_IMPORTED_MODULE_11__["ColorPanelComponent"], _components_create_nodes_create_nodes_component__WEBPACK_IMPORTED_MODULE_12__["CreateNodesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_9__["SuiSelectModule"], ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_9__["SuiModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                _dashboard_v2_routing_module__WEBPACK_IMPORTED_MODULE_4__["DashboardV2RoutingModule"]
            ],
            exports: [_components_create_nodes_create_nodes_component__WEBPACK_IMPORTED_MODULE_12__["CreateNodesComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/modules/dashboard-v2/services/colorService/color-service.service.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/services/colorService/color-service.service.ts ***!
  \*************************************************************************************/
/*! exports provided: ColorServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorServiceService", function() { return ColorServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ColorServiceService = /** @class */ (function () {
    function ColorServiceService() {
        this.defaultColor = {
            Academia: '#ff4444',
            Consulting: '#ffbb33',
            Government: '#00C851',
            'Impact Investor': '#33b5e5',
            'International Agency': '#CC0000',
            Media: '#FF8800',
            'NGO/CBO': '#007E33',
            People: '#0099CC',
            Philanthropy: '#9933CC',
            Platform: '#0d47a1',
            'Private Sector': '#2BBBAD',
            'Research Institute': '#c51162'
        };
        this.colorObj$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.defaultColor);
    }
    ColorServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ColorServiceService);
    return ColorServiceService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-dashboard-v2-dashboard-v2-module.js.map