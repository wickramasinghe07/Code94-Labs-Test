import React from "react";
import Layout from "./../Components/Layout/Layout";
import { Box, Typography } from "@mui/material";


const About = () => {
  return (
    <Layout>
      
      <Box
      
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "center",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome to Code94</Typography>
        <p>
        At Code94, we're more than just a restaurant; we're a culmination of passion, flavor, and community. 
        Our journey began with a simple yet profound idea: to create a space where culinary artistry meets an inviting ambiance, and where every dish tells a story.
        </p>
        <br />
        <Typography variant="h4">Our Story</Typography>
        <p>
        In the heart of Colombo, nestled among the vibrant streets, 
        Code94 emerged from a shared love for exceptional food and a desire to craft a unique dining experience. 
        Inspired by the fusion of international flavors and local charm, we embarked on a culinary adventure to curate a menu that speaks to the diversity of tastes and palates.
        </p>
        <Typography variant="h4">Our Philosophy</Typography>
        <p>
        We believe in the power of culinary innovation, using only the freshest, locally-sourced ingredients to create dishes that delight and inspire. Each plate that leaves our kitchen embodies our commitment to quality, creativity, and a dedication to our guests' satisfaction.
        </p>
        <Typography variant="h4">Our Team</Typography>
        <p>
        Behind every dish is a team of passionate individuals, from our skilled chefs who meticulously craft each recipe to our warm and attentive staff dedicated to ensuring your time with us is nothing short of exceptional.
        </p>
        <Typography variant="h4">Community and Beyond</Typography>
        <p>
        Beyond serving delectable meals, we are committed to being an integral part of the community. We cherish every opportunity to contribute and engage, whether through supporting local producers or participating in community events that bring people together.
        </p>
        <Typography variant="h4">Join Us</Typography>
        <p>
        We invite you to embark on this culinary journey with us, where every bite is a testament to our dedication to the art of food. Come, savor the flavors, share moments, and create lasting memories at Code94.
        </p>
      </Box>
    </Layout>
  );
};

export default About;