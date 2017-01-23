import { Component } from  '@angular/core';

@Component({
    selector: 'key-up-enter',
    template: `
        <div class="panel panel-primary">
            <div class="panel-heading">Angular 2 Event Binding Demo - Start typing here:</div>
            <div class="panel-body">
                <div>
                    <input #a (keyup.enter)="onKey(a.value)">
                </div>
                <hr />
                <div>
                    <h5>
                        Resulting keyup events:
                        <button class="btn btn-sm btn-primary pull-right" (click)="reset()">
                            Reset
                        </button>
                    </h5>
                    <div>{{values}}</div>
                </div>
            </div>
        </div>
    `
})

export class KeyUpEnterComponent {
   /* values='';
 
    onKey(value) {
        this.values += value + ' | ';
    }

    reset() {
        this.values = "";
    }*/
}