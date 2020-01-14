# Laravel Note

copy and pasted from https://scotch.io/tutorials/a-guide-to-using-eloquent-orm-in-laravel

## Hello Laravel

Get start with Laravel

### Install Laravel

1. install composer
2. open cmd, run
```
 composer global require "laravel/installer"
```

### Create Laravel Project

open cmd, cd directory, run 
```
laravel new project name
```

Alternative:

```
composer create-project --prefer-dist laravel/laravel blog
```

### Run Laravel Project

```
php artisan serve
```

go to `http://localhost:8000` or `http://127.0.0.1:8000/`, hello world

## Database with Laravel

get start with using database with laraval

### Config the database

1. address
2. database (created beforehand)
3. username (created beforehand)
4. password (created beforehand)

`config/database.php`

`.env`

### Create Table for Class in database (migration)

create a class named bears

```
php artisan make:migration create_bears_table --create=bears
```

a new file will appear at `database\migrations`

define the columns in the table

```PHP
Schema::create('bears', function(Blueprint $table)
        {
            $table->increments('id');
        
            $table->string('name');
            $table->string('type');
            $table->integer('danger_level'); // this will be between 1-10
        
            $table->timestamps();
        });
```

To really create a new table
```
php artisan migrate
```

#### errors faced

##### 1. cant connect

set `.env`

##### 2. laravel-5-4-key-too-long-error

in `app/providers/AppServiceProvider.php`

```php
use Illuminate\Support\Facades\Schema;

public function boot()
{
    Schema::defaultStringLength(191);
}
```

### Create Models (to hold an entry in table)

create at `app\Models` (directory created)

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bear extends Model {

    // MASS ASSIGNMENT -------------------------------------------------------
    // define which attributes are mass assignable (for security)
    // we only want these 3 attributes able to be filled
    protected $fillable = array('name', 'type', 'danger_level');

    // DEFINE RELATIONSHIPS --------------------------------------------------
    // each bear HAS one fish to eat
    public function fish() {
        return $this->hasOne('App\Models\Fish'); // this matches the Eloquent model
    }

    // each bear climbs many trees
    public function trees() {
        return $this->hasMany('App\Models\Tree');
    }

    // each bear BELONGS to many picnic
    // define our pivot table also
    public function picnics() {
        return $this->belongsToMany('App\Models\Picnic', 'bears_picnics', 'bear_id', 'picnic_id');
    }

}
```

**use full name when using other models**

### Create Seed for Testing

at `database\seeds`, create testing datasets

```php
<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Models\Bear;
use App\Models\Fish;
use App\Models\Picnic;
use App\Models\Tree;

class DatabaseSeeder extends Seeder {
    
        /**
         * Run the database seeds.
         *
         * @return void
         */
        public function run()
        {
            Model::unguard();
    
            // call our class and run our seeds
            $this->call('BearAppSeeder');
            $this->command->info('Bear app seeds finished.'); // show information in the command line after everything is run
        }
    
    }
    
    // our own seeder class
    // usually this would be its own file
    class BearAppSeeder extends Seeder {
    
        public function run() {
    
            // clear our database ------------------------------------------
            DB::table('bears')->delete();
            DB::table('fish')->delete();
            DB::table('picnics')->delete();
            DB::table('trees')->delete();
            DB::table('bears_picnics')->delete();
    
            // seed our bears table -----------------------
            // we'll create three different bears
    
            // bear 1 is named Lawly. She is extremely dangerous. Especially when hungry.
            $bearLawly = Bear::create(array(
                'name'         => 'Lawly',
                'type'         => 'Grizzly',
                'danger_level' => 8
            ));
    
            // bear 2 is named Cerms. He has a loud growl but is pretty much harmless.
            $bearCerms = Bear::create(array(
                'name'         => 'Cerms',
                'type'         => 'Black',
                'danger_level' => 4
            ));
    
            // bear 3 is named Adobot. He is a polar bear. He drinks vodka.
            $bearAdobot = Bear::create(array(
                'name'         => 'Adobot',
                'type'         => 'Polar',
                'danger_level' => 3
            ));
    
            $this->command->info('The bears are alive!');
    
            // seed our fish table ------------------------
            // our fish wont have names... because theyre going to be eaten
    
            // we will use the variables we used to create the bears to get their id
    
            Fish::create(array(
                'weight'  => 5,
                'bear_id' => $bearLawly->id
            ));
            Fish::create(array(
                'weight'  => 12,
                'bear_id' => $bearCerms->id
            ));
            Fish::create(array(
                'weight'  => 4,
                'bear_id' => $bearAdobot->id
            ));
    
            $this->command->info('They are eating fish!');
    
            // seed our trees table ---------------------
            Tree::create(array(
                'type'    => 'Redwood',
                'age'     => 500,
                'bear_id' => $bearLawly->id
            ));
            Tree::create(array(
                'type'    => 'Oak',
                'age'     => 400,
                'bear_id' => $bearLawly->id
            ));
    
            $this->command->info('Climb bears! Be free!');
    
            // seed our picnics table ---------------------
    
            // we will create one picnic and apply all bears to this one picnic
            $picnicYellowstone = Picnic::create(array(
                'name'        => 'Yellowstone',
                'taste_level' => 6
            ));
            $picnicGrandCanyon = Picnic::create(array(
                'name'        => 'Grand Canyon',
                'taste_level' => 5
            ));

            $this->command->info('lololol');
    
            // link our bears to picnics ---------------------
            // for our purposes we'll just add all bears to both picnics for our many to many relationship
            $bearLawly->picnics()->attach($picnicYellowstone->id);
            $bearLawly->picnics()->attach($picnicGrandCanyon->id);
    
            $bearCerms->picnics()->attach($picnicYellowstone->id);
            $bearCerms->picnics()->attach($picnicGrandCanyon->id);
    
            $bearAdobot->picnics()->attach($picnicYellowstone->id);
            $bearAdobot->picnics()->attach($picnicGrandCanyon->id);
    
            $this->command->info('They are terrorizing picnics!');
    
        }
    
    }
    

