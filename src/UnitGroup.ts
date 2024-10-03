import { Unit } from "./Unit";

export class UnitGroup {
  private units: Map<number, Unit>;

  constructor(unitList: Unit[] = []) {
      this.units = new Map();
      unitList.forEach((unit) => {
          this.units.set(unit.getId(), unit);
      });
  }

  public addUnit(unit: Unit): void {
      this.units.set(unit.getId(), unit);
  }

  public removeUnitById(id: number): void {
      this.units.delete(id);
  }

  public removeUnitByInstance(unit: Unit): void {
      this.removeUnitById(unit.getId());
  }

  public getUnit(id: number): Unit | undefined {
      return this.units.get(id);
  }

  public getUnits(): Unit[] {
      return [...this.units.values()];
  }
}