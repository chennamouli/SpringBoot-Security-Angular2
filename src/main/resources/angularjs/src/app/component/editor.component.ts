import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'editor-component',
    templateUrl: '../html/editor.component.html',
    styleUrls: ['../css/editor.component.css']
})
export class EditorComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        if (sessionStorage) {
            let editorTxt = sessionStorage.getItem("editorTxt");
            document.getElementById("editor").innerHTML = editorTxt;
            document.getElementById("preview").innerHTML = editorTxt;
        }
    }

    updateHTML(event: KeyboardEvent) {
        let editorTxt = (<HTMLInputElement>event.target).value;
        document.getElementById("preview").innerHTML = editorTxt;
        if (sessionStorage) {
            sessionStorage.setItem("editorTxt", editorTxt);
        }
    }
}