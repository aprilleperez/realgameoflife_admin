//dependencies
import axios from "axios";

export function create(gameObj) {
    axios
        .post("https://real-life-api.herokuapp.com/api/games", gameObj)
}

export function update(gameObj, id) {

    axios
        .put(`https://real-life-api.herokuapp.com/api/games/${id}`, gameObj)
}

export function remove(id) {

    axios
        .delete(`https://real-life-api.herokuapp.com/api/games/${id}`)
        .then(() => {
            window.location.pathname = "/"
        })
}



