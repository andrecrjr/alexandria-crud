import { IsEmail, IsString } from "class-validator";
import { ConditionalApiProperty } from "./utils";

export class UserIdDTO {
  @ConditionalApiProperty(process.env.APP === "nestjs", { required: false })
  @IsString()
  id?: number;
}

export class AuthLoginDTO {
  @ConditionalApiProperty(process.env.APP === "nestjs", { required: false })
  @IsEmail()
  email: string;
  @ConditionalApiProperty(process.env.APP === "nestjs", { required: false })
  password: string;
}
