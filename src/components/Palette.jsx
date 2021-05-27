import React, { useState } from 'react';
import { CirclePicker } from 'react-color';


const Palette=()=>{
const [background,setBackground]=useState('#fff');

  const handleChangeComplete = (color) => {
    setBackground(color.hex);

  };


    return (
      <CirclePicker
      class="palette"
        color={ background }
        onChangeComplete={ handleChangeComplete }
      />
    );

};
export default Palette;
