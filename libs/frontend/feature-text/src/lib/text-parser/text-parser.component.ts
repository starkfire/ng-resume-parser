import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'ng-resume-parser-text-parser',
  templateUrl: './text-parser.component.html',
  styleUrls: ['./text-parser.component.scss'],
})

export class TextParserComponent {

  fileBuffer = null;

  constructor(private snackBar: MatSnackBar) {}

  onChange(event: Event) {
    // @ts-ignore
    const targetFile = event.target['files'][0]
    const VALID_TYPES = ['application/pdf']

    if (!VALID_TYPES.includes(targetFile.type)) {
      this.showSnackbar("Invalid File Format. Only PDFs are allowed.", 'Done')
      
      return false
    }

    this.showSnackbar("A PDF file has been staged for parsing.", 'Done')
    
    return true
  }

  _handlefile(file: File) {
    const reader = new FileReader()

    reader.onload = (event) => {
      // @ts-ignore
      this.fileBuffer = event.target.result
    }

    reader.readAsArrayBuffer(file)
  }

  runParser() {
    
  }

  showSnackbar(content: string, action: string) {
    this.snackBar.open(content, action, { duration: 2000 })
  }

}
