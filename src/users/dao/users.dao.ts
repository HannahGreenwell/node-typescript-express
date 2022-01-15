import shortid from "shortid";
import { CreateUserDto, PutUserDto, PatchUserDto } from "../../models/user";
import MongooseService from "../../services/mongoose";

class UsersDao {
  Schema = MongooseService.getMongoose().Schema;

  userSchema = new this.Schema(
    {
      _id: String,
      email: String,
      password: { type: String, select: false },
      firstName: String,
      lastName: String,
      permissionFlags: Number,
    },
    { id: false }
  );

  User = MongooseService.getMongoose().model("User", this.userSchema);

  constructor() {
    console.log("Created new instance of UsersDao");
  }

  async addUser(userFields: CreateUserDto) {
    const userId = shortid.generate();
    const user = new this.User({
      _id: userId,
      ...userFields,
      permissionFlags: 1,
    });
    await user.save();
    return userId;
  }

  async getUserByEmail(email: string) {
    return this.User.findOne({ email: email }).exec();
  }

  async getUserById(id: string) {
    return this.User.findOne({ _id: id }).exec();
  }

  async getUsers(limit = 25, page = 0) {
    return this.User.find()
      .limit(limit)
      .skip(limit * page)
      .exec();
  }

  async updateUserById(id: string, userFields: PutUserDto | PatchUserDto) {
    const user = await this.User.findOneAndUpdate(
      { _id: id },
      { $set: userFields },
      { new: true }
    ).exec();

    return user;
  }

  async deleteUserById(id: string) {
    return this.User.deleteOne({ _id: id }).exec();
  }
}

export default new UsersDao();
