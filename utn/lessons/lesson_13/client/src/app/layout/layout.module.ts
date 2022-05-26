import { NgModule } from "@angular/core";
import { FooterComponentComponent } from "../footer-component/footer-component.component";
import { MainComponentComponent } from "../main-component/main-component.component";
import { NavComponentComponent } from "../nav-component/nav-component.component";
import { LayoutComponent } from "./layout.component";

@NgModule(
  
    {
      imports: [],
      declarations: [MainComponentComponent, NavComponentComponent, FooterComponentComponent]
    }
    
)

export class LayoutModule { }