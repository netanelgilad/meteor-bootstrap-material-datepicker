Package.describe({
  name: 'netanelgilad:bootstrap-material-datepicker',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'DateTimePicker for bootstrap-material',
  // URL to the Git repository containing the source code for this package.
  git: 'http://github.com/netanelgilad/meteor-bootstrap-material-datepicker',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('momentjs:moment@2.10.2', 'client');
  api.use('jquery', 'client');
  api.use('fezvrasta:bootstrap-material-design@0.3.0', 'client');
  api.addFiles('bootstrap-material-datepicker.js', 'client');
  api.addFiles('bootstrap-material-datepicker.css', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('netanelgilad:bootstrap-material-datepicker');
  api.addFiles('bootstrap-material-datepicker-tests.js');
});
