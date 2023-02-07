<template>
    <div class="container">
        <div class="grid">
            <div class="item item_1"></div>
            <a href="#" class="item item_2"></a>
            <a href="#" class="item item_3"></a>
            <a href="#" class="item item_4"></a>
            <a href="#" class="item item_5"></a>
            <a href="#" class="item item_6"></a>
            <a href="#" class="item item_7"></a>
            <a href="#" class="item item_8"></a>
            <a href="#" class="item item_9"></a>
            <a href="#" class="item item_10"></a>
            <a href="#" class="item item_11"></a>
            <a href="#" class="item item_12"></a>
            <a href="#" class="item item_13"></a>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
html,
body,
#__nuxt {
    height: 100vh;
    margin: 0px;
}

.container {
    height: 100%;
    width: 100%;
    position: relative;

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
                background-color: purple;
            }

            &_2 {
                grid-area: 1 / 3 / 2 / 4;
                background-color: green;
            }

            &_3 {
                grid-area: 1 / 4 / 2 / 5;
                background-color: yellow;
            }

            &_4 {
                grid-area: 1 / 5 / 2 / 6;
                background-color: blue;
            }

            &_5 {
                grid-area: 2 / 3 / 3 / 4;
                background-color: brown;
            }

            &_6 {
                grid-area: 2 / 4 / 3 / 5;
                background-color: aquamarine;
            }

            &_7 {
                grid-area: 2 / 5 / 3 / 6;
                background-color: khaki;
            }

            &_8 {
                grid-area: 3 / 3 / 4 / 4;
                background-color: teal;
            }

            &_9 {
                grid-area: 3 / 4 / 4 / 5;
                background-color: orange;
            }

            &_10 {
                grid-area: 3 / 5 / 4 / 6;
                background-color: olive;
            }

            &_11 {
                grid-area: 4 / 3 / 5 / 4;
                background-color: coral;
            }

            &_12 {
                grid-area: 4 / 4 / 5 / 5;
                background-color: crimson;
            }

            &_13 {
                grid-area: 4 / 5 / 5 / 6;
                background-color: mediumpurple;
            }
        }
    }
}
</style>
