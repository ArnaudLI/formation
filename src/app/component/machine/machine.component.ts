import { Component, OnInit, Input } from '@angular/core';
import { MachineService } from './../../service/machine/machine.service'

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss']
})
export class MachineComponent implements OnInit {

@Input() name: String;
@Input() type: String;
@Input() isRunning: boolean;
@Input() index: number
public i: boolean

public listeMachine: any[]

  constructor(private machineService: MachineService) { }

  ngOnInit(): void {
    this.listeMachine = this.machineService.listeMachines
  }

  public switchOne() {
    this.machineService.switchOne(this.index);
  }

  public allOn(): void {
    this.machineService.switchOnAllMachines()
  }

  public allOff(): void {
    if(confirm('tout éteindre ?')) {
      this.machineService.switchOffAllMachines()
    }
  }
}
