export interface CreateUserDto {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  permissionFlags?: number;
}

export interface PutUserDto {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  permissionFlags: number;
}

export interface PatchUserDto extends Partial<PutUserDto> {}
