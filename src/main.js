import { createApp } from 'vue';
import { Card, Button, Input } from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';

createApp(App).use(Card).use(Button).use(Input).mount('#app')


