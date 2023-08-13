export interface IUser {
  followed: boolean;
  id: number;
  name: string;
  photos: {
    small: string | null;
    large: string | null;
  };
  status: string | null;
  uniqueUrlName: string | null;
  location?: {
    city: string;
    country: string;
  };
  counter?: number;
}
