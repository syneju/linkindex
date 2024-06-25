import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
export default function Aside() {
	const tags = Array.from({ length: 10 }).map(
		(_, i, a) => `灵感来源${a.length - i}`,
	);
	return (
		<aside className="h-full w-full ">
			<ScrollArea>
				<div className="p-2 flex flex-col gap-2 ">
					{tags.map((tag) => (
						<Button
							key={tag}
							variant="ghost"
							className="w-full justify-start text-gray-500 font-normal"
						>
							{tag}
						</Button>
					))}
				</div>
			</ScrollArea>
		</aside>
	);
}
