import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
/**для того чтобы стало таблицей в базе данных нужен этот декоратор
 * tableName: 'users'-название таблицы
 
 */
export class UserModel extends Model<UserModel, UserCreationAttrs> {
  /**ApiProperty - нужен для создания документации  */
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER, //указан тип поля  INTEGER - числовой
    unique: true, //поле должно быть всегда уникальным
    autoIncrement: true, //с каждой записью в базу будет добавляться
    primaryKey: true, //первичный ключ
  })
  /** @Column() - декоратор который показыват что в нашей таблице будут колонки*/
  id: number;

  @ApiProperty({ example: 'user@mail.ru', description: 'Почтовый адрес' })
  @Column({
    type: DataType.STRING, //указан тип поля  STRING - строковой
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({ example: '12345678', description: 'Пароль' })
  @Column({
    type: DataType.STRING, //указан тип поля  STRING - строковой
    allowNull: false,
  })
  password: string;

  @ApiProperty({ example: 'true', description: 'Забанен или нет' })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  banned: boolean; // чтобы показывать забанен пользовател или нет

  @ApiProperty({ example: 'За хулиганство', description: 'Причина блокировки' })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  banReason: string;
}

/**после этого мы должны зарегестрировать UserModel в модулях app.module.ts */
