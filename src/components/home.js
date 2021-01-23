import House from "./screens/house";
import Hmo from "./screens/hmo";
import Owners from "./screens/owners";
import Hoa from "./screens/hoa";
import Documents from "./screens/documents";
import Realtor from "./screens/realtor";
import { useState } from "react";
import AdditionalDetails from "./screens/additionalDetails";

let index = 0;
const Home = () => {
  const [screen, setScreen] = useState("house");
  const screens = ["house", "hmo", "owner", "ha", "document", "realtor", "additionalDetails"];

  const screenHandler = type => {
    if (type === "next") {
      screens.map((sc, i) => {
        if (sc === screen) index = i + 1;
      });
      setScreen(screens[index]);
      return;
    }

    screens.map((sc, i) => {
      if (sc === screen) index = i - 1;
    });
    setScreen(screens[index]);
  };

  return (
    <>
      <div className="container-fluid px-1 px-md-4 py-5 mx-auto">
        <div className="row d-flex justify-content-center">
          <div className="col-12">
            <div className="card card0 border-0">
              <div className="row">
                <div className="col-12">
                  <div className="card card00 m-2 border-0">
                    <div className="row text-center justify-content-center heading-div px-3">
                      {screen !== "house" ? (
                        <p onClick={() => screenHandler("back")} id="back" className="prev text-danger">
                          <span> Go Back</span>
                        </p>
                      ) : null}
                      <h3 className="mt-4">HOUSE DETAILS</h3>
                    </div>

                    <hr />
                    <form action="index.php" method="post">
                      <div className="d-flex flex-md-row px-3 mt-4 flex-column-reverse">
                        <div className="col-md-3">
                          <div className="card1">
                            <ul id="progressbar" className="text-center">
                              <li className={`step0 ${index >= 0 ? "active" : ""}`}></li>
                              <li className={`step0 ${index >= 1 ? "active" : ""}`}></li>
                              <li className={`step0 ${index >= 2 ? "active" : ""}`}></li>
                              <li className={`step0 ${index >= 3 ? "active" : ""}`}></li>
                              <li className={`step0 ${index >= 4 ? "active" : ""}`}></li>
                              <li className={`step0 ${index >= 5 ? "active" : ""}`}></li>
                              <li className={`step0 ${index >= 6 ? "active" : ""}`}></li>
                            </ul>
                            <h6 className="mb-5">HOUSE DETAILS</h6>
                            <h6 className="mb-5">HMO SPACES</h6>
                            <h6 className="mb-5">OWNERS</h6>
                            <h6 className="mb-5">HOA DETAILS</h6>
                            <h6 className="mb-5">DOCUMENTS</h6>
                            <h6 className="mb-5">REALTOR DETAILS</h6>
                            <h6 className="mb-5"> ADDITIONAL DETAILS </h6>
                          </div>
                        </div>
                        <div className="col-md-9">
                          {screen === "house" ? (
                            <House />
                          ) : screen === "hmo" ? (
                            <Hmo />
                          ) : screen === "owner" ? (
                            <Owners />
                          ) : screen === "ha" ? (
                            <Hoa />
                          ) : screen === "document" ? (
                            <Documents />
                          ) : screen === "realtor" ? (
                            <Realtor />
                          ) : screen === "additionalDetails" ? (
                            <AdditionalDetails />
                          ) : null}

                          {screen !== "additionalDetails" ? (
                            <div className="row px-3 mt-4">
                              <div onClick={() => screenHandler("next")} className="next-button text-center mt-1 ml-2">
                                <span>Next</span>
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

// <li className={`${screen === "house" ? "active" : ""} step0`}></li>
//                               <li className={`${screen === "hmo" ? "active" : ""} step0`}></li>
//                               <li className={`${screen === "owner" ? "active" : ""} step0`}></li>
//                               <li className={`${screen === "ha" ? "active" : ""} step0`}></li>
//                               <li className={`${screen === "document" ? "active" : ""} step0`}></li>
//                               <li className={`${screen === "realtor" ? "active" : ""} step0`}></li>
//                               <li className={`${screen === "" ? "active" : ""} step0`}></li>
