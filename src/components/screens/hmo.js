import React from "react";

const Hmo = props => {
  return (
    <div class="card2 show ml-2">
      <div class="row px-3 mt-4">
        <div class="col-sm-3">
          <label>Space | Name</label>
          <input type="text" class="form-control" name="space_name" placeholder="Name" />
        </div>
        <div class="col-sm-6">
          <label>Space | Description</label>
          <input type="text" class="form-control" name="space_desc" placeholder="Description" />
        </div>
        <div class="col-sm-3">
          <label></label>
          <span>
            <i
              class="fa fa-plus"
              style={{
                color: "#cc0000",
                fontSize: "20px",
                marginTop: "40px",
                width: "35px",
                height: "30px"
              }}
            ></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hmo;
