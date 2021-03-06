import { Avatar, IconButton } from '@material-ui/core';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import AddIcon from '@material-ui/icons/Add';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import PropTypes from 'prop-types';
import React from 'react';
import sampleData from './sampleData/data.json';
import SidebarChat from './SidebarChat';
import './Sidebar.css';

function Sidebar({ onSideBarClicked, onLogOut }) {

    const [open, setOpen] = React.useState(false);

    const anchorRef = React.useRef(null);

    function handleToggle() {
        setOpen(prevOpen => !prevOpen);
    }

    function handleClose(event) {
        if (!anchorRef.current?.contains(event.target)) {
            setOpen(false);
        }
    }

    function handleLogOut(event) {
        handleClose(event);
        onLogOut();
    }

    function getChatMessages(event) {
        onSideBarClicked(event);
    }

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    const groups = sampleData.map((group, index) => (
        <SidebarChat id={group.id} key={index}
            typing={group.typing}
            picture={group.picture}
            name={group.name}
            lastMessage={group.lastMessage}
            onSideBarClicked={getChatMessages}
        />
    ));

    const prevOpen = React.useRef(open);

    React.useEffect(function () {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open]);

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="/images/me.png" />
                <div className="sidebar__headerRight">
                    <IconButton title="Status">
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton title="New Chat">
                        <AddIcon />
                    </IconButton>
                    <IconButton
                        title="Menu"
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                    >
                        <MoreVertIcon />
                    </IconButton>
                    <Popper
                        open={open}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        transition
                        disablePortal
                    >
                        {function ({ TransitionProps, placement }) {
                            return (
                                <Grow
                                    {...TransitionProps}
                                    style={{
                                        transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                                    }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList
                                                autoFocusItem={open}
                                                id="menu-list-grow"
                                                onKeyDown={handleListKeyDown}
                                            >
                                                <MenuItem onClick={handleClose}>New Group</MenuItem>
                                                <MenuItem onClick={handleClose}>Create a Room</MenuItem>
                                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                                <MenuItem onClick={handleClose}>Archived</MenuItem>
                                                <MenuItem onClick={handleClose}>Starred</MenuItem>
                                                <MenuItem onClick={handleClose}>Setting</MenuItem>
                                                <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            );
                        }}
                    </Popper>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input type="text" placeholder="Search or start new chat" />
                </div>
            </div>
            <div className="sidebar__chats">
                {groups}
            </div>
        </div>
    );
}

Sidebar.propTypes = {
    onSideBarClicked: PropTypes.func,
};

export default Sidebar;
