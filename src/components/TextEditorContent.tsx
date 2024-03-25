import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Tiptap from "../../Tiptap";

type Props = {};

const TextEditor = (props: Props) => {
	const formSchema = z.object({
		title: z
			.string()
			.min(5, { message: "Hey the title is not long enough" })
			.max(100, { message: "Its too long" })
			.trim(),
		price: z.number().min(5, { message: "Hey the title is nt longer" }),
		description: z
			.string()
			.min(5, { message: "Hey sjkd" })
			.max(100, { message: "Ijkdkds" })
			.trim(),
	});
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		mode: "onChange",
		defaultValues: {
			title: "",
			price: 29.9,
			description: "",
		},
	});
	function onSubmit(values: z.infer<typeof formSchema>) {}
	return (
		<main className="">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8"
				>
					<FormField
						control={form.control}
						name="title"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Tiptap
										content={field.value}
										onChange={field.onChange}
									/>
								</FormControl>
								<FormDescription>
									This is your public display name.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit">Submit</Button>
				</form>
			</Form>
		</main>
	);
};

export default TextEditor;
