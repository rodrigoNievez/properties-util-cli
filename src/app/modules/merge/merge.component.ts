import { Component } from '@angular/core';

@Component({
    selector: 'merge-component',
    templateUrl: './merge.component.html',
    styleUrls: ['./merge.component.css']
})

export class MergeComponent {

    fileChange(event) {
        console.log('Este es el evento:');
        console.log(event.target.files[0]);
    }

}

