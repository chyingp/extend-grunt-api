module.exports = function(grunt){
    var _ = require('underscore');

    // extend grunt.file
    _.extend(grunt.file, {
        copyDir: function(src, dest){
            if(!grunt.file.exists(src)){
                grunt.log.error('directory '+src+' does not exist!');
                return;
            }
            if(!grunt.file.exists(dest)) grunt.file.mkdir(dest);

            grunt.file.recurse(src, function(abspath, rootdir, subdir, filename){
                grunt.file.copy(abspath, abspath.replace(src, dest));
            });
        }
    });

    // extend grunt.task
    _.extend(grunt.task, {
        getCurName: function(){
            var argv = process.argv;
            var task = argv[2]; // maybe like "grunt", then argv[2] is undefined

            return task ? task.split(':')[0] : 'default';
        }
    });
};