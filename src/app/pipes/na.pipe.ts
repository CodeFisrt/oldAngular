import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'na' 
})
export class NaPipe implements PipeTransform {

  transform(value: unknown, printText?: string): unknown {
    console.log("tranform")
    if(value !== "" && value !== null && value !== undefined) {
      return value;
    } else { 
      if(printText  == undefined) {
        return "NA";
      } else {
        return printText;
      }
    }
   
  }

}
