import app from "./src/app.js"
import connecToDB  from "./src/config/database.js";

const PORT = 3000;


/*
* Server running Code
*/

try {
    app.listen(PORT, () => {
        console.log("E-commerce server is running on Local machine on 3000 port");
    });

} catch (error_relatedTo_server_running) {
    throw new Error(`App unable to run on port ${PORT},[By me]`, error_relatedTo_server_running);
};


/*
*Connecting To database
*/
connecToDB();
