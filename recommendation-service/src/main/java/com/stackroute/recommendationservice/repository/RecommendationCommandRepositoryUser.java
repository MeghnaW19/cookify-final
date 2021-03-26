package com.stackroute.recommendationservice.repository;

import com.stackroute.recommendationservice.domain.Recipe;
import com.stackroute.recommendationservice.domain.User;
import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecommendationCommandRepositoryUser extends Neo4jRepository<User,Integer> {

    /**
     * methods on user
     */
    @Query("create (u:User{user})")
    User createUser(@Param("user") User user);

    @Query("MATCH (u:User{username:{user}.username}) with u unwind {cuisine} as cui MERGE(c:Cuisine{name:cui}) MERGE (u)-[:interested_in]->(c) return u")
    List<User> interestedCuisine(@Param("user") User user , @Param("cuisine") List<java.lang.String> cuisine);

    @Query("MATCH (u:User{username:{user}.username}) with u merge(s:Region{name:{user}.state}) with u,s MERGE (u)-[:stays_in]->(s) with s MERGE (s)-[:state_of]->(:Country)")
    void staysIn(@Param("user") User user);

    @Query("MATCH (u:User{username:{user}.username})-[r]->() delete r,u ")
    void deleteUser(@Param("user") User user);

    @Query ("MATCH (u:User{username:{user}.username}) set u.name={user}.name set u.age={user}.age set u.image={user}.image set u.address={user}.address set u.gender={user}.gender set u.city={user}.city set u.state={user}.state return u")
    List<User> updateUser(@Param("user") User user);

    @Query("match (u:User{username:{username}}) return u")
    User findUserByUsername(@Param("username") String username);



    /**
     *methods on operation
     */
    @Query("MATCH (u:User)-[r:published]->(m:Recipe) return u")
    List<User> getPublished();

    @Query("MATCH (u:User{username:{userName}}) , (m:Recipe{id:{recipe}.id}) MERGE (u)-[:liked]->(m) return u")
    List<User> createLiked(@Param("userName") String username, @Param("recipe")Recipe recipeName);

    @Query("MATCH (u:User{username:{userName}}) , (m:Recipe{id:{recipe}.id}) MERGE (u)-[:tried]->(m) return u")
    List<User> createTried(@Param("userName") String username, @Param("recipe")Recipe recipeName);

    @Query("MATCH (u:User{username:{userName}}) , (m:Recipe{id:{recipe}.id}) DELETE r")
    List<User> deleteLiked(@Param("userName")String username, @Param("recipe")Recipe recipeName);

}
