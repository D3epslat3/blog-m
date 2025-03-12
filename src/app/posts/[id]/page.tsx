import { getPost } from "@/actions/get-post";
import { PostDetails } from "./_components/post-details";

interface IPostPage {
  params: {
    id: string;
  };
}

export default async function PostPage({ params }: IPostPage) {
  const { post } = await getPost(params.id);

  if (!post) {
    return;
  }

  return (
    <div className="min-h-screen bg-slate-800 text-gray-100 p-8">
      <PostDetails post={post} />
    </div>
  );
}
