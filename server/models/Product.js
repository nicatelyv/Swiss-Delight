const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    productname: { type: String, required: true },
    desc: { type: String, required: true },
    img1: { type: String, required: true },
    img2: { type: String, required: true },
    img3: { type: String, required: true },
    img4: { type: String, required: true },
    sku: { type: Number, required: true },
    tags: { type: String, required: true },
    categories: { type: Array },
    category: { type: String, required: true },
    price: { type: Number, required: true },
},
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);