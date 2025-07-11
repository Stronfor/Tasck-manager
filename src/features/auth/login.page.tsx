import { rqClient } from "@/shared/api/instance";
import { ROUTES } from "@/shared/model/routes";
import { Button } from "@/shared/ui/kit/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/ui/kit/card";
import { Link } from "react-router";

function LoginPage(){

    // const loginMutation = rqClient.useMutation("post", "/auth/login")




    return <main className="grow flex flex-col pt-[200px] items-center">
        <Card className="w-full max-w-[400px]">
            <CardHeader>
                <CardTitle>Enter in the system</CardTitle>
                <CardDescription>
                    Enter the mail and the password
                </CardDescription>
            </CardHeader>
            <CardContent>
                {/* FORM */}
            </CardContent>
            <CardFooter>
                <p>
                    You have not Acc? <Button asChild variant="link"><Link to={ROUTES.REGISTER}>Registration</Link></Button>
                </p>
            </CardFooter>
        </Card>
    </main>
}

export const Component = LoginPage;