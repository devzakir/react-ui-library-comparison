<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Job/Index');
})->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/job', function () {
    return Inertia::render('Job/Index');
})->name('job.index');

Route::get('/job/park-ui', function () {
    return Inertia::render('Job/ParkUI');
})->name('job.park-ui');

Route::get('/job/mantine', function () {
    return Inertia::render('Job/Mantine');
})->name('job.mantine');

Route::get('/job/chakra-ui', function () {
    return Inertia::render('Job/ChakraUI');
})->name('job.chakra-ui');

Route::get('/job/ant-design', function () {
    return Inertia::render('Job/AntDesign');
})->name('job.ant-design');

Route::get('/kanban', function () {
    return Inertia::render('Kanban/Index');
})->name('kanban.index');

Route::get('/kanban/park-ui', function () {
    return Inertia::render('Kanban/ParkUI');
})->name('kanban.park-ui');

Route::get('/kanban/mantine', function () {
    return Inertia::render('Kanban/Mantine');
})->name('kanban.mantine');

Route::get('/kanban/chakra-ui', function () {
    return Inertia::render('Kanban/ChakraUI');
})->name('kanban.chakra-ui');

Route::get('/kanban/ant-design', function () {
    return Inertia::render('Kanban/AntDesign');
})->name('kanban.ant-design');

Route::get('/crm', function () {
    return Inertia::render('CRM/Index');
})->name('crm.index');

Route::get('/crm/mantine', function () {
    return Inertia::render('CRM/Mantine');
})->name('crm.mantine');

Route::get('/crm/ant-design', function () {
    return Inertia::render('CRM/AntDesign');
})->name('crm.ant-design');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
