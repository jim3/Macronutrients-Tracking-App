// routes/foodRoute.js

const express = require("express");
const foodService = require("../services/foodService");
const router = express.Router();

// render the index page
router.get("/", async (req, res, next) => {
    res.render("index", { title: "Food Tracker App" });
});

// post route
router.post("/", async (req, res) => {
    try {
        const name = req.body.name;
        const carbs = req.body.carbs;
        const protein = req.body.protein;
        const fat = req.body.fat;
        const data = await foodService(name, carbs, protein, fat); // caller

        res.render("index", {
            name: data.fields.name.stringValue,
            carbs: data.fields.carbs.integerValue,
            protein: data.fields.protein.integerValue,
            fat: data.fields.fat.integerValue,
        });
    } catch (err) {
        console.error("Error rendering data:", err);
    }
});

module.exports = router;
