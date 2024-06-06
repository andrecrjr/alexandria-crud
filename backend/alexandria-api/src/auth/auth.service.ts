import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { AuthLoginDTO } from 'src/users/User.dto';

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

  async login(user: AuthLoginDTO) {
    try {
      const { email, id } = await this.usersService.findOne(user.email);
      const payload = { email: email, sub: id };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch (error) {
      console.log(error);
      throw new NotFoundException(`User Account not found`);
    }
  }
}
