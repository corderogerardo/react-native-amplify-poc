/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
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
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
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
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
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
export const createEstablishmentFollow = /* GraphQL */ `
  mutation CreateEstablishmentFollow(
    $input: CreateEstablishmentFollowInput!
    $condition: ModelEstablishmentFollowConditionInput
  ) {
    createEstablishmentFollow(input: $input, condition: $condition) {
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
export const updateEstablishmentFollow = /* GraphQL */ `
  mutation UpdateEstablishmentFollow(
    $input: UpdateEstablishmentFollowInput!
    $condition: ModelEstablishmentFollowConditionInput
  ) {
    updateEstablishmentFollow(input: $input, condition: $condition) {
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
export const deleteEstablishmentFollow = /* GraphQL */ `
  mutation DeleteEstablishmentFollow(
    $input: DeleteEstablishmentFollowInput!
    $condition: ModelEstablishmentFollowConditionInput
  ) {
    deleteEstablishmentFollow(input: $input, condition: $condition) {
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
export const createUserFollow = /* GraphQL */ `
  mutation CreateUserFollow(
    $input: CreateUserFollowInput!
    $condition: ModelUserFollowConditionInput
  ) {
    createUserFollow(input: $input, condition: $condition) {
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
export const updateUserFollow = /* GraphQL */ `
  mutation UpdateUserFollow(
    $input: UpdateUserFollowInput!
    $condition: ModelUserFollowConditionInput
  ) {
    updateUserFollow(input: $input, condition: $condition) {
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
export const deleteUserFollow = /* GraphQL */ `
  mutation DeleteUserFollow(
    $input: DeleteUserFollowInput!
    $condition: ModelUserFollowConditionInput
  ) {
    deleteUserFollow(input: $input, condition: $condition) {
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
export const createEstablishment = /* GraphQL */ `
  mutation CreateEstablishment(
    $input: CreateEstablishmentInput!
    $condition: ModelEstablishmentConditionInput
  ) {
    createEstablishment(input: $input, condition: $condition) {
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
export const updateEstablishment = /* GraphQL */ `
  mutation UpdateEstablishment(
    $input: UpdateEstablishmentInput!
    $condition: ModelEstablishmentConditionInput
  ) {
    updateEstablishment(input: $input, condition: $condition) {
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
export const deleteEstablishment = /* GraphQL */ `
  mutation DeleteEstablishment(
    $input: DeleteEstablishmentInput!
    $condition: ModelEstablishmentConditionInput
  ) {
    deleteEstablishment(input: $input, condition: $condition) {
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
export const createEstablishmentLike = /* GraphQL */ `
  mutation CreateEstablishmentLike(
    $input: CreateEstablishmentLikeInput!
    $condition: ModelEstablishmentLikeConditionInput
  ) {
    createEstablishmentLike(input: $input, condition: $condition) {
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
export const updateEstablishmentLike = /* GraphQL */ `
  mutation UpdateEstablishmentLike(
    $input: UpdateEstablishmentLikeInput!
    $condition: ModelEstablishmentLikeConditionInput
  ) {
    updateEstablishmentLike(input: $input, condition: $condition) {
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
export const deleteEstablishmentLike = /* GraphQL */ `
  mutation DeleteEstablishmentLike(
    $input: DeleteEstablishmentLikeInput!
    $condition: ModelEstablishmentLikeConditionInput
  ) {
    deleteEstablishmentLike(input: $input, condition: $condition) {
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
export const createCheckIn = /* GraphQL */ `
  mutation CreateCheckIn(
    $input: CreateCheckInInput!
    $condition: ModelCheckInConditionInput
  ) {
    createCheckIn(input: $input, condition: $condition) {
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
export const updateCheckIn = /* GraphQL */ `
  mutation UpdateCheckIn(
    $input: UpdateCheckInInput!
    $condition: ModelCheckInConditionInput
  ) {
    updateCheckIn(input: $input, condition: $condition) {
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
export const deleteCheckIn = /* GraphQL */ `
  mutation DeleteCheckIn(
    $input: DeleteCheckInInput!
    $condition: ModelCheckInConditionInput
  ) {
    deleteCheckIn(input: $input, condition: $condition) {
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
export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
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
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $input: UpdateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    updateReview(input: $input, condition: $condition) {
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
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
