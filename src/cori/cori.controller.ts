import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoriService } from './cori.service';
import { CreateCoriDto } from './dto/create-cori.dto';
import { UpdateCoriDto } from './dto/update-cori.dto';

@Controller('cori')
export class CoriController {
  constructor(private readonly coriService: CoriService) {}

  @Post()
  create(@Body() createCoriDto: CreateCoriDto) {
    return this.coriService.create(createCoriDto);
  }

  @Get()
  findAll() {
    return this.coriService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coriService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoriDto: UpdateCoriDto) {
    return this.coriService.update(+id, updateCoriDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coriService.remove(+id);
  }
}
