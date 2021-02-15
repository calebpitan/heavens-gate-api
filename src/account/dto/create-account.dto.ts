import { IsEmail, Length } from 'class-validator';

export class CreateAccountDto {
  @Length(1, 32, { message: `First Name cannot be empty` })
  firstname!: string;

  @Length(1, 32, { message: `Last Name cannot be empty` })
  lastname!: string;

  @Length(3, 24, { message: `Username cannot be empty` })
  username!: string;

  @IsEmail(undefined, { message: `Enter a valid email address` })
  email!: string;

  @Length(8)
  password!: string;
}
