package com.stackroute.recipeservice.config;

import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;

import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;


@Configuration
@EnableScheduling
public class RabbitMQConfig {

    @Value("${recipe.queue}")
    String queueName;
    @Value("${publish-recipe.queue}")
    String queueNameUser;
    @Value("${recommended-service.queue}")
    String queueNameRecommended;
    @Value("${userProfile.queue}")
    String queueNameUserProfile;

    @Value("${register.exchange}")
    String exchange;

    @Value("${recipe.key}")
    private String routingkey;
    @Value("${recipeuser.key}")
    private String routingkeyRecipe;
    @Value("${recommendedService.key}")
    private String routingkeyRecommended;
    @Value("${UserProfile.key}")
    private String routingkeyUserProfile;

    @Bean
    Queue queue() {
        return new Queue(queueName, false);
    }

    @Bean
    Queue queue2() {
        return new Queue(queueNameUser, false);
    }

    @Bean
    Queue queue3(){return new Queue(queueNameRecommended,false);}

    @Bean
    Queue queue4(){return new Queue(queueNameUserProfile,false);}

    @Bean
    DirectExchange exchange() {
        return new DirectExchange(exchange);
    }

    @Bean
    Binding binding(Queue queue,DirectExchange exchange) {
        return BindingBuilder.bind(queue).to(exchange).with(routingkey);
    }
    @Bean
    Binding binding2(Queue queue2,DirectExchange exchange) {
        return BindingBuilder.bind(queue2).to(exchange).with(routingkeyRecipe);
    }
    @Bean
    Binding binding3(Queue queue3,DirectExchange exchange){
        return BindingBuilder.bind(queue3).to(exchange).with(routingkeyRecommended);
    }
    @Bean
    Binding binding4(Queue queue4,DirectExchange exchange){
        return BindingBuilder.bind(queue4).to(exchange).with(routingkeyUserProfile);
    }



    @Bean
    public MessageConverter jsonMessageConverter() {
        return new Jackson2JsonMessageConverter();
    }




    @Bean
    public AmqpTemplate rabbitTemplate1(ConnectionFactory connectionFactory) {
        final RabbitTemplate rabbitTemplate1 = new RabbitTemplate(connectionFactory);
        rabbitTemplate1.setMessageConverter(jsonMessageConverter());
        return rabbitTemplate1;
    }


}