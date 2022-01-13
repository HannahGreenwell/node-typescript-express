import shortid from "shortid";
import { CreateUserDto, PutUserDto, PatchUserDto } from "../../models/user";

class UsersDao {
  users: Array<CreateUserDto> = [
    {
      id: "123ABC",
      email: "test@test.com",
      password: "password",
      firstName: "Test",
      lastName: "Test",
    },
  ];

  constructor() {
    console.log("Created new instance of UsersDao");
  }

  async addUser(user: CreateUserDto) {
    user.id = shortid.generate();
    this.users.push(user);
    return user.id;
  }

  async getUsers() {
    return this.users;
  }

  async getUserById(userId: string) {
    return this.users.find((user) => user.id === userId);
  }

  async getUserByEmail(email: string) {
    return this.users.find((user) => user.email === email);
  }

  async putUser(userId: string, user: PutUserDto) {
    const userIndex = this.users.findIndex((user) => user.id === userId);
    this.users.splice(userIndex, 1, user);
    return `${user.id} updated via PUT`;
  }

  async patchUser(userId: string, user: PatchUserDto) {
    const userIndex = this.users.findIndex((user) => user.id === userId);
    const userUpdate = { ...this.users[userIndex], ...user };
    this.users.splice(userIndex, 1, userUpdate);
    return `${user.id} updated via PATCH`;
  }

  async removeUser(userId: string) {
    const userIndex = this.users.findIndex((user) => user.id === userId);
    this.users.splice(userIndex, 1);
    return `${userId} removed`;
  }
}

export default new UsersDao();
