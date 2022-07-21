import fs from "fs";
import { PDFDocument } from "pdf-lib";

const pdfBytes = fs.readFileSync("test.pdf");
const pdfDoc = await PDFDocument.load(pdfBytes, {
  updateMetadata: false,
});

// Print all available metadata fields
console.log("Title:", pdfDoc.getTitle());
console.log("Author:", pdfDoc.getAuthor());
console.log("Subject:", pdfDoc.getSubject());
console.log("Creator:", pdfDoc.getCreator());
console.log("Keywords:", pdfDoc.getKeywords());
console.log("Producer:", pdfDoc.getProducer());
console.log("Creation Date:", pdfDoc.getCreationDate());
console.log("Modification Date:", pdfDoc.getModificationDate());
