export default function ({ $axios, $cookies }) {
  const userToken = $cookies.get("user-logged");

  if (userToken) {
    return;
  }

  $cookies.set("user-logged", true);

  $axios
    .post("/user-activity-logs")
    .then(() => {})
    .catch(() => {});
}
