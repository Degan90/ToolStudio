import React from "react";
import Search from "../Search/Search";
import tool from "../img/tool.png";
import { Link } from "react-router-dom";

const functions = [
  {title:'pdf converter',
  description:"This tool converts the format of your images Key Features #pdf #converter"},
  {title:'pdf converter',
  description:"This tool converts the format of your images Key Features #pdf #converter"},
  {title:'pdf converter',
  description:"This tool converts the format of your images Key Features #pdf #converter"},
  {title:'pdf converter',
  description:"This tool converts the format of your images Key Features #pdf #converter"},
]




function Home(props) {
  return (
    <div className="home">
      <h2>What are your looking for?</h2>
      <Search />

      <div>
        <div className="category">
          <h7>pdf</h7>
        </div>
        <div className="tools">
          {functions.map((func)=>{
            return(
          <Link to={`/function`}>
            <div className="tool">
              <div className="toolImage">
                <img className="img" src={tool} />
              </div>
              <div className="des">
                <h6>{func.title}</h6>
                <p>
                  {func.description}
          
                </p>
              </div>
            </div>
          </Link>

            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
