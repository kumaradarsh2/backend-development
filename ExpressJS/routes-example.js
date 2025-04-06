import express from "express";
const app = express();

// root route
app.get("/", (req, res) => {
    res.send("Welcome to our home page");
});

app.get("/products", (req, res) => {
    const products = [
        {
            id: 1,
            label: "Product 1"
        },
        {
            id: 2,
            label: "Product 2"
        },
        {
            id: 3,
            label: "Product 3"
        }
    ];

    // how to create a dynamic route? use colon :
    res.json("products");
});

app.get("/products/:id", (req, res) => {
    const productId = parseInt(req.params.id);

    const products = [
        {
            id: 1,
            label: "Product 1"
        },
        {
            id: 2,
            label: "Product 2"
        },
        {
            id: 3,
            label: "Product 3"
        }
    ];

    const getSingleProduct = products.find(product => product.id === productId);

    if (getSingleProduct) {
        res.json(getSingleProduct);
    } else {
        res.status(404).send("product is not found. try with different id");
    }
});


const port = 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
