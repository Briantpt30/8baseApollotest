import React, {Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { id } from 'postcss-selector-parser';
import Hero from "./hero"

export default class Heroes extends Component {
    render (){




const HeroesList = gql`
{
    employeesList{
        items{
            id,
            fullName,
        }
    }
}
`;

return (
    <Query query={HeroesList}>
        {({loading, error, data}) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>

            const HeroesToRender = data.heroesList.items

            return (
                <div>
                    {HeroesToRender.map(hero=> <Hero key={hero.id}fullName={hero.name} />
                        )}
                </div>
            )
        }}
    </Query>
   )
 }
} 
