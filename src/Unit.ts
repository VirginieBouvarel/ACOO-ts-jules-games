import { Weapon } from "./Weapon";

export class Unit {
  private type: string | undefined;
  private id: number;
  private name: string | undefined;
  private weapons: Weapon[] = [];
  private properties: Map<string, any> = new Map();

  constructor(id: number) {
      this.id = id;
  }

  getId(): number {
    return this.id;
}

  getType(): string | undefined {
      return this.type;
  }

  setType(type: string): void {
      this.type = type;
  }

  getName(): string | undefined {
      return this.name;
  }

  setName(name: string): void {
      this.name = name;
  }

  getWeapons(): Weapon[] {
      return this.weapons;
  }

  addWeapon(weapon: Weapon): void {
      this.weapons.push(weapon);
  }

  setProperty(property: string, value: any): void {
      this.properties.set(property, value);
  }

  getProperty(property: string): any | undefined {
      return this.properties.get(property);
  }
}