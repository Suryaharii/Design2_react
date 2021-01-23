import React from "react";

const Owners = props => {
  return (
    <div class="card2 show ml-2">
      <div class="row px-3 mt-3">
        <div class="col-sm-3">
          <label>First Owner Name</label>
          <input type="text" class="form-control" name="first_owner" placeholder="First Owner Name" />
        </div>
        <div class="col-sm-3">
          <label>Second Owner Name</label>
          <input type="text" class="form-control" name="second_owner" placeholder="Second Owner Name" />
        </div>
        <div class="col-sm-3">
          <label>Third Owner Name</label>
          <input type="text" class="form-control" name="third_owner" placeholder="Third Owner Name" />
        </div>
        <div class="col-sm-3">
          <label>Fourth Owner Name</label>
          <input type="text" class="form-control" name="fourth_owner" placeholder="Fourth Owner Name" />
        </div>
      </div>
    </div>
  );
};

export default Owners;
