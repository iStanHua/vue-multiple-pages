<template>
  <div class="page">
    <div class="header">
      <div class="logo">
        <img src="@/assets/logo.png">
      </div>
      <div class="nav">
        <a class="nav-item" href="/">首页</a>
        <a class="nav-item" href="/admin.html">后台</a>
        <router-link class="nav-item" to="/login">登录</router-link>
      </div>
    </div>
    <router-view />
    <div class="footer">
      <p class="copyright">Copyright © 2020</p>
    </div>
  </div>
</template>