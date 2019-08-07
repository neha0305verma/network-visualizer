import { Component, OnInit } from '@angular/core';
import { GraphExportService } from 'src/app/modules/core/services/graph-export-service/graph-export.service';
import { ExcelService } from 'src/app/modules/shared/services/export-service/excel.service';

@Component({
  selector: 'app-graph-exporter',
  templateUrl: './graph-exporter.component.html',
  styleUrls: ['./graph-exporter.component.scss']
})
export class GraphExporterComponent implements OnInit {

  constructor(private fileService : GraphExportService, private excelService : ExcelService) { }

  ngOnInit() {
  }
  exportGraph(format){
    this.fileService.getExportFormat(format).subscribe(result => {
      console.log("graph-exporter : exportGraph - ",result);
      this.excelService.exportAsExcelFile(result['seperateNodes'], 'graph_data');
    }, err => {
    console.error('An error occured while retrieving graph data as specified format', err);
  });
}
}
