<template>
  <div class="page">
    <div class="header">
      <div class="logo">
        <img src="@/assets/logo.png">
      </div>
      <div class="nav">
        <router-link class="nav-item" to="/">首页</router-link>
        <a class="nav-item" href="/web.html">前台</a>
        <a class="nav-item" href="/admin.html">后台</a>
        <router-link class="nav-item" to="/login">登录</router-link>
        <router-link class="nav-item" to="/about">关于</router-link>
      </div>
    </div>
    <router-view />
    <div class="footer">
      <p class="copyright">Copyright © 2020</p>
    </div>
  </div>
</template>