import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import "./style.css";

const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: 400,
   bgcolor: "background.paper",
   border: "2px solid #000",
   boxShadow: 24,
   p: 4,
};

export default function ModalWrapper({ trigger, children }) {
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   return (
    <>
      <div>
        <span onClick={handleOpen}>{trigger}</span>
        <Modal
          open={open}
          onClose={handleClose}
          closeAfterTransition
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Fade in={open} timeout={500}>
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {children}
              </Typography>
            </Box>
          </Fade>
        </Modal>
      </div>
    </>
  );
}
