import React from "react";

function Realtor(props) {
  return (
    <div class="card2 show ml-2">
      <div class="row px-3 mt-3 mb-4">
        <div class="col-sm-4">
          <label>Realtor Name</label>
          <input type="text" class="form-control" name="realtor_name" placeholder="Realtor Name" />
        </div>

        <div class="col-sm-4">
          <label>Realtor Phone No</label>
          <input type="text" class="form-control" name="realtor_phone" placeholder="Realtor Phone No" />
        </div>

        <div class="col-sm-4">
          <label>Realtor Email</label>
          <input type="text" class="form-control" name="realtor_email" placeholder="Realtor Email" />
        </div>
      </div>
    </div>
  );
}

export default Realtor;
