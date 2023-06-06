import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule); //создается экземпляр приложения
  /**AppModule - главный модуль где собираются все модули */
  await app.listen(PORT, () => console.log(`Server start ${PORT}`)); //обращение к нашему серверу
}
start();

/**npm i cross-env - пакет чтобы при запуске задавть системные переменные
 * "start:dev": "nest start --watch", теперь мы можем поменять на "start:dev": "cross-env NODE_ENV=development nest start --watch",
 * тут мы установили свои перемнные среды .development.env
 */
