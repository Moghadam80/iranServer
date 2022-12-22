import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { ProcessesService } from '../shopping.service';

@Component({
  selector: 'edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.sass'],
})
export class EditItemComponent {
  title: string = '';
  price: number = 0;
  action: string;

  /**
   * Creates an instance of EditItemComponent.
   * @param {MatDialogRef<EditItemComponent>} dialogRef
   * @param {ProcessesService} _ProcessesService
   * @param {LoadingBarService} loadingBar
   * @param {*} data
   * @memberof EditItemComponent
   */
  constructor(
    public dialogRef: MatDialogRef<EditItemComponent>,
    private _ProcessesService: ProcessesService,
    private loadingBar: LoadingBarService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.action = this.data.action;
    if (this.data.action == 'edit') {
      // set title and price of item for input model
      this.title = this.data.itemInfo.title;
      this.price = this.data.itemInfo.price;

    }

  }

  /**
   *
   *
   * @memberof EditItemComponent
   */
  closeDialog() {
    let data = {
      title: this.title,
      price: this.price,
      description: '',
      image: '',
      category: ''
    }

    // add new item to list
    if (this.data.action == 'add') {

      // show loading
      this.loadingBar.start();
      this._ProcessesService.addProduct(data)
        .subscribe(response => {
          // pass data to shopping component
          this.dialogRef.close(data);

          // hide loading
          this.loadingBar.complete();

        });

    }
    // edit item in list
    else {
      // show loading
      this.loadingBar.start();
      this._ProcessesService.updateProduct(this.data.itemInfo.id, data)
        .subscribe(response => {
          // pass data to shopping component
          this.dialogRef.close(data);

          // hide loading
          this.loadingBar.complete();
        });

    }
  }


}
