"use client"
import { ClerkProvider, SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
    return (
        <ClerkProvider>
            <div className="flex min-w-screen justify-center my-[5rem]">
            <SignUp />
        </div>
 </ClerkProvider>
        
    );
}