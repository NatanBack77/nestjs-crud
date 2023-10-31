import { Injectable } from '@nestjs/common';
import { CreateCoriDto } from './dto/create-cori.dto';
import { UpdateCoriDto } from './dto/update-cori.dto';

@Injectable()
export class CoriService {
  create(createCoriDto: CreateCoriDto) {
    return 'This action adds a new cori';
  }

  findAll() {
    return `This action returns all cori`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cori`;
  }

  update(id: number, updateCoriDto: UpdateCoriDto) {
    return `This action updates a #${id} cori`;
  }

  remove(id: number) {
    return `This action removes a #${id} cori`;
  }
}
