# Blog Web App

A basic blog web app to allow users create posts and view blog posts. Created using node and express. 

_Note: The app only allows the user to add new post, the feature to edit or delete post has not been added yet._

# NPM packages required

* _**express**_ to install Express.js framework
* _**body-parser**_ to parse new post content
* _**lodash**_ to convert the string to lowercase


# Installing Node

In the project folder, enter the following commands

``` npm init -y ```


# Installing the npm modules

``` npm i express ```  
``` npm i body-parser ``` 
``` npm i lodash ``` 

# Modifying the package.json file to use the NPM modules/packages

Add the code below to the package.json file

![image](https://github.com/Azan9/Blog-Web-App/assets/43653409/b4a511b9-bcd3-4a42-a0ef-6bbc97223954)

Read more about Packages and package.json [here](https://nodejs.org/api/packages.html#:~:text=Within%20a%20package%2C%20the%20package,as%20using%20ES%20module%20syntax.)

# Running the app

Run the app using the following command. The web app will run on a server hosted locally

``` node app.js ```

Type localhost:3000 in your web browser to access the web page, if it doesn't open then change the port number in the app.js file. To check for avaliable ports, type in ``` netstat -aon ``` in the command promt.

To add a new post, go to _localhost:3000/compose_

# Screenshots of the web app

![Web capture_9-12-2023_32611_localhost](https://github.com/Azan9/Blog-Web-App/assets/43653409/acd9c53d-e626-4b10-8cad-38446f3246f5)

![Web capture_9-12-2023_32941_localhost](https://github.com/Azan9/Blog-Web-App/assets/43653409/a5e5ba51-49ad-43ca-a3f3-316aa8a6e4d4)

![Web capture_9-12-2023_3300_localhost](https://github.com/Azan9/Blog-Web-App/assets/43653409/41af351d-7439-430e-b5f2-ba1907916e15)



