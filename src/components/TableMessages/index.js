import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableContainer, TableHead, TableRow, Paper, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { formatTimestamp } from './utils';
import EditMessageDialog from '../Dialog/EditMessageDialog';
import { useDispatch } from 'react-redux';
import { updateMessageRequest, fetchMessagesBetweenUsers } from '../../store/messages/actions';
import { StyledTableCell, StyledTableRow } from './style';

const MessageTable = ({ messages }) => {
  const [newContent, setNewContent] = useState('');
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [newIndex, setNewIndex] = useState();
  const [editingMessage, setEditingMessage] = useState(null);
  const [render, setRender] = useState(false);
  const [messageObject, setMessageObject] = useState();
  const [anchorEls, setAnchorEls] = useState(Array(messages?.length).fill(null));

  const dispatch = useDispatch();

  const handleEditClick = (message) => {
    setEditingMessage(message);
    setEditDialogOpen(true);
    setNewContent(message.content);
  };

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
    setMessageObject({});
  };

  const handleSubmitEdit = (message, index) => {
    const updatedMessage = {
      id: message.id,
      content: newContent,
      sender: message.sender,
      receiver: message.receiver,
      timestampSent: new Date().toISOString(),
      seen: message.seen,
    };

    setMessageObject({ userId1: message.sender, userId2: message.receiver })

    dispatch(updateMessageRequest(message.id, updatedMessage));
    setRender(true);
    setEditDialogOpen(false);

    handleCloseMenu(index);
  };

  const handleSeeClick = (message, index) => {
    const updatedMessage = {
      ...message,
      seen: true,
    };

    setMessageObject({ userId1: message.sender, userId2: message.receiver })

    dispatch(updateMessageRequest(message.id, updatedMessage));
    setRender(true);
    setEditDialogOpen(false);

    handleCloseMenu(index);
  };

  const handleMenuClick = (event, index) => {
    const newAnchorEls = [...anchorEls];
    newAnchorEls[index] = event.currentTarget;
    setAnchorEls(newAnchorEls);
    setNewIndex(index);
  };

  const handleCloseMenu = (index) => {
    const newAnchorEls = [...anchorEls];
    newAnchorEls[index] = null;
    setAnchorEls(newAnchorEls);
    setNewIndex();
  };

  useEffect(() => {
    if (!editDialogOpen && render) {
      dispatch(fetchMessagesBetweenUsers(messageObject))
    }
    setRender(false)
  }, [dispatch, editDialogOpen, messageObject, render])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Content</StyledTableCell>
            <StyledTableCell>Timestamp</StyledTableCell>
            <StyledTableCell>Seen</StyledTableCell>
            <StyledTableCell>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {messages.length === 0 ? (
            <StyledTableRow>
              <StyledTableCell style={{ textAlign: 'center' }} colSpan={4}>No data</StyledTableCell>
            </StyledTableRow>
          ) : (
            messages.map((message, index) => (
              <StyledTableRow key={message.id}>
                <StyledTableCell>{message.content}</StyledTableCell>
                <StyledTableCell>{formatTimestamp(message.timestampSent)}</StyledTableCell>
                <StyledTableCell>{message.seen ? 'Yes' : 'No'}</StyledTableCell>
                <StyledTableCell>
                  <IconButton
                    aria-label="more"
                    aria-controls={`message-actions-menu-${index}`}
                    aria-haspopup="true"
                    onClick={(e) => handleMenuClick(e, index)}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id={`message-actions-menu-${index}`}
                    anchorEl={anchorEls[index]}
                    keepMounted
                    open={Boolean(anchorEls[index])}
                    onClose={() => handleCloseMenu(index)}
                  >
                    <MenuItem onClick={() => handleEditClick(message, index)}>Edit</MenuItem>
                    <MenuItem onClick={() => handleSeeClick(message, index)}>See</MenuItem>
                  </Menu>
                </StyledTableCell>
              </StyledTableRow>
            ))
          )}
        </TableBody>
      </Table>
      <EditMessageDialog
        index={newIndex}
        editDialogOpen={editDialogOpen}
        handleEditDialogClose={handleEditDialogClose}
        newContent={newContent}
        setNewContent={setNewContent}
        handleSubmitEdit={handleSubmitEdit}
        message={editingMessage}
      />
    </TableContainer>
  );
};

export default MessageTable;
