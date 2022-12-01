import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPercentPipe',
})
export class PercentPipe implements PipeTransform {
  transform(rate: number): string {
    return `${rate * 100}%`;
  }
}
