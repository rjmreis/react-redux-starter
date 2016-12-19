const auth = {
  authenticate: creds => new Promise(function (resolve, reject) {
    if (creds.username === 'admin' && creds.password === 'password') {
      resolve({
        id_token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiBEb2UifQ.xuEv8qrfXu424LZk8bVgr9MQJUIrp1rHcPyZw_KSsds',
        user: {
          name: 'Admin'
        }
      });
    } else {
      reject();
    }
  })
};

export default auth;
