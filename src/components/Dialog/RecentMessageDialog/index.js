import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Stack, Container, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { recentMessageRequest } from '../../../store/messages/actions';
import TableCollapse from '../../Table/TableCollapse';

const RecentMessageDialog = ({ isOpen, onClose, selectedUser }) => {
  const [localMessages, setLocalMessages] = useState([]);

  const dispatch = useDispatch();

  const messages = useSelector((state) => state.messages.unread);

  useEffect(() => {
    if (selectedUser?.id) {
      dispatch(recentMessageRequest({ userId: selectedUser.id}));
    }
  }, [dispatch, selectedUser?.id])

  useEffect(() => {
    if (!isOpen) {
      setLocalMessages([])
    } else {
      setLocalMessages(messages)
    }
  }, [isOpen, messages])

  return (
    <Dialog maxWidth={"xl"} open={isOpen} onClose={onClose}>
        <Container sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Messages for: {`${selectedUser?.firstName} ${selectedUser?.lastName}`}
            </Typography>
            <DialogContent>
              <Stack>
                <TableCollapse data={localMessages} />
              </Stack>
            </DialogContent>
        </Container>
    </Dialog>
  );
};

export default RecentMessageDialog;
