//jshint esversion:6
import express from "express"
import bodyParser from "body-parser"
import _ from "lodash"

const placeholderContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const app = express();

let posts = []

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res) {  
  res.render("home", {startingContent: placeholderContent, newPosts: posts} )
})

app.get("/about", function(req, res) {
  res.render("about", {startingContent: placeholderContent} )
})

app.get("/contact", function(req, res) {
  res.render("contact", {startingContent: placeholderContent} )
})

// Rendering the compose page from which the user can add new blog post 
app.get("/compose", function(req, res) {
  res.render("compose")
})

// Adding a new blog post
app.post("/compose", function(req, res) {
  
  const postContent = {
    title: req.body.formTitle,
    postContent: req.body.formPost
  }

  posts.push(postContent)
  res.redirect("/")
})

// Requesting posts based on post name
app.get("/posts/:postName", function(req, res) {
  console.log(req.params.postName)
  const titleRequested = _.lowerCase(req.params.postName)

  posts.forEach(function(post) {
    const postTitle = _.lowerCase(post.title)
    if (postTitle === titleRequested) {
      console.log("Match Found!")
      res.render("requestedPost", {
        title: post.title, 
        content: post.postContent})
    } 
  })
  
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
