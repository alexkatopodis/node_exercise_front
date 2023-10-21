import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { Stack, Container, InputLabel, FormControl } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessagesBetweenUsers } from '../../../store/messages/actions';
import TableMessages from '../../Table/TableMessages';

const BetweenMessageDialog = ({ isOpen, onClose, users, selectedUser }) => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [localMessagesBetween, setLocalMessagesBetween] = useState([]);

  const dispatch = useDispatch();

  const messagesBetween = useSelector((state) => state.messages.messages);

  const handleSearchClick = () => {
    if (selectedUser && selectedUserId) {
      dispatch(fetchMessagesBetweenUsers({ userId1: selectedUser.id, userId2: selectedUserId }));
    }
  };

  useEffect(() => {
    if(!isOpen) {
      setSelectedUserId(null)
      setLocalMessagesBetween([])
    }
  }, [isOpen])

  useEffect(() => {
    setLocalMessagesBetween(messagesBetween);
  }, [messagesBetween]);


  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogContent>
        <Container sx={{ padding: 2 }}>
          <Stack className="stack" direction="row" spacing={1}>
            <FormControl fullWidth>
              <InputLabel sx={{ marginTop: '-10px', marginLeft: '-10px' }} htmlFor="sender-select">Sender</InputLabel>
              <Select
                id="sender-select"
                value={selectedUser?.id || ''}
                disabled
                fullWidth
              >
                <MenuItem value={selectedUser?.id}>{selectedUser?.firstName}</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel sx={{ marginTop: '-10px', marginLeft: '-10px' }} htmlFor="receiver-select">Receiver</InputLabel>
              <Select
                id="receiver-select"
                value={selectedUserId || ''}
                onChange={(e) => setSelectedUserId(e.target.value)}
                fullWidth
              >
                {users.map((user) => (
                  <MenuItem key={user.id} value={user?.id}>
                    {user?.firstName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
          <Stack sx={{ marginTop: "15px", marginBottom: "15px" }} className="stack" direction="row" spacing={1} justifyContent="flex-end">
            <Button variant="outlined" color="primary" onClick={handleSearchClick}>
              Search
            </Button>
            <Button variant="outlined" color="secondary" onClick={onClose}>
              Cancel
            </Button>
          </Stack>
          <Stack>
            <TableMessages messages={localMessagesBetween}/>
          </Stack>
        </Container>
      </DialogContent>
    </Dialog>
  );
};

export default BetweenMessageDialog;
