import React from "react";
import Input from "@/components/common/Input";
import { Card, CardContent } from "@/components/ui/card";

export default function GetInTouch() {
  return (
    <article className="space-y-8 mb-12 w-full">
      <section id="contact" className="mb-20">
        <h3 className="mb-12 font-bold text-4xl text-center text-gray-800">
          Get in Touch
        </h3>
        <Card>
          <CardContent className="bg-white">
            <form action="" className="gap-6 grid">
              <div className="md:gap-6 grid grid-cols-1 md:grid-cols-2">
                <Input inputType="name" type="text" />
                <Input inputType="email" type="email" />
              </div>
              <label
                htmlFor="message"
                className="font-medium text-sm text-start"
              >
                Message
                <textarea
                  name="message"
                  id="message"
                  placeholder="How can we help you?"
                  className="p-2 border rounded-[0.25rem] w-full h-32 text-sm resize-none"
                  required
                />
              </label>
              <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded-[0.25rem] w-full h-fit font-bold text-white">
                Submit
              </button>
            </form>
          </CardContent>
        </Card>
      </section>
    </article>
  );
}
