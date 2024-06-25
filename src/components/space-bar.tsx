import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
export default function SpaceBar() {
	return (
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
	);
}
