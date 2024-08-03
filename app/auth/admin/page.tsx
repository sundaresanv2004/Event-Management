import React from "react";
import styles from "@/app/styles";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const Admin = () => {
    return (
        <main className="w-full overflow-hidden h-screen bg-white">
            <div className="w-full h-screen p-4 md:p-16 max-w-xl mx-auto mt-20">
                <div>
                    <h1 className={`text-black text-center mb-10 ${styles.heading2}`}>Admin Login</h1>
                    <div className="space-y-10">
                        <div className="space-y-2">
                            <Label htmlFor="email" className='text-sm mb-2 font-medium leading-none
                            peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black'>
                                Email
                            </Label>
                            <Input
                                className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm text-black
                            ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none
                            focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed"
                                type="email" id="email" placeholder="andrew@example.com"/>
                        </div>
                        <div className="space-y-2">
                            <div className="flex flex-row justify-between">
                                <Label htmlFor="password" className='text-sm mb-2 font-medium leading-none
                                peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black'>
                                    Password
                                </Label>
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <a className="text-black text-sm mb-2 font-medium leading-none
                                        peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">Forgot
                                            Password?</a>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent className="bg-white text-black">
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Forgot Password?</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                Please reach out to your administrator to obtain your password.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogAction
                                                className="bg-[#171717] text-[#FAFAFA] hover:bg-muted">Close</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>

                            </div>
                            <Input
                                className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm text-black
                                ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none
                                focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed"
                                type="password" id="password" placeholder="********"/>
                        </div>
                        <Button className="bg-[#171717] text-[#FAFAFA] hover:bg-muted w-full mt-3">Login</Button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Admin;