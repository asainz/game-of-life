# Angular seed

This project is an application skeleton for a typical AngularJS application.

The seed contains AngularJS libraries, along some AngularJS plugins. It also contains a Gruntfile.js file with a bunch of preconfigured tasks, so you don't have to worry about build, development server or setting up a test runner.

The seed also provides a setup file that will take care of installing all the dependencies for the seed to run.

## How to install the seed
---
1. clone it
2. run `./setup.sh`

It'll install all the required dependencies both global and local for the seed to run:

1. global npm modules
	* [yo](http://yeoman.io/)
	* [bower](https://github.com/bower/bower)
	* [foreman](https://github.com/NodeFly/node-foreman)
	* [phantomjs](https://github.com/ariya/phantomjs/)
	* [instalbul](https://github.com/gotwarlost/istanbul)
	* [karma](https://github.com/karma-runner/karma)
2. local npm modules (via package.json)
3. bower components (via bower.json)

## Gruntfile
---

The seed provides a Gruntfile.js with a bunch of tasks already preconfigured. These tasks will take care for you of these things:

#### CSS linting
The seed comes with a preconfigure CSS lintng. You're free to change that configuration by editing the file `.csslintrc`.[Additional info](https://github.com/stubbornella/csslint/wiki/Rules)

#### JS Linting
The seed comes with a preconfigure JS lintng. You're free to change that configuration by editing the file `.jshintrc`.[Additional info](http://www.jshint.com/docs/#options)

#### Running unit tests

#### Running end to end tests
`http://localhost:9876/__karma/`

#### Start a development server
`http://localhost:9000`

#### Refresh your browser after a file changes

#### Minimize and concatenate your files

## How to run the seed
---
1. run `nf start`

It'll run the development server, open a browser pointing at `http://localhost:9000` and start the unit test watcher, so they'll run after any change.

## How to run the unit tests
---
You don't need to worry about it, since this task is taken care of when you run `nf start`

## How to run end to end tests (functional tests)
---
1. run `grunt run-e2e`

It'll open a browser pointing to `http://localhost:9876/__karma/` and all the tests will run. You can run the tests in any browser you want (both desktop and mobile) just by copying/pasting that url, and  the tests will run across all open intances.

*You can click on the 'debug' button, and you have a more detail display of the tests*

## Directory Layout
---
<pre>
app/                      --> all of the files to be used in production
    bower_components/     --> angular and 3rd party libraries
    styles/               --> css files
        main.css          --> defualt stylesheet
    scripts/              --> javascript files
       TBD
    views/                --> html views files
       TBD
    
coverage/                 --> tests reports files
test/                     --> tests files
    e2e/                  --> unit tests files
       TBD
    spec/                 --> e2e tests files
       TBD

karma.conf.js             --> config file for running unit tests with karma
karma-e2e.conf.js         --> config file for running e2e tests with karma

Gruntfile.js
setup.sh
</pre>

## Grunt tasks (public ones)
---

* `run server`  
	Starts the development server on port 9000. You shouldn't need to use this task directly, since you have `nf start`.
	
* `server:dist`  
	Runs `grunt build` and then starts a server on port 9000, serving `dist` directory.
	
* `run-utest`  
	Starts the unit tests watcher. You shouldn't need to use this task directly, since you have `nf start`.
	
* `run-e2e`  
	Start the end to end tests server on port 9876.
	
* `build`  
	Builds the app and place it in `dist` directory.
	
* `markdown:readme`  
	Takes the README.md file and creates a README.html file. You shouldn't modified README.html file (it's ignored by git).
	
## Foreman tasks
---

* `nf start`  
	Runs `grunt server` and `grunt run-utest`