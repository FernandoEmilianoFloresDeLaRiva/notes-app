import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { LoginUserDto, CreateUserDto } from './dto';
import { HashedService } from 'src/config/security/services/hashed.service';
import { TokenService } from 'src/config/security/services/token.service';

@Injectable()
export class UsersService implements OnModuleInit {
  constructor(
    @Inject(UserRepository) private readonly _userRepository: UserRepository,
    @Inject(HashedService)
    private readonly _hashService: HashedService,
    @Inject(TokenService)
    private readonly _tokenService: TokenService,
  ) {}
  async onModuleInit() {
    const email = 'defaultuser@example.com';
    const password = 'defaultpassword';
    const username = 'default user';
    const userExisting = await this._userRepository.findByEmail(email);

    if (!userExisting) {
      const passwordHashed = await this._hashService.hashedPassword(password);
      const defaultUserDto: CreateUserDto = {
        username,
        email,
        password: passwordHashed,
      };
      await this._userRepository.createUser(defaultUserDto);
      console.log(`Default user ${email} created.`);
    } else {
      console.log(`Default user ${email} already existing.`);
    }
  }
  async register(createUserDto: CreateUserDto) {
    try {
      const { email, password } = createUserDto;
      const userExisting = await this._userRepository.findByEmail(email);
      if (userExisting) {
        throw new ConflictException('User already exists');
      }
      const passwordHashed = await this._hashService.hashedPassword(password);
      const reqUserDto: CreateUserDto = {
        ...createUserDto,
        password: passwordHashed,
      };
      const res = await this._userRepository.createUser(reqUserDto);
      return res;
    } catch (error) {
      throw error;
    }
  }

  async login(loginUserDto: LoginUserDto) {
    try {
      const { email, password } = loginUserDto;
      const existingUser = await this._userRepository.findByEmail(email);
      if (!existingUser) {
        throw new NotFoundException('Invalid login user');
      }
      const isPasswordValid = await this._hashService.comparePassword(
        password,
        existingUser.password,
      );
      if (!isPasswordValid) {
        throw new NotFoundException('Invalid login user');
      }
      const { password: _, ...userRest } = existingUser;
      return {
        user: userRest,
        token: await this._tokenService.sign(userRest),
      };
    } catch (error) {
      throw error;
    }
  }
}
