export const authStore = $state({ user: null, token: null });

export const setAuth = (user, token) => {
  authStore.user = user;
  authStore.token = token;
};

export const clearAuth = () => {
  authStore.user = null;
  authStore.token = null;
};

export const getAuth = () => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  if (token && user) {
    authStore.user = user;
    authStore.token = token;
  } else {
    authStore.user = null;
    authStore.token = null;
  }
};

export const isAuthenticated = () => {
  return authStore.token;
};
