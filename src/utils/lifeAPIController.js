//dependencies
import axios from "axios";

export function create(gameObj) {
    let config = {
        headers: {
            "Access-Control-Allow-Origin": "anonymous"
        }
    }
    axios
        .post("https://real-life-api.herokuapp.com/api/games", gameObj, config)
        .then(results =>
            results.data.items.filter(
                result =>
                    result.game.title
            )
        )
}

export function update(gameObj, id) {

    let config = {
        headers: {
            "Access-Control-Allow-Origin": "anonymous"
        }
    }
    axios
        .put(`https://real-life-api.herokuapp.com/api/games${id}`, gameObj, config)
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


