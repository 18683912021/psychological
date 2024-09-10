import request from '../request';
export function login(data) {
  return request({
    url: "/p/admin/login",
    method: "post",
    data,
  });
}

export function register(data) {
  return request({
    url: "/p/admin/register",
    method: "post",
    data,
  });
}

//get接口/p/admin/match-pherapist
export function getMatchPherapist(data) {
  return request({
    url: "/p/admin/match-pherapist",
    method: "get",
    params: data,
  });
}
