import React, { Component } from 'react'
import {
    MDBNavbarItem,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
} from 'mdb-react-ui-kit';

export default class DynamicSubmenu extends Component {
    render() {
        const menuItems = [
            {
                title: 'Services',
                url: '/services',
                submenu: [
                    {
                        title: 'web design',
                        url: 'web-design',
                    },
                    {
                        title: 'web development',
                        url: 'web-dev',
                    },
                    {
                        title: 'SEO',
                        url: 'seo',
                    },
                    {
                        title: 'SEO',
                        url: 'seo',
                    },
                ],
            },
            // ...
        ];

        const MenuData = menuItems.map((data) => {
            console.log(data)
            let submenudata = data.submenu.map((submenu) => {
                console.log("called inner loop", submenu);
                return <MDBDropdownItem link>{submenu.title}</MDBDropdownItem>
            })
            return <MDBNavbarItem>
                <MDBDropdown>
                    <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                        {data.title}
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                        {submenudata}
                    </MDBDropdownMenu>
                </MDBDropdown>
            </MDBNavbarItem>
        })
        return (
            <div>
                {MenuData}
                <br /><br /><br /><br />
            </div>
        )
    }
}
