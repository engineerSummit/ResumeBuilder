import React from "react";

import TextField from "@material-ui/core/TextField";

const Container = () => {
  return (
    <div className="container-R">
      <div class="page">
        <div class="template-L">
          <TextField id="Full-Name" label="Full Name" variant="outlined" />
          <TextField id="Preferred-Role" label="Preferred Role" variant="outlined" />
          <TextField id="Short-Intro" label="Short Intro" variant="outlined" />
        </div>
        <div class="template-R"></div>
      </div>
    </div>
  );
};

export default Container;
