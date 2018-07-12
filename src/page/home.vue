<template>
    <div>
        <h3>home</h3>
        <router-link tag="a" to="about">about</router-link>
        <router-link tag="a" to="blog">blog</router-link>
        <router-link tag="a" to="category">category</router-link>
        <!--router-link的几种写法>
        1.<router-link to="home"></router-link>
        2.使用v-bind的js表达式
        <router-link :to="'home'"></router-link>
        3.:to里面添加参数
        <router-link :to="{path: 'home'}"></router-link>
        4.:to里面添加路由名称
        <router-link :to="{name: 'home', params: {userId: 123}}"></router-link>
        5.带查询参数
        <router-link :to="{path: 'home'， query: {plan: 'private'}}"></router-link>

        使用replace属性,点击时会调用router.replace() 而不是router.push() 于是导航不会留下history记录
        设置append属性,则在当前路径前面添加基路径
        tag表示想渲染成某种标签
        active-class 设置链接激活时使用的css类名。默认值可以通过路由的构造选项 linkActiveClass来全局卑职
        <!-->
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
    a {
        display: inline-block;
        height: 100px;
        width: 100px;
    }
</style>
