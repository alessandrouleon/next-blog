import { postRepository } from '@/repositories/post';

export async function PostsList() {
  const posts = await postRepository.findAll();
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
        </div>
      ))}
    </div>
  );
}
