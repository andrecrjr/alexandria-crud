import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

export interface PaginationOptions {
  page: number;
  limit: number;
}

type PrismaModels = keyof PrismaClient;

export const PaginateAndFind = createParamDecorator(
  async (data: PrismaModels, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const prismaService = new PrismaService();
  },
);
