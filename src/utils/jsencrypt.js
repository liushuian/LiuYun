import JSEncrypt from 'jsencrypt/bin/jsencrypt'

// RSA秘钥公钥

const publicKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDT9KENC/co5K36Bx45Xy16gedw\n' +
  'i+BXnOOK1vsOtTjrSB5fOmKxDpWLXk66vFy7O/s45kNEaFbI002RnkcsGGMAmIhX\n' +
  'hNfhc/gyjyq2c/uycB2k9+bR4WZJZ2L8ewPHKz6YlseXLL/ffjjv6RAdL6F+Dur4\n' +
  'I2DLf01Ayl819Ug7jQIDAQAB'

const privateKey = 'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBANP0oQ0L9yjkrfoH\n' +
  'HjlfLXqB53CL4Fec44rW+w61OOtIHl86YrEOlYteTrq8XLs7+zjmQ0RoVsjTTZGe\n' +
  'RywYYwCYiFeE1+Fz+DKPKrZz+7JwHaT35tHhZklnYvx7A8crPpiWx5csv99+OO/p\n' +
  'EB0voX4O6vgjYMt/TUDKXzX1SDuNAgMBAAECgYBt5jC/cA3WgUQIGTq9qrENDWAw\n' +
  'hgZrxyhga/m+9Y4uyLUe0Uos3hACNIMD5fj7CC3JofMM/EDLXmyg7X2fyoFB8yVD\n' +
  'GD9h6WVde/cpCbDbcmmaD/fNaag23YJiEQ+XlzbXFQ80dR44h7AQIgb4WVtPl+ha\n' +
  'jyYSg9xNGwV/5XX3oQJBAPCIjdgjCB06EE5XbyLbNWX2g8SJia2Hb3bf1zjCHdDj\n' +
  'oYzkgJC75WFUOtV30HAy/hcwvS4SmElkn3Nb+ASi/qUCQQDhlab+WD6XpnqoZIbb\n' +
  'SWrli+76K46pP0Us1vPnGD6K77i+bZrpl3ciTjtsRbxqi5wzucJ7+rE/otEAsBgP\n' +
  'r1zJAkEA4LFfd+l5ufu0ocpRmkkWP9Kh0uX8g+sBuBVwMqg7PBh4oGoQo6OyqlIJ\n' +
  'x8HuJ/GqpLU19CUQt3bU8OmX7ZTptQJAWutkKPMMFzckDKanq85FZUsnAHF5yEEV\n' +
  '8mKYXzXoTzsbLLUkUK2ZeJwrWxIoRJEMXdSqzClYMxu+PRa8O+Yj8QJBAOIyt0zN\n' +
  'Hr30PC0K1ujktCWNuIYl7sMGo0zqiFjN1Shf20X2/DzkH9HLf7E4zS6hb5X6DBVA\n' +
  'bfkbc/Kzx8vniL8='

// 公钥加密
export function encrypt(txt) {
  let encryptor = new JSEncrypt()
  encryptor.setPublicKey(publicKey)
  return encryptor.encrypt(txt)
}

// 私钥解密
export function decrypt(txt) {
  const decrypt = new JSEncrypt()
  decrypt.setPrivateKey(privateKey)
  return decrypt.decrypt(txt)
}