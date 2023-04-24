import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productlist:any;
  constructor(private ps:ProductService){

    this.ps.getproducts().subscribe({
      next:(data:any)=>this.productlist=data,
      error:()=>this.productlist=[]
    }
    )
  }

}
