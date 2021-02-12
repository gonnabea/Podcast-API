import {
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum UserRole {
  Host = 'Host',
  Listener = 'Listener',
}

registerEnumType(UserRole, { name: 'UserRole' });

@InputType('UserInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class User {
  @Field()
  @PrimaryGeneratedColumn()
  @Column()
  id: number;

  @Field(type => String)
  @Column()
  email: string;

  @Field(type => String)
  @Column()
  password: string;

  @Field(type => UserRole)
  @Column({
    type: 'enum',
  })
  role: UserRole;
}
