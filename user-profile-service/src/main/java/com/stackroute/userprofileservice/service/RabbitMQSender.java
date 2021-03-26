package com.stackroute.userprofileservice.service;


import com.stackroute.userprofileservice.domain.User;
import com.stackroute.userprofileservice.domain.UserOperationRecipe;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service()
public class RabbitMQSender {

    @Autowired
    private AmqpTemplate rabbitTemplate;

    @Value("register.exchange")
    private String exchange;

    @Value("userprofile.key")
    private String routingkey;

    @Value("operation.key")
    private String operationroutingkey;

    public void sendUsertoRecommedationService(User user) {
        rabbitTemplate.convertAndSend(this.exchange, this.routingkey, user);
    }

    public void sendOperationRecipetoRecommedationService(UserOperationRecipe userOperationRecipe) {
        rabbitTemplate.convertAndSend(this.exchange, this.operationroutingkey, userOperationRecipe);
    }
}