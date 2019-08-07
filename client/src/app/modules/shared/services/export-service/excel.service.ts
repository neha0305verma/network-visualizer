import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }

  public exportAsExcelFile(json: any[], excelFileName: string): void {
    var blob = new Blob(json, { type: 'data:application/vnd.ms-excel' });
            var downloadUrl = URL.createObjectURL(blob);
            var a = document.createElement("a");
            a.href = downloadUrl;
            a.download = "downloadFile.xlsx";
            document.body.appendChild(a);
            a.click();
  }
}
