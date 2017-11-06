const config = {
  CLIENT_ID: 'c576ab83d5c74c4b8e03e0d7ec75d0dd',
  REDIRECT_URI: 'http://localhost:3000/'
};

config.getRedirectURI = function() {
  switch (process.env.NODE_ENV) {
    case 'production':
      return process.env.PUBLIC_URL
    case 'development':
    default:
      return this.REDIRECT_URI;
  }
};

export default config;