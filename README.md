Welcome to A sample nodejs app
==================================================

This sample code helps get you started with a simple Node.js web application
deployed by AWS Elastic Beanstalk through AWS CodePipeline

What's Here
-----------

This sample includes:

* README.md - this file
* buildspec.yml - this file contains instructions for codebuild on how to 
  and build this application.
* package.json - this file contains various metadata relevant to your Node.js
  application such as dependencies
* app.js - this file contains the code for your application
* install.sh - this file can be run with `bash install.sh` to install all
  dependencies for this application
* public/ - this directory contains static web assets used by your application
* tests/ - this directory contains unit tests for your application
* views/ - this directory contains the ejs files used to display the application

Getting Started
---------------

to start this example application locally run:

`git pull https://github.com/JasonElting/mtgapp.git && \

cd mtgapp &&\

bash install.sh &&\

npm start`


and then a server will be running at `localhost:3000`


Running on AWS
---------------
//todo
