import { Unit } from "./Unit";

export class Tile {
  private units: Unit[];

  constructor() {
    this.units = [];
  }

  addUnit(unit: Unit): void {
    this.units.push(unit);
  }

  removeUnit(unit: Unit): void {
    this.units = this.units.filter(u => u !== unit);
  }

  removeUnits(): void {
    this.units = [];
  }

  getUnits(): Unit[] {
    return this.units;
  }
}