import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from './users.model';
import { CreateUserDto } from './dto/create-user-dto';

@Injectable()
export class UsersService {
  /**это нужно для подключения модели которую мы создали для базы данных */
  constructor(
    @InjectModel(UserModel) private userRepository: typeof UserModel,
  ) {}

  /**запрос на создание пользователей */
  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    return user;
  }

  /**запрос на получение все пользователей */
  async getAllUSers() {
    const users = await this.userRepository.findAll();
    return users;
  }
}
