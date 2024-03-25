import React from "react";
import { Label } from "./ui/label";
import TextEditor from "./components/TextEditorContent";

type Props = {};

const page = (props: Props) => {
	return (
		<div>
			<div className="grid gap-2">
				<Label htmlFor="content">Content</Label>
				<TextEditor />
			</div>
		</div>
	);
};

export default page;
