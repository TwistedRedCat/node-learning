const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const pdfDoc = new PDFDocument();

exports.createPDF = (filePath) => {
  pdfDoc.pipe(fs.createWriteStream(filePath));
  pdfDoc.text('Harlo!');
  pdfDoc.end();
}

