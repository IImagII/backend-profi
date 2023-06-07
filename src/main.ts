import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule); //создается экземпляр приложения
  /**AppModule - главный модуль где собираются все модули */

  /**настраиваем swagger */
  const config = new DocumentBuilder()
    .setTitle('Урок по продвинотому BACKEND')
    .setDescription('Документация REST API')
    .setVersion('1.0.0')
    .addTag('ULBI TV')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);
  /**=================================== */

  await app.listen(PORT, () => console.log(`Server start ${PORT}`)); //обращение к нашему серверу
}
start();

/**npm i cross-env - пакет чтобы при запуске задавть системные переменные
 * "start:dev": "nest start --watch", теперь мы можем поменять на "start:dev": "cross-env NODE_ENV=development nest start --watch",
 * тут мы установили свои перемнные среды .development.env
 */
