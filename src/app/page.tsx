import { createPosts, getPosts } from "@/actions/actions";
import { CreatePosts } from "@/components/CreatePosts";
import Timeline from "@/components/Timeline";
import Image from "next/image";

export default async function Home() {

  const posts = await getPosts()
  // const createPosts = await createPosts(data);

  return (
    <div className="">
      <CreatePosts />
      <Timeline posts={posts} />
    </div>
  );
}
