<template>
    <el-container>
        <div class="grid">
            <div class="item item_1 markdown"></div>
            <a href="https://www.youtube.com" class="item item_2 youtube">
                <i class="fab fa-youtube"></i>
            </a>
            <a href="https://www.twitch.tv/directory/following/live" class="item item_3 twitch">
                <i class="fab fa-twitch"></i>
            </a>
            <a href="https://twitter.com" class="item item_4 twitter">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.reddit.com" class="item item_5 reddit">
                <i class="fab fa-reddit-alien"></i>
            </a>
            <a href="https://nyaa.si" class="item item_6 nyaa">
                <i class="fas fa-box-archive"></i>
            </a>
            <a href="https://www.livechart.me" class="item item_7 livechart">
                <i class="fas fa-chart-area"></i>
            </a>
            <a href="https://anilist.co" class="item item_8 anilist">
                <i><img title="AL" height="50px" width="50px" src="https://anilist.co/img/icons/icon.svg" /></i>
            </a>
            <a href="https://subsplease.org" class="item item_9 subsplease">
                <b>SP</b>
            </a>
            <a href="https://github.com" class="item item_10 github">
                <i class="fab fa-github"></i>
            </a>
            <a href="https://stackoverflow.com" class="item item_11 stackoverflow">
                <i class="fab fa-stack-overflow"></i>
            </a>
            <a href="https://dev.to" class="item item_12 dev">
                <i class="fab fa-dev"></i>
            </a>
            <!-- <a href="#" class="item item_13"></a> -->
        </div>
    </el-container>
</template>

<script setup lang="ts">
import { useDark } from "@vueuse/core";

useDark();
</script>

<style lang="scss">
.grid {
    height: 80%;
    width: 90%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .item {
        border-radius: 20px;

        &_1 {
            grid-area: 1 / 1 / 5 / 3;
        }

        /** buttons **/
        &_2 {
            grid-area: 1 / 3 / 2 / 4;
        }

        &_3 {
            grid-area: 1 / 4 / 2 / 5;
        }

        &_4 {
            grid-area: 1 / 5 / 2 / 6;
        }

        &_5 {
            grid-area: 2 / 3 / 3 / 4;
        }

        &_6 {
            grid-area: 2 / 4 / 3 / 5;
        }

        &_7 {
            grid-area: 2 / 5 / 3 / 6;
        }

        &_8 {
            grid-area: 3 / 3 / 4 / 4;
        }

        &_9 {
            grid-area: 3 / 4 / 4 / 5;
        }

        &_10 {
            grid-area: 3 / 5 / 4 / 6;
        }

        &_11 {
            grid-area: 4 / 3 / 5 / 4;
        }

        &_12 {
            grid-area: 4 / 4 / 5 / 5;
        }

        // &_13 {
        //     grid-area: 4 / 5 / 5 / 6;
        // }
    }
}
</style>
