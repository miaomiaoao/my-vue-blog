<template>
    <div class="blog">
        <div class="header">
            <div class="header-desc">
                <h5>博客</h5>
                <p>就只是随便写点东西</p>
                <p>html&nbsp;&nbsp;css&nbsp;&nbsp;javascript&nbsp;&nbsp;vue</p>
            </div>
        </div>
        <div class="main">
            <div class="article-item article-item-odd">
                <div class="articel-title" @click="goToArticle()"></div>
                <div class="article-img"></div>
            </div>
            <div class="article-item article-item-even">
                <div class="article-img"></div>
                <div class="articel-title"></div>
            </div>
            <div class="article-item article-item-odd">
                <div class="articel-title"></div>
                <div class="article-img"></div>
            </div>
            <div class="article-item article-item-even">
                <div class="article-img"></div>
                <div class="articel-title"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        goToArticle() {
            this.$router.push('article')
        }
    }
}
</script>
<style lang="scss" scoped>
.blog {
    width: 100%;
    background-image: url('./../assets/image/homepagebg.png');
    background-repeat: repeat-y;
    background-size: contain;
    .header {
        background: linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(232, 232, 232, 0.7));
        position: relative;
        padding-bottom: 20%;
        h5 {
            margin: 0 0 15px;
            font-weight: 500;
            color: #1a1a1a;
            letter-spacing: 2px;
            font-size: 52px;
        } 
        p {
            font-weight: 400;
            line-height: 1.8;
            color: #666;
            font-size: 18px;
        }
        .header-desc {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
        }

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            width: 150px;
            height: 10px;
            left: -150px;
            box-shadow: 150px 0 #00c9bf, 300px 0 #87c70f, 450px 0 #ed1c0d, 600px 0 #ed7300, 750px 0 #3d8cde, 900px 0 #ffa3b5, 1050px 0 #ffbf0f, 1200px 0 #00c9bf, 1350px 0 #87c70f, 1500px 0 #ed1c0d, 1650px 0 #ed7300, 1800px 0 #3d8cde, 1950px 0 #ffa3b5, 2100px 0 #ffbf0f, 2250px 0 #00c9bf, 2400px 0 #87c70f;
        }
        &::before {
            content: '';
            border: 25px solid transparent;
            border-top-color: #fff;
            // border-left-color: black; 
            position: absolute;
            left: 50%;
            transform: translate(-50%, 99%);
            bottom: 10px;
            z-index: 11;

        }
    }

    .main {
        display: flex;
        flex-direction:column;
        width: 100%;
        .article-item {
            width: 100%;
            margin: 0;
            display: flex;
            .articel-title {
                width: 50%;
                transition: background .5s ease;
                padding-bottom: 25%;
                display: inline-block;
                cursor: pointer;
                &:hover {
                    background: rgba(110, 110, 110, 0.2);
                }
            }
            .article-img {
                width: 50%;
                background: url('./../assets/image/articlecover15.jpg');
                background-size: 100% 100%;
                display: inline-block;
                &::after {
                    content: '';
                    width: 100%;
                    padding-bottom:50%;
                    display: inline-block;
                }

            }
        }
        .article-item-odd {
            .article-title {
                float: left;
            }
        }
        .article-item-even {
            .articel-title {
                float: right;
            }
        }
    }
}
</style>
