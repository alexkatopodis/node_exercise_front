import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Stack, Box } from '@mui/material';

const MessageDialog = ({ isOpen, onClose, users, selectedUser, onSendMessage, userInitial }) => {
  const [content, setContent] = useState('');
  const [receiverId, setReceiverId] = useState('');

  const handleSubmit = () => {
    const message = {
      sender: selectedUser.id,
      receiver: receiverId,
      content,
      timestampSent: new Date().toISOString(),
    };

    onSendMessage(message);
    onClose();
    setReceiverId('');
    setContent('');
  };

  useEffect(() => {
    if (!isOpen) {
      setReceiverId('');
      setContent('');
    }
  }, [isOpen])


  const optionsForSecondSelect = users.filter((user) => user?.id !== selectedUser?.id);

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogContent>
        <Box sx={{ width: '100%' }}>
          <Stack className="stack" direction="row" spacing={1}>
            <Select value={selectedUser?.id || ''} disabled fullWidth>
              <MenuItem value={selectedUser?.id}>{selectedUser?.firstName}</MenuItem>
            </Select>
            <Select
              value={receiverId || ''}
              onChange={(e) => setReceiverId(e.target.value)}
              fullWidth
            >
              {optionsForSecondSelect.map((user) => (
                <MenuItem key={user?.id} value={user?.id}>
                  {user?.firstName}
                </MenuItem>
              ))}
            </Select>
          </Stack>
        </Box>
        <TextField
          sx={{ marginBottom: "10px", marginTop: "10px" }}
          label="Message content"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Stack className="stack" direction="row" spacing={1} justifyContent="flex-end">
          <Button variant="outlined" color="primary" onClick={handleSubmit}>
            Send
          </Button>
          <Button variant="outlined" color="error" onClick={onClose}>
            Cancel
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default MessageDialog;
