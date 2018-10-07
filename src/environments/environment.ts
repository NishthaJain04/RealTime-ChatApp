// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyD1BGqtH_i3_NFyWdYuIduAVdjlGIy9idY',
    authDomain: 'chat-c4dd1.firebaseapp.com',
    databaseURL: 'https://chat-c4dd1.firebaseio.com',
    projectId: 'chat-c4dd1',
    storageBucket: 'chat-c4dd1.appspot.com',
    messagingSenderId: '540773554101'
  }
};
