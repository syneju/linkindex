import Footer from "@/components/footer";
import LinkItem from "@/components/link-item";
import Sidebar from "@/components/sidebar";
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
		<main>
			<div className="container flex-1 items-start ">
				<ResizablePanelGroup direction="horizontal">
					{/* Sidebar */}
					<ResizablePanel defaultSize={12} className="">
						<Sidebar />
					</ResizablePanel>
					<ResizableHandle className=" " />
					{/* Main Content */}
					<ResizablePanel
						defaultSize={90}
						className="p-4 grid grid-cols-4 gap-4"
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
						<LinkItem />
						<LinkItem />
						<LinkItem />
						<LinkItem />
						<LinkItem />
						<LinkItem />
						<LinkItem />
					</ResizablePanel>
				</ResizablePanelGroup>
			</div>
		</main>
	);
}
