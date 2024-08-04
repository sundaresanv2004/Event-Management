import { ShieldAlert } from "lucide-react";

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert";

const Events = () => {
    return (
        <Alert className="" variant="destructive">
            <ShieldAlert className="h-5 w-5 " />
            <AlertTitle>Login Failed!</AlertTitle>
            <AlertDescription>
                Invalid username or password
            </AlertDescription>
        </Alert>
    )
}

export default Events;
