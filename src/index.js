import Alert from './components/Alert';

const Plugin = {
    install(Vue) {
        Vue.component('v-alert', Alert);
    }
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Plugin);
}

export default Plugin;
