import { Component } from '@angular/core';

@Component({
  selector: 'app-ocr',
  templateUrl: './ocr.component.html',
  styleUrls: ['./ocr.component.scss']
})

export class OcrComponent {
  
  fileBuffer = null;

  onChange(event: Event) {
    const targetFile = event.target['files'][0]
    this._handleFile(targetFile)
  }

  _handleFile(file: File) {
    const reader = new FileReader()

    reader.onload = (event) => {
      this.fileBuffer = event.target.result

      console.log(this.fileBuffer)
    }

    reader.readAsArrayBuffer(file)
  }

}
