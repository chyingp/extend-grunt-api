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
};