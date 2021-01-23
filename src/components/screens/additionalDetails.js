import React from "react";

const Additionaldetails = props => {
  return (
    <div className="card2 show ml-2">
      <div className="row px-3 mt-3 mb-4">
        <div className="col-sm-12">
          <textarea className="form-control" name="additional" rows="6" required>
            {" "}
          </textarea>
        </div>
      </div>
      <div className="row px-3 mt-3">
        <div className="text-center mt-3 ml-2">
          <button type="submit" value="submit" className="submitButton">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Additionaldetails;
