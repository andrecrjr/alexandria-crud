import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
  getAll() {
    const dados = {
      aaa: 'bbb',
    };
    return dados;
  }
  create(data) {
    console.log(data);
    return data;
  }
}
