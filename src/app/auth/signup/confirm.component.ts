import { Component } from "@angular/core";

@Component({
    selector:'app-confirm',
    template:`<h1 mat-dialog-title>Are you sure</h1>
    <mat-dialog-actions>
    <button mat-button [mat-dialog-close]="true">yes</button>
    <button mat-button [mat-dialog-close]="false">no</button>
</mat-dialog-actions>`

})
export class confirmComponent{}