import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Sidebar() {
	const tags = Array.from({ length: 50 }).map(
		(_, i, a) => `云开见月${a.length - i}`,
	);
	return (
		<ScrollArea className="fixed h-svh">
			<div className="p-2 flex flex-col gap-2 ">
				{tags.map((tag) => (
					<Button
						key={tag}
						variant="link"
						className="w-full justify-start  font-normal"
					>
						{tag}
					</Button>
				))}
			</div>
			{/* <Tabs defaultValue="account" className="h-svh">
				<TabsContent value="account" className=" ">
					Make changes to your account here.
				</TabsContent>
				<TabsContent value="password">Change your password here.</TabsContent>
				<TabsList>
					<TabsTrigger value="account">A</TabsTrigger>
					<TabsTrigger value="password">P</TabsTrigger>
				</TabsList>
			</Tabs> */}
		</ScrollArea>
	);
}
