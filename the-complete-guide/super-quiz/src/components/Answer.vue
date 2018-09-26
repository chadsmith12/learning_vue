<template>
    <div class="card mx-auto" style="width: 40rem">
        <div class="card-body">
            <h5 class="card-title">You are correct!</h5>
            <div class="card-text">
                That is right!
                <button class="btn btn-primary" @click="playAgain">Play Again</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        playAgain() {
            this.$emit('play-again')
        }
    }
}
</script>


