import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';

import { AuthLoginDTO } from 'src/users/User.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: AuthLoginDTO, @Res({ passthrough: true }) res) {
    const tokens = await this.authService.login(body);
    res.setCookie('refreshToken', tokens.refresh_token, {
      httpOnly: true,
      path: '/',
      maxAge: 24 * 60 * 60 * 1000, // 1 dia
      secure: true,
    });
    return { access_token: tokens.access_token };
  }

  @Post('refresh')
  async refresh(@Req() req, @Res({ passthrough: true }) res) {
    const refreshToken = req.cookies['refreshToken'];
    const tokens = await this.authService.refreshToken(refreshToken);
    res.setCookie('refreshToken', tokens.refresh_token, {
      httpOnly: true,
      path: '/',
      maxAge: 24 * 60 * 60 * 1000, // 1 dia
      secure: true,
    });
    return { access_token: tokens.access_token };
  }
}
