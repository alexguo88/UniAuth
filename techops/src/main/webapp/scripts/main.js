require.config({

  baseUrl: 'scripts',
  paths: {
    'angular': 'lib/angular/angular.min',
    'angular.ui.bootstrap': 'lib/angular-bootstrap/ui-bootstrap-tpls.min',
    'ngResource': 'lib/angular-resource/angular-resource.min',
    'ngLocalStorage': 'lib/angular-local-storage/dist/angular-local-storage.min',
    'ngRoute': 'lib/angular-route/angular-route.min',
    'angular.ui.router': 'lib/angular-ui-router/release/angular-ui-router.min',
    'ngCookies': 'lib/angular-cookies/angular-cookies.min',
    'ngTranslate': 'lib/angular-translate/angular-translate.min',
    'ngTranslateLoad': 'lib/angular-translate-loader-static-files/angular-translate-loader-static-files.min',
    'ngSanitize': 'lib/angular-sanitize/angular-sanitize.min',
    'angularFileUpload': 'lib/angular-file-upload/dist/angular-file-upload.min',
    'jQuery': 'lib/jquery/jquery-2.1.4.min',
    'datepicker': 'lib/bootstrap-datepicker/bootstrap-datepicker.min',
    'dialogs':'lib/angular-dialog-service/dist/dialogs.min'
  },

  shim: {
    ngResource: {
      deps: ['angular']
    },
    ngLocalStorage: {
      deps: ['angular']
    },
    'angular.ui.bootstrap': {
      deps: ['angular']
    },
    ngCookies: {
      deps: ['angular']
    },
    ngTranslate: {
      deps: ['ngSanitize']
    },
    ngTranslateLoad: {
      deps: ['ngTranslate']
    },
    ngRoute: {
      deps: ['angular']
    },
    'angular.ui.router': {
      deps: ['angular']
    },
    angularFileUpload: {
      deps: ['angular']
    },
    ngSanitize: {
      deps:['angular']
    },
    datepicker: {
      deps: ['jQuery']
    },
    dialogs: {
      deps: ['ngTranslate']
    },
    angular: {
      exports: 'angular'
    }
  },
  waitSeconds: 0
});