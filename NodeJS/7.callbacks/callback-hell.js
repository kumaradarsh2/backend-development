const fs = require("fs");

fs.readFile("input.txt", "utf8", (err, data) => {
    if (err) {
       console.err("Error:", err);
       return; 
    }
    // console.log(data);
    const updatedData = data.toUpperCase();

    fs.writeFile("output.txt", updatedData, (err) => {
        if (err) {
            console.error("Error:", err);
            return;
        }

        console.log("output.txt has been created");

        // read output.txt now
        fs.readFile("output.txt", "utf8", (err, data) => {
            if (err) {
                console.error("Error:", err);
                return;
            }
            console.log(data);
        });
    });
});