'use strict';

module.exports = {
  bootstrap: function($options, $done) {
    if ($options.owner != 'gulp' || (process.env.PUBLIC_ENABLED && process.env.PUBLIC_ENABLED == 'false')) {
      return $done();
    }

    var $gulp = DependencyInjection.injector.controller.get('$gulp');

    $gulp.addDist('public', 'public', true);

    $done();
  }
};

