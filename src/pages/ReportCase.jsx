// import React from 'react';
// import { Preview, print } from 'react-html2pdf';
// import template from '../email-templates/reportCase.html';

// function ReportCase() {
//   <div>
//     <Preview id="html-template" html={template} />
//     <button onClick={() => print('a', 'html-template')}> print</button>
//     <Preview id="jsx-template">
//       <p>adsf</p>
//     </Preview>
//     <button onClick={() => print('a', 'jsx-template')}> print</button>
//   </div>;
// }

// export default ReportCase;

/* eslint-disable new-cap */
import React from 'react';
import html2pdf from 'html2pdf.js';
// import logo from '../images/svg/logo.svg';
// import jsPDF from 'jspdf';

function ReportCase() {
  const showPdf = () => {
    html2pdf()
      .from(
        `
        <div style="color:#FF3355;">
          <h1 style="color:#0F3041;">TITULOoo</h1>
        </div>`,
      )
      .save();
  };

  return (
    <>
      <button onClick={showPdf}>CLICK</button>
    </>
  );
}

export default ReportCase;

// import React from 'react';
// import {
//   Document, Page, Text, View, StyleSheet, PDFViewer,
// } from '@react-pdf/renderer';

// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'row',
//   },
//   section: {
//     flexGrow: 1,
//   },
// });

// function ReportCase() {
//   return (
//     <PDFViewer height="100vh" width="100%">
//       <Document>
//         <Page size="A4" style={styles.page}>
//           <View style={styles.section}>
//             <div className="d-flex flex-column">
//               <img src="./img/svg/logo.svg" alt="logo" />
//               <img src="./img/banner-reporte.png" alt="banner" />
//             </div>
//           </View>
//           <View style={styles.section}>
//             <Text>Were inside a PDF!</Text>
//           </View>
//         </Page>
//       </Document>
//     </PDFViewer>
//   );
// }

// export default ReportCase;
