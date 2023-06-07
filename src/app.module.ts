import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { UserModel } from './users/users.model';
import { RolesModule } from './roles/roles.module';

/**@Module - это декоратор с помощью которого мы расширям наш AppModule
 * тоесть мы что-то добавляем к нашему корневому модулю
 * сюда подключается весь функционал который мы пишем
 */
@Module({
  imports: [
    /**для пользования переменныеми */
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`, //путь к системным переменным устанавливается командой npm i @nestjs/config
      /**`${process.env.NODE_ENV}.env` - таколй путь потомут мы задали разные переменные среды и написали разные переменные
       * в pcket.json"start:dev": "cross-env NODE_ENV=development nest start --watch", */
    }),

    /**для подключения к базе данных */
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRESS_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRESS_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [UserModel], //зарегестрировали нашу модель из users.model.ts
      autoLoadModels: true, //дополнительный флаг для того чтбы автоматически создавалось вбазе что-то на основании наших моделей
    }),
    UsersModule,
    RolesModule, // автоматически добавляется если создавать модуль командой nest generate module users
  ], //сюда импортируем дополнительные модули если мы их пишем дополнительно в нашем случае мы подключили базу данных
  controllers: [], //регестрируем наш контролер который мы сделали в файле app.controller.ts
  providers: [], //тут передаем те сущности которые обрабатывают нашу бизнес логику
  //exports:[] - тоже может быть добавлен если нам необходимо какойто функционал экпортировать
})
export class AppModule {}

/**это главный наш модуль в него мы будем добавлять
 * все остальные то есть мы проведем декомпоозщицию нашего приложения */
