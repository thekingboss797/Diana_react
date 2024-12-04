import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function ButtonDropdown({children,menuItems,transparent,style,className}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={className}>
        <Button
        className={`${transparent?'hover:bg-opacity-20 hover:bg-zinc-50':'hover:bg-transparent'} cursor-pointer`}
        id="basic-button"
        style={{
          color: '#ffffff',
          textTransform:'none',
          ...style
        }}
        disableElevation={true}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        >
        {children}
      </Button>
      {menuItems.length>0 && <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        sx={{
          '& .MuiMenu-list':{
          backgroundColor:'#3f3f46',
          borderRadius:0,
        },
        '& .MuiMenuItem-gutters':{
          color:'#ffffff',
          fontWeight:500,
        }
        }}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {menuItems.map((item,i)=>(<MenuItem key={i} onClick={item[1]||handleClose}>{item[0]}</MenuItem>))}
      </Menu>
      }
    </div>
  );
}

ButtonDropdown.propTypes={
    title: PropTypes.string,
    menuItems: PropTypes.array.isRequired,
    children: PropTypes.node,
    transparent: PropTypes.bool,
    style: PropTypes.object,
    className:PropTypes.string,
}