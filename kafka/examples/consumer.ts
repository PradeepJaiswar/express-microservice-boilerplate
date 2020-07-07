import KafkaConsumer from "./../index";

(async () => {
    const  consumer = await KafkaConsumer.initialize("CONSUMER", {
      host: "127.0.0.1",
      topic: "test",
      groupId: "TEST-1",
    });

    // consumer object is available to use
    consumer.on("message", (data) => {
      console.log(JSON.parse(data.value));
    });
})();
