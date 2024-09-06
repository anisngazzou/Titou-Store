"use client"
import { SignIn } from "@clerk/nextjs";
import { ClerkProvider } from '@clerk/nextjs'
export default function SignInPage() {
    return (
        <ClerkProvider>
        <div className="flex min-w-screen justify-center my-[5rem]">
            <SignIn />
        </div>
        </ClerkProvider>
    );
}