import React from "react";
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import Input from "@material-ui/core/Input";

const Container = (props) => {


  const print=()=> {
    const input = document.getElementById('page');
   html2canvas(input)
     .then((canvas) => {
       const imgData = canvas.toDataURL('image/png');
       const pdf = new jsPDF();
       pdf.addImage(imgData, 'JPEG', 0, 0);
       // pdf.output('dataurlnewwindow');
       pdf.save("download.pdf");
     })
   ;
	}

// Variant
// This one lets you improve the PDF sharpness by scaling up the HTML node tree to render as an image before getting pasted on the PDF.
// const printq=(quality = 1)=> {
// 		const filename  = "ThisIsYourPDFFilename.pdf";
//
// 		html2canvas(document.querySelector('#page'),
// 								{scale: quality}
// 						 ).then(canvas => {
// 			let pdf = new jsPDF('p', 'mm', 'a4');
// 			pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
// 			pdf.save(filename);
// 		});
// 	}

  return (
    <div className="container-R">
      <div class="page" id="page">
        <div class="template-L">
          <Input id="Full-Name" placeholder="Full Name" style={{margin:'20px'}} />
          <Input id="Preferred-Role" placeholder="Preferred Role" style={{margin:'20px'}} />
          <h3>SKILL</h3>
          <Input id="Skill-1" placeholder="Skill-1" style={{margin:'20px'}} />
          <Input id="Skill-2" placeholder="Skill-2" style={{margin:'20px'}} />
          <Input id="Skill-3" placeholder="Skill-3" style={{margin:'20px'}} />
          <Input id="Skill-4" placeholder="Skill-4" style={{margin:'20px'}} />
          <Input id="Skill-5" placeholder="Skill-5" style={{margin:'20px'}} />
          <Input id="Skill-6" placeholder="Skill-6" style={{margin:'20px'}} />
          <h3>EDUCATION</h3>
          <Input id="Edu-1" placeholder="Edu-1" style={{margin:'20px'}} />
          <Input id="Edu-2" placeholder="Edu-2" style={{margin:'20px'}} />
          <Input id="Edu-3" placeholder="Edu-3" style={{margin:'20px'}} />
        </div>
        <div class="template-R">
          <Input id="Short-Intro" placeholder="Short Intro" style={{margin:'20px'}} />
          <h3>WORK EXPERIENCE</h3>
          <Input id="workExp-1" placeholder="workExp-1" style={{margin:'20px'}} />
          <Input id="workExp-2" placeholder="workExp-2" style={{margin:'20px'}} />
          <Input id="workExp-3" placeholder="workExp-3" style={{margin:'20px'}} />
          <Input id="workExp-4" placeholder="workExp-4" style={{margin:'20px'}} />
          <h3>ACHIEVEMENTS</h3>
          <Input id="Achievement-1" placeholder="Achievement-1" style={{margin:'20px'}} />
          <Input id="Achievement-2" placeholder="Achievement-2" style={{margin:'20px'}} />
          <Input id="Achievement-3" placeholder="Achievement-3" style={{margin:'20px'}} />
          <Input id="Achievement-4" placeholder="Achievement-4" style={{margin:'20px'}} />
          <button onClick={print}>pdf</button>
        </div>
      </div>
    </div>
  );
};

export default Container;
