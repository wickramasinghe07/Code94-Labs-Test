import React from "react";

import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Modal,
  Typography,
} from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

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

const Menu = () => {
   // Considering only the first four cards
 const [patientList, setPatientList] = React.useState([]);
 console.log("🚀 ~ file: Menu.js:33 ~ Menu ~ patientList:", patientList)
 const [open, setOpen] = React.useState(false);
 const [deleteID, setDeleteID] = React.useState();
 console.log("🚀 ~ file: Menu.js:35 ~ Menu ~ deleteID:", deleteID)

 const deleteDandleOpen = (Did) => {
  setDeleteID(Did)
  setOpen(true)
};
 const handleClose = () => {setOpen(false)};


 const deleteHaDandle = async () => {
  try {
    const response = await axios.delete(
      `http://localhost:5000/api/recipe/delete/${deleteID}`
    );
    toast.success(response.data.message);
    setOpen(false)
  } catch (error) {
    console.log("ERROR-API ~ Forum Post ~ delete ", error);
  }
}

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:5000/api/recipe/all");
      console.log("API ~ Forum Post ~ getAll ", response);
      setPatientList(response.data.data);
    } catch (error) {
      console.log("ERROR-API ~ Forum Post ~ getAll ", error);
    }
  }
  React.useEffect(() => {
    fetchData();
  }, [open]);
  return (
  <>
     <ToastContainer />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {patientList?.map((menu, index) => (
        <Card key={index} sx={{
          maxWidth: 300,
          m: 2,
          bgcolor: "rgba(255, 255, 255, 0.8)",
          border: "1px solid rgba(0, 0, 0, 2)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 1)", 
        }}>
            <CardActionArea>
              <CardMedia
                sx={{ height: 200 }}
                component="img"
                src={menu.image}
                alt={menu.recipeName}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component="div">
                  {menu.recipeName}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            <Link to={`/edit/${menu._id}`}>
            <Button variant="contained" sx={{ bgcolor: "#8CC5FA" }} color="primary" >
              Edit
            </Button>
             </Link>
            <Button variant="contained" sx={{ bgcolor: "#FF6A6A", margin:"6.5%" }} color="primary" onClick={(e)=>deleteDandleOpen(menu._id)}>
              Delete
            </Button>
          </CardActions>
          </Card>
        ))}
      </Box>
    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
         Are you sure you want to delete the recipe?
        </Typography>
        {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography> */}
        <Button variant="contained" sx={{ bgcolor: "F50303" ,margin:"5%" }} color="primary"  onClick={deleteHaDandle}>
          OK
        </Button>
        <Button variant="contained" sx={{ bgcolor: "F50303" }} color="secondary" onClick={handleClose}>
          Cancel 
        </Button>
      </Box>
      </Modal>

  </>

  );
};

export default Menu;
