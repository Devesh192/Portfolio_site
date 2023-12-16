import React from 'react'
// import PdfViewerComponent from './PdfViewerComponent'
import dev from "../asset/dev.pdf"; // Import your image
import {ReactPDF} from 'react' 
import Layout from './Layout';
function Resume() {
  return (
    // <div>
    //   <div className="PDF-viewer  ">
    //       <iframe src={dev} width="100%" height="h-screen" />
    //   </div>
    // </div>
    <Layout>
      <div className="PDF-viewer w-full h-screen">
        <object data={dev} type="application/pdf" width="100%" height="100%">
        </object>
      </div>
    </Layout>
  )
}

export default Resume