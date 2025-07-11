import { ROUTES } from "@/shared/model/routes";
import { Link } from "react-router-dom";
import { AuthLayout } from "./auth-layout";
import { RegisterForm } from "./register-form";

function RegisterPage(){
     return (
        <AuthLayout
            title="Create an Account"
            description="Fill in the details below to register"
            footerText={
                <> Already have an account? <Link to={ROUTES.LOGIN}>Login</Link></>
            }
            form={<RegisterForm/>}
        >

        </AuthLayout>
    )
}

export const Component = RegisterPage;