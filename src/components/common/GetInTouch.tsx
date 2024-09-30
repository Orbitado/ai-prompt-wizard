import React from "react";
import Button from "@/components/common/Button";
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
          <CardContent className="gap-6 grid">
            <form action="" method="post" className="gap-6 grid">
              <div className="gap-6 grid grid-cols-2">
                <Input inputType="name" />
                <Input inputType="email" />
              </div>
              <label htmlFor="message">
                Message
                <textarea
                  name="message"
                  id="message"
                  placeholder="How can we help you?"
                  className="w-full h-32"
                  required
                />
              </label>
              <Button href="">Submit</Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </article>
  );
}
