import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capital'})
export class CapitalPipe implements PipeTransform {
  transform(value: string): string {
    let capital = value.toLowerCase();
    capital = capital.charAt(0).toUpperCase() + capital.slice(1);
    return capital;
  }
}
