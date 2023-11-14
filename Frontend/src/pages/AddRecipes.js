import React from "react";
import Layout from "./../Components/Layout/Layout";
import { Box, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AddRecipesPage = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginTop: "80px",
});

const FormContainer = styled(Box)({
  backgroundColor: "#1111",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(2, 2, 0, 0.2)", // Updated shadow effect
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "600px",
});

const TextFieldStyled = styled(TextField)({
  marginBottom: "20px",
  width: "80%",
});

const AddButton = styled(Button)({
  backgroundColor: "#121619",
  color: "white",
  width: "50%",
  marginTop: "10px",
});

const AddImageInput = styled("input")({
  display: "none",
});

const AddImageLabel = styled("label")({
  marginBottom: "20px",
  width: "80%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid #ccc",
  borderRadius: "5px",
  padding: "10px",
  cursor: "pointer",
  backgroundColor: "#1111",
});

const AddRecipes = () => {
  const navigate = useNavigate();
  const [error, setError] = React.useState({ field: "", message: "" });
  const [postPayload, setPostPayload] = React.useState({
    recipeName: "",
    ingredients: "",
    description: "",
    image: "",
  });
 
  const onChangeInput = (e) => {
    setError({ field: "", message: "" });
    setPostPayload({
      ...postPayload,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/recipe/create",
        postPayload
      );
       toast.success(response.data.message);
       setTimeout(() => {
         navigate ("/"); 
      }, 4000);
       
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleImageChange = async (e) => {
    
    e.preventDefault();
    try {
      const file = e.target.files[0];
      if (!file) return alert("File not exist.");
      if (file.size > 1024 * 1024)
        // 1mb
        return alert("Size too large!");
      if (file.type !== "image/jpeg" && file.type !== "image/png")
        // 1mb
        return alert("File format is incorrect.");
      let formData = new FormData();
      formData.append("file", file);
      
      const res = await axios.post(
        "http://localhost:5000/api/imageUpload",
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      );
      setPostPayload({
        ...postPayload,
        image: res.data.url,
      });
      toast.success(res.data.message);
    } catch (err) {
      toast.error(err.response.data.msg);
    }
  };


  return (
    <Layout>
      <ToastContainer />
      <AddRecipesPage align= "center">
        <FormContainer>
          <h1>Add Recipes</h1>
          <form>
            {postPayload.image ?(
            <>
            <img
                  alt="post"
                  src={postPayload.image}
                  style={{ height:"20%", width: "50%", objectFit: "cover" }}
                />
            </>
            ):(
            <>
              <AddImageLabel htmlFor="image-input">
              Add Image
              <AddImageInput id="image-input" type="file" onChange={handleImageChange}/>
            </AddImageLabel>
            </>
            )
              }
            <TextFieldStyled
              label="Recipe Name"
              variant="outlined"
              name="recipeName"
              onChange={(e) => onChangeInput(e)}
            />
            <TextFieldStyled
              label="You will need"
              variant="outlined"
              name="ingredients"
              onChange={(e) => onChangeInput(e)}
            />
            <TextFieldStyled
              label="Let’s make it"
              variant="outlined"
              multiline
              rows={4}
              name="description"
              onChange={(e) => onChangeInput(e)}
            />
            <AddButton variant="contained" onClick={onSubmit}>Add Recipe</AddButton>
          </form>
        </FormContainer>
      </AddRecipesPage>
    </Layout>
  );
};

export default AddRecipes;
