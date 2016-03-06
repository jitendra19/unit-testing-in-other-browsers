module.exports = function(config) {
  config.set({
    
    frameworks: ['jasmine'],

    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/**/*.js',
      'test/**/*.js'
    ],

    preprocessors: {
      //files for which you want code coverage report
      'src/**/*.js': ['coverage']
    },

    // coverage reporter generates the coverage
    reporters: ['progress', 'coverage'],

    // optionally, configure the reporter and folder where you can see code coverage report
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    port: 9001,
     //'Chrome', 'Firefox', 'PhantomJS'
    browsers: ['Chrome', 'Firefox', 'PhantomJS'],

    singleRun: true
  });
};