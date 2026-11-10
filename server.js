import app from "./src/app.js"

const PORT = 3000;

try {
    app.listen(PORT, () => {
        console.log("E-commerce server is running on Local machine on 3000 port");
    });

} catch (error_relatedTo_server_running) {
    throw new Error(`App unable to run on port ${PORT}`, error_relatedTo_server_running);
};

