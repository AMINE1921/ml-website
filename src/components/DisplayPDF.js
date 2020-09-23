import React from "react";
import { Document, Page } from "react-pdf";

const DisplayPDF = (props) => {
  const { pdf } = props;
  return (
    <>
      <Document
        file={pdf}
        options={{ workerSrc: "pdf.worker.js" }}
      >
        <Page pageNumber={1} />
      </Document>
    </>
  );
}

export default DisplayPDF;