function encodeBase64(str) {
  // btoa is incorrectly being marked as deprecated! source: https://github.com/microsoft/TypeScript/issues/45566
  return btoa(encodeURIComponent(str));
}

export { encodeBase64 };
