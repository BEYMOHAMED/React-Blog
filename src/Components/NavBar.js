import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components'; 
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';




export default class Navbar extends Component{
    state = {
        anchorEl: null,
      };
      handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
      };
    
      handleClose = () => {
        this.setState({ anchorEl: null });
      };
    render(){
        const { anchorEl } = this.state;
        return(
           <NavWrapper >
               <Link to="/user" className="navlink"><img src="https://juststickers.in/wp-content/uploads/2018/04/saitama.png" className="icon"/></Link>
            
            <div>
                <Button
                aria-owns={anchorEl ? 'simple-menu' : undefined}
                aria-haspopup="true"
                onClick={this.handleClick}
                >
                Open Menu
                </Button>

                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>
                        <Link to="/article" className="navlink">
                        Create Articles
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                        <Link to="/articles" className="navlink">
                        Articles
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                        <Link to="/user" className="navlink">
                        Info
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                        <Link to="/login" className="navlink">
                        Log In
                        </Link>
                    </MenuItem>
                </Menu>
            </div>
                
        </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background: transparent;
height:100px;
font-family: 'Righteous', cursive;
text-transform: uppercase;
  
.icon{
    position:absolute;
    height:60px;
    margin-top:20px;
    margin-left:40px;
    border-radius:50%;
    border:1px solid #111;
}
button{
    float:right;
    margin-right:50px;
    background: transparent;
    color:#FE7C7C;
    border: 2px solid #FE7C7C;
    
}
button:focus{
    outline:none;
}
button:hover{
    color:#E94E4F;
    border-color:#E94E4F;
    background: transparent;
}
.navlink{
    color:#111;
}
`