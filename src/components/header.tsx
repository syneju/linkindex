import SpaceBar from "@/components/space-bar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Header() {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 max-w-screen-2xl items-center">
				<div className="mr-4 hidden md:flex">
					<Image
						src={"/LinkIndex.webp"}
						alt="Picture of the author"
						width={"64"}
						height={"32"}
						// blurDataURL="data:..." automatically provided
						// placeholder="blur" // Optional blur-up while loading
					/>
					{/* <Separator orientation="vertical" className="h-10" /> */}
				</div>
				<SpaceBar />
				<div className="flex flex-auto items-center justify-between space-x-2 md:justify-end">
					<Input
						placeholder="Search"
						className="w-full flex-auto md:w-auto md:flex-none rounded-full"
					/>
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</div>
			</div>
		</header>
	);
}
