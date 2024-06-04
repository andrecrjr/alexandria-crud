export type JwtDTO = {
  sub: number;
  email: string;
  subProf: number;
};

export interface IRequestJWT {
  user: JwtDTO;
}
