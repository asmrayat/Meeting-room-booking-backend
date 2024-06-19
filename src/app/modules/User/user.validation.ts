import { z } from "zod";


const userValidationSchema = z.object({
    body:z.object({
        name:z.string(),
        email:z.string(),
        password:z.string().max(20,{message:'Password can not be more then 20 characters'}),
        phone:z.string(),
        address:z.string(),
        
    })
})

export const UserValidation = {
    userValidationSchema,
}