# Laravel Cheatsheet

## Install 

```
composer create-project laravel/laravel example-app
cd example-app
php artisan serve
```

* **Error in autoload**:
* **composer install**: which will import your packages and create the vendor folder, along with the autoload script.

## Auth

```
composer require laravel/ui
php artisan ui bootstrap --auth
```