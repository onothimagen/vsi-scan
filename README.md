# vsi-scan

V0.1 

Creates pages/posters for OUP Very Short Introductions titles.

Uses a fixed list of the 500-odd ebook titles and their URLs at the publisher's
website.

Will then

1) retrieve the cover image of the title from the OUP website
2) create a QR code that links to the mobile version of the title
3) display them in an HTML template that can be printed and displayed

The HTML page randomly displays a title on load and reloads after 
[two minutes?] so it could be used on a kiosk display.

The URL of the cover image and of the ebook content is created
from its publisher ID and the publisher's website URL structure. 
This could change at any time.

Use of the full links was superseded by use of a Link Shortener
service, but code for creating both short and long URLs may still be 
around.

The QR Code service could be a risk.

Things to do:

- It would be a lot more efficient if I cache the QR codes and cover 
  images. 
- No auto support for new titles added to the series, though adding 
  new titles to the big lists in vsi.js isn't hard.
  
 

See it all working at: <a href="https://onothimagen.github.io/vsi-scan/">https://onothimagen.github.io/vsi-scan/</a>

