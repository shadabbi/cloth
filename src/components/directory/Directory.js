import React, { Component } from 'react';

import classes from './Directory.module.scss'
import MenuItem from '../../components/menu-item/Menu-item';

class Directory extends Component {

    state = {
        sections:[
            {title:'HATS',linkUrl:'hats',id:1,imgUrl:'https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3MDYzNH0'},
            {title:'JACKETS',linkUrl:'jackets',id:2,imgUrl:'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3MDYzNH0'},
            {title:'SNEAKERS',linkUrl:'sneakers',id:3,imgUrl:'https://images.unsplash.com/photo-1509913841876-b8a297b4e240?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3MDYzNH0'},
            {title:'WOMEN',linkUrl:'women',size:'large',id:4, imgUrl:'https://images.unsplash.com/photo-1499939667766-4afceb292d05?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3MDYzNH0'},
            {title:'MEN',linkUrl:'men',title:'men',size:'large',id:5,imgUrl:'https://images.unsplash.com/photo-1515664069236-68a74c369d97?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3MDYzNH0'}
        ]
    }

    render() {
        const menuItems = this.state.sections.map(({id,linkUrl,title,imgUrl,size})=><MenuItem linkUrl={linkUrl} size={size} key={id} title={title} imgUrl={imgUrl}/>)
        return (
            <div className={classes['directory-menu']}>
                    {menuItems}
            </div>
        )
    }
}

export default Directory;