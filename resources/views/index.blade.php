@extends('layouts.index')

@section('content')
    <nav class="nav">
        <router-link class="nav-item mr-3" to="/about" >About</router-link>
        <router-link class="nav-item" to="/" exact>Welcome</router-link>
    </nav>

    <router-view></router-view>
@endsection

