import { Injectable } from '@nestjs/common';
import {
  CreateAccountInput,
  CreateAccountOutput,
} from './dtos/create-account.dto';

@Injectable()
export class UserService {
  createAccount(createAccountInput: CreateAccountInput): CreateAccountOutput {
    console.log(createAccountInput);
    return {
      ok: true,
    };
  }
}
