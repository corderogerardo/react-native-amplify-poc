/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const findEstablishments = /* GraphQL */ `
  query FindEstablishments($input: findEstablishmentsInput!) {
    findEstablishments(input: $input) {
      items {
        id
        ownerId
        name
        gps {
          lon
          lat
        }
        street
        city
        state
        zipcode
        neighborhood
        phone
        email
        placeID
        phoneNumber
        likeCount
        reviews {
          nextToken
          startedAt
        }
        userLikes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
      }
      nextToken
      total
    }
  }
`;
export const syncTodos = /* GraphQL */ `
  query SyncTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTodos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEstablishmentLikes = /* GraphQL */ `
  query SyncEstablishmentLikes(
    $filter: ModelEstablishmentLikeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEstablishmentLikes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        establishmentId
        createdAt
        establishmentName
        _version
        _deleted
        _lastChangedAt
        updatedAt
        establishment {
          id
          ownerId
          name
          street
          city
          state
          zipcode
          neighborhood
          phone
          email
          placeID
          phoneNumber
          likeCount
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userId
        user {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCheckIns = /* GraphQL */ `
  query SyncCheckIns(
    $filter: ModelCheckInFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCheckIns(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        establishmentId
        createdAt
        establishmentName
        _version
        _deleted
        _lastChangedAt
        updatedAt
        establishment {
          id
          ownerId
          name
          street
          city
          state
          zipcode
          neighborhood
          phone
          email
          placeID
          phoneNumber
          likeCount
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userId
        user {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEstablishmentFollows = /* GraphQL */ `
  query SyncEstablishmentFollows(
    $filter: ModelEstablishmentFollowFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEstablishmentFollows(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        establishmentId
        userId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        establishment {
          id
          ownerId
          name
          street
          city
          state
          zipcode
          neighborhood
          phone
          email
          placeID
          phoneNumber
          likeCount
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        user {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getEstablishmentFollow = /* GraphQL */ `
  query GetEstablishmentFollow($establishmentId: ID!, $userId: ID!) {
    getEstablishmentFollow(establishmentId: $establishmentId, userId: $userId) {
      establishmentId
      userId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      establishment {
        id
        ownerId
        name
        gps {
          lon
          lat
        }
        street
        city
        state
        zipcode
        neighborhood
        phone
        email
        placeID
        phoneNumber
        likeCount
        reviews {
          nextToken
          startedAt
        }
        userLikes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
      }
      user {
        pk_id
        id
        firstName
        lastName
        userName
        birthdate
        gender
        description
        createdAt
        lastUpdated
        profilePicture
        followers {
          nextToken
          startedAt
        }
        followed {
          nextToken
          startedAt
        }
        establishmentLikes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        updatedAt
        ownerOf {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const listEstablishmentFollows = /* GraphQL */ `
  query ListEstablishmentFollows(
    $establishmentId: ID
    $userId: ModelIDKeyConditionInput
    $filter: ModelEstablishmentFollowFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listEstablishmentFollows(
      establishmentId: $establishmentId
      userId: $userId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        establishmentId
        userId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        establishment {
          id
          ownerId
          name
          street
          city
          state
          zipcode
          neighborhood
          phone
          email
          placeID
          phoneNumber
          likeCount
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        user {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncReviews = /* GraphQL */ `
  query SyncReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncReviews(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        establishmentId
        createdAt
        establishmentName
        comments
        image
        rating
        _version
        _deleted
        _lastChangedAt
        updatedAt
        establishment {
          id
          ownerId
          name
          street
          city
          state
          zipcode
          neighborhood
          phone
          email
          placeID
          phoneNumber
          likeCount
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userId
        user {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserFollows = /* GraphQL */ `
  query SyncUserFollows(
    $filter: ModelUserFollowFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserFollows(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userFollowedId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        userFollower {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        userFollowed {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserFollow = /* GraphQL */ `
  query GetUserFollow($id: ID!, $userFollowedId: ID!) {
    getUserFollow(id: $id, userFollowedId: $userFollowedId) {
      id
      userFollowedId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      userFollower {
        pk_id
        id
        firstName
        lastName
        userName
        birthdate
        gender
        description
        createdAt
        lastUpdated
        profilePicture
        followers {
          nextToken
          startedAt
        }
        followed {
          nextToken
          startedAt
        }
        establishmentLikes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        updatedAt
        ownerOf {
          nextToken
          startedAt
        }
      }
      userFollowed {
        pk_id
        id
        firstName
        lastName
        userName
        birthdate
        gender
        description
        createdAt
        lastUpdated
        profilePicture
        followers {
          nextToken
          startedAt
        }
        followed {
          nextToken
          startedAt
        }
        establishmentLikes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        updatedAt
        ownerOf {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const listUserFollows = /* GraphQL */ `
  query ListUserFollows(
    $id: ID
    $userFollowedId: ModelIDKeyConditionInput
    $filter: ModelUserFollowFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUserFollows(
      id: $id
      userFollowedId: $userFollowedId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        userFollowedId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        userFollower {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        userFollowed {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getEstablishmentLikesByUser = /* GraphQL */ `
  query GetEstablishmentLikesByUser(
    $userId: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEstablishmentLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getEstablishmentLikesByUser(
      userId: $userId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        establishmentId
        createdAt
        establishmentName
        _version
        _deleted
        _lastChangedAt
        updatedAt
        establishment {
          id
          ownerId
          name
          street
          city
          state
          zipcode
          neighborhood
          phone
          email
          placeID
          phoneNumber
          likeCount
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userId
        user {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserCheckinsCheckIn = /* GraphQL */ `
  query GetUserCheckinsCheckIn(
    $userId: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCheckInFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getUserCheckinsCheckIn(
      userId: $userId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        establishmentId
        createdAt
        establishmentName
        _version
        _deleted
        _lastChangedAt
        updatedAt
        establishment {
          id
          ownerId
          name
          street
          city
          state
          zipcode
          neighborhood
          phone
          email
          placeID
          phoneNumber
          likeCount
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userId
        user {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getEstablishmentsFollowedByUser = /* GraphQL */ `
  query GetEstablishmentsFollowedByUser(
    $userId: ID
    $establishmentId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEstablishmentFollowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getEstablishmentsFollowedByUser(
      userId: $userId
      establishmentId: $establishmentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        establishmentId
        userId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        establishment {
          id
          ownerId
          name
          street
          city
          state
          zipcode
          neighborhood
          phone
          email
          placeID
          phoneNumber
          likeCount
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        user {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserCheckinsReview = /* GraphQL */ `
  query GetUserCheckinsReview(
    $userId: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getUserCheckinsReview(
      userId: $userId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        establishmentId
        createdAt
        establishmentName
        comments
        image
        rating
        _version
        _deleted
        _lastChangedAt
        updatedAt
        establishment {
          id
          ownerId
          name
          street
          city
          state
          zipcode
          neighborhood
          phone
          email
          placeID
          phoneNumber
          likeCount
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userId
        user {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getFollowers = /* GraphQL */ `
  query GetFollowers(
    $userFollowedId: ID
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFollowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getFollowers(
      userFollowedId: $userFollowedId
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userFollowedId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        userFollower {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        userFollowed {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getEstablishment = /* GraphQL */ `
  query GetEstablishment($ownerId: ID!, $id: ID!) {
    getEstablishment(ownerId: $ownerId, id: $id) {
      id
      ownerId
      name
      gps {
        lon
        lat
      }
      street
      city
      state
      zipcode
      neighborhood
      phone
      email
      placeID
      phoneNumber
      likeCount
      reviews {
        items {
          establishmentId
          createdAt
          establishmentName
          comments
          image
          rating
          _version
          _deleted
          _lastChangedAt
          updatedAt
          userId
        }
        nextToken
        startedAt
      }
      userLikes {
        items {
          establishmentId
          createdAt
          establishmentName
          _version
          _deleted
          _lastChangedAt
          updatedAt
          userId
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner {
        pk_id
        id
        firstName
        lastName
        userName
        birthdate
        gender
        description
        createdAt
        lastUpdated
        profilePicture
        followers {
          nextToken
          startedAt
        }
        followed {
          nextToken
          startedAt
        }
        establishmentLikes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        updatedAt
        ownerOf {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const listEstablishments = /* GraphQL */ `
  query ListEstablishments(
    $ownerId: ID
    $id: ModelIDKeyConditionInput
    $filter: ModelEstablishmentFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listEstablishments(
      ownerId: $ownerId
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        ownerId
        name
        gps {
          lon
          lat
        }
        street
        city
        state
        zipcode
        neighborhood
        phone
        email
        placeID
        phoneNumber
        likeCount
        reviews {
          nextToken
          startedAt
        }
        userLikes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getEstablishmentsByUser = /* GraphQL */ `
  query GetEstablishmentsByUser(
    $ownerId: ID
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEstablishmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getEstablishmentsByUser(
      ownerId: $ownerId
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        ownerId
        name
        gps {
          lon
          lat
        }
        street
        city
        state
        zipcode
        neighborhood
        phone
        email
        placeID
        phoneNumber
        likeCount
        reviews {
          nextToken
          startedAt
        }
        userLikes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const searchEstablishments = /* GraphQL */ `
  query SearchEstablishments(
    $filter: SearchableEstablishmentFilterInput
    $sort: SearchableEstablishmentSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchEstablishments(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        ownerId
        name
        gps {
          lon
          lat
        }
        street
        city
        state
        zipcode
        neighborhood
        phone
        email
        placeID
        phoneNumber
        likeCount
        reviews {
          nextToken
          startedAt
        }
        userLikes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
      }
      nextToken
      total
    }
  }
`;
export const syncEstablishments = /* GraphQL */ `
  query SyncEstablishments(
    $filter: ModelEstablishmentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEstablishments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        ownerId
        name
        gps {
          lon
          lat
        }
        street
        city
        state
        zipcode
        neighborhood
        phone
        email
        placeID
        phoneNumber
        likeCount
        reviews {
          nextToken
          startedAt
        }
        userLikes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getEstablishmentLike = /* GraphQL */ `
  query GetEstablishmentLike($establishmentId: ID!, $createdAt: AWSDateTime!) {
    getEstablishmentLike(
      establishmentId: $establishmentId
      createdAt: $createdAt
    ) {
      establishmentId
      createdAt
      establishmentName
      _version
      _deleted
      _lastChangedAt
      updatedAt
      establishment {
        id
        ownerId
        name
        gps {
          lon
          lat
        }
        street
        city
        state
        zipcode
        neighborhood
        phone
        email
        placeID
        phoneNumber
        likeCount
        reviews {
          nextToken
          startedAt
        }
        userLikes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
      }
      userId
      user {
        pk_id
        id
        firstName
        lastName
        userName
        birthdate
        gender
        description
        createdAt
        lastUpdated
        profilePicture
        followers {
          nextToken
          startedAt
        }
        followed {
          nextToken
          startedAt
        }
        establishmentLikes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        updatedAt
        ownerOf {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const listEstablishmentLikes = /* GraphQL */ `
  query ListEstablishmentLikes(
    $establishmentId: ID
    $createdAt: ModelStringKeyConditionInput
    $filter: ModelEstablishmentLikeFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listEstablishmentLikes(
      establishmentId: $establishmentId
      createdAt: $createdAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        establishmentId
        createdAt
        establishmentName
        _version
        _deleted
        _lastChangedAt
        updatedAt
        establishment {
          id
          ownerId
          name
          street
          city
          state
          zipcode
          neighborhood
          phone
          email
          placeID
          phoneNumber
          likeCount
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userId
        user {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getCheckIn = /* GraphQL */ `
  query GetCheckIn($establishmentId: ID!, $createdAt: AWSDateTime!) {
    getCheckIn(establishmentId: $establishmentId, createdAt: $createdAt) {
      establishmentId
      createdAt
      establishmentName
      _version
      _deleted
      _lastChangedAt
      updatedAt
      establishment {
        id
        ownerId
        name
        gps {
          lon
          lat
        }
        street
        city
        state
        zipcode
        neighborhood
        phone
        email
        placeID
        phoneNumber
        likeCount
        reviews {
          nextToken
          startedAt
        }
        userLikes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
      }
      userId
      user {
        pk_id
        id
        firstName
        lastName
        userName
        birthdate
        gender
        description
        createdAt
        lastUpdated
        profilePicture
        followers {
          nextToken
          startedAt
        }
        followed {
          nextToken
          startedAt
        }
        establishmentLikes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        updatedAt
        ownerOf {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const listCheckIns = /* GraphQL */ `
  query ListCheckIns(
    $establishmentId: ID
    $createdAt: ModelStringKeyConditionInput
    $filter: ModelCheckInFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCheckIns(
      establishmentId: $establishmentId
      createdAt: $createdAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        establishmentId
        createdAt
        establishmentName
        _version
        _deleted
        _lastChangedAt
        updatedAt
        establishment {
          id
          ownerId
          name
          street
          city
          state
          zipcode
          neighborhood
          phone
          email
          placeID
          phoneNumber
          likeCount
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userId
        user {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getReview = /* GraphQL */ `
  query GetReview($establishmentId: ID!, $createdAt: AWSDateTime!) {
    getReview(establishmentId: $establishmentId, createdAt: $createdAt) {
      establishmentId
      createdAt
      establishmentName
      comments
      image
      rating
      _version
      _deleted
      _lastChangedAt
      updatedAt
      establishment {
        id
        ownerId
        name
        gps {
          lon
          lat
        }
        street
        city
        state
        zipcode
        neighborhood
        phone
        email
        placeID
        phoneNumber
        likeCount
        reviews {
          nextToken
          startedAt
        }
        userLikes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
      }
      userId
      user {
        pk_id
        id
        firstName
        lastName
        userName
        birthdate
        gender
        description
        createdAt
        lastUpdated
        profilePicture
        followers {
          nextToken
          startedAt
        }
        followed {
          nextToken
          startedAt
        }
        establishmentLikes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        updatedAt
        ownerOf {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $establishmentId: ID
    $createdAt: ModelStringKeyConditionInput
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listReviews(
      establishmentId: $establishmentId
      createdAt: $createdAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        establishmentId
        createdAt
        establishmentName
        comments
        image
        rating
        _version
        _deleted
        _lastChangedAt
        updatedAt
        establishment {
          id
          ownerId
          name
          street
          city
          state
          zipcode
          neighborhood
          phone
          email
          placeID
          phoneNumber
          likeCount
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userId
        user {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($pk_id: ID!, $id: ID!) {
    getUser(pk_id: $pk_id, id: $id) {
      pk_id
      id
      firstName
      lastName
      userName
      birthdate
      gender
      description
      createdAt
      lastUpdated
      profilePicture
      followers {
        items {
          id
          userFollowedId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      followed {
        items {
          id
          userFollowedId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      establishmentLikes {
        items {
          establishmentId
          createdAt
          establishmentName
          _version
          _deleted
          _lastChangedAt
          updatedAt
          userId
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
      ownerOf {
        items {
          id
          ownerId
          name
          street
          city
          state
          zipcode
          neighborhood
          phone
          email
          placeID
          phoneNumber
          likeCount
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $pk_id: ID
    $id: ModelIDKeyConditionInput
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      pk_id: $pk_id
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        pk_id
        id
        firstName
        lastName
        userName
        birthdate
        gender
        description
        createdAt
        lastUpdated
        profilePicture
        followers {
          nextToken
          startedAt
        }
        followed {
          nextToken
          startedAt
        }
        establishmentLikes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        updatedAt
        ownerOf {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        pk_id
        id
        firstName
        lastName
        userName
        birthdate
        gender
        description
        createdAt
        lastUpdated
        profilePicture
        followers {
          nextToken
          startedAt
        }
        followed {
          nextToken
          startedAt
        }
        establishmentLikes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        updatedAt
        ownerOf {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
