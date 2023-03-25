import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { OcrService } from '@ng-resume-parser/frontend/ocr/data-access'

@Component({
  selector: 'ng-resume-parser-ocrparser',
  templateUrl: './ocrparser.component.html',
  styleUrls: ['./ocrparser.component.scss'],
})

export class OcrparserComponent {

  result = ""

  constructor(
    private snackBar: MatSnackBar,
    private ocrService: OcrService
  ) {}

  onChange(event: Event) {
    // @ts-ignore
    const targetFile: File = event.target['files'][0]
    const VALID_TYPES: string[] = [
      'image/jpg',
      'image/jpeg',
      'image/png'
    ]

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

    this.ocrService.parse(formData)
      .subscribe({
        next: (res) => {
          // this._passToReader(file)
          console.log(res)
          this.result = res.body.result
        },
        error: (err) => {
          this.showSnackbar("An Unknown Error Occurred", 'Done')
        },
        complete: () => {
          this.showSnackbar("A PDF file has been staged for parsing.", 'Done')
        }
      })
  }

  showSnackbar(content: string, action: string) {
    this.snackBar.open(content, action, { duration: 2000 })
  }

}
