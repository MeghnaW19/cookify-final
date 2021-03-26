## Recipe Service
 The service deals with the entire details of a recipe along with storing in a backend and CRUD operations  



### Domain

Contains Recipe class

### Repository
All the repositories extend MongoRepository  

#### RecipeRepository
is used to get Specific Method results as per our Recipe needs.


#### RecipeService
is used to create methods on ReccipeRepository 


#### RecipeController
creates the endpoints for CRUD operations