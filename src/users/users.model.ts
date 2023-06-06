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
  @Column({
    type: DataType.INTEGER, //указан тип поля  INTEGER - числовой
    unique: true, //поле должно быть всегда уникальным
    autoIncrement: true, //с каждой записью в базу будет добавляться
    primaryKey: true, //первичный ключ
  })
  /** @Column() - декоратор который показыват что в нашей таблице будут колонки*/
  id: number;

  @Column({
    type: DataType.STRING, //указан тип поля  STRING - строковой
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING, //указан тип поля  STRING - строковой
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  banned: boolean; // чтобы показывать забанен пользовател или нет

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  banReason: string;
}

/**после этого мы должны зарегестрировать UserModel в модулях app.module.ts */
