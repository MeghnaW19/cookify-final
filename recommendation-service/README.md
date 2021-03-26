# Recommendation Service
 The service provides recommendation in 3 sections:

## Recommendation at the Dashboard

*  Recipes of same cuisine and course which he/ she has liked or tried (Not the same)
*  Recipes based on the interest cuisine he/ she has selected at the time of registering
*  Recipes published by the masters whose recipe he has tried before

## Recommendation at the time of publishing

*  Ingredients related to the recipe he is publishing based on location

## Recipes based on the ingredients he has

### Domain

Contains User and Recipe Class

### Repository
All the repositories extend Neo4jRepository where quires are written 
#### RecommendationCommandRepository and RecommendationCommandRepositoryRecipe
are used to create user and recipe nodes respectively. The creation of nodes (User,Recipe) and relationships between the nodes are done using these Repositories.

#### RecommendationQueryRepository
is used to get query results as per our recommendation needs.

### Service

#### RecommendationCommandService
is used to create methods on RecommendationCommandRepository and RecommendationCommandRepositoryRecipe 
#### RecommendationQueryService
is used to create methods on RecommendationQueryRepository  

### Controller

#### RecommendationQueryController
creates the endpoints
