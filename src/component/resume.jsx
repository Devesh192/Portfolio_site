import React from 'react'
// import PdfViewerComponent from './PdfViewerComponent'
import dev from "../asset/dev.pdf"; // Import your image
import {ReactPDF} from 'react' 
function Resume() {
  return (
    <div>
      <div className="PDF-viewer  ">
          <iframe src={dev} width="100%" height="500px" />
      </div>
    </div>
  )
}

export default Resume