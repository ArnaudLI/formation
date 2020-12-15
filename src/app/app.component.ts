import { Component, OnInit } from '@angular/core';
import { MachineService } from './service/machine/machine.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'project';

  public listeMachine: any[]

  constructor(private machineService: MachineService) {
  }

  ngOnInit(): void {
    this.listeMachine = this.machineService.listeMachines
  }
}
