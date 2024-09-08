import request from '../request';
export function query_subcategory(data) {
  return request({
    url: "/query_subcategory",
    method: "post",
    data,
  });
}
