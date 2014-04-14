/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


requirejs.config({
   baseUrl:"a/libs", 
   paths:{
       'app':'../js/app',
       'system':'../js/system',
       'tmpl':'../tmpl/compiled',
       'angular':'angular/angular', 
       'angular-route':'angular-route/angular-route', 
       'jquery':'jquery/dist/jquery', 
       'handlebars.runtime':'handlebars/handlebars.runtime.amd', 
       'onepage-scroll':'onepage-scroll/jquery.onepage-scroll', 
       'parse':'parse/index'
   }, 
   shim:{
       'angular':{
           exports:'angular'
       }, 
       'parse':{
            exports:'Parse'
       },
       'angular-route':{
           deps:['angular']
       }, 
       'onepage-scroll':{
           deps:['jquery']
       }
   }, 
   deps:['system/bootstrap']
});