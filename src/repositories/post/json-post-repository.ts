import { PostModel } from '@/models/posts/post-model';
import { readFile } from 'fs/promises';
import { resolve } from 'path';
import { PostRepository } from './post-repository';

const ROUT_DIR = process.cwd();
const JSON_POST_FILE = resolve(ROUT_DIR, 'src', 'db', 'seed', 'posts.json');
export class JsonPostRepository implements PostRepository {
  private async readFromDisk() {
    const jsonContent = await readFile(JSON_POST_FILE, 'utf-8');
    const parsedJson = JSON.parse(jsonContent);
    const { posts } = parsedJson;
    return posts as PostModel[];
  }

  async findAll(): Promise<PostModel[]> {
    const posts = await this.readFromDisk();
    return posts;
  }

  async findById(id: string): Promise<PostModel | null> {
    const posts = await this.readFromDisk();
    const post = posts.find((post) => post.id === id) ?? null;
    if (!post) {
      throw new Error(`Post with id ${id} not found`);
    }
    return post;
  }
}

// export const postRepository: PostRepository = new JsonPostRepository();
// (async () => {
//   const posts = await postRepository.findAll();
//   posts.forEach((post) => {
//     console.log(post);
//   });
// })();

// (async () => {
//   const post = await postRepository.findById(
//     '99f8add4-7684-4c16-a316-616271db1992',
//   );
//   console.log(post);
// })();
