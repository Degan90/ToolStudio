import React from "react";
import Search from "../Search/Search";
import tool from "../img/tool.png";
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
          <div className="tool">
            <div className="toolImage">
              <img className="img" src={tool} />
            </div>

            <div className="des">
              <h6>pdf converter</h6>
              <p>
                This tool converts the format of your images Key Features <br />
                #pdf #converter
              </p>
            </div>
          </div>
          <div className="tool">
            <div className="toolImage">
              <img className="img" src={tool} />
            </div>

            <div className="des">
              <h6>pdf converter</h6>
              <p>
                This tool converts the format of your images Key Features <br />
                #pdf #converter
              </p>
            </div>
          </div>
          <div className="tool">
            <div className="toolImage">
              <img className="img" src={tool} />
            </div>

            <div className="des">
              <h6>pdf converter</h6>
              <p>
                This tool converts the format of your images Key Features <br />
                #pdf #converter
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
