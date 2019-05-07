class Traits {
    constructor(trait1, trait2, trait3, trait4, trait5) {
        this.trait1 = trait1
        this.trait2 = trait2
        this.trait3 = trait3
        this.trait4 = trait4
        this.trait5 = trait5
    }
}

class Avatar {
    constructor(name, t1, t2, t3, t4, t5) {
        this.name = name
        this.trait1 = t1
        this.trait2 = t2
        this.trait3 = t3
        this.trait4 = t4
        this.trait5 = t5
    }
}

class Question {
    constructor(Q, responses, trait1, trait2) {
        this.Q = Q
        this.responses = responses
        this.trait1 = trait1
        this.trait2 = trait2
    }
}

class Response {
    constructor(response, outcomes) {
        this.response = response
        this.outcomes = outcomes
    }
}

class Outcome {
    constructor(trait, amount, upDown) {
        this.trait = trait
        this.amount = amount
        this.upDown = upDown
    }
}

class GameObj {
    constructor(name, traits, avatars, questions) {
        this.name = name
        this.traits = traits
        this.avatars = avatars
        this.questions = questions
    }
}

let testTraits = new Traits("Red", "White", "Blue", "Firmness", "Bubble-ness")
let testAvatars = [new Avatar("Steve Rogers", 20, 20, 20, 20, 20), new Avatar("Tony Stark", 10, 10, 10, 10, 10), new Avatar("Hulk", 18, 17, 16, 15, 14)]


let testResponses = [
    new Response("Definitely no favors done", [new Outcome("Firmness", 3, "down"), new Outcome("Red", 4, "up")]),
    new Response("It was fine", [new Outcome("Bubble-ness", 4, "Up"), new Outcome("White", 3, "Down")]),
    new Response("Typing all this blows", [new Outcome("Firmness", 5, "Down"), new Outcome("Firmness", 5, "down")])]



let testQuestions = [new Question("Did Captain America's first suit really do him no favors?", testResponses, "Firmness", "Bubble-ness")]

export const testGameObj = new GameObj("Testing with America's Ass", testTraits, testAvatars, testQuestions);

let updateResponses = [
    new Response("Because Tony is an appreciator of fine things", [new Outcome("Firmness", 3, "down"), new Outcome("Red", 4, "up")]),
    new Response("He did it for his father", [new Outcome("Bubble-ness", 4, "Up"), new Outcome("White", 3, "Down")]),
    new Response("Callipygian", [new Outcome("Firmness", 5, "Down"), new Outcome("Firmness", 5, "down")])]

let updateQuestion = new Question("Why did Tony make Captain America's second suit so it did America's Ass Justice?", updateResponses, "Red", "Blue")

export const updateGameObj = new GameObj(testGameObj.name, testGameObj.traits, testGameObj.avatars, [testQuestions[0], updateQuestion])

export const testDataObject = {
    "_id": {
        "$oid": "5cd0ed76413a3100173d1220"
    },
    "name": "Testing with America's Ass",
    "traits": {
        "trait1": "Red",
        "trait2": "White",
        "trait3": "Blue",
        "trait4": "Firmness",
        "trait5": "Bubble-ness"
    },
    "avatars": [
        {
            "name": "Steve Rogers",
            "trait1": 20,
            "trait2": 20,
            "trait3": 20,
            "trait4": 20,
            "trait5": 20
        },
        {
            "name": "Tony Stark",
            "trait1": 10,
            "trait2": 10,
            "trait3": 10,
            "trait4": 10,
            "trait5": 10
        },
        {
            "name": "Hulk",
            "trait1": 18,
            "trait2": 17,
            "trait3": 16,
            "trait4": 15,
            "trait5": 14
        }
    ],
    "questions": [
        {
            "Q": "Did Captain America's first suit really do him no favors?",
            "responses": [
                {
                    "response": "Definitely no favors done",
                    "outcomes": [
                        {
                            "trait": "Firmness",
                            "amount": 3,
                            "upDown": "down"
                        },
                        {
                            "trait": "Red",
                            "amount": 4,
                            "upDown": "up"
                        }
                    ]
                },
                {
                    "response": "It was fine",
                    "outcomes": [
                        {
                            "trait": "Bubble-ness",
                            "amount": 4,
                            "upDown": "Up"
                        },
                        {
                            "trait": "White",
                            "amount": 3,
                            "upDown": "Down"
                        }
                    ]
                },
                {
                    "response": "Typing all this blows",
                    "outcomes": [
                        {
                            "trait": "Firmness",
                            "amount": 5,
                            "upDown": "Down"
                        },
                        {
                            "trait": "Firmness",
                            "amount": 5,
                            "upDown": "down"
                        }
                    ]
                }
            ],
            "trait1": "Firmness",
            "trait2": "Bubble-ness"
        }
    ]
}
