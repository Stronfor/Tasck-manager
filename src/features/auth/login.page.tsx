import { AuthLayout } from "./auth-layout";
import { Link } from "react-router-dom";
import { ROUTES } from "@/shared/model/routes";
import { LoginForm } from "./login-form";

function LoginPage(){

    // const loginMutation = rqClient.useMutation("post", "/auth/login")


    return (
        <AuthLayout
            title="Enter in the system"
            description="Enter email and password for enter"
            footerText={
                <>Have not accaunt? <Link to={ROUTES.REGISTER}>Registration</Link></>
            }
            form={<LoginForm/>}
        >

        </AuthLayout>
    )
}

export const Component = LoginPage;