import React, { Component } from "react";
import PropTypes from 'prop-types';
import '../style.css';
// import { Container, Row, Col } from '../Grid';
import Tab from "../Tab";


export function Header(props) {
    return (
        <div className="text-center">
            <h1 className="appHeader">{props.text}</h1>
        </div>
    )
}

export function SubHeader(props) {
    return (
        <div className="text-center">
            <h5 className="appSubHeader">{props.text}</h5>
        </div>
    )
}

export function ContentHeader(props) {
    return (
        <div>
            <h3 className="appContentHeader">{props.text}</h3>
        </div>
    )
}


export class Tabs extends Component {
    // sets the prop to have required Array type (in parent element, it must be passing more than 1 avatar)
    // static propTypes = {
    //     children: PropTypes.instanceOf(Array).isRequired,
    // }

    // inherits props from parent element
    constructor(props) {
        super(props);

        // this.props.children[0].props.label = this.props.children[0].props.label.bind(this)

        this.state = {
            activeTab: [],
            // activeTab: this.props.label,
        };
    }

    componentDidMount() {
        this.setState({
            activeTab: this.props.children[0].props.label})
    }

    // on click, sets state to active tab of clicked tab
    onClickTabItem = (tab) => {
        this.setState({ activeTab: tab });
    }

    render() {
        const {
            onClickTabItem,
            props: {
                children,
            },
            state: {
                activeTab,
            }
        } = this;

        console.log("Children: ",  children)
        console.log("STATE", this.state)

        return (
            
            <div className="tabs">
                <ol className="tab-list">
                    {children.map((child) => {
                        const { label } = child.props;

                        return (
                            <Tab
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                onClick={onClickTabItem}
                            />
                        );
                    })}
                </ol>
                <div className="tab-content">
                    {children.map((child) => {
                        if (child.props.label !== activeTab) return undefined;
                        return child.props.children;
                    })}
                </div>
            </div>
        );
    }
}

export default Tabs;






// export function AvatarHeader(props) {
//     return (
//         <Container fluid>
//             <Row>
//                 <Col size="sm-1">

//                 </Col>

//                 <Col size="sm-2">
//                     <p className="text-center">Avatar 1</p>
//                 </Col>

//                 <Col size="sm-2">
//                     <p className="text-center">Avatar 2</p>
//                 </Col>

//                 <Col size="sm-2">
//                     <p className="text-center">Avatar 3</p>
//                 </Col>

//                 <Col size="sm-2">
//                     <p className="text-center">Avatar 4</p>
//                 </Col>

//                 <Col size="sm-2">
//                     <p className="text-center">Avatar 5</p>
//                 </Col>

//                 <Col size="sm-1">

//                 </Col>
//             </Row>
//         </Container>
//     )
// }