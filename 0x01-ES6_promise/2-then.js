export default function handleResponseFromAPI(promise) {
  const result = {
    status: 200,
    body: 'success',
  };
  return promise
    .then(() => result)
    .then(console.log('Got a response from the API'))
    .catch(new Error());
}
