import { z } from "zod";

export const formSchema = z.object({
    email: z.string().email().min(1, { message: "Email is required"}),
    first_name: z.string().min(1, { message: "first name required"}).optional(),
    last_name: z.string().optional(), 
    password: z.string().min(1, { message: "password is required" }),
    confirm_password: z.string().min(1, { message: "confirm password is required" }).optional()
}).refine(data => !data.confirm_password || data.password === data.confirm_password, {
    message: "Password don't match",
    path: ['confirm_password']
});

export const tweetSchema = z.object({
    user_id: z.string().min(1, { message: "User Id must not be empty"}),
    content: z.string().min(1, { message: "Content must not be empty"}),
    timeStamp: z.date().optional()
})

export type FormProps = z.infer<typeof formSchema>
