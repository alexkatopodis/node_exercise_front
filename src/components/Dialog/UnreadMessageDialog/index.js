import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Stack, Container, Typography } from '@mui/material';
import TableMessages from '../../TableMessages';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessagesUnread } from '../../../store/messages/actions';

const UnreadMessageDialog = ({ isOpen, onClose, selectedUser }) => {
  const [localMessagesBetween, setLocalMessagesBetween] = useState([]);

  const dispatch = useDispatch();

  const messages = useSelector((state) => state.messages.unread);

  useEffect(() => {
    if (selectedUser?.id) {
      dispatch(fetchMessagesUnread({ userId: selectedUser.id}));
    }
  }, [dispatch, selectedUser?.id])

  useEffect(() => {
    if (!isOpen) {
      setLocalMessagesBetween([])
    } else {
      setLocalMessagesBetween(messages)
    }
  }, [isOpen, messages])


  return (
    <Dialog open={isOpen} onClose={onClose}>
        <Container sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Messages for: {`${selectedUser?.firstName} ${selectedUser?.lastName}`}
            </Typography>
            <DialogContent>
              <Stack>
                <TableMessages messages={localMessagesBetween} unReadTable/>
              </Stack>
            </DialogContent>
        </Container>
    </Dialog>
  );
};

export default UnreadMessageDialog;
