import { z } from "zod";

const loginValidationSchema = z.object({
    body:z.object({
        email:z.string({required_error:'Id is needed'}),
        password:z.string({required_error:'Password is needed'})
    })
});

export const AuthValidation = {
    loginValidationSchema
}