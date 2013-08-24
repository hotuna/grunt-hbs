/*
 * grunt-hbs
 *
 * https://github.com/hotuna
 *
 * Copyright (c) 2013 June Park (hotuna)
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var handlebars = require('handlebars');
  var path = require('path');
  var _ = grunt.util._;
  
  grunt.registerMultiTask('hbs', 'handlebar html generator', function(){
    
    var options = this.options();
    
    var src = options.src;
    var dest = options.dest;
    var rules = this.data.rules;
    
    var count = 0;
    
    _.each(rules, function(rule){
      
      var layoutFilePath = path.join(src,rule.layout);

      var layout = grunt.file.read(layoutFilePath);
      var template =  handlebars.compile(layout);
     
      grunt.file.expand(path.join(src, rule.url)).map(function(filePath){
        
        var file = grunt.file.read(filePath);
        var extension = filePath.substring(filePath.lastIndexOf('.') + 1);
        var content = '';
        
        if (extension === 'html'){
           content = template({body: file});
        } else if (extension === 'json'){
           var obj = JSON.parse(file);
           content = template(obj);
        } else{
           grunt.log.writeln(extension + ' is unknown file extension');
           return;
        }
        
        var relativePath = filePath.substring(src.length + 1, filePath.lastIndexOf('.')) + '.html';
        
        var destFilePath = path.join(dest, relativePath);
        grunt.file.write(destFilePath, content);
        count++;
        
      });
      
    });
   
    grunt.log.writeln('total: ' + count + ' files generated');
    
  });

};
