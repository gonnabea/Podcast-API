import { Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateAccountInput,
  CreateAccountOutput,
} from './dtos/create-account.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createAccount({
    email,
    password,
    role,
  }: CreateAccountInput): Promise<CreateAccountOutput> {
    try {
      const checkUser = await this.userRepository.findOne({ email });
      if (checkUser) {
        return {
          ok: false,
          error: ' There is an user with that email already.',
        };
      }

      const newUser = await this.userRepository.save(
        this.userRepository.create({
          email,
          password,
          role,
        }),
      );
      if (!newUser) {
        return {
          ok: false,
          error: 'Cannot create a new user.',
        };
      }
      return {
        ok: true,
      };
    } catch {
      return {
        ok: false,
        error: 'There is an error to create new user.',
      };
    }
  }
}
