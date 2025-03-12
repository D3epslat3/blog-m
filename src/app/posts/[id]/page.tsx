import { getPost } from "@/actions/get-post";
import { PostDetails } from "./_components/post-details";

interface IPostPage {
  params: Promise<{ id: string }>
}

export default async function PostPage({ params }: IPostPage) {
  const { id } = await params;
  const { post } = await getPost(id);

  if (!post) {
    return;
  }

  return (
    <div className="min-h-screen bg-slate-800 text-gray-100 p-8">
      <PostDetails post={post} />
    </div>
  );
}
