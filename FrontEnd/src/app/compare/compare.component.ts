import { Component } from '@angular/core';
import { ProductService } from '../sevice/products.sevice';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent {
  images: any[] = [];
  product:any[]=[];
  constructor(private dataService: ProductService,private route : ActivatedRoute) { }
  ngOnInit(): void {
    this.getPmenu()
     
  }
  getPmenu(){
    this.route.params.subscribe((data) => {
      
      this.dataService.getMenuuProductID(data['id']).subscribe(data => {
        if (data && Array.isArray(data.result)) {
          this.images=data.result
          console.log(this.images)
         
        
  
         
        } else {
          console.error('Dữ liệu không hợp lệ');
          // Xử lý lỗi tại đây, ví dụ: gán một giá trị mặc định cho this.menus
        }
        
        // this.images = data.slice(0, 16); // Giới hạn số lượng ảnh là 16 (4 ảnh x 4 thẻ)
    });
      })

      
    }
   
  }

