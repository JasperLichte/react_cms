import config from '../config';

export default class Config {
    public static serverBasePath = (): string => (
        config.PRODUCTION
            ? config.PROD_SERVER_BASE_PATH
            : config.DEV_SERVER_BASE_PATH);
}
