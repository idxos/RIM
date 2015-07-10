<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
# RIM / Development
<img src="wf-git-logo.jpg" width="250px" hieght="128px">
<br>
<h1>Development RIM App</h1>
<p class="lead">
    App is Currently using Bower as package manager for app’s assets.<br>
    Node.js controls the installation of all bower.json files and testing utils for debugging.
</p>
<h3>Notes</h3>
<p>We are using folders development/ and production/ to host our primary app/ and they are to have unique assets managed by the bower.json files.</p>
<ul>
    <li>Development App files are located ’/RIM/builds/development/app’</li>
    <li>Production App files to be created ‘/RIM/builds/production/app‘</li>
</ul>
<p class="info">Todo... Update Yoman installation scripts.</p>
<br/>
<h3>Command Line Installation</h3>

<strong>First:<strong><br>
<p class="well">
    cd RIM/builds/development
</p>

<strong>Second:<strong><br>
<p class="well">
    sudo npm install
</p>
<strong>SASS<strong><br>
<p class="lead">
    Our sass-start.sh has been pre-configured to watch for changes in the '/sass/site.scss' folder and then automaticall re-write our '/app/css/site.css' file.  We will leave the css pritty for now, but will eventually uglify for production site.
</p>
<p>Run the follosing command in terminal using mac. 
<p class="well">
    sh sass-start.sh
</p>

