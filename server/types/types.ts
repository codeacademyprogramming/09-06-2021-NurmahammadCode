export enum ECardType {
  VISA = "Visa",
  MASTER = "Master",
}
export enum ECostType {
  STORE = "Store",
  RESTOURANT = "Restourant",
  ENTERTAINMENT = "Entertainment",
}
export interface ICosts {
  _id?: String;
  CardID: String;
  Amount: Number;
  CostType: ECostType;
}
export interface ICard {
  _id?: String;
  CardNumber: Number;
  ExpData: Date;
  cvv: Number;
  BankName: String;
  CardType: ECardType;
  Costs: Array<ICosts>;
}

export interface IUser {
  _id?: String;
  Username: String;
  Password: String;
  Cards: Array<ICard>;
}

export interface IUsers {
  users: Array<IUser>;
}

export interface IWallet {
  cards: ICard[];
  costs: ICosts[];
}
