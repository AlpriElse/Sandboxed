from cgi import print_directory
import pprint
from PyPDF2 import PdfReader

reader = PdfReader("../test.pdf")

for page in reader.pages:
  if "/Annots" in page:
    for annot in page["/Annots"]:
      obj = annot.get_object()
      annotation = {"subtype": obj["/Subtype"], "location": obj["/Rect"]}

      isHighlightAnnotation = obj['/Subtype'] == '/Highlight'

      if isHighlightAnnotation:
        print(obj)