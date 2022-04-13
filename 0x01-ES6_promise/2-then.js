export default function handleResponseFromAPI(promise) {
  const result = {
    status: 200,
    body: 'Success',
  };
  promise
    .then(result)
    .catch(new Error())
    .finally(console.log('Got a response from the API'));
}
