import React, {Component} from 'react';
import {
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarText,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from 'reactstrap';

import ButtonComponent from "./ButtonComponent";

class NavBar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {btnName} = this.props;
        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <ButtonComponent primaryColor={"blue"} btnName={btnName}/>
                    <NavItem>
                        <NavLink href="/components/">Components</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">{this.props.name}</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Options
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                            <DropdownItem divider/>
                            <DropdownItem>
                                Reset
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                <NavbarText>Simple Text</NavbarText>
            </Navbar>
        );
    }
}

export default NavBar;
