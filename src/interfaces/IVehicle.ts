import { z } from 'zod';

const VehicleZodSchema = z.object({
  model: z.string().min(3, { message: 'Model must be 3 or more characters long' }),
  year: z.number()
    .int({ message: 'Year must be an integer' })
    .gte(1900, { message: 'Year must be greater equal 1900' })
    .lte(2022, { message: 'Year must be smaller equal 2022' }),
  color: z.string().min(3, { message: 'Color must be 3 or more characters long' }),
  status: z.boolean().optional(),
  buyValue: z.number().int({ message: 'BuyValue must be an integer' }),
});

type IVehicle = z.infer<typeof VehicleZodSchema>;

export { VehicleZodSchema, IVehicle };