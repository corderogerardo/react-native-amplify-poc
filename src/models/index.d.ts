import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum UserType {
  CONSUMER = "consumer",
  OWNER = "owner"
}

export declare class SearchableEstablishmentConnection {
  readonly items?: (Establishment | null)[];
  readonly nextToken?: string;
  readonly total?: number;
  constructor(init: ModelInit<SearchableEstablishmentConnection>);
}

export declare class GPS {
  readonly lon?: number;
  readonly lat?: number;
  constructor(init: ModelInit<GPS>);
}

type EstablishmentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'updatedAt';
}

type UserFollowMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EstablishmentLikeMetaData = {
  readOnlyFields: 'updatedAt';
}

type ReviewMetaData = {
  readOnlyFields: 'updatedAt';
}

type CheckInMetaData = {
  readOnlyFields: 'updatedAt';
}

type EstablishmentFollowMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Establishment {
  readonly id: string;
  readonly ownerId: string;
  readonly owner?: User;
  readonly name: string;
  readonly gps?: GPS;
  readonly street?: string;
  readonly city?: string;
  readonly state?: string;
  readonly zipcode?: string;
  readonly neighborhood?: string;
  readonly phone?: string;
  readonly email?: string;
  readonly placeID: string;
  readonly phoneNumber?: string;
  readonly likeCount?: number;
  readonly reviews?: (Review | null)[];
  readonly userLikes?: (EstablishmentLike | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Establishment, EstablishmentMetaData>);
  static copyOf(source: Establishment, mutator: (draft: MutableModel<Establishment, EstablishmentMetaData>) => MutableModel<Establishment, EstablishmentMetaData> | void): Establishment;
}

export declare class User {
  readonly id: string;
  readonly pk_id: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly userName?: string;
  readonly birthdate?: string;
  readonly gender?: string;
  readonly description?: string;
  readonly ownerOf?: (Establishment | null)[];
  readonly createdAt?: string;
  readonly lastUpdated?: string;
  readonly profilePicture?: string;
  readonly followers?: (UserFollow | null)[];
  readonly followed?: (UserFollow | null)[];
  readonly establishmentLikes?: (EstablishmentLike | null)[];
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class UserFollow {
  readonly id: string;
  readonly userFollower?: User;
  readonly userFollowedId: string;
  readonly userFollowed?: User;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UserFollow, UserFollowMetaData>);
  static copyOf(source: UserFollow, mutator: (draft: MutableModel<UserFollow, UserFollowMetaData>) => MutableModel<UserFollow, UserFollowMetaData> | void): UserFollow;
}

export declare class EstablishmentLike {
  readonly id: string;
  readonly establishmentId: string;
  readonly userId: string;
  readonly createdAt: string;
  readonly establishment?: Establishment;
  readonly user?: User;
  readonly establishmentName?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<EstablishmentLike, EstablishmentLikeMetaData>);
  static copyOf(source: EstablishmentLike, mutator: (draft: MutableModel<EstablishmentLike, EstablishmentLikeMetaData>) => MutableModel<EstablishmentLike, EstablishmentLikeMetaData> | void): EstablishmentLike;
}

export declare class Review {
  readonly id: string;
  readonly establishmentId: string;
  readonly userId: string;
  readonly createdAt: string;
  readonly establishmentName?: string;
  readonly comments?: string;
  readonly image?: (string | null)[];
  readonly rating?: number;
  readonly establishment?: Establishment;
  readonly user?: User;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Review, ReviewMetaData>);
  static copyOf(source: Review, mutator: (draft: MutableModel<Review, ReviewMetaData>) => MutableModel<Review, ReviewMetaData> | void): Review;
}

export declare class CheckIn {
  readonly id: string;
  readonly establishmentId: string;
  readonly userId: string;
  readonly createdAt: string;
  readonly establishmentName?: string;
  readonly establishment?: Establishment;
  readonly user?: User;
  readonly updatedAt?: string;
  constructor(init: ModelInit<CheckIn, CheckInMetaData>);
  static copyOf(source: CheckIn, mutator: (draft: MutableModel<CheckIn, CheckInMetaData>) => MutableModel<CheckIn, CheckInMetaData> | void): CheckIn;
}

export declare class EstablishmentFollow {
  readonly id: string;
  readonly establishmentId: string;
  readonly userId: string;
  readonly establishment?: Establishment;
  readonly user?: User;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<EstablishmentFollow, EstablishmentFollowMetaData>);
  static copyOf(source: EstablishmentFollow, mutator: (draft: MutableModel<EstablishmentFollow, EstablishmentFollowMetaData>) => MutableModel<EstablishmentFollow, EstablishmentFollowMetaData> | void): EstablishmentFollow;
}