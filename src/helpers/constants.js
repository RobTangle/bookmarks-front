export const URL_SERVER = "http://localhost:3333";
export const NAME_ACCESS_TOKEN = "access_token_bookmarks";
export function header(accessToken) {
  return {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
}
