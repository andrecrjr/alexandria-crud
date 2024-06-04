import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user && (await bcrypt.compare(pass, user.password))) {
      delete user['password'];
      return user;
    }
    return null;
  }

  async login(user: any) {
    const { email, id, profileId } = await this.usersService.findOne(
      user.email,
    );
    const payload = { email: email, sub: id, subProf: profileId };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
