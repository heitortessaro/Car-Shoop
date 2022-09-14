import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

// https://stackoverflow.com/questions/72867815/wrap-up-zod-validations-for-reuse
const CarZodSchema = VehicleZodSchema.extend({
  doorsQty: z.number()
    .int({ message: 'DoorsQty shoulb be an integer' })
    .gte(2, { message: 'DoorsQty quantity should be greater equal 2' })
    .lte(4, { message: 'DoorsQty quantity should be smaller equal 2' }),
  seatsQty: z.number()
    .int({ message: 'seatsQty shoulb be an integer' })
    .gte(2, { message: 'seatsQty quantity should be greater equal 2' })
    .lte(4, { message: 'seatsQty quantity should be smaller equal 7' }),
});

type ICar = z.infer<typeof CarZodSchema>;

export { CarZodSchema, ICar };