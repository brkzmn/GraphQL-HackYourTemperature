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
import config from "./config";

const { API_KEY } = config;

const windType = new GraphQLObjectType({
  name: "wind",
  fields: () => ({
    speed: { type: GraphQLFloat },
  }),
});

const weatherType = new GraphQLObjectType({
  name: "weather",
  fields: () => ({
    main: { type: GraphQLString },
    description: { type: GraphQLString },
    icon: { type: GraphQLString },
  }),
});

const mainType = new GraphQLObjectType({
  name: "temperature",
  fields: () => ({
    temp: { type: GraphQLFloat },
    humidity: { type: GraphQLInt },
    feels_like: { type: GraphQLFloat },
    pressure: { type: GraphQLInt },
  }),
});

const CityWeatherType = new GraphQLObjectType({
  name: "CityWeather",
  fields: () => ({
    name: { type: GraphQLString },
    main: { type: mainType },
    weather: { type: new GraphQLList(weatherType) },
    wind: { type: windType },
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
          `https://api.openweathermap.org/data/2.5/weather?q=${args.name}&units=metric&APPID=${API_KEY}`
        );
        return res.json();
      },
    },
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
});
