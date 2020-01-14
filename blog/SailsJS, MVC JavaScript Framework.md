# SailsJS, MVC JavaScript Framework

## Get Start

```bash
npm i sails -g			#install sails
sails new <project-name> #initialize a new sails project
cd <project-name>		#cd into the project
sails lift			    #start the development server
```

## Routes

```js
// config/routes.js
module.exports.routes = {
  'GET /':                   { action: 'view-homepage-or-redirect' },
  'GET /welcome':            { action: 'dashboard/view-welcome' },

  'GET /faq':                { view:   'pages/faq' },
    
   '/terms':                   '/legal/terms',
}
```

LHS are the routes request and type of calling

RHS are the response, view will run file in `view/` and action will run file in `controller`, and string is redirect to another route

## Actions and Controllers

There are two conventions

1. `(req,res)=>res` (totally same as Express.JS)

2. object

   ```json
   {
       "friendlyName":"name of action",
       "description":"describe the action",
       "input":{
           "userId":{
               "description": 'a field that will supply to action with validation',
               type: 'number',
           	required: true
           }
       },
       "exits":{
           //"possible response of action"
           
         success: {
           responseType: 'view',
           viewTemplatePath: 'pages/welcome'
         },
         notFound: {
           description: 'No user with the specified ID was found in the database.',
           responseType: 'notFound'
         }
       },
       "fn":(input,exits)=>{
           //implementation of action
           
         var user = await User.findOne({ id: inputs.userId });
   
         if (!user) { return exits.notFound(); }
   
         return exits.success({name: user.name});
   
       }
   }
   ```

   

## Defining Modals

Modals are data structure of storage

```js
//api/modals/<modal-name>
module.exports = {
    attributes: {
        <attribute-name>:{
        type:'',
		//...
    	}
    }
}
```

## Helper

it looks very similar to action

define a helper

```js
// api/helpers/format-welcome-message.js
module.exports = {
  friendlyName: 'Format welcome message',
  description: 'Return a personalized greeting based on the provided name.',
  inputs: {
    name: {
      type: 'string',
      example: 'Ami',
      description: 'The name of the person to greet.',
      required: true
    }
  },
  //sync: true, default all helpers are ascyn
  fn: async function (inputs, exits) {
    var result = `Hello, ${inputs.name}!`;
    return exits.success(result);
  }

};
```

call a helper

```js
var greeting = await sails.helpers.formatWelcomeMessage('Bubba');
sails.log(greeting);
// => "Hello, Bubba!"
```

