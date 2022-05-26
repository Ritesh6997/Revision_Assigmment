const app = require("./index");
const connect = require("./configus/db");

app.listen(5000, async () => {
    try {
        await connect();
        console.log("Listing on port 5000")
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
});