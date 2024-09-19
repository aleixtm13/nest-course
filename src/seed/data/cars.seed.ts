import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        brand: 'Seat',
        model: 'S100',
    },
    {
        id: uuid(),
        brand: 'Seat',
        model: 'S200',
    }
];