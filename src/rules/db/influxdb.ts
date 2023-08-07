import { register } from '../../rules.js';

register({
  tech: 'influxdb',
  dependencies: [
    { type: 'npm', name: '@influxdata/influxdb-client' },
    { type: 'docker', name: /influxdb/, example: 'influxdb:0.0.0' },
    { type: 'rustcargo', name: 'influxdb' },
    { type: 'rustcargo', name: 'influxdb2' },
  ],
});
