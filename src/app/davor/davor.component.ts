import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { OnlineDataService } from '../services/online-data.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-davor',
  templateUrl: './davor.component.html',
  styleUrls: ['./davor.component.css']
})
export class DavorComponent implements OnInit {

  constructor(private _dataService: DataService, private _onlineDataService: OnlineDataService, private _loggingService: LoggingService) { }

  ngOnInit(): void {
  }

}
