import { Component } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})

export class TextComponent {

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
