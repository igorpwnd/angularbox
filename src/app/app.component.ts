import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app';

  htmlField;
  cssField;
  jsField;
  preview;

  ngOnInit() {

    this.htmlField = document.getElementById('html');
    this.cssField = document.getElementById('css');
    this.jsField = document.getElementById('js');
    this.preview = document.getElementById('preview');

    this.startListener();
  }

  startListener() {
    document.addEventListener('keyup', (e) => {
      console.log(e);

      if (e.keyCode === 9) {

        const start = (<HTMLTextAreaElement>e.srcElement).selectionStart;
        const end = (<HTMLTextAreaElement>e.srcElement).selectionEnd;
        const value = (<HTMLTextAreaElement>e.srcElement).value;

        (<HTMLTextAreaElement>e.srcElement).value = value.substring(0, start) + '\t' + value.substring(end);
        (<HTMLTextAreaElement>e.srcElement).selectionStart = (<HTMLTextAreaElement>e.srcElement).selectionEnd = start + 1;

        return false;
      }
      this.renderChanges();

    });
  }

  renderChanges() {
    const iframeComponent = this.preview.contentWindow.document;

    iframeComponent.open();

    iframeComponent.writeln(`
             ${this.htmlField.value}
      <style>${this.cssField.value}</style>
      <script>${this.jsField.value}</script>`);

    iframeComponent.close();
  }

}
