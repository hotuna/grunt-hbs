# grunt-hbs

grunt handlebars html generator plugin

## Getting Started

In `Gruntfile.js`:

	grunt.initConfig({
	
	...
	
	 hbs:{
	        options: {
	          src: 'WebContents/frag/uidef',
	          dest: 'WebContents/www/uidef'
	        },
	        all: {
	          rules: [
	            {url: "*.html" , layout: "layout.hbt"},
	            {url: "foo/**/*.html" , layout: "foo/foo_layout.hbt"},
	            {url: "foo/**/*.json" , layout: "foo/data_post.hbt"},
	            ]
	        }
	    }
	
	...
	});
	
	grunt.loadNpmTasks('grunt-hbs');
  

run:

	grunt hbs


### Options

#### src

doc root where contains template layout file(hbt) and html, json files

#### dest

desitinaiton root where html files to be generated


	

## Release History

 * 2013-08-23 v0.1.1 first release
 * 2013-08-24 v0.1.3 updated: json file parse. file extension substring bug fix
---

Task submitted by [June Park]
