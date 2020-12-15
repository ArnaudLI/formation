import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  public listeMachines: any[] = [
    {
      id: 1,
      name: 'voiture 1',
      type: 'voiture',
      isRunning: false
    },
    {
      id: 2,
      name: 'voiture 2',
      type: 'voiture',
      isRunning: false
    },
    {
      id: 3,
      name: 'moto rouge',
      type: 'moto',
      isRunning: false
    },
  ];

  constructor() { }

  public getMachineById(id: number) {
    const machineTrouve = this.listeMachines.find(
      (machine) => {
        return machine.id === id
      }
    )
    return machineTrouve
  }


  public switchOne(i: number) {
    this.listeMachines[i].isRunning = !this.listeMachines[i].isRunning
   // if (this.listeMachines[i].isRunning) {
     // this.listeMachines[i].isRunning = false
    //} else {
      //this.listeMachines[i].isRunning = true
    //}
  }

  public switchOnOne(i: number): void {
    this.listeMachines[i].isRunning = true
  }

  public swichOffOne(i: number): void {
    this.listeMachines[i].isRunning = false
  }


  public switchOnAllMachines(): void {
    for (let machine of this.listeMachines) {
      machine.isRunning = true
    }
  }

  public switchOffAllMachines(): void {
    for (let machine of this.listeMachines) {
      machine.isRunning = false
    }
  }
}
