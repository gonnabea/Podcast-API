import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsEmail, IsEnum, IsString } from 'class-validator';
import { CoreOutput } from 'src/common/dtos/common.dto';
import { userRole } from '../entities/user.entity';

@InputType()
export class CreateAccountInput {
  @Field(type => String)
  @IsEmail()
  email: string;
  @Field(type => String)
  @IsString()
  password: string;
  @Field(type => String)
  @IsEnum(userRole)
  role: userRole;
}

@ObjectType()
export class CreateAccountOutput extends CoreOutput {}
