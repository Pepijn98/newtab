<template>
    <el-container>
        <div class="grid">
            <div class="item item_1 md-container">
                <div class="md-text">
                    <div class="md md__view" v-html="$mdRenderer.render(markdown)"></div>
                    <textarea class="md md__edit" name="notes" style="display: none"></textarea>
                </div>
                <div class="md-button-group">
                    <el-button class="md-button md-button__edit" type="primary" :on-click="edit" circle>
                        <FAIcon icon="fa-solid fa-pen-to-square" size="lg" />
                    </el-button>
                    <el-button class="md-button md-button__save" type="primary" style="display: none" :on-click="save"
                        circle>
                        <FAIcon icon="fa-solid fa-floppy-disk" size="lg" />
                    </el-button>
                </div>
            </div>

            <a href="https://www.youtube.com" class="item item_2 link youtube">
                <i class="fab fa-youtube"></i>
            </a>
            <a href="https://www.twitch.tv/directory/following/live" class="item item_3 link twitch">
                <i class="fab fa-twitch"></i>
            </a>
            <a href="https://twitter.com" class="item item_4 link twitter">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.reddit.com" class="item item_5 link reddit">
                <i class="fab fa-reddit-alien"></i>
            </a>
            <a href="https://nyaa.si" class="item item_6 link nyaa">
                <i class="fas fa-box-archive"></i>
            </a>
            <a href="https://www.livechart.me" class="item item_7 link livechart">
                <i class="fas fa-chart-area"></i>
            </a>
            <a href="https://anilist.co" class="item item_8 link anilist">
                <img title="AL" src="https://anilist.co/img/icons/icon.svg" />
            </a>
            <a href="https://subsplease.org" class="item item_9 link subsplease">
                <b>SP</b>
            </a>
            <a href="https://github.com" class="item item_10 link github">
                <i class="fab fa-github"></i>
            </a>
            <a href="https://stackoverflow.com" class="item item_11 link stackoverflow">
                <i class="fab fa-stack-overflow"></i>
            </a>
            <a href="https://dev.to" class="item item_12 link dev">
                <i class="fab fa-dev"></i>
            </a>
            <!-- <a href="#" class="item item_13"></a> -->
        </div>
    </el-container>
</template>

<script setup lang="ts">
import { useDark } from "@vueuse/core";

useDark();

const markdown = `
# New World

### Gypsum Orbs
1. Topaz Gypsum(10)
2. Obsidian Gypsum(3)
    - Go to Skysong Crypt
3. Emerald Gypsum(1)
    - Aptitude reward(skinning, fishing)
4. Diamond Gypsum(3)
    - Any resource gathering
5. Amethyst Gypsum(7)
    - Corrupted Portals
`;

async function edit() {
    // TODO: Hide `md__view` and show `md__edit`
    // Load data from `browser.storage.sync`
}

async function save() {
    // TODO: Hide `md__edit` and show `md__view`
    // Load new markdown into `md__view`
    // Save new markdown to `localStorage` and `browser.storage.sync`
}
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

        &.md-container {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: repeat(1, 1fr);
            box-shadow: var(--el-box-shadow);
            border: 1px solid rgba(0, 0, 0, .12);
            padding: 10px;
            font-size: larger;

            .md-text {
                grid-column-start: 1;
                grid-row-start: 1;
                place-self: start;
            }

            .md-button-group {
                grid-column-start: 1;
                grid-row-start: 1;
                place-self: end;

                .md-button {
                    height: 40px;
                    width: 40px;
                }
            }
        }

        &.link {
            display: grid;
            text-decoration: none;

            // Center FA icons/text
            i,
            b {
                place-self: center;
                font-size: 2.8em;
            }

            // Center image
            img {
                margin: auto;
            }
        }

        // Markdown
        &_1 {
            grid-area: 1 / 1 / 5 / 3;
        }

        // All buttons
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
