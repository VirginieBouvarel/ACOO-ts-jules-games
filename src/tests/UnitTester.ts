import { Unit } from "../Unit";

export class UnitTester {
  testType(unit: Unit, type: string, expectedOutputType: string): void {
    console.log("Test des accesseurs de la propriété type");
    unit.setType(type);
    const outputType = unit.getType();
    if (expectedOutputType === outputType) {
      console.log("Test OK");
    } else {
      console.log(`Test KO: ${outputType} ne correspond pas à ${expectedOutputType}`);
    }
  }

  testUnitSpecificProperty(unit: Unit, propertyName: string, inputValue: any, expectedOutputValue: any): void {
    console.log("Test des accesseurs pour une propriété particulière à une unité");
    unit.setProperty(propertyName, inputValue);
    const outputValue = unit.getProperty(propertyName);
    if (expectedOutputValue === outputValue) {
        console.log("Test OK");
    } else {
        console.log(`Test KO: ${outputValue} ne correspond pas à ${expectedOutputValue}`);
    }
  }

  testPropertyChange(unit: Unit, propertyName: string, inputValue: any, expectedOutputValue: any): void {
    console.log("Test du changement de la valeur d'une propriété");
    unit.setProperty(propertyName, inputValue);
    const outputValue = unit.getProperty(propertyName);
    if (expectedOutputValue === outputValue) {
        console.log("Test OK");
    } else {
        console.log(`Test KO: ${outputValue} ne correspond pas à ${expectedOutputValue}`);
    }
  }

  testNonExistentProperty(unit: Unit, propertyName: string): void {
    console.log("Test de l'accès à une valeur inexistante d'une propriété");
    const outputValue = unit.getProperty(propertyName);
    if (outputValue === undefined) {
        console.log("Test OK");
    } else {
        console.log(`Test KO avec la valeur : ${outputValue}`);
    }
  }

  main(): void {
    const tester = new UnitTester();
    const unit = new Unit(1000);
    tester.testType(unit, "infantry", "infantry");
    tester.testUnitSpecificProperty(unit, "hitPoints", 25, 25);
    tester.testPropertyChange(unit, "hitPoints", 15, 15);
    tester.testNonExistentProperty(unit, "strength");
  }
}
