import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';

import "../Style/Nickname.css";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>New Office</Button>
        <div className="sub-button">SME First Account</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
              <div className="popup">
                <img src={require('../images/error.png')} />
                <div className="popupMessage">Restore nickname to SME First Account?</div>
              </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Stack spacing={2} direction="row">
                <div><Button variant="contained">Cancle</Button></div>
                <Button variant="contained">Confirm</Button>
              </Stack>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