```

Run seed 

```shell
php artisan db:seed
```

### Database Functions in Short

Create

```PHP
//create new entry in DB and assign
$bearLawly = Bear::create(array(
                'name'         => 'Lawly',
                'type'         => 'Grizzly',
                'danger_level' => 8
            ));

// find the bear or create it into the database
Bear::firstOrCreate(array('name' => 'Lawly'));

// find the bear or instantiate a new instance into the object we want
//without creating it in DB
$bear = Bear::firstOrNew(array('name' => 'Cerms'));
```

find

```php
// get all the bears
$bears = Bear::all();

// find a specific bear by id
$bear = Bear::find(1);

// find a bear by a specific attribute
$bearLawly = Bear::where('name', '=', 'Lawly')->first();

// find a bear with danger level greater than 5
$dangerousBears = Bear::where('danger_level', '>', 5)->get();

//multiple conditions
$results = User::where([
    ['column_1', '=', 'value_1'],
    ['column_2', '<>', 'value_2'],
    [COLUMN, OPERATOR, VALUE],
    ...
])->orWhere([
    ['column_1', '=', 'value_1'],
    ['column_2', '<>', 'value_2'],
    [COLUMN, OPERATOR, VALUE],
    ...
])->get();
```

update

```php
//change the attributes of an instance, then
$lawly->save();
```

delete

```php
// find and delete a record
$bear = Bear::find(1);
$bear->delete();

// delete a record 
Bear::destroy(1);

// delete multiple records 
Bear::destroy(1, 2, 3);

// find and delete all bears with a danger level over 5
Bear::where('danger_level', '>', 5)->delete();
```

query

one to one

```php
// find a bear named Adobot
$adobot = Bear::where('name', '=', 'Adobot')->first();

// get the fish that Adobot has
$fish = $adobot->fish;

// get the weight of the fish Adobot is going to eat
$fish->weight;

// alternatively you could go straight to the weight attribute
$adobot->fish->weight;
```

one to many

```php
// find the trees lawly climbs
$lawly = Bear::where('name', '=', 'Lawly')->first();

foreach ($lawly->trees as $tree)
  echo $tree->type . ' ' . $tree->age;
```

many to many

```php
// get the picnics that Cerms goes to ------------------------
$cerms = Bear::where('name', '=', 'Cerms')->first();

// get the picnics and their names and taste levels
foreach ($cerms->picnics as $picnic) 
  echo $picnic->name . ' ' . $picnic->taste_level;

// get the bears that go to the Grand Canyon picnic -------------
$grandCanyon = Picnic::where('name', '=', 'Grand Canyon')->first();

// show the bears
foreach ($grandCanyon->bears as $bear)
  echo $bear->name . ' ' . $bear->type . ' ' . $bear->danger_level;
```

## Web Frontend and Routing

### Basic Routing

goto `routes\web.php`(this is automatically loaded by the framework)

```php
Route::get('foo', function () {
    return 'Hello World';
});
```

parameter

```php
Route::get('foo/{id}/', function ($id) {
    return "hello $id";
});

//optional parameter
Route::get('foo/{id?}/', function ($id=null) {
    return "hello $id";
});
```



### Views

basically html files to be loaded by php

`resources/views/myview.blade.php`

route to myview

```php
Route::get('myview', function () {

    return view('myview',['bears'=> Bear::all()]);//the array is variables to pass
});
```

