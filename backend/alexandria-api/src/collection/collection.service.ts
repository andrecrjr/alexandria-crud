import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateCollectionDto, UpdateCollectionDto } from './collection.dto';
import { ApiTags } from '@nestjs/swagger';

@Injectable()
@ApiTags('User Collection')
export class CollectionService {
  constructor(private readonly prismaService: PrismaService) {}
  async createUserWithContent(user, data: CreateCollectionDto) {
    const collectionUserData = await this.prismaService.collection.create({
      data: {
        ...data,
        profileId: user.subProf,
        userId: user.sub,
      },
    });
    return collectionUserData;
  }

  async getCollectionByUser(user) {
    const userCollection = await this.prismaService.collection.findMany({
      where: { profileId: user.subProf },
      include: {
        content: {
          include: {
            type: true,
            createdBy: true,
          },
        },
      },
    });
    return userCollection;
  }

  async updateCollectionContentAndUser(user, data: UpdateCollectionDto) {
    return await this.prismaService.collection.update({
      where: { profileId: user.subProf, contentId: data.contentId },
      data: {
        ...data,
      },
    });
  }
}
