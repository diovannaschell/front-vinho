import ListagemVinhos from '../components/ecommerce-vinho/ListagemVinhos';
import IndexAdmin from '../components/admin-vinho/IndexAdmin';
import ListagemPedidos from '../components/pedidos/ListagemPedidos';

const routes = [
    { path: '/', component: ListagemVinhos },
    { path: '/admin', component: IndexAdmin },
    { path: '/pedidos', component: ListagemPedidos },
];

export default routes;