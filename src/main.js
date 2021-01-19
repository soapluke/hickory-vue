import { createApp } from 'vue';
import { Card, Button, Input, Table } from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';

createApp(App).use(Card).use(Button).use(Input).use(Table).mount('#app')


