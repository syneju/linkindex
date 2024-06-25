import Aside from "@/components/aside";
import LinkItem from "@/components/link-item";
import SpaceBar from "@/components/space-bar";

import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	const users = [
		{ id: "user1", spaces: [{ id: "space1" }, { id: "space2" }] },
		{ id: "user2", spaces: [{ id: "space3" }, { id: "space4" }] },
	];

	return (
		<main className="h-svh">
			<ResizablePanelGroup direction="horizontal">
				{/* Sidebar */}
				<ResizablePanel
					defaultSize={10}
					className="inset-y h-full flex flex-col"
				>
					<Aside />
					<SpaceBar />
				</ResizablePanel>
				<ResizableHandle disabled />
				{/* Main Content */}
				<ResizablePanel
					defaultSize={90}
					className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 "
				>
					<LinkItem />
					<LinkItem />
					<LinkItem />
					<LinkItem />
					<LinkItem />
					<LinkItem />
					<LinkItem />
					<LinkItem />
					<LinkItem />
					<LinkItem />
				</ResizablePanel>
			</ResizablePanelGroup>
		</main>
	);
}
