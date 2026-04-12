import { User } from '../entities/user.entity';

export interface IAuthRepository {
  findByEmail(email: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
  create(user: Partial<User>): Promise<User>;
  // Mañana podrías añadir update() o delete() sin tocar el resto
}