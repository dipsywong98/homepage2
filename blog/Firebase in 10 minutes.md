# Learn Firebase in 10 Minutes

### What is Firebase

A real time database which stores data in JSON format with file storage

### Get Start

Create a firebase account

Add this to your html, that's it

```HTML
<script src="https://www.gstatic.com/firebasejs/4.8.1/firebase.js"></script>
```

### Save Data to Database

update some key by value

```js
firebase.database().ref('your/location').update({
    key: data
})
```

override value of some key

```js
firebase.database().ref('your/location').set(vale)
```



### Read Date from Datebase

once (trigger once the event happened)

```js
firebase.database().ref('your/location').once("value").then(function (snapshot) {
      your_value = snapshot.val()
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    })
```

listener (trigger every time when the event happen)

```js
firebase.database().ref('your/location').on('value',function (snapshot) {
      your_value = snapshot.val()
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    })
```

