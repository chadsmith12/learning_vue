<template>
    <div>
        <h3>Quotes Added</h3>
        <div class="progress">
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                    :style="{width: quotePercentage + '%'}">
                    {{ quoteCount }} / {{ maxQuotes }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        quoteCount: Number,
        maxQuotes: Number
    },
    computed: {
        quotePercentage() {
            return (this.quoteCount / this.maxQuotes) * 100
        }
    }
}
</script>

