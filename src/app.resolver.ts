import { Controller, Get } from '@nestjs/common';
import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { AppService } from './app.service';

@Resolver()
export class appResolver {
  @Query(() => String)
  sayHello(): string {
    return '그래프큐엘 !';
  }
}
