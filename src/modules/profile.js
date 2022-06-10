class Profile {
  constructor(
    id,
    userId,
    firstName,
    lastName,
    phoneNumber,
    email,
    pushToken,
    verified,
    type,
    venueId,
    dobId
  ) {
    this.id = id;
    this.userId = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.pushToken = pushToken;
    this.verified = verified;
    this.type = type;
    this.venueId = venueId;
    this.dobId = dobId;
  }
}

export default Profile;
