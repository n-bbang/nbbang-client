export interface CategoryInterface {
  categoryId: number;
  categoryName: string;
}
export interface RoomInterface {
  roomId: number;
  platformId: number;
  bossUserId: number;
  roomName?: string;
  totalPrice?: number;
  personalPrice?: number;
  maxUser: number;
  recentPayment?: Date;
}

export interface UserInterface {
  userId: number;
  loginId: string;
  passwd: string;
  name: string;
  nickname?: string;
  gender: number;
  phoneNumber: string;
  account?: string;
}
