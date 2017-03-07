let backendUrl;

if (process.env.NODE_ENV === 'production') {
  backendUrl = "http://178.62.25.163:4000";
} else {
  backendUrl = "http://localhost:4000"
}

export default {
  BACKEND_URL: backendUrl
}
