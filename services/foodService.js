// =-=-=-=-=-=-=-=-=-=-=-=-=
// services/foodService.js
// =-=-=-=-=-=-=-=-=-=-=-=-=

// A service that creates a new food item
const namespace = "feedme";
const baseURL = `https://firestore.googleapis.com/v1/projects/jsdemo-3f387/databases/(default)/documents/`;
const url = `${baseURL}${namespace}`;

const foodService = async (name, carbs, protein, fat) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            fields: {
                name: { stringValue: name },
                carbs: { integerValue: carbs },
                protein: { integerValue: protein },
                fat: { integerValue: fat },
            },
        }),
    });
    const data = await response.json();
    return data;
};

module.exports = foodService;
