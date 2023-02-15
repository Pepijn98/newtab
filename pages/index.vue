<template>
    <el-container>
        <div class="grid">
            <div ref="mdContainer" class="item md-container">
                <div class="md-text">
                    <div ref="mdView" class="md md__view" v-html="$mdRenderer.render(markdown)"></div>
                    <textarea ref="mdEdit" class="md md__edit hidden" name="notes" @focusin="focused(true)"
                        @focusout="focused(false)"></textarea>
                </div>
                <div class="md-button-group">
                    <el-button ref="btnEdit" class="md-button md-button__edit" type="primary" @click.native="edit" circle>
                        <FAIcon icon="fa-solid fa-pen-to-square" size="lg" />
                    </el-button>
                    <el-button ref="btnSave" class="md-button md-button__save hidden" type="primary" @click.native="save"
                        circle>
                        <FAIcon icon="fa-solid fa-floppy-disk" size="lg" />
                    </el-button>
                </div>
            </div>

            <a href="https://www.youtube.com" class="item link youtube">
                <i class="fab fa-youtube"></i>
            </a>
            <a href="https://www.twitch.tv/directory/following/live" class="item link twitch">
                <i class="fab fa-twitch"></i>
            </a>
            <a href="https://twitter.com" class="item link twitter">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.reddit.com" class="item link reddit">
                <i class="fab fa-reddit-alien"></i>
            </a>
            <a href="https://nyaa.si" class="item link nyaa">
                <i class="fas fa-box-archive"></i>
            </a>
            <a href="https://www.livechart.me" class="item link livechart">
                <i class="fas fa-chart-area"></i>
            </a>
            <a href="https://anilist.co" class="item link anilist">
                <img title="AL" src="https://anilist.co/img/icons/icon.svg" />
            </a>
            <a href="https://subsplease.org" class="item link subsplease">
                <b>SP</b>
            </a>
            <a href="https://github.com" class="item link github">
                <i class="fab fa-github"></i>
            </a>
            <a href="https://stackoverflow.com" class="item link stackoverflow">
                <i class="fab fa-stack-overflow"></i>
            </a>
            <a href="https://dev.to" class="item link dev">
                <i class="fab fa-dev"></i>
            </a>
            <!-- <a href="#" class="item item_13"></a> -->
        </div>
</el-container>
</template>

<script setup lang="ts">
import { useDark } from "@vueuse/core";

useDark();

interface HTMLElementRef<T> {
    ref: T;
    [x: string]: any;
}

const mdContainer = ref<HTMLDivElement>();
const mdEdit = ref<HTMLTextAreaElement>();
const mdView = ref<HTMLDivElement>();

// Buttons need `.ref` to access the actual html element probably because it's an element-plus component
const btnEdit = ref<HTMLElementRef<HTMLButtonElement>>();
const btnSave = ref<HTMLElementRef<HTMLButtonElement>>();

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

function focused(isActive: boolean) {
    if (mdContainer.value) {
        isActive ? mdContainer.value.classList.add("focused") : mdContainer.value.classList.remove("focused");
    }
}

function edit() {
    if (btnEdit.value && btnSave.value && mdEdit.value && mdView.value) {
        btnEdit.value.ref.classList.add("hidden");
        btnSave.value.ref.classList.remove("hidden");
        mdEdit.value.classList.remove("hidden");
        mdView.value.classList.add("hidden");


        // TODO: Load data from `browser.storage.sync`
    }
}

function save() {
    if (btnEdit.value && btnSave.value && mdEdit.value && mdView.value) {
        btnEdit.value.ref.classList.remove("hidden");
        btnSave.value.ref.classList.add("hidden");
        mdEdit.value.classList.add("hidden");
        mdView.value.classList.remove("hidden");


        // TODO: Load new markdown into `mdView`
        // Save new markdown to `localStorage` and `browser.storage.sync`
    }
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
            grid-area: 1 / 1 / 5 / 3;
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: repeat(1, 1fr);
            box-shadow: var(--el-box-shadow);
            border: 1px solid rgba(0, 0, 0, .12);
            padding: 10px;
            font-size: larger;

            .md-text {
                height: 100%;
                width: 100%;
                grid-column-start: 1;
                grid-row-start: 1;
                place-self: start;

                .md__edit {
                    color: #fff;
                    background-color: transparent;
                    width: 99%;
                    height: 92%;
                    resize: none;
                    outline: none;
                    border: none;
                    font-size: 18px;
                    box-shadow: 0 4px 2px -2px rgba(0, 0, 0, .3);
                }
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

        // All buttons
        &.youtube {
            grid-area: 1 / 3 / 2 / 4;
            box-shadow: 0px 0px 8px 4px rgba(255, 0, 0, .08);
            border: 1px solid rgba(255, 0, 0, .12);
            color: rgba(255, 0, 0, 1);
        }

        &.twitch {
            grid-area: 1 / 4 / 2 / 5;
            box-shadow: 0px 0px 8px 4px rgba(145, 71, 255, .08);
            border: 1px solid rgba(145, 71, 255, .12);
            color: rgba(145, 71, 255, 1);
        }

        &.twitter {
            grid-area: 1 / 5 / 2 / 6;
            box-shadow: 0px 0px 8px 4px rgba(8, 160, 233, .08);
            border: 1px solid rgba(8, 160, 233, .12);
            color: rgba(8, 160, 233, 1);
        }

        &.reddit {
            grid-area: 2 / 3 / 3 / 4;
            box-shadow: 0px 0px 8px 4px rgba(255, 69, 0, .08);
            border: 1px solid rgba(255, 69, 0, .12);
            color: rgba(255, 69, 0, 1);
        }

        &.nyaa {
            grid-area: 2 / 4 / 3 / 5;
            box-shadow: 0px 0px 8px 4px rgba(255, 183, 197, .08);
            border: 1px solid rgba(255, 183, 197, .12);
            color: rgba(255, 183, 197, 1);
        }

        &.livechart {
            grid-area: 2 / 5 / 3 / 6;
            box-shadow: 0px 0px 8px 4px rgba(59, 151, 252, .08);
            border: 1px solid rgba(59, 151, 252, .12);
            color: rgba(59, 151, 252, 1);
        }

        &.anilist {
            grid-area: 3 / 3 / 4 / 4;
            box-shadow: 0px 0px 8px 4px rgba(2, 169, 255, .08);
            border: 1px solid rgba(2, 169, 255, .12);
            color: rgba(2, 169, 255, 1);

            img {
                height: 50px;
                width: 50px;
            }
        }

        &.subsplease {
            grid-area: 3 / 4 / 4 / 5;
            box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, .32);
            border: 1px solid rgba(0, 0, 0, .12);
            color: rgba(255, 255, 255, 1);
            text-decoration: none;
        }

        &.github {
            grid-area: 3 / 5 / 4 / 6;
            box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, .32);
            border: 1px solid rgba(0, 0, 0, .12);
            color: rgba(255, 255, 255, 1);
        }

        &.stackoverflow {
            grid-area: 4 / 3 / 5 / 4;
            box-shadow: 0px 0px 8px 4px rgba(239, 130, 54, .08);
            border: 1px solid rgba(239, 130, 54, .12);
            color: rgba(239, 130, 54, 1);
        }

        &.dev {
            grid-area: 4 / 4 / 5 / 5;
            box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, .32);
            border: 1px solid rgba(0, 0, 0, .12);
            color: rgba(255, 255, 255, 1);
        }

        // &_13 {
        //     grid-area: 4 / 5 / 5 / 6;
        // }
    }
}
</style>
