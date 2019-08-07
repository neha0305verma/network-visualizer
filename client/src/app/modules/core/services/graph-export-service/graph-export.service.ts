import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PublicHttpService } from '../public/public-http/public-http.service';


@Injectable({
  providedIn: 'root'
})
export class GraphExportService {

  constructor(private publicHttp: PublicHttpService) { }
  getExportFormat(format) {
    if(format){
      const url = '/file/graph/export/'+format;
      return this.publicHttp.get(url).pipe(map(data => {
        if (!!data) {
          return data;
        } else {
          return of({});
        }
      }));
    }    
  }
}
