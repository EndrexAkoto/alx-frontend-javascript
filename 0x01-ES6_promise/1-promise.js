export default function getFullResponseFromApi(success) {
  /* eslint-disable */
  return new Promise((resolve, reject) => {
    if (!success) {
      reject(new Error('The fake API is not working currently'));
    } else {
      resolve({
	status: 200,
	body: 'Success',
      });
    }
  });
}
