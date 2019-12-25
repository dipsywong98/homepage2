# MongoDB with imba and nodejs

### Introduction

I am going to make a new version of corner detection challenge judge, and I am trying to make it with imba in both client side and server side, in the middle we use restful API and socket for communication, while the database we are trying to use MongoDB.

As for imba environment set up I have another note already, this time it is MongoDB which I am totally new with. MongoDB is a noSQL architecture that do database queries without SQL, looks like firebase, however, it seems there is no way to listen to changes like firebase ([stackoverflow](https://stackoverflow.com/questions/42565778/is-there-a-way-to-listen-to-a-mongodb-collection)).

### Setup

[Install MongoDB on computer](https://www.mongodb.com/download-center/community)

[Install MongoDB official GUI - Compass](https://docs.mongodb.com/compass/master/install/)

Follow the instructions so that MongoDB would be installed on your computer, and really at `localhost:27071`

In your node project which uses MongoDB, run `npm i mongodb`

### Connect

```js
// javascript version
let MongoClient = require('mongodb').MongoClient
let uri = 'mongodb://localhost:27017'
const client = new MongoClient(uri, { useNewUrlParser: true })
client.connect(err=>{
  console.log(err||'successfully connect to mongo')
})
```

```imba
# imba version
let MongoClient = require('mongodb').MongoClient
let uri = "mongodb://localhost:27017"
const client = MongoClient.new(uri, { useNewUrlParser: true })
client.connect do |err|
	console.log(err||'successfully connect to mongo')
```

As for successful connection, the program will print out "successfully connect to mongo", and you can use the client object for further application

#### Further: sequential initialization with Express

```imba
def initExpress client
    # mongoDB client ready for usage
    # ...


def initMongo
	let MongoClient = require('mongodb').MongoClient
	let uri = "mongodb://localhost:27017"
	const client = MongoClient.new(uri, { useNewUrlParser: true })
	await Promise.new do |resolve,reject|
		client.connect do |err|
			console.log(err||'no error connecting mongo')
			resolve client
	return client
	
def main
	var client = await initMongo
	initExpress client
	
main
```
 

### Insert

```js
client.db('my_db').collection('my_collection').insertOne({myField:'myValue'},(err,res)=>{
    console.log(err||'successfully inserted')
})

```

```imba
client.db('my_db').collection('my_collection').insertOne {myField:'myValue'} do |err,res|
    console.log err||'successfully inserted'

```

If `my_db` database or `my_collection` collection has not been created before insertion, mongo will create it first then create.

### Query
```js
client.db('my_db').collection('my_collection').findOne({},(err,res)=>{
    console.log(res)
})

client.db('my_db').collection('my_collection').findOne({key:'value'},(err,res)=>{
    console.log(res)//one result that its key matches value
})
```
The `{}` is an atomic operation which describes the items that you are going to query, for example `{age:{$gt:18}}` means you are going to query an item with attribute `age` greater than 18

