import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ProcessesService } from './shopping.service';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.sass']
})
export class ShoppingComponent {
  list: any;

  /**
   * Creates an instance of ShoppingComponent.
   * @param {MatDialog} dialog
   * @param {ProcessesService} _ProcessesService
   * @param {LoadingBarService} loadingBar
   * @memberof ShoppingComponent
   */
  constructor(public dialog: MatDialog,
    private _ProcessesService: ProcessesService,
    private loadingBar: LoadingBarService
  ) {

    // show loading
    this.loadingBar.start();
    this._ProcessesService.getProducts()
      .subscribe(response => {
        // get list of product
        this.list = response;

        // hide loading
        this.loadingBar.complete();
      });

  }

  /**
   * edit info of product
   *
   * @param {number} index
   * @memberof ShoppingComponent
   */
  editItem(index: number): void {
    let dialogRef = this.dialog.open(EditItemComponent, {
      height: '300px',
      width: '300px',
      data: { itemInfo: this.list[index], action: 'edit' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.list[index] = result;

      }
    });
  }

  /**
   * add new product
   *
   * @memberof ShoppingComponent
   */
  addItem(): void {
    let dialogRef = this.dialog.open(EditItemComponent, {
      height: '300px',
      width: '300px',
      data: { action: 'add' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.list = [...this.list, result];

      }
    });
  }

  /**
   * remove product from list
   *
   * @param {number} index
   * @memberof ShoppingComponent
   */
  removeItem(index: number) {
    this.loadingBar.start();
    this._ProcessesService.deleteProduct(this.list[index].id)
      .subscribe(response => {
        this.list.splice(index, 1)
        this.loadingBar.complete();

      });

  }

}
