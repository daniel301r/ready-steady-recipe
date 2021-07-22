import React from 'react'
import SearchForm from '../components/ingredientSearch/SearchForm';
import { useParams } from 'react-router-dom';
import SearchResults from '../components/ingredientSearch/SearchResults';
import PageNotFound from './PageNotFound';

const IngredientSearch = () => {

    let { component } = useParams<{ component: string }>();



    const render = (component: string) => {

        const routes: { [key: string]: JSX.Element; }
        = {
            search: <SearchForm />,
            results: <SearchResults />,
        }

        return routes[component] || <PageNotFound />;
    };

    return render(component)
};

export default IngredientSearch;
