import 'reflect-metadata';
import {Container} from 'inversify';
import { RestApplication } from './rest/index.js';
import { Config, RestConfig, RestSchema } from './config/index.js';
import { Logger, PinoLogger } from './logger/index.js';
import { Component } from './types/index.js';

const bootstrap = () => {
  const container = new Container();
  container.bind<RestApplication>(Component.RestApplication).to(RestApplication).inSingletonScope();
  container.bind<Logger>(Component.Logger).to(PinoLogger).inSingletonScope();
  container.bind<Config<RestSchema>>(Component.Config).to(RestConfig).inSingletonScope();
  const claApplication = container.get<RestApplication>(Component.RestApplication);
  claApplication.init();
};

bootstrap();