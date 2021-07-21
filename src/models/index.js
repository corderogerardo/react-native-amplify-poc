// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const UserType = {
  "CONSUMER": "consumer",
  "OWNER": "owner"
};

const { Establishment, User, UserFollow, EstablishmentLike, Review, CheckIn, EstablishmentFollow, SearchableEstablishmentConnection, GPS } = initSchema(schema);

export {
  Establishment,
  User,
  UserFollow,
  EstablishmentLike,
  Review,
  CheckIn,
  EstablishmentFollow,
  UserType,
  SearchableEstablishmentConnection,
  GPS
};