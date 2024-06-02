import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ProfileService {
  constructor(private readonly prismaClient: PrismaClient) {}
}
