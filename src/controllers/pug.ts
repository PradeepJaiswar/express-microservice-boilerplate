
const pugController = (req, res) => {
    res.render("index", {
        title: "Pug Demo",
        message: "Hello there!"
    });
};

export default pugController;
