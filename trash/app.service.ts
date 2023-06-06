//мы это перенесли сюда для того чтобы главный у нас будек принимать в себя все остальные а тут мы его расписали

// import { Injectable } from '@nestjs/common';

// type TypeUsers = {
//   id: number;
//   name: string;
// };

// @Injectable() // декоратор для того тчобы класс стал провайдером
// export class AppService {
//   /**именно тут пишется логика которая потом переноситься в app.controlleer.ts */
//   getHello(): string {
//     return 'Hello мир!';
//   }

//   getUsers(): TypeUsers[] {
//     return [{ id: 1, name: 'Andrei' }];
//   }
// }
