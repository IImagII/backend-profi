// import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

// @Controller('/api')
// /**параметром этот декоратор принимает префикс по которому этот контролер будет отрабатывать
//  * мі в нашем случае указали '/api'- то есть это какбы адрус куда нужно обращаться
//  * т.е у нас обращение уже будет http://localhost:5000/api
//  */
// export class AppController {
//   /**  это нужно для того чтобы использовать класс AppService из app.service.ts
//    * таким образом у нас нет нужды создавать обьект з этого класса мы им просто пользуемся
//    */
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   /**тут путь будет путь уже будет http://localhost:5000/api */
//   getHello(): string {
//     return this.appService.getHello();
//     /**сюда мы пишем к какому нами написанному классу мы должны
//      * вернуться а саму логику тут не пишем */
//   }

//   @Get('/users')
//   /**для того чтобы эта функция стала запросом
//    * тут в параметрах можно указывать свой путь по которому будет доступно
//    * и того путь уже будет http://localhost:5000/api/users
//    */
//   getUsers() {
//     return this.appService.getUsers();
//   }
// }
