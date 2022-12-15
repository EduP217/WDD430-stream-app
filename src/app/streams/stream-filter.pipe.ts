import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'streamFilter'
})
export class StreamFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
