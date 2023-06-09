import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { OcrService } from '@ng-resume-parser/frontend/ocr/data-access'

@Component({
  selector: 'ng-resume-parser-ocrparser',
  templateUrl: './ocrparser.component.html',
  styleUrls: ['./ocrparser.component.scss'],
})

export class OcrparserComponent {

  fileBase64: string | ArrayBuffer | null = null;
  result = ""
  loading = false

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
      this.showSnackbar("Invalid File Format. Only JPEGs, JPGs, and PNGs are allowed.", 'Done')
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
    this.fileBase64 = null

    this.showSnackbar("Parsing...", 'Done')

    this.ocrService.parse(formData)
      .subscribe({
        next: (res) => {
          this._passToReader(file)
          this.result = res.body.result
          this.showSnackbar("Finished parsing the input image.", 'Done')
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

    reader.onloadend = () => {
      this.fileBase64 = reader.result
    }

    reader.readAsDataURL(file)
  }

  showSnackbar(content: string, action: string) {
    this.snackBar.open(content, action, { duration: 2000 })
  }

}
