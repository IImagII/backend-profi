/** простой обьект котрый не содержит в себе логики и имеет только поля */

import { ApiProperty } from '@nestjs/swagger';

/**вот это dto предназначено конкретно для создания пользователя
 * мы какбы описычаем те параметры которые мы передаем в фуцнкцию в
 * файле users.service.ts
 */

export class CreateUserDto {
  /**это мы длеам описанике наших endpoint используя декоратор  @ApiOperation */
  @ApiProperty({
    example: 'test@test.ua',
    description: 'ЛОгин в виде почты email',
  })
  readonly email: string;

  @ApiProperty({
    example: '123456',
    description: 'пароль пользователя',
  })
  readonly password: string;
}
