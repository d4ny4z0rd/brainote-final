import Image from "next/image";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
	const { userId } = auth();

	if (userId) redirect("/notes");

	return (
		<main className="flex flex-col h-screen items-center justify-center gap-5">
			<div className="flex items-center gap-4">
				<Image src={logo} alt="Brainote logo" width={100} height={100} />
				<span className="font-extrabold tracking-tight text-4xl lg:text-5xl">
					Brainote
				</span>
			</div>
			<p className="text-center max-w-prose text-slate-600">
				Introducing Draco, your smart companion for note-taking. This cutting-edge app merges intuitive design with advanced AI, creating a dynamic and personalized experience. Draco engages in natural conversations, learns your habits, and provides intelligent suggestions, making note-taking an effortless and productive endeavor. Welcome to a future where organization meets innovation, all at your fingertips with Draco.
			</p>
			<Button asChild size={"lg"}>
				<Link href={"/notes"}>Open</Link>
			</Button>
		</main>
	);
}
