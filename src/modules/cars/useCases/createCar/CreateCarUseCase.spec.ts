import CarsRepositoryInMemory from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import AppError from "@shared/infra/http/errors/AppError";

import CreateCarUseCase from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepository: CarsRepositoryInMemory;

describe("Create car", () => {
  beforeEach(() => {
    carsRepository = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepository);
  });

  it("should be able to create a car", async () => {
    const car = await createCarUseCase.execute({
      brand: "Fiat",
      name: "Uno",
      daily_rate: 100,
      fine_amount: 10,
      description: "Fiat Uno",
      license_plate: "ABC-1234",
      category_id: "category_id",
    });

    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a car if it already", async () => {
    expect(async () => {
      await createCarUseCase.execute({
        brand: "Fiat 1",
        name: "Uno",
        daily_rate: 100,
        fine_amount: 10,
        description: "Fiat Uno",
        license_plate: "ABC-1234",
        category_id: "category_id",
      });

      await createCarUseCase.execute({
        brand: "Fiat 2",
        name: "Uno",
        daily_rate: 100,
        fine_amount: 10,
        description: "Fiat Uno",
        license_plate: "ABC-1234",
        category_id: "category_id",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should be able to create a car with available true by default", async () => {
    const car = await createCarUseCase.execute({
      brand: "Fiat",
      name: "Uno",
      daily_rate: 100,
      fine_amount: 10,
      description: "Fiat Uno",
      license_plate: "ABC-1234",
      category_id: "category_id",
    });

    expect(car.available).toBe(true);
  });
});
