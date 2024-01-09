function findUserByUsername(usersArray, targetUsername) {
    const foundUser = usersArray.find(user => user.username === targetUsername);
    return foundUser || undefined;
}


function removeUser(usersArray, targetUsername) {
    const userIndex = usersArray.findIndex(user => user.username === targetUsername);
    if (userIndex !== -1) {
      const removedUser = usersArray.splice(userIndex, 1)[0];
      return removedUser;
    }
    return undefined;
  }
  