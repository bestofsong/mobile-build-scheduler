const {
  REDIS_HOST,
  FIRE_HOUR = 10,
  FIRE_MINUTE = 15,
  FIRE_SECOND = 0,
  FIRE_MILLISECOND = 0,
  HOST_IP,
  HOST_SSH_PORT = 22,
  ID_RSA,
  ID_RSA_PUB,
  HOST_WORKDIR,
  HOST_USER,
  SWEEP_INTERVAL = 3600000,
  STALE_DURATION = 86400000,
} = process.env;

module.exports = {
  REDIS_HOST,
  FIRE_HOUR,
  FIRE_MINUTE,
  FIRE_SECOND,
  FIRE_MILLISECOND,
  HOST_IP,
  HOST_SSH_PORT,
  HOST_WORKDIR,
  ID_RSA,
  ID_RSA_PUB,
  HOST_USER,
  SWEEP_INTERVAL,
  STALE_DURATION,
};
