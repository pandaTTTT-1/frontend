import { Component, HostListener, ElementRef, Renderer2, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/sevice/products.sevice';
@Component({
  selector: 'app-check2',
  templateUrl: './check2.component.html',
  styleUrls: ['./check2.component.css']
})
export class Check2Component  {
  product: any={};
  isSticky: boolean = false;
  loseResult: string | undefined;
  constructor(private dataService: ProductService,private route : ActivatedRoute,private modalService: NgbModal,private offcanvasService: NgbOffcanvas,private elementRef: ElementRef, private renderer: Renderer2) { }
  openScrollableContent(longContent: any) {
		this.modalService.open(longContent, { scrollable: true });
  }
  public isCollapsed = false;
  openEnd(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'end' });
	}
  ngOnInit():void {
    this.getdetail()
  }
  getdetail(){
   
      
    this.route.params.subscribe(params => {
      const productId = params['id'];
      this.dataService.getDetailProduct(productId).subscribe(
        (response: any) => {
         
            this.product = response.result;
          console.log(this.product)
          
          
          
        },
        (error: any) => {
          console.error(error);
        }
      );
    });
  }
}
