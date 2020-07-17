'use-strict';

(async function callingApi() {
  let url = 'http://jsonplaceholder.typicode.com/users/1';

  let resp = await fetch(url).catch(handleErr);
  let data = await resp.json();

  if (data.code && data.code == 400) {
    return;
  }
  console.log(data);
})();

function handleErr(err) {
  console.warn(err);
  let resp = new Response(
    JSON.stringify({
      code: 400,
      message: 'Stupid network Error',
    })
  );
  return resp;
}

// Promises
let promise = new Promise((resolve, reject) => {
  let condition = true;
  if (condition) {
    resolve('Success');
  } else {
    reject('Failed');
  }
});

promise
  .then((message) => {
    console.log('Promise resolved ' + message);
  })
  .catch((err) => {
    console.log('Promise rejected ' + err);
  });
