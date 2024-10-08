import React from "react";
import Input from "@/components/common/Input";
import { Card, CardContent } from "@/components/ui/card";
import TextArea from "./TextArea";

export default function GetInTouch() {
  return (
    <article className="space-y-8 mb-12 w-full">
      <section id="contact" className="mb-20">
        <h3 className="mb-12 font-bold text-4xl text-center text-gray-800">
          Get in Touch
        </h3>
        <Card>
          <CardContent className="bg-white">
            <form
              action="https://formsubmit.co/vleonardojuanpablo@icloud.com"
              method="post"
              className="gap-6 grid"
            >
              <div className="md:gap-6 grid grid-cols-1 md:grid-cols-2">
                <Input
                  labelTitle="Name"
                  placeholder="Enter your name"
                  name="name"
                  required
                  type="text"
                />
                <Input
                  labelTitle="Email"
                  placeholder="Enter your email"
                  name="email"
                  required
                  type="email"
                />
              </div>
              <TextArea
                labelTitle="Message"
                name="message"
                rows={5}
                placeholder="Enter your message"
                required
              />
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
