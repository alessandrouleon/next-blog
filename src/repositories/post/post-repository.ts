import { PostModel } from '@/models/posts/post-model';

export interface PostRepository {
  findById(id: string): Promise<PostModel | null>;
  findAll(): Promise<PostModel[]>;
}
