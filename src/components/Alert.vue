<template lang="html">
    <div v-if="isDisplayed" :class="alertClasses" role="alert">

        <div v-if="dismissible" class="alert-close-btn" @click="dismiss" title="Close"></div>
        <slot></slot>

    </div>
</template>

<script>
export default {
    props: {
        /**
        * Define if the alert is displayed.
        * If it's a number, the alert will be displayed for this number of second.
        */
        show: {
            type: [Boolean, Number],
            default: true
        },

        /**
        * Define if the alert is dismissible with a close button.
        */
        dismissible: {
            type: Boolean,
            default: false
        },

        /**
         * Define the main class of the alert div.
         */
        type: {
            type: String,
            default: 'alert'
        },

        /**
         * Add a `is-{level}` class to the alert.
         */
        level: {
            type: String,
            default: 'info'
        }
    },

    /**
    * Bind the parent v-model with the show prop.
    */
    model: {
        prop: 'show',
        event: 'input'
    },

    data() {
        return {
            isDisplayed: Boolean(this.show),
            timer: null
        }
    },

    mounted() {
        this.showChanged();
    },

    watch: {
        show() {
            this.showChanged();
        }
    },

    computed: {
        /**
         * Classes to be output on the alert div.
         */
        alertClasses() {
            return [
                this.type,
                `is-${this.level}`
            ]
        }
    },

    methods: {

        showChanged() {
            this.clearTimer();

            this.isDisplayed = this.show;

            if (typeof this.show === 'boolean') {
                return;
            }

            this.updateTimer();
        },

        updateTimer() {
            let dismissCountDown = this.show;
            this.timer = setInterval(() => {
                dismissCountDown--;
                this.$emit('dismiss-count-down', dismissCountDown);
                this.$emit('input', dismissCountDown);

                if (dismissCountDown < 1) {
                    return this.dismiss();
                }
            }, 1000);
        },

        clearTimer() {
            clearInterval(this.timer);
            this.timer = null;
        },

        dismiss() {
            this.clearTimer();
            this.isDisplayed = false;
            this.$emit('dismissed');
            this.$emit('input', false);
        }
    }
}
</script>
