import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//apollo implementation in the application
import {ApolloProvider} from 'react-apollo'
import {ApolloClient} from 'apollo-client'
import {createHttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {setContext} from 'apollo-link-context'

// api token from 8base
const AUTH_TOKEN = '997687fc-f9b0-4fd6-8ab9-f2bd8b87300c'

//8base endpoint is placed in the uri
const httpLink = createHttpLink({uri: 'https://api.8base.com/cjrqm8c7z000501qcpxryywxj'})

    const authLink = setContext((_, {headers}) =>
    {

        // return the headers to the context so httpLink can read them
        return {
            headers: {
                ...headers,
                // place token in authorization
                authorization: AUTH_TOKEN ? `Bearer ${AUTH_TOKEN}` : "",

            }
        }
    });

    const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
    })

ReactDOM.render(
<ApolloProvider client={client}><App />
</ApolloProvider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
