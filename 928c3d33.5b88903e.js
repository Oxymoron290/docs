(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{51:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(7),i=(a(0),a(96)),o={id:"addons",title:"Addons"},l={unversionedId:"developers/addons",id:"developers/addons",isDocsHomePage:!1,title:"Addons",description:"If you're looking to create a full add-on, that has it's own URL, this is the page you want. If you want to create a component that someone can include into their own views/templates, you want a widget.",source:"@site/docs/developers/addons.md",slug:"/developers/addons",permalink:"/developers/addons",editUrl:"https://github.com/phpvms/docs/tree/master/docs/developers/addons.md",version:"current",sidebar:"docs",previous:{title:"Environment Configuration",permalink:"/developers/environment"},next:{title:"Awards",permalink:"/developers/awards"}},s=[{value:"Namespacing",id:"namespacing",children:[]},{value:"Directory Structure",id:"directory-structure",children:[{value:"Automatic Installation",id:"automatic-installation",children:[]}]},{value:"Web Routes",id:"web-routes",children:[]},{value:"Controllers",id:"controllers",children:[]},{value:"Models",id:"models",children:[{value:"Creating a Model",id:"creating-a-model",children:[]}]},{value:"Creating and modifying tables with migrations",id:"creating-and-modifying-tables-with-migrations",children:[{value:"Seeding Data",id:"seeding-data",children:[]}]},{value:"Service Layer",id:"service-layer",children:[]},{value:"Repositories",id:"repositories",children:[]}],c={rightToc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"If you're looking to create a full add-on, that has it's own URL, this is the page you want. If you want to create a component that someone can include into their own views/templates, you want a widget. "),Object(i.b)("p",null,"At their core, the module system uses ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://nwidart.com/laravel-modules/v2/introduction"}),"laravel-modules"),". The stubs are modified so the generation create the structure that is compatible with the phpVMS codebase."),Object(i.b)("hr",null),Object(i.b)("h1",{id:"basic-scaffold-generation"},"Basic Scaffold Generation"),Object(i.b)("p",null,"To generate a module, run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"php artisan module:make {ModuleName}\n")),Object(i.b)("p",null,"Which generates the basic structure in the ",Object(i.b)("inlineCode",{parentName:"p"},"/modules")," folder. After generating the module, if you want to make it available on composer, edit the ",Object(i.b)("inlineCode",{parentName:"p"},"composer.json")," file, setting your ",Object(i.b)("inlineCode",{parentName:"p"},"VENDOR")," and author information."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"All of the examples below will be based on a module named ",Object(i.b)("inlineCode",{parentName:"p"},"Sample"),". To see the source for the module, ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/nabeelio/phpvms-module"}),"check it out on GitHub"),"."))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"namespacing"},"Namespacing"),Object(i.b)("p",null,"The root namespace for your module will be ",Object(i.b)("inlineCode",{parentName:"p"},"Modules\\{YOUR_MODULE}"),", e.g, ",Object(i.b)("inlineCode",{parentName:"p"},"Modules\\Sample")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"directory-structure"},"Directory Structure"),Object(i.b)("p",null,"When a module is created, a directory structure like this is created:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\u251c\u2500\u2500 Config\n\u251c\u2500\u2500 Console\n\u251c\u2500\u2500 Database\n\u251c\u2500\u2500 Http\n\u251c\u2500\u2500 Listeners\n\u251c\u2500\u2500 Models\n\u251c\u2500\u2500 Providers\n\u2514\u2500\u2500 Resources\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Config")," - This contains the config file for use in your module. The items in this will be prefixed by your module name, for example:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"echo config('sample.name'); # writes out \"Sample\"\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Console")," - This contains any ",Object(i.b)("inlineCode",{parentName:"p"},"artisan")," commands your module might have")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Database")," - This contains several directories, the most important probably being the ",Object(i.b)("inlineCode",{parentName:"p"},"migrations")," directory. See below for more information about migrations and database access.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Http")," - The folders in this are all related to HTTP access for your application - includes the controllers and routes")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Listeners")," - Any event listeners for your module will be in here. See below for more information about subscribing to events.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Models")," - All of the models, used for database access, and corresponding to tables, are placed here. ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Resources")," - Any language files and views are placed here"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"automatic-installation"},"Automatic Installation"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Still being written"))),Object(i.b)("p",null,"To be able to publish to composer, add ",Object(i.b)("inlineCode",{parentName:"p"},"joshbrw/laravel-module-installer")," as a dependency in your module's ",Object(i.b)("inlineCode",{parentName:"p"},"composer.json")," file, and then set the ",Object(i.b)("inlineCode",{parentName:"p"},"type")," in the ",Object(i.b)("inlineCode",{parentName:"p"},"composer.json")," file to ",Object(i.b)("inlineCode",{parentName:"p"},"laravel-module"),". Then a user can run ",Object(i.b)("inlineCode",{parentName:"p"},"composer require your/module")," from Packagist to install."),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/joshbrw/laravel-module-installer"}),"joshbrw/laravel-module-installer")," for additional information."),Object(i.b)("hr",null),Object(i.b)("h1",{id:"routing-and-controllers"},"Routing And Controllers"),Object(i.b)("p",null,"Routing follows the standard Laravel routing format, and the files are placed in the ",Object(i.b)("inlineCode",{parentName:"p"},"modules/{MODULE}/Http/Routes")," folder. For examples, see the ",Object(i.b)("inlineCode",{parentName:"p"},"app/Routes")," files to see how the Route groups work and how the middleware works. For example, the ",Object(i.b)("inlineCode",{parentName:"p"},"Sample")," module's routes:"),Object(i.b)("hr",null),Object(i.b)("h2",{id:"web-routes"},"Web Routes"),Object(i.b)("p",null,"These are in the ",Object(i.b)("inlineCode",{parentName:"p"},"Http/Routes/web.php")," file. These define your pages that render HTML. For example, the default routes look like:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"Route::group(['middleware' => [\n    'role:user' # Define who can access this page\n]], function() {\n\n    # all your routes are prefixed with your module's name\n    # e.g. yoursite.com/sample\n    Route::get('/', 'SampleController@index');\n});\n\n")),Object(i.b)("h4",{id:"admin-routes"},"Admin Routes"),Object(i.b)("p",null,"These are in the ",Object(i.b)("inlineCode",{parentName:"p"},"Http/Routes/admin.php"),". This will look for controllers in the ",Object(i.b)("inlineCode",{parentName:"p"},"Http/Controllers/Admin")," folder and namespace. These routes will be prefixed with ",Object(i.b)("inlineCode",{parentName:"p"},"$module/admin")),Object(i.b)("h4",{id:"api-routes"},"API Routes"),Object(i.b)("p",null,"These are in ",Object(i.b)("inlineCode",{parentName:"p"},"Http/Routes/api.php"),", and will look for controllers in the ",Object(i.b)("inlineCode",{parentName:"p"},"Http/Controllers/Api")," folder and namespace. These routes will be prefixed with ",Object(i.b)("inlineCode",{parentName:"p"},"/api/$module"),"."),Object(i.b)("h4",{id:"middleware"},Object(i.b)("inlineCode",{parentName:"h4"},"middleware")),Object(i.b)("p",null,"Middleware allows you to inject a class into the HTTP request chain, so you don't need to call a check or something in every method."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"'middleware' => ['role:user']       # enable for all users\n'middleware' => ['role:admin']      # enable for admin only\n\n'middleware' => ['api.auth'] # for API routes, you can add this middlware to require API auth\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Read more about ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://laravel.com/docs/5.5/middleware"}),"Laravel Middleware")))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"controllers"},"Controllers"),Object(i.b)("p",null,"Now we can look at the (truncated) corresponding controller:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"<?php\n\nnamespace Modules\\Sample\\Http\\Controllers;\n\nuse App\\Http\\Controllers\\Controller;\nuse Illuminate\\Http\\Request;\n\nclass SampleController extends Controller\n{\n    // ...\n    \n    /**\n     * Display a listing of the resource.\n     */\n    public function index()\n    {\n        return view('sample::index');\n    }\n\n    // ...\n}\n")),Object(i.b)("hr",null),Object(i.b)("h5",{id:"getting-the-user"},"Getting the User"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"$user = Auth::user();\n")),Object(i.b)("p",null,"To check if a user is logged in, use:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"if(Auth::check())\n")),Object(i.b)("hr",null),Object(i.b)("h1",{id:"database-access"},"Database Access"),Object(i.b)("h2",{id:"models"},"Models"),Object(i.b)("p",null,"Models are the more basic way to access your database tables. For example, if you have a table called ",Object(i.b)("inlineCode",{parentName:"p"},"sample_table"),", a model called ",Object(i.b)("inlineCode",{parentName:"p"},"SampleTable")," would make most sense. While table names generally refer to objects in the plural, a model is named for an item in it's singular form."),Object(i.b)("h3",{id:"creating-a-model"},"Creating a Model"),Object(i.b)("p",null,"The models go into the ",Object(i.b)("inlineCode",{parentName:"p"},"Models")," directory. The fastest way is to use the ",Object(i.b)("inlineCode",{parentName:"p"},"artisan")," helper:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"php artisan module:make-model SampleTable Sample\n")),Object(i.b)("p",null,"After it's generated, you should open the model, and fill in the table name. See the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://laravel.com/docs/5.5/eloquent"}),"Laravel Model Documentation")," for more details on how to work with models."),Object(i.b)("h4",{id:"relationships"},"Relationships"),Object(i.b)("p",null,"If your table has a column called ",Object(i.b)("inlineCode",{parentName:"p"},"pirep_id"),", you can add a relationship to your model called ",Object(i.b)("inlineCode",{parentName:"p"},"pireps"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"namespace Modules\\Sample\\Models;\n\nuse App\\Contracts\\Model;\n\nclass SampleTable extends Model {\n    public function pirep()\n    {\n        return $this->belongsTo(Pirep::class, 'pirep_id');\n    }\n}\n")),Object(i.b)("p",null,"Now, you can easily access the parent PIREP, without having to write any queries:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"$record = SampleTable::with(['pirep'])->get(1);  # Get the ID of 1, eager-loading the pirep relationship\necho $record->pirep->dpt_airport_id; # Write out the departure airport\n")),Object(i.b)("p",null,"We can also get fancy, since the relationship returns the ",Object(i.b)("inlineCode",{parentName:"p"},"Pirep")," model, and it has relationships to the ",Object(i.b)("inlineCode",{parentName:"p"},"Airport")," model, you can open the ",Object(i.b)("inlineCode",{parentName:"p"},"App\\Models\\Pirep")," file and look at the relationships."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"echo $record->pirep->dpt_airport->name; # Write out the name of the departure airport\n")),Object(i.b)("p",null,"The right relationships make life easier. See the Laravel documentation on relationships."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"creating-and-modifying-tables-with-migrations"},"Creating and modifying tables with migrations"),Object(i.b)("p",null,"Laravel includes a way to create and update tables, called ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://laravel.com/docs/5.5/migrations"}),"migrations"),".  Migrations are ways to programmatically define your tables, and let the framework worry about the exact syntax to use. The advantage to this abstraction is being."),Object(i.b)("p",null,"! You should ",Object(i.b)("em",{parentName:"p"},"not")," be using raw SQL"),Object(i.b)("p",null,"There is an ",Object(i.b)("inlineCode",{parentName:"p"},"artisan")," helper to generate migrations:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"php artisan module:make-migration create_sample_table ModuleName\n")),Object(i.b)("p",null,"This will create a migration file in your module's ",Object(i.b)("inlineCode",{parentName:"p"},"Database/migrations")," directory. Now, when a user can goes to the updater, at ",Object(i.b)("inlineCode",{parentName:"p"},"/update"),", it will show that there are updates available, and the migrations will be run. During an install, the migrations are also all run. This makes updates simple and straight-forward, without having to run any SQL manually."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"app/Database/migrations")," directory has the core migrations and is a good reference on field types, especially if you're looking to add relationships."),Object(i.b)("p",null,"!!! Design your tables well - follow the guidelines set by Laravel, and you'll have a much better time."),Object(i.b)("p",null,"!!!! Add new migration files when you have to modify a table, etc, after you've released it into the wild. The migrations that are run are kept track of, so if it's seen that it's already run the file, it won't run it again."),Object(i.b)("h3",{id:"seeding-data"},"Seeding Data"),Object(i.b)("p",null,"I've added a few extra features, including adding seed data, including adding seeder data. For example, the ",Object(i.b)("inlineCode",{parentName:"p"},"Settings")," table:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"<?php\nuse App\\Contracts\\Migration;\nuse App\\Services\\Installer\\SeederService;\nuse Illuminate\\Database\\Schema\\Blueprint;\n\nclass CreateSettingsTable extends Migration\n{\n    /**\n     * Run the migrations.\n     *\n     * @return void\n     */\n    public function up()\n    {\n        Schema::create('settings', function (Blueprint $table) {\n            // ... Create all the columns\n        });\n        \n            // Create some initial data, with the columns filled out\n        $settings = [\n            [\n                'order' => 1,\n                'name' => 'Start Date',\n                'group' => 'general',\n                'value' => '',\n                'type' => 'date',\n                'description' => 'The date your VA started',\n            ],\n            \n            // A lot more entries\n            \n        ];\n        \n        $this->addData('settings', $settings);\n    }\n    \n    // Not showning the down()\n}\n")),Object(i.b)("hr",null),Object(i.b)("h1",{id:"templating"},"Templating"),Object(i.b)("p",null,"Templates are placed in ",Object(i.b)("inlineCode",{parentName:"p"},"modules/{ModuleName}/Resources/views"),". If someone wants to modify the views, it's recommended that they either run ",Object(i.b)("inlineCode",{parentName:"p"},"php artisan vendor:publish")," or they copy the templates into the ",Object(i.b)("inlineCode",{parentName:"p"},"resources/views/module/$moduleName")," folder (look at the ",Object(i.b)("inlineCode",{parentName:"p"},"$viewPath")," value in the ",Object(i.b)("inlineCode",{parentName:"p"},"registerViews()")," method in the ",Object(i.b)("inlineCode",{parentName:"p"},"$MODULE/Providers/$ModuleServiceProvider.php")," file for the exact path if you're unsure)."),Object(i.b)("p",null,"!!!! Read more about ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://laravel.com/docs/5.5/blade"}),"Laravel Blade Templating")),Object(i.b)("hr",null),Object(i.b)("h1",{id:"event-listeners"},"Event Listeners"),Object(i.b)("p",null,"Available events from the main app are listed in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/nabeelio/phpvms/tree/master/app/Events"}),"app/Events")," directory. Subscribing to events follows the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://laravel.com/docs/5.5/events#event-subscribers"}),"Laravel Events")," format. Create the event listener in your ",Object(i.b)("inlineCode",{parentName:"p"},"$MODULE\\Listeners")," folder (e.g, ",Object(i.b)("inlineCode",{parentName:"p"},"PirepAcceptedListener"),"), and then register it in your ",Object(i.b)("inlineCode",{parentName:"p"},"$MODULE\\Providers\\EventServiceProvider")," folder, in the ",Object(i.b)("inlineCode",{parentName:"p"},"$listen")," section, like:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"protected $listen = [\n    'App\\Events\\PirepAccepted' => [\n        'Modules\\Sample\\Listeners\\PirepAcceptedListener',\n    ],\n];\n")),Object(i.b)("p",null,"To see the data passed, just look in the Event class."),Object(i.b)("hr",null),Object(i.b)("h1",{id:"design-patterns-and-suggestions"},"Design Patterns and Suggestions"),Object(i.b)("h2",{id:"service-layer"},"Service Layer"),Object(i.b)("p",null,"When multiple models/repositories/steps are involved in a task, they should be written as a ",Object(i.b)("inlineCode",{parentName:"p"},"Service")," class. For example, when filing a PIREP,  there are changes made to the ",Object(i.b)("inlineCode",{parentName:"p"},"PIREP")," model, but also to the ",Object(i.b)("inlineCode",{parentName:"p"},"User")," model, one or more events are dispatched, etc. Instead of putting all of this logic into a Controller or directly into a Model, a Service class should be defined, which ties all these steps together. This helps with testing and debugging, and portability. In the PIREP example, it can be filed through a web interface, or a RESTful interface. A Service class allows for both of these to use the same logic without reusing code."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"repositories"},"Repositories"),Object(i.b)("p",null,"While you can use and import models directly, it's recommended to use the repositories, in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/nabeelio/phpvms/tree/master/app/Repositories"}),"app/Repositories")," are listed ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/andersao/l5-repository#prettusrepositorycontractsrepositoryinterface"}),"here"),". Repositories give the added benefits of automatically caching and flushing the cache when data is added/updated."),Object(i.b)("p",null,"The recommended method is to use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://laravel.com/docs/5.5/container#automatic-injection"}),"Automatic Injection"),", which would involve adding a constructor to your Listener, as such:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"namespace Modules\\Sample\\Listeners;\n\nuse App\\Events\\PirepAccepted;\nuse App\\Repositories\\PirepRepository;\n\nclass PirepAcceptedListener {\n\n    private $pirepRepo;\n\n    // You can pass as many Repositories in as your wish. \n    // See the app\\Controllers for more examples\n    public function __construct(PirepRepository $pirepRepo) {\n        $this->pirepRepo = $pirepRepo;\n    }\n\n    public function handle(PirepAccepted $pirep) {\n        Log::info('Received PIREP', [$pirep]);\n    }\n}\n")),Object(i.b)("p",null,"The methods in the repositories largely mirror the Model methods, but can automatically handle searches, etc. The docs for the repositories ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/andersao/l5-repository#prettusrepositorycontractsrepositoryinterface"}),"are available here"),". You can read more about the repository pattern ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://bosnadev.com/2015/03/07/using-repository-pattern-in-laravel-5/?utm_source=prettus-l5-repository&utm_medium=readme&utm_campaign=prettus-l5-repository"}),"here")))}p.isMDXComponent=!0},96:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return a?r.a.createElement(m,l(l({ref:t},c),{},{components:a})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);