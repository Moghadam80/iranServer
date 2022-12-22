import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProcessesService{
    /**
     * Creates an instance of ProcessesService.
     * @param {HttpClient} httpClient
     * @memberof ProcessesService
     */
    constructor(private httpClient: HttpClient) { }
    private url = 'https://fakestoreapi.com/products';

   
    /**
     * get list of items
     *
     * @return {*} 
     * @memberof ProcessesService
     */
    getProducts(){
      return this.httpClient.get(this.url);
    }

    /**
     * remove item
     *
     * @param {number} id
     * @return {*} 
     * @memberof ProcessesService
     */
    deleteProduct(id: number){
        return this.httpClient.delete(this.url + '/' + id)
    }

    /**
     * add new product
     *
     * @param {*} data
     * @return {*} 
     * @memberof ProcessesService
     */
    addProduct(data: any){
        return this.httpClient.post(this.url,data)
    }

    /**
     * edit product
     *
     * @param {number} id
     * @param {*} data
     * @return {*} 
     * @memberof ProcessesService
     */
    updateProduct(id: number, data: any){
        return this.httpClient.put(this.url + '/' + id, data)

    }
  

}