package com.stackroute.userprofileservice.config;

;
import com.stackroute.userprofileservice.service.RabbitMQReciever;
import com.stackroute.userprofileservice.service.RabbitMQSender;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMQConfig {

    @Value("user-profile")
    String queueName;

    @Value("register.exchange")
    String exchange;

    @Value("userprofile.key")
    private String routingkey;


    @Value("user-details")
    String queueNameDetail;
    @Value("register.key")
    private String routingkeyDetails;


    String queueNameUser = "publish-recipe";
    private String routingkeyRecipe = "recipeuser.key";

    @Bean
    Queue queue() {
        return new Queue(queueName, false);
    }


    @Bean
    DirectExchange exchange() {
        return new DirectExchange(exchange);
    }

    @Bean
    Binding binding(Queue queue, DirectExchange exchange) {
        return BindingBuilder.bind(queue).to(exchange).with(routingkey);
    }

    @Bean
    Queue queue2() {
        return new Queue(queueNameUser, false);
    }

    @Bean
    Binding binding2(Queue queue2, DirectExchange exchange) {
        return BindingBuilder.bind(queue2).to(exchange).with(routingkeyRecipe);
    }


    @Bean
    Queue queue3() {
        return new Queue(queueNameDetail, false);
    }

    @Bean
    Binding binding3(Queue queue3, DirectExchange exchange) {
        return BindingBuilder.bind(queue3).to(exchange).with(routingkeyDetails);
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

    @Bean
    public RabbitMQReciever receiver() {
        return new RabbitMQReciever();
    }

    @Bean
    public RabbitMQSender sender() {
        return new RabbitMQSender();
    }
}