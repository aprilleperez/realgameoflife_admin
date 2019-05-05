//dependencies
import axios from "axios";

export function create() {
    let data = {
        name: "America's Ass",
        traits: {
            trait1: "Red",
            trait2: "White",
            trait3: "Blue",
            trait4: "Firmness",
            trait5: "Bubble-ness"
        },
        Avatars: [{
            name: "Steve Rogers",
            trait1: 20,
            trait2: 20,
            trait3: 20,
            trait4: 20,
            trait5: 20
        }],
        Questions: [{
            Q: "Did Captain America's first suit really do him no favors?",
            responses: [
                { r1: "Definitely no favors done", oc: [{ trait: "Firmness", amount: 6, upDown: "down" }] },
                { r2: "It was fine", oc: [{ trait: "Bubble-ness", amount: 5, upDown: "up" }] },
                { r3: "Neither is America's ass", oc: [{ trait: "Red", amount: 4, upDown: "down" }] },
                { r4: "All the favors! 10/10", oc: [{ trait: "Blue", amount: 9, upDown: "up" }] },
                { r5: "I'm neutral on Ameria's ass", oc: [{ trait: "White", amount: 2, upDown: "down" }] }
            ],
            trait1: "Bubble-ness",
            trait2: "firmness"
        }]
    }

    let config = {
        headers: {
            "Access-Control-Allow-Origin": "anonymous"
        }
    }
    axios
        .post("http://localhost:3001/api/games", data, config)
        .then(results =>
            results.data.items.filter(
                result =>
                    result.game.title
            )
        )
}

export function update() {
    let data = {
        name: "America's Ass",
        traits: {
            trait1: "Captain America",
            trait2: "Cat",
            trait3: "Little Monster",
            trait4: "Adorbs",
            trait5: "Meowzer"
        },
        Avatars: [{
            name: "George",
            trait1: 1,
            trait2: 3,
            trait3: 4,
            trait4: 5,
            trait5: 6
        }],
        Questions: [{
            Q: "This is where a question would go, right?",
            responses: [
                { r1: "Giant", oc: [{ trait: "Hagrid", amount: 6, upDown: "NOMOREBOBS" }] },
                { r2: "Bobs", oc: [{ trait: "Bobs", amount: 5, upDown: "Bobs" }] },
                { r3: "Bobs", oc: [{ trait: "Bobs", amount: 4, upDown: "Bobs" }] },
                { r4: "Bobs", oc: [{ trait: "Bobs", amount: 3, upDown: "Bobs" }] },
                { r5: "Bobs", oc: [{ trait: "Bobs", amount: 2, upDown: "Bobs" }] }
            ],
            trait1: "Bobs",
            trait2: "Bobs"
        }]
    }

    let config = {
        headers: {
            "Access-Control-Allow-Origin": "anonymous"
        }
    }
    axios
        .put("http://localhost:3001/api/games/5ccddaa3bc49a849d88e6685", data, config)
        .then(results =>
            results.data.items.filter(
                result =>
                    result.game.title
            )
        )
}

export function remove() {
    let config = {
        headers: {
            "Access-Control-Allow-Origin": "anonymous"
        }
    }
    axios
        .delete("http://localhost:3001/api/games/5ccddaa3bc49a849d88e6685", config)
        .then(results =>
            results.data.items.filter(
                result =>
                    result.game.title
            )
        )
}


