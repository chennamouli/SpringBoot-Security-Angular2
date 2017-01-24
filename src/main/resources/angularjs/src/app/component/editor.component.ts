import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'editor-component',
    templateUrl: '../html/editor.component.html',
    styleUrls: ['../css/editor.component.css']
})
export class EditorComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
    editorTxt: string;

    updateHTML(event: KeyboardEvent) {
        document.getElementById("preview").innerHTML = (<HTMLInputElement>event.target).value;
    }
}