import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Brainote - Sign-up",
	description: "Intelligent note-taking app",
};

export default function Page() {
	return (
		<div className="flex h-screen items-center justify-center">
			<SignUp appearance={{ variables: { colorPrimary: "#0F172A" } }} />
		</div>
	);
}
