import { Button } from "@/components/ui/button";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	const users = [
		{ id: "user1", spaces: [{ id: "space1" }, { id: "space2" }] },
		{ id: "user2", spaces: [{ id: "space3" }, { id: "space4" }] },
	];
	const tags = Array.from({ length: 10 }).map(
		(_, i, a) => `v1.2.0-beta.${a.length - i}`,
	);
	return (
		<main className="h-svh">
			<ResizablePanelGroup direction="horizontal">
				<ResizablePanel
					defaultSize={15}
					className="inset-y h-full flex flex-col"
				>
					<ScrollArea className="h-full w-full ">
						<div className="p-1">
							{tags.map((tag) => (
								<Button
									key={tag}
									variant="ghost"
									className="w-full justify-start"
								>
									{tag}
								</Button>
							))}
						</div>
					</ScrollArea>
					<div className="p-2 border-t">
						<Select defaultValue="acc1">
							<SelectTrigger className="">
								<SelectValue placeholder="acc" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectItem value="acc1">acc1</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
				</ResizablePanel>
				<ResizableHandle disabled />
				<ResizablePanel defaultSize={85} className="p-2">
					<h1>Home Page</h1>
					<Button disabled>Login</Button>
				</ResizablePanel>
			</ResizablePanelGroup>
		</main>
	);
}
