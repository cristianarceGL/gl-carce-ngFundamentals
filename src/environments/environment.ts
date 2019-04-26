// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyC2oY_ap4aHhHTK74cbRpUItGjh3J04Fjk",
    authDomain: "gl-carce-ngfundamentals.firebaseapp.com",
    databaseURL: "https://gl-carce-ngfundamentals.firebaseio.com",
    projectId: "gl-carce-ngfundamentals",
    storageBucket: "gl-carce-ngfundamentals.appspot.com",
    messagingSenderId: "961790767009"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
