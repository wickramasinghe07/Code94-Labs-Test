import React from "react";
import Layout from "./../Components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpeg";
import "../styles/HomeStyles.css";
import { Divider } from "@mui/material";
import Menu from "../pages/Menu"

const Home = () => {
  const dividerStyle = {
    margin: '65px ',
    borderBottom: '3px solid #000', // Adjust border thickness here
  };
   <Divider sx={{fontSize:"0px"}}/>
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>R E C I P E S  C O O K</h1>
          <p>Best Food In</p>
          <Link to="/add">
            <button>ADD RECIPES</button>
          </Link>
        </div>
        <div className="devider">
        
         
           <div>
           <Divider style={dividerStyle}/>
           <h1 style={{textAlign:"center"}}>Our Recipies</h1>
           </div>
        <div >
          <div>
          <Menu/>
          </div>
       </div>

        </div>
      </div>
    </Layout>
  );
};

export default Home;