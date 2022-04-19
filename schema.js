import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLFloat,
} from "graphql";
import fetch from "node-fetch";

// `https://api.openweathermap.org/data/2.5/weather?q=${}&units=metric&APPID=68b7cb8df654d99aa72ed9a77bd90cad`

const weatherType = new GraphQLObjectType({
  name: "weather",
  fields: () => ({
    main: { type: GraphQLString },
    icon: { type: GraphQLString },
  }),
});

const mainType = new GraphQLObjectType({
  name: "temperature",
  fields: () => ({
    temp: { type: GraphQLFloat },
    humidity: { type: GraphQLInt },
  }),
});

const CityWeatherType = new GraphQLObjectType({
  name: "CityWeather",
  fields: () => ({
    name: { type: GraphQLString },
    cod: { type: GraphQLInt },
    main: { type: mainType },
    weather: { type: new GraphQLList(weatherType) },
  }),
});

// Root
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    CityWeather: {
      type: CityWeatherType,
      args: {
        name: { type: GraphQLString },
      },
      resolve: async (parentValue, args) => {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${args.name}&units=metric&APPID=68b7cb8df654d99aa72ed9a77bd90cad`
        );
        return res.json();
      },
    },
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
});
