# Project Name: TECH-BLOG

![license](https://img.shields.io/badge/License-MIT%202.0-blue.svg)

## User-Story
- Task is to build a CMS-style blog site similar to Wordpress site, where bloggers can publish their blog posts and comment or other developers.

## Description
- The application will follow the MVC paradigm in its architectural structure, using Handlebars, Sequelize, and express-session.

## Acceptance Criteria
- WHEN I visit the site for the first time
- THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
- WHEN I click on the homepage option
- THEN I am taken to the homepage
- WHEN I click on any other links in the navigation
- THEN I am prompted to either sign up or sign in
- WHEN I choose to sign up
- THEN I am prompted to create a username and password
- WHEN I click on the sign-up button
- THEN my user credentials are saved and I am logged into the site
- WHEN I revisit the site at a later time and choose to sign in
- THEN I am prompted to enter my username and password
- WHEN I am signed in to the site
- THEN I see navigation links for the homepage, the dashboard, and the option to log out
- WHEN I click on the homepage option in the navigation
- THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
- WHEN I click on an existing blog post
- THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
- WHEN I enter a comment and click on the submit button while signed in
- THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
- WHEN I click on the dashboard option in the navigation
- THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
- WHEN I click on the button to add a new blog post
- THEN I am prompted to enter both a title and contents for my blog post
- WHEN I click on the button to create a new blog post
- THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
- WHEN I click on one of my existing posts in the dashboard
- THEN I am able to delete or update my post and taken back to an updated dashboard
- WHEN I click on the logout option in the navigation
- THEN I am signed out of the site
- WHEN I am idle on the site for more than a set time
- THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

___
# Installations

Must have these programs installed on computer to run code:

- Node
- MySQL
- MySQL Workbench

Open integrated terminal and type npm i to install dependencies below:

- bcrypt
- connect-session-sequelize
- dotenv
- express
- express-handlebars
- express-session mysql2
- sequelize
- mysql2

___

## Images
<img width="2042" alt="Tech-blog-login" src="https://user-images.githubusercontent.com/14179472/123545938-fe3a4100-d79d-11eb-80e0-72071f95ea8f.png">
<img width="2042" alt="Tech-blog-createPost" src="https://user-images.githubusercontent.com/14179472/123545949-0abe9980-d79e-11eb-857b-cce2e48f4f1f.png">
<img width="2041" alt="Tech-blog-PostCreated" src="https://user-images.githubusercontent.com/14179472/123545953-10b47a80-d79e-11eb-82d6-200a3f1c3833.png">
<img width="2036" alt="Tech-blog-edit-deletePost" src="https://user-images.githubusercontent.com/14179472/123545959-14e09800-d79e-11eb-9acc-6b3a56adbc20.png">
<img width="2037" alt="Tech-blog-comment" src="https://user-images.githubusercontent.com/14179472/123545963-19a54c00-d79e-11eb-9bc8-2bd3ca456ca5.png">

## URL
 - GITHUB: https://github.com/and1roxx43/tech_blog
 - HEROKU: 
