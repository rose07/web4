/**
 * Created by liuyujing on 2017/2/13.
 */

angular.module("app",["ionic","app.controller"])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("tabs",{
      url:"/tab",
      templateUrl:"templates/tab.html",
      abstract: true
    })
      .state("tabs.home",{
        url:"/home",
        views:{
          "home":{
            templateUrl:"templates/tab-home.html",
            controller:"homeController"
          }
        }
      })
      .state("tabs.cilcy",{
        url:"/cilcy",
        views:{
          "cilcy":{
            templateUrl:"templates/tab-cilcy.html",
            controller:"cilcyController"
          }
        }
      })
      .state("tabs.message",{
        url:"/message",
        views:{
          "message":{
            templateUrl:"templates/tab-message.html",
            controller:"messageController"
          }
        }
      })
      .state("tabs.user",{
        url:"/user",
        views:{
          "user":{
            templateUrl:"templates/tab-user.html",
            controller:"userController"
          }
        }
      })
      .state("tabs.userInfo",{
      url:"/userInfo/:id",
      views:{
        "user":{
          templateUrl:"templates/userInfo.html",
          controller:"userInfoController"
        }
      }
    });
    $urlRouterProvider.otherwise("/tab/home");
  });
