import React from "react";
import Card from "../Card/Card";
import ProductList from "../ProductList/ProductList";
import { useState,useEffect } from "react";

function Home() {

  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isIdealForOpen, setIsIdealForOpen] = useState(true);
  const [isOccasionOpen, setIsOccasionOpen] = useState(false);
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const [isFabricOpen, setIsFabricOpen] = useState(false);
  const [isSegmentOpen, setIsSegmentOpen] = useState(false);
  const [isSuitableForOpen, setIsSuitableForOpen] = useState(false);

  // Toggling the sidebar visibility
  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

 

  return (
      <div className="App">
          <div className="main-layout">
              {/* Sidebar */}
              <div>
      {/* Button to hide/show the entire sidebar */}
      <button className="toggle-sidebar-btn" onClick={toggleSidebar}>
        {isSidebarVisible ? 'HIDE FILTER' : 'SHOW FILTER'}
      </button>

      {/* Sidebar */}
      {isSidebarVisible && (
        <aside className="filter-sidebar">
          <h3>3425 Items</h3>

          {/* Customizable */}
          <div className="filter-section">
            <input type="checkbox" id="customizable" name="customizable" />
            <label htmlFor="customizable">Customizable</label>
          </div>

          {/* Ideal For */}
          <div className="filter-section">
            <h4 onClick={() => setIsIdealForOpen(!isIdealForOpen)}>
              IDEAL FOR {isIdealForOpen ? '▲' : '▼'}
            </h4>
            {isIdealForOpen && (
              <ul>
                <li>
                  <input type="checkbox" id="men" name="men" />
                  <label htmlFor="men">Men</label>
                </li>
                <li>
                  <input type="checkbox" id="women" name="women" />
                  <label htmlFor="women">Women</label>
                </li>
                <li>
                  <input type="checkbox" id="baby" name="baby" />
                  <label htmlFor="baby">Baby & Kids</label>
                </li>
              </ul>
            )}
          </div>

          {/* Occasion */}
          <div className="filter-section">
            <h4 onClick={() => setIsOccasionOpen(!isOccasionOpen)}>
              OCCASION {isOccasionOpen ? '▲' : '▼'}
            </h4>
            {isOccasionOpen && (
              <ul>
                <li>
                  <input type="checkbox" id="occasion-all" name="occasion-all" />
                  <label htmlFor="occasion-all">All</label>
                </li>
              </ul>
            )}
          </div>

          {/* Work */}
          <div className="filter-section">
            <h4 onClick={() => setIsWorkOpen(!isWorkOpen)}>
              WORK {isWorkOpen ? '▲' : '▼'}
            </h4>
            {isWorkOpen && (
              <ul>
                <li>
                  <input type="checkbox" id="work-all" name="work-all" />
                  <label htmlFor="work-all">All</label>
                </li>
              </ul>
            )}
          </div>

          {/* Fabric */}
          <div className="filter-section">
            <h4 onClick={() => setIsFabricOpen(!isFabricOpen)}>
              FABRIC {isFabricOpen ? '▲' : '▼'}
            </h4>
            {isFabricOpen && (
              <ul>
                <li>
                  <input type="checkbox" id="fabric-all" name="fabric-all" />
                  <label htmlFor="fabric-all">All</label>
                </li>
              </ul>
            )}
          </div>

          {/* Segment */}
          <div className="filter-section">
            <h4 onClick={() => setIsSegmentOpen(!isSegmentOpen)}>
              SEGMENT {isSegmentOpen ? '▲' : '▼'}
            </h4>
            {isSegmentOpen && (
              <ul>
                <li>
                  <input type="checkbox" id="segment-all" name="segment-all" />
                  <label htmlFor="segment-all">All</label>
                </li>
              </ul>
            )}
          </div>

          {/* Suitable For */}
          <div className="filter-section">
            <h4 onClick={() => setIsSuitableForOpen(!isSuitableForOpen)}>
              SUITABLE FOR {isSuitableForOpen ? '▲' : '▼'}
            </h4>
            {isSuitableForOpen && (
              <ul>
                <li>
                  <input type="checkbox" id="suitable-all" name="suitable-all" />
                  <label htmlFor="suitable-all">All</label>
                </li>
              </ul>
            )}
          </div>
        </aside>
      )}
    </div>
 
               {/* Product List */}
               <ProductList />
             
          </div>
      </div>
  );
}

export default Home;
