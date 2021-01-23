import React from "react";

function Documents(props) {
  return (
    <div class="card2 show ml-2">
      <div class="row px-3 mt-3 mb-4">
        <div class="col-sm-6">
          <label>Floor Plan</label>
          <input type="file" class="form-control" name="floor_plan" placeholder="Floor Plan" />
        </div>
        <div class="col-sm-6">
          <label>Last Uploaded Floor Plan</label> <br />
          <a href="#">Download Floor Plan</a>
        </div>
      </div>
      <div class="row px-3 mt-3 mb-4">
        <div class="col-sm-6">
          <label>Survey Plan</label>
          <input type="file" class="form-control" name="survey_plan" placeholder="Survey Plan" />
        </div>
        <div class="col-sm-6">
          <label>Last Uploaded Survey Plan</label> <br />
          <a href="#">Download Survey Plan</a>{" "}
        </div>
      </div>
    </div>
  );
}

export default Documents;
