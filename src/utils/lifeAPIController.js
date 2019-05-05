//dependencies

import axios from "axios";


export function findAll() {
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


