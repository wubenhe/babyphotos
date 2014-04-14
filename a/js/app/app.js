/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


define(["angular", "parse", "angular-route", "./controllers/index", "./directives/index"], 
function(angular, Parse){
    'use strict';
    Parse.initialize("Tii3cIwqs92NXahexs9UMYzd4MHMfKnkm4sRF11V", "paP8lu1GcqstY6x3RXpML3gBXgr4L54zVPu4GEe1");
    return angular.module('app', ['app.controllers','app.directives', 'ngRoute']);
});