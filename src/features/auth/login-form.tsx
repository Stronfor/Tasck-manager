import { Button } from "@/shared/ui/kit/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shared/ui/kit/form";
import { Input } from "@/shared/ui/kit/input";
import { useForm } from "react-hook-form";

import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod"

const loginSchema = z.object({
    email: z.string("required row").email("email error"),
    password: z.string("required row").min(6, "Password must be at least 6 characters long")
})

export function LoginForm(){

    const form = useForm({
        resolver: zodResolver(loginSchema)
    })

    const onSubmit = form.handleSubmit((data) => {
        console.log(data);
        
    })

    return (
        <Form {...form}>
            <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="user@gmail.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                    
                <FormField
                    control={form.control}
                    name="password"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="***" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Enter</Button>
            </form>
        </Form>
    )
}