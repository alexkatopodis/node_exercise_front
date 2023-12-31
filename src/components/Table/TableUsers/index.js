import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MessageDialog from '../../Dialog/MessageDialog'
import BetweenMessageDialog from '../../Dialog/BetweenMessageDialog';
import UnreadMessageDialog from '../../Dialog/UnreadMessageDialog';
import RecentMessageDialog from '../../Dialog/RecentMessageDialog';
import { StyledTableCell, StyledTableRow } from '../style';
import { useDispatch } from 'react-redux';
import { createMessage } from '../../../store/messages/actions';


const UserTable = ({ users, userInitial }) => {
  const [open, setOpen] = useState(false);
  const [openMessagesBetweenUsersDialog, setOpenMessagesBetweenUsersDialog] = useState(false);
  const [openMessagesUnreadDialog, setOpenMessagesUnreadDialog] = useState(false);
  const [openMessagesRecentDialog, setOpenMessagesRecentDialog] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const dispatch = useDispatch();

  const handleMenuClick = (event, user) => {
    setAnchorEl(event.currentTarget);
    setSelectedUser(user);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setSelectedUser(null);
    setOpen(false)
  };

  const handleMessageDialog = () => {
    setOpen(true);
  };

  const handleMessagesBetweenUsersDialog = () => {
    setOpenMessagesBetweenUsersDialog(true);
  };

  const handleUnreadMessagesDialog = () => {
    setOpenMessagesUnreadDialog(true)
  }

  const handleRecentMessagesDialog = () => {
    setOpenMessagesRecentDialog(true)
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>First Name</StyledTableCell>
              <StyledTableCell>Last Name</StyledTableCell>
              <StyledTableCell>Birthdate</StyledTableCell>
              <StyledTableCell>Gender</StyledTableCell>
              <StyledTableCell>Username</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <StyledTableRow key={user.id}>
                <StyledTableCell>{user.firstName}</StyledTableCell>
                <StyledTableCell>{user.lastName}</StyledTableCell>
                <StyledTableCell>{user.birthdate}</StyledTableCell>
                <StyledTableCell>{user.gender}</StyledTableCell>
                <StyledTableCell>{user.username}</StyledTableCell>
                <StyledTableCell>
                    <IconButton
                      aria-label="more"
                      aria-controls="user-actions-menu"
                      aria-haspopup="true"
                      onClick={(e) => handleMenuClick(e, user)}
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      id="user-actions-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={() => setAnchorEl(null)}
                    >
                      <MenuItem
                        onClick={() => {
                          handleMessageDialog()
                        }}
                      >
                        Create Message
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleMessagesBetweenUsersDialog()
                        }}
                      >
                         Between Messages
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleUnreadMessagesDialog()
                        }}
                      >
                         Unread Messages
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleRecentMessagesDialog()
                        }}
                      >
                         Recent Messages
                      </MenuItem>
                    </Menu>
                  </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <MessageDialog
        isOpen={open}
        onClose={handleCloseMenu}
        users={userInitial}
        selectedUser={selectedUser}
        onSendMessage={(message) => {
          dispatch(createMessage(message));
        }}
      />
      <BetweenMessageDialog
        isOpen={openMessagesBetweenUsersDialog}
        onClose={() => setOpenMessagesBetweenUsersDialog(false)}
        users={userInitial}
        selectedUser={selectedUser}
      />
      <UnreadMessageDialog
         isOpen={openMessagesUnreadDialog}
         onClose={() => setOpenMessagesUnreadDialog(false)}
         selectedUser={selectedUser}
      />
      <RecentMessageDialog
        isOpen={openMessagesRecentDialog}
        onClose={() => setOpenMessagesRecentDialog(false)}
        selectedUser={selectedUser}
      />
    </>
  );
}

export default UserTable;
