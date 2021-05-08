<p align="center">
<img src="https://wpoffice365.com/wp-content/uploads/2017/07/react-logo.png" height="75" />
<img src="https://i.cloudup.com/zfY6lL7eFa-3000x3000.png" height="75" />
<img src="https://cdn-images-1.medium.com/max/960/1*pxfq-ikL8zPE3RyGB2xbng.png" height="75" />
<img src="https://www.vectorlogo.zone/logos/js_webpack/js_webpack-card.png" height="75" />
</p>
<p align="center">
  <img src="https://user-images.githubusercontent.com/1423657/38475477-c21ead08-3ba8-11e8-8ccc-a42a7c11daba.png" />
</p>
<p align="center">
Start storing your data in the cloud in 2 seconds
</p>

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/i001962/gunstore.io/tree/package-refresh)

## About
**gunstore** is a clone of [jsonstore](https://github.com/bluzi/jsonstore) and provides a datastore for small projects based on [Gun DB](https://github.com/amark/gun).
Just launch and access your instance, copy the URL and start sending HTTP requests to communicate with your datastore.
POST requests will save data, PUT requests modify data, DELETE requests delete data and GET requests retrieves data.

## Examples
Make sure to replace the URL in the examples to your actual endpoint URL!

```bash
npm install
npm start
```

### CURL
#### POST
The following command will create a user in `/users/1`:
```shell
curl -XPOST -H "Content-type: application/json" -d '{
  "name": "john.snow",
  "age": 31
}' 'http://localhost:3000/cf024bb815a93131ce9fed91b1f9dafa43a3c557e9be66e66fd76df5c64f10fe/users/1'
```

#### GET
The following command will retrieve the user we created earlier:
```shell
curl -XGET 'http://localhost:3000/cf024bb815a93131ce9fed91b1f9dafa43a3c557e9be66e66fd76df5c64f10fe/users/1'
```

#### PUT
The following command will change the age of the user to `32`:
```shell
curl -XPUT -H "Content-type: application/json" -d '32' 'http://localhost:3000/cf024bb815a93131ce9fed91b1f9dafa43a3c557e9be66e66fd76df5c64f10fe/users/1/age'
```

#### DELETE
The following command will delete the user:
```shell
curl -XDELETE 'http://localhost:3000/cf024bb815a93131ce9fed91b1f9dafa43a3c557e9be66e66fd76df5c64f10fe/users/1'
```

### JavaScript
#### POST
```js
fetch('http://localhost:3000/cf024bb815a93131ce9fed91b1f9dafa43a3c557e9be66e66fd76df5c64f10fe/users/1', {
  headers: {
    'Content-type': 'application/json'
  },
  method: 'POST',
  body: { name: 'john snow', age: 31 },
});
```

#### GET
```js
const user = await fetch('http://localhost:3000/cf024bb815a93131ce9fed91b1f9dafa43a3c557e9be66e66fd76df5c64f10fe/users/1')
  .then(function(response) {
    return response.json();
  })
```

#### PUT
```js
fetch('http://localhost:3000/cf024bb815a93131ce9fed91b1f9dafa43a3c557e9be66e66fd76df5c64f10fe/users/1/age', {
  headers: {
    'Content-type': 'application/json'
  },
  method: 'PUT',
  body: 32,
});
```

#### DELETE
```js
fetch('http://localhost:3000/cf024bb815a93131ce9fed91b1f9dafa43a3c557e9be66e66fd76df5c64f10fe/users/1', {
  method: 'DELETE',
});
```

### Contribution
Any type of feedback, pull request or issue is welcome.

## Acknowledgements
**gunstore** is a clone of [jsonstore](https://github.com/bluzi/jsonstore) by [bluzi](https://github.com/bluzi)
