extend-grunt-api
================

extend grunt api, like grunt.file、grunt.task, and more.

## Getting started

In order to extend grunt API, first you need to install this plugin

```
npm install extend-grunt-api
```

then, in your Gruntfile.js, add a line of code. All done, enjoy yourself. Currently, there are only a few APIs supplied, if you have more need or ideas, please let me know.

```
require('extend-grunt-api')(grunt);
```

## grunt.file

### grunt.file.copyDir(src, dest)

Copy directory `src` to `dest` recursively.

usage:

```
grunt.file.copyDir('src', 'dest');
```

## grunt.task

### grunt.task.getCurName()

Inside a grunt task, you can get the name of the task currently run by using `this.name`, but it doesn't work outside of task.

usage:

```
module.exports = function(grunt){

  require('extend-grunt-api')(grunt);
  
  grunt.log.write(grunt.task.getCurName()); // you will get 'hello' if you run task with 'grunt hello'
  
  grunt.registerTask('hello', function(){
    // sth todo
  });
};
```

