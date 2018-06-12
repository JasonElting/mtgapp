Welcome to A sample nodejs app
==================================================

This sample code helps get you started with a simple Node.js web application
deployed by AWS Elastic Beanstalk through AWS CodePipeline

To see a live version of this app running go to [here](mtg.jasonelting.com)

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

```
git clone https://github.com/JasonElting/mtgapp.git && \
cd mtgapp &&\
bash install.sh &&\
npm start
```

and then a server will be running at `localhost:3000`


Running on AWS
---------------
So the easiest way to get this application running in AWS is to just clone it to an 
EC2 instance and run the 4 lines above. 

If your actually interested in using AWS devolopemnt CI/CD tools then CodeStar is 
the easiest way, it automatically configures everything, but it technically does 
support integration with existing projects so here is how you do that.

1. start a CodeStar Project (for this example one using node.js and elastic beanstalk.
   
   it will ask you to creat a new github repo, just make it then you can delete it later
2. navigate to the codepipeline scetion and edit the application source section
3. change the repository to an existing one in your account
   
   you probably want to use a forked version of this repo
