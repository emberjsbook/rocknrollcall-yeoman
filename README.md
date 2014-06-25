
# RocknRollCall

## O'Reilly's 'Building Web Apps with Ember.js' Demo Application Companion Code

### What is RocknRollCall?

RockNRollCall is a Ember.js demo application that demonstrates examples of the features offered by the framework. It is the companion application to O'Reilly's 'Building Web Apps with Ember.js' by Jesse Cravens and Thomas Q. Brady.

RockNRollCall is similar to Tom Dale's master/detail bloggr-client application, yet it focuses less on the beginner getting started, and more on many of the more challenging aspects of application development.

If you understand bloggr-client, and other similar demo apps and are ready for more, this is the demo app for you. It covers:

 - Promises
 - Actions
 - Ember-Data
 - Ember-Data Local Storage Adapter
 - Ember-Data RESTAdapter
 - Ember Inspector (Chrome)
 - Pro Workflow w/ Yeoman
 - Ember App Kit
 - Ember-Rails
 - Node/Express w/ MEEN Boilerplate
 - Rails, Active Model Serializers Boilerplate
 - Ember-testing
 - 3rd Party integration (jQuery/D3) Integration
 - Ember Components

RockNRollCall is a music (songs and artists) search app that makes calls to the public Echonest API, and displays detail about the results that interest you most.

In this application, the user's activity is stored in Local Storage. There are two more example repos that demonstrate syncing data to a remote data store:

1. A repo using Ember App Kit API stubs and the Ember-Data RESTAdapter: https://github.com/emberjsbook/rocknrollcall-eak

2. A repo using Ruby On Rails and the Ember-Data RESTAdapter: https://github.com/emberjsbook/rocknrollcall-rails

### Installing Yeoman

This version of RocknRollCall uses Yeoman (Yo, Grunt.js, Bower.js) to manage the project workflow.

    $ sudo npm install -g yo grunt-cli bower

In addition to yo, this will automatically install grunt and bower for you, if you are using npm 1.2.10 or above. You can also install those manually:

    $ npm install -g grunt-cli bower

If you have installed Grunt globally in the past, you will need to remove it first:

    $ npm uninstall -g grunt

### Get RocknRollCall

First, clone this repo:

    $ git clone https://github.com/emberjsbook/rocknrollcall-yeoman.git

To install the dependencies:

    $ npm install

    $ bower install

Also requires that you have Ruby and Compass installed, if you don't already:

     $ sudo gem install compass

On Windows we suggest you use an improved command line tool such as Console2 or PowerShell to improve the experience.

 ### Configuring RocknRollCall

You'll need your own API key for The Echo Nest. Visit https://developer.echonest.com/account/register in your browser, fill out the form, and follow the directions. Once you've activated your account, find your API key on your profile page.

 Then, within app/scripts/app.js, add in your key:

     RocknrollcallYeoman.config = {
         ECHO_NEST_API_KEY: "Your API key" // Get an API Key here: http://developer.echonest.com/account/register
     }

### Running RocknRollCall

    $ grunt serve
