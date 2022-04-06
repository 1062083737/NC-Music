import myRequest from "./index";

export function getBanners() {
  return myRequest.get('/banner', {
    type: 2
  })
}