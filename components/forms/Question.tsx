"use client";
import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "@/lib/validation";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { createQuestion } from "@/lib/actions/question.action";

const Question = () => {
  const editorRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const type:any = 'create';
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      explanation: "",
      tags: [],
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      await createQuestion({});
    } catch (error) {
      console.log(error);
    }
    finally{
      setIsSubmitting(false);
    }
    console.log(values);
  }
  const handleInput = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: any,
  ) => {
    if (e.key === "Enter" && field.name === "tags") {
      e.preventDefault();
      const tagInput = e.target as HTMLInputElement;
      const tagValue = tagInput.value.trim();
      if (tagValue !== "") {
        if (tagValue.length > 15) {
          return form.setError("tags", {
            type: "required",
            message: "String must not be more than 15 characters",
          });
        }
        if (!field.value.includes(tagValue as never)) {
          form.setValue("tags", [...field.value, tagValue]);
          tagInput.value = "";
          form.clearErrors("tags");
        }
      } else {
        form.trigger();
      }
    }
  };

  const handleClick = (tags: any, tag: string) => {
    const newtags = tags.value.filter((t: string) => t !== tag);
    form.setValue("tags", newtags);
  };
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-10"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel className="paragraph-semibold text-dark400_light800 ">
                  Question Title <span className="text-primary-500">*</span>
                </FormLabel>
                <FormControl className="mt-3.5">
                  <Input
                    className=" no-focus background-light800_dark400 mt-4 rounded-lg"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-dark500_light500 body-regular mt-2.5 text-light-500">
                  Be specific and imagine you are asking a question to another
                  person.
                </FormDescription>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="explanation"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel className="paragraph-semibold text-dark400_light800 ">
                  Detail Explanation of your Problem?
                  <span className="text-primary-500">*</span>
                </FormLabel>
                <FormControl className="mt-3.5">
                  <Editor
                    apiKey={process.env.NEXT_PUBLIC_TINY_API_KEY}
                    // @ts-ignore
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    onBlur = {field.onBlur}
                    onEditorChange={(content)=>field.onChange(content)}
                    initialValue=""
                    init={{
                      height: 500,
                      menubar: false,
                      plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "codesample",
                        "help",
                        "wordcount",
                      ],
                      toolbar:
                        "undo redo | blocks | " +
                        "codesample" +
                        "|" +
                        "bold italic forecolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat | help",
                      content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                    }}
                  />
                </FormControl>
                <FormDescription className="text-dark500_light500 body-regular mt-2.5 text-light-500">
                  Introduce the problem and expand on what you put in the title.
                  Minimum 20 characters.
                </FormDescription>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel className="paragraph-semibold text-dark400_light800 ">
                  Tags <span className="text-primary-500">*</span>
                </FormLabel>
                <FormControl className="mt-3.5">
                  <>
                    <Input
                      className=" no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                      onKeyDown={(e) => handleInput(e, field)}
                    />
                    {field.value.length > 0 && (
                      <div className="flex gap-10">
                        {field.value.map((tag: string) => {
                          return (
                            <Badge
                              key={tag}
                              className="subtle-medium background-light800_dark300 text-light400_light500 flex items-center gap-2 rounded-md border-none px-4 py-2 capitalize"
                            >
                              {tag}
                              <Image
                                src="/assets/icons/close.svg"
                                alt="animal"
                                height={20}
                                width={20}
                                className="cursor-pointer object-contain invert-0 dark:invert"
                                onClick={() => handleClick(field, tag)}
                              />
                            </Badge>
                          );
                        })}
                      </div>
                    )}
                  </>
                </FormControl>
                <FormDescription className="text-dark500_light500 body-regular mt-2.5 text-light-500">
                  Add up to 5 tags to describe what your question is about.
                  Start typing and see suggestions
                </FormDescription>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
          <Button type="submit" className="primary-gradient w-fit !text-light-900" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              {type === 'Edit' ? 'Editing...' : 'Posting...' }
            </>
          ) : (
            <>
              {type === 'Edit' ? 'Edit Question' : 'Ask a Question'}
            </>
          )}
        </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Question;
