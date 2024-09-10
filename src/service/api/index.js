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

//get接口/p/admin/match-pherapist 获取用户咨询师列表
export function getMatchPherapist(data) {
  return request({
    url: "/p/admin/match-pherapist",
    method: "get",
    params: data,
  });
}

//接口/p/admin/edit 修改用户咨询师
export function editMatchPherapist(data) {
  return request({
    url: "/p/admin/edit",
    method: "post",
    data,
  });
}

//通用-查询用户、咨询师会话记录 /p/admin/listSession
export function listSession(data) {
  return request({
    url: "/p/admin/listSession",
    method: "get",
    params: data,
  });
}

//个人中心 /p/admin/info
export function getUserInfo(data) {
  return request({
    url: "/p/admin/info",
    method: "get",
    params: data,
  });
}

//编辑用户、咨询师信息 /p/admin/edit
export function editUserInfo(data) {
  return request({
    url: "/p/admin/edit",
    method: "post",
    data,
  });
}