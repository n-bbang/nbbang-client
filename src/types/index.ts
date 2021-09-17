export interface CategoryInterface{
    categoryId: number;
    categoryName:string;
}
export interface RoomInterface{
    roomId:number;
    platformId:number;
    bossUserId:number;
    roomName?:string;
    totalPrice?:number;
    personalPrice?:number
    mexUser:number;
    recentPayment?:Date;
}