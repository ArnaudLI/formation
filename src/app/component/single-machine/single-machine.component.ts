import { Component, OnInit } from '@angular/core';
import { MachineService } from './../../service/machine/machine.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-single-machine',
  templateUrl: './single-machine.component.html',
  styleUrls: ['./single-machine.component.scss']
})
export class SingleMachineComponent implements OnInit {

  public name: String
  public type: String
  public isRunning: boolean

  constructor(private machineService: MachineService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    const machine = this.machineService.getMachineById(+id)
    this.name = machine.name
    this.type = machine.type
    this.isRunning = machine.isRunning
  }

}
