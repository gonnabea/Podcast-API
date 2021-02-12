import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { IsEmail, IsEnum, IsString } from 'class-validator';
import { GraphQLEnumType } from 'graphql';

import { CoreOutput } from 'src/common/dtos/common.dto';
import { User, UserRole } from '../entities/user.entity';

@InputType()
export class CreateAccountInput extends PickType(User, [
  'email',
  'password',
  'role',
]) {}

@ObjectType()
export class CreateAccountOutput extends CoreOutput {}
