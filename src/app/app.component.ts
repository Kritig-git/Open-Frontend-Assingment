import { identifierModuleUrl } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit, AfterViewInit{
  @ViewChild('rangeIncome',{static: false}) sliderIncome: ElementRef;
  @ViewChild('rangeExpense',{static: false}) sliderExpense: ElementRef;
  @ViewChild('header',{static: false}) header: ElementRef;
  @ViewChild('styleItems',{static: false}) styleItems: ElementRef;
  @ViewChild('icon',{static: false}) icon: ElementRef;

  title = 'OpenAssignment';
  rangeValueIncome: string = (100000).toLocaleString('en-IN');
  rangeValueExpense: string = "0";
  tenureList = [];

  ngOnInit(){
    this.populateTenureRange();
  }
  ngAfterViewInit(){
    this.sliderIncome.nativeElement.value = 0;
    this.sliderExpense.nativeElement.value = 0;
    this.headerOnScroll()
  }

  populateTenureRange(){
    for(let i=1; i<=12; i++){
      this.tenureList.push(`${i} Months`)
    }
  }
 
  getSliderValue(event){
  let sliderDisplay: string
  
  if(event.target.id === "monthIncm"){
    this.rangeValueIncome = Number(event.target.value).toLocaleString('en-IN');
    sliderDisplay = (((event.target.value-100000)*100)/(300000-100000)).toFixed();
    this.sliderIncome.nativeElement.style.background = 'linear-gradient(90deg,#663399 '+sliderDisplay+'% ,#dddddd 0)'
  }
  else if (event.target.id === "monthExp"){
    this.rangeValueExpense = Number(event.target.value).toLocaleString('en-IN')
    sliderDisplay = (((event.target.value)*100)/(300000)).toFixed()
    this.sliderExpense.nativeElement.style.background = 'linear-gradient(90deg,#663399 '+sliderDisplay+'%,#dddddd 0)'
  }
  }

  headerOnScroll(){
    $(window).scroll(() => {
      var scroll = $(window).scrollTop();
      if (scroll > 100) {
        this.header.nativeElement.style.background ="white";
        this.header.nativeElement.style.padding="0px 20px" ;
        this.styleItems.nativeElement.style.margin="10px 0px 0px -50px";
        this.icon.nativeElement.style.margin="0px";
        this.icon.nativeElement.style.width="70px";
        this.icon.nativeElement.style.height="70px";
      }
      else{
        this.header.nativeElement.style.background ="transparent";
        this.header.nativeElement.style.padding="10px 50px";
        this.styleItems.nativeElement.style.margin="30px -50px 0px 0px";
        this.icon.nativeElement.style.margin="10px 0px 0px 30px";
        this.icon.nativeElement.style.width="80px";
        this.icon.nativeElement.style.height="80px";
      }
    })
  }
    
}