//with your interviewer, you want to come up with the features
//who's going to be using this?

//features...
//user stories


//for ex: user searches for a movie
//there should be an API endpoint that allows you to search for a movie
//if the endpoint exists, what parameter should it take? -- get
//you can either send it as POST request in body
//you can send it as GET request in URL as query parameters 


//what scale would we operate? polished app or simple MVP product where we can focus on a handful of features

//is this product already built and i'm improving upon it or am i starting from scratch?

//what sort of key features should we focus on?

//twitter;
/*
data entities -- what is the key piece of data that interact with each other?
for ex: 
1. user
2. posts (image post, text post, reply post)
3. timeline/newsfeed (collection of posts)
4. hashtags

actions/user stories
1. create post
  API Endpoint: what would the endpoint be/how would you design the API?
    - to create a post, i would expect a post request to something like /api/posts and in the request body, i would send the content of the post
      -content of the post (140 characters or less) "STRING"
      -date/time "DATE/TIME"
      -author/creator of the post "STRING"
      -imageUrl "STRING"
      -hashtags/@s "STRING"
      -is response to: postID
2. follow
3. comment
4. retweet
5. view timeline/newsfeed
6. view followers
7. fetch profile
8. search tweets*

user model

primary key | user id (foreign key) | follower id (foreign key) | date created
primary key/date created out of the box with sequelize

how would you query this table?
write a function definition -- to query this table, the function that i would use would be:

function getAllFollowersForUserById(userId) {
  let followers = FollowersThroughTable.findAll({
    where: {
      userId = userId
    }
    include: [{model: Users}]
  })
  res.json(followers)
}

what if you have a user with 25M followers or your through table could have billions of rows?

you would need some sort of **pagination** (scalability)

when someone follows someone, you add a row to the through table and as you scale, you might want to add another field on the user model -- "follower count"

what are the risks here?
are there any downsides to this?
distributed systems -- one of the two ways that you're keeping track of followers could have an error (you can successfully add a follower/following pair to the through table but you failed to increment the following account or vice versa)



*/


/*

If you have 3 columns: stock name, stock price, timestamp of stock, what data structure would you use to store it if you'd like to access it in the following two ways:

1. get all the stocks and their max and min prices for all time
2. get all the prices for a given stock with a certain time frame (t1 - t2)

APL - $3 - 4:00pm
GGL - $5 - 4:00pm
GGL - $4 - 5:00pm

do the stocks have to be sorted?


*/