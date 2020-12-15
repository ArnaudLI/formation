import { Component, OnInit } from '@angular/core';
import { MachineService } from './../../service/machine/machine.service'

@Component({
  selector: 'app-render',
  templateUrl: './app-render.component.html',
  styleUrls: ['./app-render.component.scss']
})
export class AppRenderComponent implements OnInit {

  public listeMachine: any[]

  public isAuth:boolean = false

  constructor(private machineService: MachineService) { }

  ngOnInit(): void {
    this.listeMachine = this.machineService.listeMachines
  }

}
