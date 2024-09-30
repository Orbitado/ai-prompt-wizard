import UsersCard from "./UsersCard";
import { users } from "@/data/ourUsers";
export default function OurUserSays() {
  return (
    <article className="space-y-8 mb-12">
      <h3 className="font-bold text-4xl text-gray-800">What Our Users Say</h3>
      <section className="gap-4 grid grid-cols-1 md:grid-cols-3">
        {Object.entries(users).map(([author, text]) => (
          <UsersCard key={author} text={text} author={author} />
        ))}
      </section>
    </article>
  );
}
