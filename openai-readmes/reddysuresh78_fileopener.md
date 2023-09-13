# cap-pdf-file-opener

This plugin is built on capacitor platform to open PDF files on android devices

Usage:
npm i cap-file-opener

this is sample code that generates pdf using pdfmake and opens it using this plugin

      const fileName = 'file.pdf';
      try {

        pdfmake.vfs = pdfFonts.pdfMake.vfs;

        const doc = pdfmake.createPdf({ content: 'Hi. I am a PDF.' });
        doc.getBase64((base64data) => {

          Filesystem.writeFile({
            path: fileName,
            data: base64data,
            directory: FilesystemDirectory.External

          }).then((writeFileResult) => {
            Filesystem.getUri({
              directory: FilesystemDirectory.External,
              path: fileName
            }).then((getUriResult) => {

              const path = getUriResult.uri;

              Plugins.CapFileOpener.open({ filePath: path.substr(7), fileMediaType: 'application/pdf' });

            }, (error) => {
              console.error('Error while opening pdf', error);
            });
          });
        });
        } catch (error) {
        console.error('Unable to write file', error);
      }

In the generated android project, in Mainactivity.java, add the following line.

public void onCreate(Bundle savedInstanceState) {
super.onCreate(savedInstanceState);

    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      add(CapFileOpener.class);
    }});
