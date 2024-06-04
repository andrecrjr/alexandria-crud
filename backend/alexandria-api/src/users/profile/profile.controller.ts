import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { ProfileService } from './profile.service';
import { UpdateUserProfileDTO } from '../User.dto';

@Controller('users/profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}
  @UseGuards(AuthGuard)
  @ApiBearerAuth('defaultBearerAuth')
  @Get()
  getProfile(@Request() req) {
    return this.profileService.getUserAndProfile(req.user);
  }

  @UseGuards(AuthGuard)
  @Patch()
  editProfile(@Request() req, @Body() data: UpdateUserProfileDTO) {
    return this.profileService.updateProfile(data, req.user);
  }
  @UseGuards(AuthGuard)
  @Get('all')
  getAll() {
    return this.profileService.getAllProfiles();
  }

  @UseGuards(AuthGuard)
  @Delete()
  deleteProfile(@Request() req) {
    return this.profileService.deleteProfile(req.user);
  }
}
