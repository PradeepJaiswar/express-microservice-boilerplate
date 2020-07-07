import KafkaProducer from "./../index";

(async () => {
    const producer = await KafkaProducer.initialize("PRODUCER", {
      host: "127.0.0.1",
      topic: "test",
      partition: 0
    });

    // publisher object is available to use
    await producer.publish({
      message: "Publish this message",
    });
})();
