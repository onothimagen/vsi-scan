# vsi-scan
Create labels with QR codes for OUP VSI titles

A bunch of very basic Javascript that
uses a list of OUP VSI identifiers to
1) retrieve the cover image of the title from the OUP website
2) create a QR code that links to the mobile version of the title
3) display them in an HTML template that can be printed and displayed

The HTML page randomly displays a title on load and reloads after 
[two minutes?] so it could be used on a kiosk display.

