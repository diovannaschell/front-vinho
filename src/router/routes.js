import ListagemVinhos from '../components/ecommerce-vinho/ListagemVinhos';
import IndexAdmin from '../components/admin-vinho/IndexAdmin';

const routes = [
    { path: '/', component: ListagemVinhos },
    { path: '/admin', component: IndexAdmin },
];

export default routes;