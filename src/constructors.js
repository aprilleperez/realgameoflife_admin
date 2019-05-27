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
    constructor(name, picture, t1, t2, t3, t4, t5, tracking) {
        this.name = name
        this.picture = picture
        this.trait1 = t1
        this.trait2 = t2
        this.trait3 = t3
        this.trait4 = t4
        this.trait5 = t5
        this.tracking = tracking
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


let templateAvatars = [new Avatar("Name this Avatar", null, 0, 0, 0, 0, 0, []), new Avatar("Name this Avatar", null, 0, 0, 0, 0, 0, []), new Avatar("Name this Avatar", null, 0, 0, 0, 0, 0, []), new Avatar("Name this Avatar", null, 0, 0, 0, 0, 0, []), new Avatar("Name this Avatar", null, 0, 0, 0, 0, 0, [])]

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


export function templateResponse(traits) {
    let defaultResponse = new Response("Please enter a response here", [new Outcome("Enter an outcome here", traits[0], 0, "up"), new Outcome("Enter an outcome here", traits[0], 0, "up")])

    return defaultResponse
}


export function templateQuestion(traits) {
    const responses = [1, 2, 3, 4, 5].map(i => {

        return templateResponse(traits)
    })

    let templateQuestion = new Question("Type your question here", responses, traits[0], traits[1])

    return templateQuestion
}

