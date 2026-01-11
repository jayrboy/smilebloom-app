// Get all users from localStorage
function getUsers() {
  const stored = localStorage.getItem('users');
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      // Handle both array and single object formats for backward compatibility
      return Array.isArray(parsed) ? parsed : [parsed];
    } catch (e) {
      console.error('Error parsing users from localStorage:', e);
      return [];
    }
  }
  return [];
}

// Set all users to localStorage
function setUsers(users) {
  try {
    localStorage.setItem('users', JSON.stringify(users));
  } catch (e) {
    console.error('Error saving users to localStorage:', e);
  }
}

// Add a new user to the users array
function addUser(user) {
  const users = getUsers();
  const newUser = {
    ...user,
    id: user.id || Date.now().toString(),
    createdAt: user.createdAt || new Date().toISOString(),
  };
  users.push(newUser);
  setUsers(users);
  return newUser;
}

// Get a single user by ID
function getUserById(id) {
  const users = getUsers();
  return users.find(user => user.id === id) || null;
}

// Get the current/active user (first user or most recent)
function getCurrentUser() {
  const users = getUsers();
  if (users.length === 0) return null;
  // Return the most recently created user
  return users.sort((a, b) => 
    new Date(b.createdAt) - new Date(a.createdAt)
  )[0];
}

// Update a user by ID
function updateUser(id, updates) {
  const users = getUsers();
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...updates };
    setUsers(users);
    return users[index];
  }
  return null;
}

// Delete a user by ID
function deleteUser(id) {
  const users = getUsers();
  const filtered = users.filter(user => user.id !== id);
  setUsers(filtered);
  return filtered;
}

export { 
  getUsers, 
  setUsers, 
  addUser, 
  getUserById, 
  getCurrentUser, 
  updateUser, 
  deleteUser 
};