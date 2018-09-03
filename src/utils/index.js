export const getKeyForScenic = (scenic) => {
  let keyConfig={
    '姓名':'name',
    '电话': 'mobile',
    '身份证':'idCardNo',
    '标签':'tag'
  }
  return keyConfig[scenic]
}