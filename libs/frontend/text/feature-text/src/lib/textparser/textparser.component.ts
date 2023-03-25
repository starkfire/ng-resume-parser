import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { TextService } from '@ng-resume-parser/frontend/text/data-access'

@Component({
  selector: 'ng-resume-parser-textparser',
  templateUrl: './textparser.component.html',
  styleUrls: ['./textparser.component.scss'],
})

export class TextparserComponent {

  fileBuffer: string | object | Uint8Array | null = null;
  result = "";
  loading = false;

  constructor(
    private snackBar: MatSnackBar,
    private textService: TextService
  ) {}

  onChange(event: Event) {
    // @ts-ignore
    const targetFile: File = event.target['files'][0]
    const VALID_TYPES: string[] = ['application/pdf']

    if (!VALID_TYPES.includes(targetFile.type)) {
      this.showSnackbar("Invalid File Format. Only PDFs are allowed.", 'Done')
      return false
    }

    if (targetFile) {
      this._upload(targetFile)
    }
    
    return true
  }

  _upload(file: File) {
    const formData = new FormData()

    formData.append('resume', file)

    this.loading = true

    this.showSnackbar("Parsing...", 'Done')

    this.textService.parse(formData)
      .subscribe({
        next: (res) => {
          this._passToReader(file)
          this.result = res.body.result

          this.showSnackbar("Finished parsing the input file.", 'Done')
        },
        error: (err) => {
          this.showSnackbar("An Unknown Error Occurred", 'Done')
        },
        complete: () => {
          this.loading = false
        }
      })
  }

  _passToReader(file: File) {
    const reader = new FileReader()

    reader.onload = (event) => {
      if (event.target) {
        this.fileBuffer = event.target.result || ""
      }
    }

    reader.readAsArrayBuffer(file)
  }

  showSnackbar(content: string, action: string) {
    this.snackBar.open(content, action, { duration: 2000 })
  }

}
