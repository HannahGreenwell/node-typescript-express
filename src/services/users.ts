import UsersDao from "../users/dao/users.dao";
import { Crud } from "../models/crud";
import { CreateUserDto, PutUserDto, PatchUserDto } from "../models/user";

class UsersService implements Crud {
  async create(resource: CreateUserDto) {
    return UsersDao.addUser(resource);
  }

  async list(limit: number, page: number) {
    return UsersDao.getUsers();
  }

  async readById(id: string) {
    return UsersDao.getUserById(id);
  }

  async readByEmail(email: string) {
    return UsersDao.getUserByEmail(email);
  }

  async putById(id: string, resource: PutUserDto) {
    return UsersDao.putUser(id, resource);
  }

  async patchById(id: string, resource: PatchUserDto) {
    return UsersDao.patchUser(id, resource);
  }

  async deleteById(id: string) {
    return UsersDao.removeUser(id);
  }
}

export default new UsersService();
