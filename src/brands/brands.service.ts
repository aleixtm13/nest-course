import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'Seat',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }
  ];
  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      name: createBrandDto.name,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return `This action returns all brands`;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) {
      throw new NotFoundException(`No brand found with id ${id}`);
    }
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) {
      throw new NotFoundException(`No brand found with id ${id}`);
    }
    this.brands.map((brand) => {
      if (brand.id === id) {
        brand.name = updateBrandDto.name;
        brand.updatedAt = Date.now();
      }
    });
    return brand;
  }

  remove(id: string) {
    this.brands = this.brands.filter((brand) => brand.id !== id);
  }

  fillBrandsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
