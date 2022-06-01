const app = require("./index");
const connect = require("./configu/db");

app.listen(5000, async () => {
    try {
        await connect();
        console.log("listing on port 5000")
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
});