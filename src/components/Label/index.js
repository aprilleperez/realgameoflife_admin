import React from "react";
import { Row, Container } from "../Grid"

// We can render all the traits with just one Label, but we'll need to pass all the correct props

function Label(props) {
    return (
        <Container>
            <form>
                <div className="form-group">
                    <label for="traits">Trait 1</label>

                </div>
            </form>
        </Container>
    )
}

export default Label;