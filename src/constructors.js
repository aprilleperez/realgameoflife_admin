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

    "name": "Real Object for Testing",
    "traits": {
        "trait1": "Wealth",
        "trait2": "Education",
        "trait3": "Health",
        "trait4": "Family",
        "trait5": "Community"
    },
    "avatars": [
        {
            "name": "Steve Rogers",
            "trait1": 10,
            "trait2": 15,
            "trait3": 6,
            "trait4": 9,
            "trait5": 18
        },
        {
            "name": "Tony Stark",
            "trait1": 2,
            "trait2": 7,
            "trait3": 19,
            "trait4": 10,
            "trait5": 11
        },
        {
            "name": "Hulk",
            "trait1": 18,
            "trait2": 17,
            "trait3": 16,
            "trait4": 15,
            "trait5": 14
        },
        {
            "name": "Natasha Romanova",
            "trait1": 5,
            "trait2": 18,
            "trait3": 15,
            "trait4": 10,
            "trait5": 13
        },
        {
            "name": "Okoye",
            "trait1": 12,
            "trait2": 19,
            "trait3": 20,
            "trait4": 16,
            "trait5": 10
        }
    ],
    "questions": [
        {
            "Q": "Coming up with questions is really hard, right?",
            responses: [
                {
                    "response": "SO HARD",
                    "outcomes": [
                        {
                            "trait": "Education",
                            "amount": 3,
                            "upDown": "down"
                        },
                        {
                            "trait": "Wealth",
                            "amount": 4,
                            "upDown": "up"
                        }
                    ]
                },
                {
                    "response": "Not really",
                    "outcomes": [
                        {
                            "trait": "Family",
                            "amount": 4,
                            "upDown": "Up"
                        },
                        {
                            "trait": "Community",
                            "amount": 3,
                            "upDown": "Down"
                        }
                    ]
                },
                {
                    "response": "Typing all this blows",
                    "outcomes": [
                        {
                            "trait": "Family",
                            "amount": 5,
                            "upDown": "Down"
                        },
                        {
                            "trait": "Wealth",
                            "amount": 5,
                            "upDown": "down"
                        }
                    ]
                }
            ],
            "trait1": "Health",
            "trait2": "Education"
        },
        {
            "Q": "Now we have two questions, are we having fun yet?",
            responses: [
                {
                    "response": "The most fun!",
                    "outcomes": [
                        {
                            "trait": "Wealth",
                            "amount": 3,
                            "upDown": "down"
                        },
                        {
                            "trait": "Health",
                            "amount": 4,
                            "upDown": "up"
                        }
                    ]
                },
                {
                    "response": "No fun",
                    "outcomes": [
                        {
                            "trait": "Community",
                            "amount": 4,
                            "upDown": "Up"
                        },
                        {
                            "trait": "Family",
                            "amount": 3,
                            "upDown": "Down"
                        }
                    ]
                },
                {
                    "response": "We're really going to have to think of FIVE RESPONSES!?",
                    "outcomes": [
                        {
                            "trait": "Community",
                            "amount": 5,
                            "upDown": "Down"
                        },
                        {
                            "trait": "Wealth",
                            "amount": 5,
                            "upDown": "down"
                        }
                    ]
                }
            ],
            "trait1": "Wealth",
            "trait2": "Community"
        },

        {
            "Q": "Is it okay if I only make three questions?",
            responses: [
                {
                    "response": "Yes",
                    "outcomes": [
                        {
                            "trait": "Wealth",
                            "amount": 3,
                            "upDown": "down"
                        },
                        {
                            "trait": "Health",
                            "amount": 4,
                            "upDown": "up"
                        }
                    ]
                },
                {
                    "response": "No",
                    "outcomes": [
                        {
                            "trait": "Community",
                            "amount": 4,
                            "upDown": "Up"
                        },
                        {
                            "trait": "Family",
                            "amount": 3,
                            "upDown": "Down"
                        }
                    ]
                },
                {
                    "response": "Well you're not making five responses so why not",
                    "outcomes": [
                        {
                            "trait": "Community",
                            "amount": 5,
                            "upDown": "Down"
                        },
                        {
                            "trait": "Wealth",
                            "amount": 5,
                            "upDown": "down"
                        }
                    ]
                }
            ],
            "trait1": "Wealth",
            "trait2": "Community"
        },

        {
            "Q": "Which question is this one?",
            responses: [
                {
                    "response": "One",
                    "outcomes": [
                        {
                            "trait": "Wealth",
                            "amount": 3,
                            "upDown": "down"
                        },
                        {
                            "trait": "Health",
                            "amount": 4,
                            "upDown": "up"
                        }
                    ]
                },
                {
                    "response": "Four",
                    "outcomes": [
                        {
                            "trait": "Community",
                            "amount": 4,
                            "upDown": "Up"
                        },
                        {
                            "trait": "Family",
                            "amount": 3,
                            "upDown": "Down"
                        }
                    ]
                },
                {
                    "response": "You stopped updating traits",
                    "outcomes": [
                        {
                            "trait": "Community",
                            "amount": 5,
                            "upDown": "Down"
                        },
                        {
                            "trait": "Wealth",
                            "amount": 5,
                            "upDown": "down"
                        }
                    ]
                }
            ],
            "trait1": "Wealth",
            "trait2": "Community"
        },

        {
            "Q": "What if we only made five questions?",
            responses: [
                {
                    "response": "UNACCEPTABLE",
                    "outcomes": [
                        {
                            "trait": "Wealth",
                            "amount": 3,
                            "upDown": "down"
                        },
                        {
                            "trait": "Health",
                            "amount": 4,
                            "upDown": "up"
                        }
                    ]
                },
                {
                    "response": "I hope you got that Adventure Time reference",
                    "outcomes": [
                        {
                            "trait": "Community",
                            "amount": 4,
                            "upDown": "Up"
                        },
                        {
                            "trait": "Family",
                            "amount": 3,
                            "upDown": "Down"
                        }
                    ]
                },
                {
                    "response": "Five is my favorite Umbrella Academy student",
                    "outcomes": [
                        {
                            "trait": "Community",
                            "amount": 5,
                            "upDown": "Down"
                        },
                        {
                            "trait": "Wealth",
                            "amount": 5,
                            "upDown": "down"
                        }
                    ]
                }
            ],
            "trait1": "Wealth",
            "trait2": "Community"
        }
    ]
}
