import myRequest from './index'

export function getTopMV(offset, limit = 10) {
  return myRequest.get("/top/mv", {
    offset,
    limit
  })
}

export function getMVURL(id) {
  return myRequest.get("/mv/url",{
    id
  })
}

export function getMVDetail(mvid) {
  return myRequest.get("/mv/detail", {
    mvid
  })
}

export function getRelatedVideo(id) {
  return myRequest.get("/related/allvideo", {
    id
  })
}