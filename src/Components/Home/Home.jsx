import React, { useState } from "react";
import ProductList from "../ProductList/ProductList";

function Home() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isIdealForOpen, setIsIdealForOpen] = useState(false);
  const [isOccasionOpen, setIsOccasionOpen] = useState(false);
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const [isFabricOpen, setIsFabricOpen] = useState(false);
  const [isSegmentOpen, setIsSegmentOpen] = useState(false);
  const [isSuitableForOpen, setIsSuitableForOpen] = useState(false);

  // Toggling the sidebar visibility
  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);



//RECOMMEND DROPDOWN
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("RECOMMENDED");

  const options = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE : HIGH TO LOW",
    "PRICE: LOW TO HIGH"
  ];




  

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div className="App">
      <div className="main-layout">
        <div className="filter-recommend-wrapper">
          {/* Button and RECOMMEND in the same div */}
          <button className="toggle-sidebar-btn" onClick={toggleSidebar}>
            <b>
              <h3 className="toggle-sidebar-static">3425 Items &gt;&gt;</h3>
            </b>
            {isSidebarVisible ? "HIDE FILTER" : "SHOW FILTER"}
          </button>
          
          <div className="dropdown-wrapper">
      <button onClick={toggleDropdown} className="dropdown-btn">
        {selectedOption} &#x25BC; {/* Down arrow */}
      </button>

      {isDropdownOpen && (
        <ul className="dropdown-list">
          {options.map((option) => (
            <li
              key={option}
              className="dropdown-item"
              onClick={() => handleOptionSelect(option)}
            >
              {option} {selectedOption === option && "✔"}
            </li>
          ))}
        </ul>
      )}
    </div>

        </div>

        <div className="content-wrapper">
          {/* Show sidebar and product list in the same div */}
          {isSidebarVisible && (
            <aside className="filter-sidebar">
              {/* Customizable */}
              <div className="filter-section">
                <input type="checkbox" id="customizable" name="customizable" />
                <label htmlFor="customizable">CUSTOMIZBLE</label>
              </div>

              {/* Ideal For */}
              <div className="filter-section">
                <div onClick={() => setIsIdealForOpen(!isIdealForOpen)}>
                  IDEAL FOR <div>{isIdealForOpen ? "▲" : "▼"}</div>
                </div>
                {isIdealForOpen && (
                  <ul>
                    <li>
                      <input type="checkbox" id="men" name="men" />
                      <label htmlFor="men" className="drop-label">
                        Men
                      </label>
                    </li>
                    <li>
                      <input type="checkbox" id="women" name="women" />
                      <label htmlFor="women" className="drop-label">
                        Women
                      </label>
                    </li>
                    <li>
                      <input type="checkbox" id="baby" name="baby" />
                      <label htmlFor="baby" className="drop-label">
                        Baby & Kids
                      </label>
                    </li>
                  </ul>
                )}
              </div>

              {/* Occasion */}
              <div className="filter-section">
                <div onClick={() => setIsOccasionOpen(!isOccasionOpen)}>
                  OCCASION <div>{isOccasionOpen ? "▲" : "▼"}</div>
                </div>
                {isOccasionOpen && (
                  <ul>
                    <li>
                      <input
                        type="checkbox"
                        id="occasion-all"
                        name="occasion-all"
                      />
                      <label htmlFor="occasion-all" className="drop-label">
                        All
                      </label>
                    </li>
                  </ul>
                )}
              </div>

              {/* Work */}
              <div className="filter-section">
                <div onClick={() => setIsWorkOpen(!isWorkOpen)}>
                  WORK <div>{isWorkOpen ? "▲" : "▼"}</div>
                </div>
                {isWorkOpen && (
                  <ul>
                    <li>
                      <input type="checkbox" id="work-all" name="work-all" />
                      <label htmlFor="work-all" className="drop-label">
                        All
                      </label>
                    </li>
                  </ul>
                )}
              </div>

              {/* Fabric */}
              <div className="filter-section">
                <div onClick={() => setIsFabricOpen(!isFabricOpen)}>
                  FABRIC <div>{isFabricOpen ? "▲" : "▼"}</div>
                </div>
                {isFabricOpen && (
                  <ul>
                    <li>
                      <input
                        type="checkbox"
                        id="fabric-all"
                        name="fabric-all"
                      />
                      <label htmlFor="fabric-all" className="drop-label">
                        All
                      </label>
                    </li>
                  </ul>
                )}
              </div>

              {/* Segment */}
              <div className="filter-section">
                <div onClick={() => setIsSegmentOpen(!isSegmentOpen)}>
                  SEGMENT <div>{isSegmentOpen ? "▲" : "▼"}</div>
                </div>
                {isSegmentOpen && (
                  <ul>
                    <li>
                      <input
                        type="checkbox"
                        id="segment-all"
                        name="segment-all"
                      />
                      <label htmlFor="segment-all" className="drop-label">
                        All
                      </label>
                    </li>
                  </ul>
                )}
              </div>

              {/* Suitable For */}
              <div className="filter-section">
                <div onClick={() => setIsSuitableForOpen(!isSuitableForOpen)}>
                  SUITABLE FOR <div>{isSuitableForOpen ? "▲" : "▼"}</div>
                </div>
                {isSuitableForOpen && (
                  <ul>
                    <li>
                      <input
                        type="checkbox"
                        id="suitable-all"
                        name="suitable-all"
                      />
                      <label htmlFor="suitable-all" className="drop-label">
                        All
                      </label>
                    </li>
                  </ul>
                )}
              </div>
            </aside>
          )}

          {/* Product List */}
          <div
            className={`product-list-wrapper ${isSidebarVisible ? "" : "no-sidebar"}`}
          >
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
