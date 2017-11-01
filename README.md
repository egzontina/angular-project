
## About
An Angular JS 4 project that builds a Front-End application to display data from LokiJS.

App is running at [https://egzontina.github.io/angularjs4-project/](https://egzontina.github.io/angularjs4-project/).





## Installing and running for the first time

1. On root of the project run: 
```
npm install
```
2. Start the server: 
```
ng serve
```
3.  Navigate to 
```
http://localhost:4200/
```



## Development Process

**Project Creation & Setup**

Using the [Angular CLI](https://github.com/angular/angular-cli):
```
npm install -g @angular/cli 
ng new angularjs4-project`
cd angularjs4-project
ng serve
```
Dependencies:
1. Bootstrap
```
npm install --save bootstrap
```
2. Lokijs 
```
npm install --save lokijs
```
3. Ngx-pagination 
```
npm install --save ngx-pagination
```
4. Search-filter 
```
npm i ng2-search-filter --save
```


**Generate component**

Users 
```
ng g component users
```


**Generate service**

LokiJS 
```
ng g service loki
```



## Deploy the app to GitHub Pages

Using angular-cli-ghpages:
1. Create the dist folder for the project: 
```
ng build --prod --base-href "https://egzontina.github.io/angularjs4-project/"
```
2. Run it: 
```
angular-cli-ghpages
```



## IDE
Example is runnable from WebStorm IDE.



#### Author

[Egzontina Krasniqi](https://github.com/egzontina).

