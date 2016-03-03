# mongoose_blog_w_06

1.0 Overview
For this group activity, we will reinforce our knowledge of angular while getting some hands-on experience with Mongoose -- 
the ODM technology that allows our Node app to talk to our Mongo database!

We will be building a simple form-based interface that will allow users to create blog posts and have those posts reviewed and, 
potentially, deleted (gasp) by a reviewer.

2.0 Implementation Details
2.1 Views
This app will need to support at least two views:

Blog post creation by author
Blog post review by reviewer
2.1.1 Blog Post Creation By Author

Navigating to this page, will display a form with fields for

Title
Date
Blog Text
Author Name
Posts will be saved when a save button is clicked. Use a POST request for this.

2.1.2 Blog Post Review By Reviewer

Navigating to this page will give us a list of blog posts. Selecting a blog post, will display a form that includes all of the 
data for the blog post and some additional fields. All of the fields to include are:

Title
Date
Blog Text
Author Name
Reviewer Comments
Use a GET request to get the list of blog posts and to populate the existing blog data.

The form can be saved with a save button. Use a PUT request for this. The blog post can be deleted with a delete button. 
Use a DELETE request for this.

3.0 Helpful Hints
To use Mongoose, you will need to create a schema for your blog data.
Your GET, POST, PUT, and DELETE requests can and should all use the same route (e.g. /blog).
4.0 Submission Details
Submit one Git repository per group.
