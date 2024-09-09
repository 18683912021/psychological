import request from '../request';
export function login(data) {
  return request({
    url: "/p/user/login",
    method: "post",
    data,
  });
}
