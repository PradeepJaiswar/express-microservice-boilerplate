# Kafka

## SUMMARY

Kafka library that extends the APIs of [kafka-node](https://www.npmjs.com/package/kafka-node) for connecting Kafka.

Library is customized for microservices use case.

### Usage:

    import KafkaConsumer from "path/to/kafka";
    or
    import KafkaProducer from "path/to/kafka";

#### Kafka Producer
    (async () => {
        const producer = await KafkaProducer.initialize("PRODUCER", {
            host: "192.168.80.163,192.168.80.164,192.168.80.165",
            topic: "test",
            partition: 0
        });

        // publisher object is available to use
        producer.publish({
            message:"Publish this message",
        });
    })();

#### Kafka Consumer
    (async () => {
        const producer = await KafkaConsumer.initialize("PRODUCER", {
          host: "127.0.0.1",
          topic: "test",
          partition: 0
        });
    
        // publisher object is available to use
        await producer.publish({
          message: "Publish this message",
        });
    })();

### Test
Start your local mongo and build project.

    // go to root of project and run
    npm run build

Kafka Producer

    // go to root of project and run
    node build/kafka/examples/producer.js

Kafka Consumer

    // go to root of project and run
    node build/kafka/examples/consumer.js
 
