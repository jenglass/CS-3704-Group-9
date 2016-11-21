Setup:
Download nodejs:
https://nodejs.org/en/
Download mongodb (Community Server):
https://www.mongodb.com/download-center#community

Once nodejs is downloaded, go to the working directory of this app.
Then run:
npm install http-server -g
npm install express —save
npm install mongodb -g
npm install cors

First we need our http server which will serve 
our files.
To run server, go to working directory and run:
http-server ./ -p 12345 --cors

For this step, open a terminal in the mongodb folder.
To run database:
./mongod -dbpath <path to database>

For this step, open a terminal in the working directory.
To run nodejs server which communicates to database:
node dbserver.js