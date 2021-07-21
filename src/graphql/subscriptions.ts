/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
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
export const onCreateEstablishmentLike = /* GraphQL */ `
  subscription OnCreateEstablishmentLike {
    onCreateEstablishmentLike {
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
export const onUpdateEstablishmentLike = /* GraphQL */ `
  subscription OnUpdateEstablishmentLike {
    onUpdateEstablishmentLike {
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
export const onDeleteEstablishmentLike = /* GraphQL */ `
  subscription OnDeleteEstablishmentLike {
    onDeleteEstablishmentLike {
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
export const onCreateCheckIn = /* GraphQL */ `
  subscription OnCreateCheckIn {
    onCreateCheckIn {
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
export const onUpdateCheckIn = /* GraphQL */ `
  subscription OnUpdateCheckIn {
    onUpdateCheckIn {
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
export const onDeleteCheckIn = /* GraphQL */ `
  subscription OnDeleteCheckIn {
    onDeleteCheckIn {
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
export const onCreateEstablishmentFollow = /* GraphQL */ `
  subscription OnCreateEstablishmentFollow {
    onCreateEstablishmentFollow {
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
export const onUpdateEstablishmentFollow = /* GraphQL */ `
  subscription OnUpdateEstablishmentFollow {
    onUpdateEstablishmentFollow {
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
export const onDeleteEstablishmentFollow = /* GraphQL */ `
  subscription OnDeleteEstablishmentFollow {
    onDeleteEstablishmentFollow {
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
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview {
    onCreateReview {
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
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview {
    onUpdateReview {
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
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview {
    onDeleteReview {
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
export const onCreateUserFollow = /* GraphQL */ `
  subscription OnCreateUserFollow {
    onCreateUserFollow {
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
export const onUpdateUserFollow = /* GraphQL */ `
  subscription OnUpdateUserFollow {
    onUpdateUserFollow {
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
export const onDeleteUserFollow = /* GraphQL */ `
  subscription OnDeleteUserFollow {
    onDeleteUserFollow {
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
export const onCreateEstablishment = /* GraphQL */ `
  subscription OnCreateEstablishment($ownerId: String) {
    onCreateEstablishment(ownerId: $ownerId) {
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
export const onUpdateEstablishment = /* GraphQL */ `
  subscription OnUpdateEstablishment($ownerId: String) {
    onUpdateEstablishment(ownerId: $ownerId) {
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
export const onDeleteEstablishment = /* GraphQL */ `
  subscription OnDeleteEstablishment($ownerId: String) {
    onDeleteEstablishment(ownerId: $ownerId) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($id: String) {
    onUpdateUser(id: $id) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($id: String) {
    onDeleteUser(id: $id) {
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
