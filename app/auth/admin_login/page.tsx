"use client"
import React from "react";
import {Loader2, ShieldAlert} from "lucide-react";
import styles from "@/app/styles";
import { Input } from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {
    AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";

const formSchema = z.object({
    email: z.string(),
    password: z.string(),
})

const AdminLogin = () => {
    const [errorState, setErrorStatus] = useState('hidden');
    const [loading, setLoading] = useState("hidden");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    let arr = {
        email: "sundaresanv16@gmail.com",
        password: "sundar@2004",
    }

    function onSubmit(values: z.infer<typeof formSchema>) {
        if (values.email === arr.email && values.password === arr.password) {
            console.log("Successfully  Login")
            setErrorStatus("hidden")
        } else {
            console.log("Invalid Login Login")
            setErrorStatus("")
        }
    }

    return (
        <main className="w-full overflow-hidden h-screen bg-blue_bg">
            <div className="w-full h-screen p-4 md:p-16 max-w-xl mx-auto mt-20">
                <div>
                    <h1 className={`text-center mb-7 ${styles.heading2}`}>Admin Login</h1>
                    <Alert className={`mb-7 py-3 ${errorState} ${styles.paragraph}`} variant="destructive">
                        <AlertDescription>
                            Invalid Email or Password
                        </AlertDescription>
                    </Alert>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({field}) => (
                                    <FormItem className="space-y-2">
                                        <FormLabel
                                            className='text-sm mb-2 font-medium leading-non peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                                        >
                                            Email
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm
                                                ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none
                                                focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed"
                                                type="email" id="email" placeholder="andrew@example.com" {...field}
                                                required={true}
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({field}) => (
                                    <FormItem className="space-y-2">
                                        <div className="flex flex-row justify-between">
                                            <FormLabel
                                                className='text-sm mb-2 font-medium leading-non peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                                            >
                                                Password
                                            </FormLabel>

                                            <AlertDialog>
                                                <AlertDialogTrigger asChild>
                                                    <a className="text-sm mb-2 font-medium leading-none
                                        peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">Forgot
                                                        Password?</a>
                                                </AlertDialogTrigger>
                                                <AlertDialogContent>
                                                    <AlertDialogHeader>
                                                        <AlertDialogTitle>Forgot Password?</AlertDialogTitle>
                                                        <AlertDialogDescription>
                                                            Please reach out to your administrator to obtain your
                                                            password.
                                                        </AlertDialogDescription>
                                                    </AlertDialogHeader>
                                                    <AlertDialogFooter>
                                                        <AlertDialogAction>Close</AlertDialogAction>
                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                            </AlertDialog>
                                        </div>
                                        <FormControl>
                                            <Input
                                                className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none
                                                focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed"
                                                type="password" id="password" placeholder="********" {...field}
                                                required={true}/>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                    )}
                                />

                            <Button
                                className="w-full mt-3"
                                type="submit"
                            >
                                Login
                            </Button>
                        </form>
                    </Form>


                </div>
            </div>
        </main>
    );
};

export default AdminLogin;