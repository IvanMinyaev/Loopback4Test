import { inject, lifeCycleObserver, LifeCycleObserver } from '@loopback/core';
import { juggler } from '@loopback/repository';

const config = {
  name: 'd398b4gfa6p61a',
  connector: 'postgresql',
  url: '',
  host: 'ec2-34-248-169-69.eu-west-1.compute.amazonaws.com',
  port: 5432,
  user: 'teofuzyxcgjurn',
  password: 'be80005311da595272c35d7cc930780e48f98965477ac88e7e20011d4c1cd2b7',
  database: 'd398b4gfa6p61a',
  ssl: { rejectUnauthorized: false },
  debug: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.db', { optional: true })
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
