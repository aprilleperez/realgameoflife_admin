//dependencies
import axios from "axios";

export function create() {
    let data = {
        name: "Better Game Name",
        traits: {
            trait1: "Bobs",
            trait2: "Bobs",
            trait3: "Bobs",
            trait4: "Bobs",
            trait5: "Bobs"
        },
        Avatars: [{
            name: "Bobs",
            trait1: 1,
            trait2: 3,
            trait3: 4,
            trait4: 5,
            trait5: 6
        }],
        Questions: [{
            Q: "Bobs",
            responses: [
                { r1: "Bobs", oc: [{ trait: "Bobs", amount: 6, upDown: "Bobs" }] },
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


