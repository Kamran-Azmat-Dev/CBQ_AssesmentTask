interface Object {
  title:string;
  id:number
}

export const fetchDatafromApi = async () => {
  const response = await fetch('https://gorest.co.in/public/v2/posts');
  const jsonResponse = await response.json();
  return jsonResponse.map((obj: Object) => ({title: obj.title, id: obj.id}));
};
