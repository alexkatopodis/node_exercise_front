import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';

const EditMessageDialog = ({ index, editDialogOpen, handleEditDialogClose, newContent, setNewContent, message, handleSubmitEdit }) => {
  return (
    <Dialog open={editDialogOpen} onClose={handleEditDialogClose}>
      <DialogTitle>Edit Message</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          variant="outlined"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleEditDialogClose} color="error">
          Cancel
        </Button>
        <Button onClick={() => handleSubmitEdit(message, index)} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EditMessageDialog;

