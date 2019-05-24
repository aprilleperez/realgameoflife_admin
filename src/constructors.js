export class Traits {
    constructor(trait1, trait2, trait3, trait4, trait5) {
        this.trait1 = trait1
        this.trait2 = trait2
        this.trait3 = trait3
        this.trait4 = trait4
        this.trait5 = trait5
    }
}

export class Avatar {
    constructor(name, picture, t1, t2, t3, t4, t5) {
        this.name = name
        this.picture = picture
        this.trait1 = t1
        this.trait2 = t2
        this.trait3 = t3
        this.trait4 = t4
        this.trait5 = t5
    }
}

export class Question {
    constructor(Q, responses, trait1, trait2) {
        this.Q = Q
        this.responses = responses
        this.trait1 = trait1
        this.trait2 = trait2
    }
}

export class Response {
    constructor(response, outcomes) {
        this.response = response
        this.outcomes = outcomes
    }
}

export class Outcome {
    constructor(text, trait, amount, upDown) {
        this.text = text
        this.trait = trait
        this.amount = amount
        this.upDown = upDown
    }
}

export class GameObj {
    constructor(name, traits, avatars, questions) {
        this.name = name
        this.traits = traits
        this.avatars = avatars
        this.questions = questions
    }
}


let templateAvatars = [new Avatar("Name this Avatar", null, 0, 0, 0, 0, 0), new Avatar("Name this Avatar", null, 0, 0, 0, 0, 0), new Avatar("Name this Avatar", null, 0, 0, 0, 0, 0), new Avatar("Name this Avatar", null, 0, 0, 0, 0, 0), new Avatar("Name this Avatar", null, 0, 0, 0, 0, 0)]

export function templateConstructor(traits, gameName) {
    const questions = [1, 2, 3, 4, 5].map(i => {
        return templateQuestion(traits)
    })
    const keys = ["trait1", "trait2", "trait3", "trait4", "trait5"]
    let traitsObj = traits.reduce((obj, thing, i) => {
        return {
            ...obj,
            // whatever we want to add as a key:value
            [keys[i]]: thing
        }
    }, {})
    let templateObj = new GameObj(gameName, traitsObj, templateAvatars, questions)

    return templateObj
}


function templateResponse(traits) {
    let defaultResponse = new Response("Please enter a response here", [new Outcome("Enter an outcome here", traits[0], 0, "up"), new Outcome("Enter an outcome here", traits[0], 0, "up")])

    return defaultResponse
}


function templateQuestion(traits) {
    const responses = [1, 2, 3, 4, 5].map(i => {
        // do junk here
        return templateResponse(traits)
    })

    let templateQuestion = new Question("Type your question here", responses, traits[0], traits[1])

    return templateQuestion
}

export const testDataObject = {

    "name": "Test Data Object",
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
                            "text": "Congrats! Your brain is getting bigger",
                            "trait": "Education",
                            "amount": 3,
                            "upDown": "down"
                        },
                        {
                            "text": "Congrats! Your brain is getting bigger",
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
                            "text": "Your brain is getting neither bigger nor smaller",
                            "trait": "Family",
                            "amount": 4,
                            "upDown": "Up"
                        },
                        {
                            "text": "Your brain is getting neither bigger nor smaller",
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
                            "text": "Sad day! Your fingers have fallen off and your cat has eaten them.",
                            "trait": "Family",
                            "amount": 5,
                            "upDown": "Down"
                        },
                        {
                            "text": "Sad day! Your fingers have fallen off and your cat has eaten them.",
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
                            "text": "You've become and out of work actor temping at a catering company.",
                            "trait": "Wealth",
                            "amount": 3,
                            "upDown": "down"
                        },
                        {
                            "text": "You've become and out of work actor temping at a catering company.",
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
                            "text": "Wow kid, you really blew it.",
                            "trait": "Community",
                            "amount": 4,
                            "upDown": "Up"
                        },
                        {
                            "text": "Wow kid, you really blew it.",
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
                            "text": "Hooray! Your endurance has increased!",
                            "trait": "Community",
                            "amount": 5,
                            "upDown": "Down"
                        },
                        {
                            "text": "Hooray! Your endurance has increased!",
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
                            "text": "You become the laziest couch potato.",
                            "trait": "Wealth",
                            "amount": 3,
                            "upDown": "down"
                        },
                        {
                            "text": "You become the laziest couch potato.",
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
                            "text": "You wallow in your own self pity.",
                            "trait": "Community",
                            "amount": 4,
                            "upDown": "Up"
                        },
                        {
                            "text": "You wallow in your own self pity.",
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
                            "text": "Here's your award for being the most reasonable!",
                            "trait": "Community",
                            "amount": 5,
                            "upDown": "Down"
                        },
                        {
                            "text": "Here's your award for being the most reasonable!",
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
                            "text": "You have disappointed both The Count and the Tootsie Pop Owl",
                            "trait": "Wealth",
                            "amount": 3,
                            "upDown": "down"
                        },
                        {
                            "text": "You have disappointed both The Count and the Tootsie Pop Owl",
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
                            "text": "No one is disappointed! Revel in your ability to please both muppets and cartoons.",
                            "trait": "Community",
                            "amount": 4,
                            "upDown": "Up"
                        },
                        {
                            "text": "No one is disappointed! Revel in your ability to please both muppets and cartoons.",
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
                            "text": "You're a party pooper. No one likes you.",
                            "trait": "Community",
                            "amount": 5,
                            "upDown": "Down"
                        },
                        {
                            "text": "You're a party pooper. No one likes you.",
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
                            "text": "The earl of Lemongrab has eaten you.",
                            "trait": "Wealth",
                            "amount": 3,
                            "upDown": "down"
                        },
                        {
                            "text": "The earl of Lemongrab has eaten you.",
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
                            "text": "I'm very disappointed in you.",
                            "trait": "Community",
                            "amount": 4,
                            "upDown": "Up"
                        },
                        {
                            "text": "I'm very disappointed in you.",
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
                            "text": "You run boy, run",
                            "trait": "Community",
                            "amount": 5,
                            "upDown": "Down"
                        },
                        {
                            "text": "You run boy, run",
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
