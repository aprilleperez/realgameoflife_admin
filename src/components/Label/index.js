import React from "react";
import { Row, Container } from "../Grid"

// We can render all the traits with just one Label, but we'll need to pass all the correct props

function Label(props) {
    return (
        <Container>
            <form>
                <input className={props.className} type="text" name="trait" placeholder={props.text} />
            </form>
        </Container>
    )
}

export default Label;





{/* <form>
                <div className="form-group">
                    <label for="traits">Trait 1</label>

                </div>
            </form> */}