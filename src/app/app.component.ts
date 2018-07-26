import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app';

  htmlField = new FormControl('');
  cssField = new FormControl('');
  jsField = new FormControl('');

  allFields = new FormGroup({
    HTML: new FormControl(''),
    CSS: new FormControl(''),
    JS: new FormControl('')
  });

  preview;

  ngOnInit() {

    this.allFields.valueChanges.subscribe((e) => {
      this.renderChanges();
    });

    this.preview = document.getElementById('preview');

  }

  cancelKeys(e) {

    let judgement = true;

    // Cancelar Tab
    judgement = this.tabCancel(e);


    // Renderiza
    this.renderChanges();

    console.log(judgement);
    return judgement;

  }

  tabCancel(e) {

    if (e.keyCode === 9) {

      const elementHolder = (<HTMLTextAreaElement>e.srcElement);

      const start = elementHolder.selectionStart;
      const end = elementHolder.selectionEnd;
      const value = elementHolder.value;

      elementHolder.value = value.substring(0, start) + '\t' + value.substring(end);
      elementHolder.selectionStart = (<HTMLTextAreaElement>e.srcElement).selectionEnd = start + 1;
      return false;

    }
    return true;
  }

  renderChanges() {
    const iframeComponent = this.preview.contentWindow.document;

    iframeComponent.open();
    iframeComponent.writeln(
      `${this.allFields.get('HTML').value}
      <style>${this.allFields.get('CSS').value}</style>
      <script>${this.allFields.get('JS').value}</script>`
    );
    iframeComponent.close();
  }

  debugAll() {
    console.log(this);
  }

}
